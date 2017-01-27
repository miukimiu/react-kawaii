#!/usr/bin/env node

'use strict';

var program = require('commander');
var fs = require('fs');
var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.join(__dirname, '../package.json'));
var zopfli = require(binding_path);

program
  .version(require('../package.json').version)
  .usage('[options] file destfile')
  .option('--lossy_transparent', 'Allow altering hidden colors of fully transparent pixels')
  .option('--lossy', 'Convert 16-bit per channel images to 8-bit per channel')
  .option('--filter_strategies', 'Filter strategies to try : "zero", "one", "two", "three", "four", "minimum", "entropy", "predefined", "brute", if none, it will be guessed automatically')
  .option('--keepchunks', 'Chunks to keep')
  .option('--iterations=<n>', 'Number of iterations for small images < 200 KiB', parseInt)
  .option('--iterations_large=<n>', 'Number of iterations for large images > 200 KiB', parseInt)
  .parse(process.argv);

var options = {
  lossy_transparent: false,
  lossy_8bit: false,
  filter_strategies: [],
  auto_filter_strategy: true,
  keepchunks: [],
  use_zopfli: true,
  num_iterations: 15,
  num_iterations_large: 5,
  block_split_strategy: 'both'  // Split chunk strategy none, first, last, both
};

options.lossy_transparent = !!program.lossy_transparent;
options.lossy_8bit = !!program.lossy;
// if (program.filter_strategies) options.filter_strategies = []; //TODO
// if (program.keepchunks) options.keepchunks = []; //TODO
options.num_iterations = program.iterations || options.num_iterations;
options.num_iterations_large = program.iterations_large || options.num_iterations_large;

if (typeof program.args[0] !== 'string') {
  console.log('You must provide a file to compress');
  process.exit(1);
}
if (typeof program.args[1] !== 'string') {
  console.log('You must provide a destination file');
  process.exit(1);
}

if (fs.existsSync(program.args[0])) {
  zopfli.pngcompress(program.args[0], program.args[1], options);
} else {
  console.log('File ' + program.args[0] + ' doesn\'t exist');
  process.exit(1);
}
