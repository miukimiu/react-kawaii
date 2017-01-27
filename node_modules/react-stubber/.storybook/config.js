// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';
import { setStubbingMode } from '../src'

setStubbingMode(true);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
