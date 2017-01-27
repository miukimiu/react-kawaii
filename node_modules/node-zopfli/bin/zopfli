#!/usr/bin/env node

'use strict';

var program = require('commander');
var fs = require('fs');
var zopfli = require('../lib/zopfli');

program
  .version(require('../package.json').version)
  .usage('[options] [files...]')
  .option('--deflate', 'raw deflate (without container)')
  .option('--zlib', 'deflate using zlib container')
  .option('--gzip', 'deflate using gzip container')
  .option('-e, --ext <s>', 'overwrite default file extension')
  .option('-i, --iterations <n>', 'number of iterations (higher = smaller = slower)', parseInt)
  .option('-v, --verbose', 'Verbose')
  .parse(process.argv);

var options = {
  verbose: false,
  verbose_more: false,
  numiterations: 15,
  blocksplitting: true,
  blocksplittinglast: false,
  blocksplittingmax: 15
};

if (program.iterations) options.numiterations = parseInt(program.iterations, 10);
if (program.verbose) options.verbose = program.verbose;

var method = zopfli.createGzip;
var extension = 'gz';

if (program.deflate) {
  method = zopfli.createDeflate;
  extension = 'deflate';
}
if (program.zlib) {
  method = zopfli.createZlib;
  extension = 'zlib';
}
if (program.ext) {
  extension = program.ext;
}

if (program.args.length === 0) {
  program.outputHelp();
  process.exit(1);
} else {
  Promise.all(
    program.args.map(function(item) {
      return new Promise(function(resolve, reject) {
        fs.createReadStream(item)
          .on('error', reject)
          .pipe(new method(options))
          .on('error', reject)
          .pipe(fs.createWriteStream(item + '.' + extension))
          .on('error', reject)
          .on('finish', resolve);
      });
    })
  );
}
