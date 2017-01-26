import { configure } from '@kadira/storybook';
import 'babel-polyfill';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
