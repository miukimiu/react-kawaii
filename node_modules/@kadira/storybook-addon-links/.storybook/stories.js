import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { linkTo } from '../src';

storiesOf('Button', module)
  .add('First Story', () => (
    <button onClick={linkTo('Button', 'Second Story')}>Go to "Second Story"</button>
  ))
  .add('Second Story', () => (
    <button onClick={linkTo('Button', 'First Story')}>Go to "First Story"</button>
  ));
