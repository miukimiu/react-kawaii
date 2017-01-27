#include <node.h>
#include <v8.h>
#include "nan.h"

#include "lodepng/lodepng.h"
#include "zopflipng_lib.h"

using namespace v8;

void parseOptions(const Local<Object>& options, ZopfliPNGOptions& png_options) {
  Local<String> option_name;
  Local<Value> option_value;

  if(!options.IsEmpty()) {

    // Allow altering hidden colors of fully transparent pixels
    option_name = Nan::New<String>("lossy_transparent").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsNumber()) {
        Nan::ThrowTypeError("Wrong type for option 'lossy_transparent'");
      }
      png_options.lossy_transparent = option_value->Int32Value();
    }

    // Convert 16-bit per channel images to 8-bit per channel
    option_name = Nan::New<String>("lossy_8bit").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsNumber()) {
        Nan::ThrowTypeError("Wrong type for option 'lossy_8bit'");
      }
      png_options.lossy_8bit = option_value->Int32Value();
    }

    // Filter strategies to try
    //"zero", "one", "two", "three", "four", "minimum", "entropy", "predefined", "brute"
    option_name = Nan::New<String>("filter_strategies").ToLocalChecked();
    Local<Value> fieldValue = Nan::Get(options, option_name).ToLocalChecked();
    if(!fieldValue->IsUndefined() && !fieldValue->IsNull()) {
      if(fieldValue->IsArray()) {
        Handle<Array> filter_strategies = Handle<Array>::Cast(fieldValue);
        for (uint32_t i = 0; i < filter_strategies->Length(); i++) {
          std::string strStrategy(*Nan::Utf8String(filter_strategies->Get(i)->ToString()));
          ZopfliPNGFilterStrategy strategy = kStrategyZero;
          if(strStrategy.compare("zero") == 0) { strategy = kStrategyZero; }
          else if(strStrategy.compare("one") == 0) { strategy = kStrategyOne; }
          else if(strStrategy.compare("two") == 0) { strategy = kStrategyTwo; }
          else if(strStrategy.compare("three") == 0) { strategy = kStrategyThree; }
          else if(strStrategy.compare("four") == 0) { strategy = kStrategyFour; }
          else if(strStrategy.compare("minsum") == 0) { strategy = kStrategyMinSum; }
          else if(strStrategy.compare("entropy") == 0) { strategy = kStrategyEntropy; }
          else if(strStrategy.compare("predefined") == 0) { strategy = kStrategyPredefined; }
          else if(strStrategy.compare("bruteforce") == 0) { strategy = kStrategyBruteForce; }
          else {
            Nan::ThrowTypeError((std::string("Wrong strategy : ") + strStrategy).c_str());
          }
          png_options.filter_strategies.push_back(strategy);
        }
      } else {
        //Wrong
        Nan::ThrowTypeError("Wrong type for option 'filter_strategies'");
      }
    }

    // Automatically choose filter strategy using less good compression
    option_name = Nan::New<String>("auto_filter_strategy").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsNumber()) {
        Nan::ThrowTypeError("Wrong type for option 'auto_filter_strategy'");
      }
      png_options.auto_filter_strategy = option_value->Int32Value();
    }

    // PNG chunks to keep
    // chunks to literally copy over from the original PNG to the resulting one
    option_name = Nan::New<String>("use_zopfli").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsNumber()) {
        Nan::ThrowTypeError("Wrong type for option 'use_zopfli'");
      }
      png_options.use_zopfli = option_value->Int32Value();
    }

    // Zopfli number of iterations
    option_name = Nan::New<String>("num_iterations").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsNumber()) {
        Nan::ThrowTypeError("Wrong type for option 'num_iterations'");
      }
      png_options.num_iterations = option_value->Int32Value();
    }

    // Zopfli number of iterations on images > 200 KiB
    option_name = Nan::New<String>("num_iterations_large").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsNumber()) {
        Nan::ThrowTypeError("Wrong type for option 'num_iterations_large'");
      }
      png_options.num_iterations_large = option_value->Int32Value();
    }

    // Split chunk strategy none, first, last, both
    std::string strStrategy;
    option_name = Nan::New<String>("block_split_strategy").ToLocalChecked();
    if (Nan::Has(options, option_name).FromJust()) {
      option_value = Nan::Get(options, option_name).ToLocalChecked();
      if(!option_value->IsString()) {
        Nan::ThrowTypeError("Wrong type for option 'block_split_strategy'");
      }
      if(strStrategy.compare("none") == 0) { png_options.block_split_strategy = 0; }
      else if(strStrategy.compare("first") == 0) { png_options.block_split_strategy = 1; }
      else if(strStrategy.compare("last") == 0) { png_options.block_split_strategy = 2; }
      else if(strStrategy.compare("both") == 0) { png_options.block_split_strategy = 3; }
      else {
        Nan::ThrowTypeError("Wrong value for option 'block_split_strategy'");
      }
    }
  }
}


NAN_METHOD(PNGDeflate) {
  if(info.Length() < 1 || !info[0]->IsString()) {
    Nan::ThrowTypeError("First argument must be a string");
  }
  std::string imageName(*Nan::Utf8String(info[0]->ToString()));

  if(info.Length() < 2 || !info[1]->IsString()) {
    Nan::ThrowTypeError("First argument must be a string");
  }
  std::string out_filename(*Nan::Utf8String(info[1]->ToString()));

  ZopfliPNGOptions png_options;

  if(info.Length() >= 2 && info[2]->IsObject()) {
    Local<Object> options = info[2]->ToObject();
    parseOptions(options, png_options);
  }

  std::vector<unsigned char> image;
  unsigned w, h;
  std::vector<unsigned char> origpng;
  unsigned error;
  lodepng::State inputstate;
  std::vector<unsigned char> resultpng;

  lodepng::load_file(origpng, imageName);

  bool verbose = false;
  error = ZopfliPNGOptimize(origpng, png_options, verbose, &resultpng);

  if (error) {
    printf("Decoding error %u: %s\n", error, lodepng_error_text(error));
  } else {
    // Verify result, check that the result causes no decoding errors
    error = lodepng::decode(image, w, h, inputstate, resultpng);
    if (error) {
      printf("Error: verification of result failed.\n");
    } else {
      lodepng::save_file(resultpng, out_filename);
    }
  }
  info.GetReturnValue().Set(Nan::New<v8::Integer>(error));
}
