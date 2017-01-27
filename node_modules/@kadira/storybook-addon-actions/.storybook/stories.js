import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { action, decorateAction } from '../src';

const pickFirst = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Button', module)
  .add('Hello World', () => (
    <button onClick={action('hello-world')}>Hello World</button>
  ))
  .add('Decorated Action', () => (
    <button onClick={pickFirst('decorated')}>First Argument</button>
  ))
  .add('Circular Payload', () => {
    const circular = {foo: {}};
    circular.foo.circular = circular;
    return <button
      onClick={() => action('circular')(circular)}>
      Circular Payload
    </button>;
  });
