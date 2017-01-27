#ifndef _NODE_ZOPFLI_H_
#define _NODE_ZOPFLI_H_
#include <node.h>
#include <v8.h>
#include "nan.h"

namespace nodezopfli {

class CompressBinding {
 public:
  static NAN_METHOD(Async);
  static NAN_METHOD(Sync);
};

}

#endif
