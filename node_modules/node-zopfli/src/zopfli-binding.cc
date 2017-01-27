#include <node.h>
#include "zopfli.h"
#include "zopfli-binding.h"
#include "png/zopflipng.h"

namespace nodezopfli {

using namespace v8;
using namespace node;

NAN_INLINE Nan::NAN_METHOD_RETURN_TYPE ParseArgs(const Nan::FunctionCallbackInfo<v8::Value>& info, ZopfliFormat& format, ZopfliOptions& zopfli_options) {
  ZopfliInitOptions(&zopfli_options);
  format = ZOPFLI_FORMAT_GZIP;

  if(info.Length() < 1 || !Buffer::HasInstance(info[0])) {
    Nan::ThrowTypeError("First argument must be a buffer");
  }

  if(info.Length() >= 2 && info[1]->IsString()) {
    std::string given_format(*Nan::Utf8String(info[1]));
    if(given_format.compare("gzip") == 0) {
      format = ZOPFLI_FORMAT_GZIP;
    } else if(given_format.compare("zlib") == 0) {
      format = ZOPFLI_FORMAT_ZLIB;
    } else if(given_format.compare("deflate") == 0) {
      format = ZOPFLI_FORMAT_DEFLATE;
    } else {
      Nan::ThrowTypeError("Invalid Zopfli format");
    }
  } else {
    Nan::ThrowTypeError("Second argument must be a string");
  }

  if(info.Length() >= 3 && info[2]->IsObject()) {
    Local<Object> options = info[2].As<Object>();

    if (!options.IsEmpty()) {
      Local<String> option_name;
      Local<Value> fieldValue;

      // Whether to print output
      option_name = Nan::New<String>("verbose").ToLocalChecked();
      if (Nan::Has(options, option_name).FromJust()) {
        zopfli_options.verbose = Nan::Get(options, option_name).ToLocalChecked()->BooleanValue();
      }

      // Whether to print more detailed output
      option_name = Nan::New<String>("verbose_more").ToLocalChecked();
      if (Nan::Has(options, option_name).FromJust()) {
        zopfli_options.verbose_more = Nan::Get(options, option_name).ToLocalChecked()->BooleanValue();
      }

      /*
      Maximum amount of times to rerun forward and backward pass to optimize LZ77
      compression cost. Good values: 10, 15 for small files, 5 for files over
      several MB in size or it will be too slow.
      */
      option_name = Nan::New<String>("numiterations").ToLocalChecked();
      if (Nan::Has(options, option_name).FromJust()) {
        zopfli_options.numiterations = Nan::Get(options, option_name).ToLocalChecked()->Int32Value();
      }

      /*
      If true, chooses the optimal block split points only after doing the iterative
      LZ77 compression. If false, chooses the block split points first, then does
      iterative LZ77 on each individual block. Depending on the file, either first
      or last gives the best compression. Default: false (0).
      */
      option_name = Nan::New<String>("blocksplitting").ToLocalChecked();
      if (Nan::Has(options, option_name).FromJust()) {
        zopfli_options.blocksplitting = Nan::Get(options, option_name).ToLocalChecked()->Int32Value();
      }

      /*
      If true, chooses the optimal block split points only after doing the iterative
      LZ77 compression. If false, chooses the block split points first, then does
      iterative LZ77 on each individual block. Depending on the file, either first
      or last gives the best compression. Default: false (0).
      */
      option_name = Nan::New<String>("blocksplittinglast").ToLocalChecked();
      if (Nan::Has(options, option_name).FromJust()) {
        zopfli_options.blocksplittinglast = Nan::Get(options, option_name).ToLocalChecked()->Int32Value();
      }

      /*
      Maximum amount of blocks to split into (0 for unlimited, but this can give
      extreme results that hurt compression on some files). Default value: 15.
      */
      option_name = Nan::New<String>("blocksplittingmax").ToLocalChecked();
      if (Nan::Has(options, option_name).FromJust()) {
        zopfli_options.blocksplittingmax = Nan::Get(options, option_name).ToLocalChecked()->Int32Value();
      }
    }
  } else {
    Nan::ThrowTypeError("Third argument must be an object");
  }
  //info.GetReturnValue().SetUndefined();
}


// Base
// PROTECTED
class CompressWorker : public Nan::AsyncWorker {
 public:
  CompressWorker(Nan::Callback *callback, ZopfliFormat& format, ZopfliOptions& zopfli_options, Handle<Object> buffer)
  : Nan::AsyncWorker(callback), format(format), zopfli_options(zopfli_options) {
    Nan::HandleScope scope;
    // Handle<Object> object = args[0]->ToObject();
    size_t length = node::Buffer::Length(buffer);
    const char *data = node::Buffer::Data(buffer);
    input = std::string(data, length);
    resultdata = 0;
    resultsize = 0;
  }
  ~CompressWorker() {}

  // Executed inside the worker-thread.
  // It is not safe to access V8, or V8 data structures
  // here, so everything we need for input and output
  // should go on `this`.
  void Execute() {
    std::string* input = &this->input;
    ZopfliCompress(&zopfli_options, format, (const unsigned char*)input->data(), input->length(), (unsigned char **)&resultdata, &resultsize);
  }

  // Executed when the async work is complete
  // this function will be run inside the main event loop
  // so it is safe to use V8 again
  void HandleOKCallback() {
    Nan::HandleScope();

    Local<Value> argv[] = {
      Nan::Null(),
      Nan::NewBuffer((char*)resultdata, resultsize).ToLocalChecked()
    };

    callback->Call(2, argv);
  }

 private:
  ZopfliFormat format;
  ZopfliOptions zopfli_options;
  std::string input;
  char* resultdata;
  size_t resultsize;
};

// CompressBinding
// PUBLIC
NAN_METHOD(CompressBinding::Async) {
  ZopfliFormat format;
  ZopfliOptions zopfli_options;
  if(info.Length() == 0 || (info.Length() >= 1 && !info[info.Length()-1]->IsFunction())) {
    Nan::ThrowTypeError("Last argument must be a callback function");
  }
  ParseArgs(info, format, zopfli_options);

  Nan::Callback *callback = new Nan::Callback(info[info.Length()-1].As<v8::Function>());
  Nan::AsyncQueueWorker(new CompressWorker(callback, format, zopfli_options, info[0]->ToObject()));
  info.GetReturnValue().SetUndefined();
}

NAN_METHOD(CompressBinding::Sync) {
  ZopfliFormat format;
  ZopfliOptions zopfli_options;
  ParseArgs(info, format, zopfli_options);
  Local<Object> inbuffer = info[0]->ToObject();
  size_t inbuffersize = Buffer::Length(inbuffer);
  const unsigned char * inbufferdata = (const unsigned char*)Buffer::Data(inbuffer);
  unsigned char* out = 0;
  size_t outsize = 0;
  ZopfliCompress(&zopfli_options, format,
    inbufferdata, inbuffersize,
    &out, &outsize);
  info.GetReturnValue().Set(Nan::NewBuffer((char*)out, outsize).ToLocalChecked());
}

unsigned updateAdler32(unsigned int adler, const unsigned char* data, size_t size)
{
  unsigned sums_overflow = 5550;
  unsigned s1 = adler;
  unsigned s2 = 1 >> 16;

  while (size > 0) {
    size_t amount = size > sums_overflow ? sums_overflow : size;
    size -= amount;
    while (amount > 0) {
      s1 += (*data++);
      s2 += s1;
      amount--;
    }
    s1 %= 65521;
    s2 %= 65521;
  }
  return (s2 << 16) | s1;
}

NAN_METHOD(Adler32) {
  if(info.Length() >= 1 && !info[0]->IsUint32() && !info[0]->IsInt32()) {
    return Nan::ThrowTypeError("adler must be an unsigned integer");
  }

  unsigned int adler = info[0]->Uint32Value();

  if(info.Length() < 1 || !Buffer::HasInstance(info[1])) {
    return Nan::ThrowTypeError("data must be a buffer");
  }
  Local<Value> inbuffer = info[1];
  size_t inbuffersize = Buffer::Length(inbuffer->ToObject());
  const unsigned char * data = (const unsigned char*)Buffer::Data(inbuffer->ToObject());
  adler = updateAdler32(adler, data, inbuffersize);
  info.GetReturnValue().Set(Nan::New<Uint32>(adler));
}

// NAN_MODULE_INIT(Init) {
//   NAN_EXPORT(target, Foo);
// }

NAN_MODULE_INIT(Init) {
  Nan::SetMethod(target, "deflate", CompressBinding::Async);
  Nan::SetMethod(target, "deflateSync", CompressBinding::Sync);
  Nan::SetMethod(target, "adler32", Adler32);
  Nan::SetMethod(target, "pngcompress", PNGDeflate);
}
NODE_MODULE(zopfli, Init)

}
