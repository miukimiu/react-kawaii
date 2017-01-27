{
  'target_defaults': {
      'default_configuration': 'Release'
  },
  "targets": [
    {
      'configurations': {
        'Debug': {
          'cflags': ['-g3', '-O0'],
          'msvs_settings': {
            'VCCLCompilerTool': {
              'BasicRuntimeChecks': 3,          # /RTC1
              'ExceptionHandling': 1,           # /EHsc
              'Optimization': '0',              # /Od, no optimization
              'WarningLevel': 4
            },
            'VCLinkerTool': {
              'GenerateDebugInformation': 'true',
              'LinkIncremental': 2              # enable incremental linking
            }
          }
        },
        'Release': {
          'cflags': ['-O2', '-W', '-Wall', '-Wextra', '-ansi'],
          'msvs_settings': {
            'VCCLCompilerTool': {
              'AdditionalOptions': ['/Zc:inline', '/MP'],
              'BufferSecurityCheck': 'true',
              'ExceptionHandling': 1,           # /EHsc
              'FavorSizeOrSpeed': '1',
              'OmitFramePointers': 'false',     # Ideally, we should only disable for x64
              'Optimization': '2',
              'StringPooling': 'true',
              'WarningLevel': 3,
              'WholeProgramOptimization': 'true'
            },
            'VCLinkerTool': {
              'DataExecutionPrevention': 2,     # enable DEP
              'EnableCOMDATFolding': 2,         # /OPT:ICF
              'LinkIncremental': 1,             # disable incremental linking
              'LinkTimeCodeGeneration': 1,      # link-time code generation
              'OptimizeReferences': 2,          # /OPT:REF
              'RandomizedBaseAddress': 2,       # enable ASLR
              'SetChecksum': 'true'
            }
          }
        }
      },

      "target_name": "<(module_name)",
      'lflags': ['-lm'],
      "include_dirs": [
        "zopfli/src/zopfli",
        "zopfli/src/zopflipng",
        "<!(node -e \"require('nan')\")"
      ],
      "sources": [
        "src/zopfli-binding.cc",
        "src/png/zopflipng.cc",
        "zopfli/src/zopfli/blocksplitter.c",
        "zopfli/src/zopfli/cache.c",
        "zopfli/src/zopfli/deflate.c",
        "zopfli/src/zopfli/gzip_container.c",
        "zopfli/src/zopfli/hash.c",
        "zopfli/src/zopfli/katajainen.c",
        "zopfli/src/zopfli/lz77.c",
        "zopfli/src/zopfli/squeeze.c",
        "zopfli/src/zopfli/tree.c",
        "zopfli/src/zopfli/util.c",
        "zopfli/src/zopfli/zlib_container.c",
        "zopfli/src/zopfli/zopfli_lib.c",
        "zopfli/src/zopflipng/zopflipng_lib.cc",
        "zopfli/src/zopflipng/lodepng/lodepng.cpp",
        "zopfli/src/zopflipng/lodepng/lodepng_util.cpp"
      ],
      "cflags": [
        "-Wall",
        "-O3"
      ]
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": ["<(module_name)"],
      "copies": [
        {
          "files": ["<(PRODUCT_DIR)/<(module_name).node"],
          "destination": "<(module_path)"
        }
      ]
    }
  ]
}
