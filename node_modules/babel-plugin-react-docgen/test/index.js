import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import plugin from '../src';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('Add propType doc to react classes', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const options = {
        presets: [
          "react",
          "es2015",
        ],
        plugins: [
          [plugin, {
            "DOC_GEN_COLLECTION_NAME": "STORYBOOK_REACT_CLASSES"
          }]
        ],
        babelrc: false
      };

      const actual = transformFileSync(actualPath, options).code;
      //fs.writeFileSync(path.join(fixtureDir, 'actual-output.js'), actual);
      const expected = fs.readFileSync(
          path.join(fixtureDir, 'expected.js')
      ).toString();
      assert.equal(trim(actual), trim(expected));
    });
  });
});
