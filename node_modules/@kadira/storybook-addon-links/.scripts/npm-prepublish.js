var path = require('path');
var shell = require('shelljs');
var babel = ['node_modules', '.bin', 'babel'].join(path.sep);

shell.rm('-rf', 'dist')
shell.exec(babel + ' --ignore __tests__ src --out-dir dist')
