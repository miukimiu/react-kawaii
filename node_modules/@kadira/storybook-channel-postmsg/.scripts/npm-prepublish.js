var path = require('path');
var shell = require('shelljs');
var babel = ['node_modules', '.bin', 'babel'].join(path.sep);

// required for react-app preset
process.env.NODE_ENV = 'production';

shell.rm('-rf', 'dist')
shell.exec(babel + ' --ignore __tests__ src --out-dir dist')
