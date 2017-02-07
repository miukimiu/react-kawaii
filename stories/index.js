import React from 'react';
import 'babel-polyfill';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/js/components/Button';
import LoadingGooey from '../src/js/components/LoadingGooey';
// import Affix from '../src/js/components/Affix';
import Welcome from './Welcome';
import '../src/sass/storybook.scss';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Buttons', module)
  .add('primary', () => (
    <Button onClick={action('clicked')} type="primary">Button primary</Button>
  ))
  .add('default', () => (
    <Button onClick={action('clicked')} type="default">Button default</Button>
  ))
  .add('ghost', () => (
    <Button onClick={action('clicked')} type="ghost">Button ghost</Button>
  ))
  .add('flat', () => (
    <Button onClick={action('clicked')} type="flat">Button flat</Button>
  ))
  .add('floating', () => (
    <Button onClick={action('clicked')} type="floating"></Button>
  ));

storiesOf('Affix', module)
    .add('primary', () => (
    <Affix className="main__close" offset={100}>
      <Button onClick={action('clicked')} type="default">Affix me after 100px height</Button>
    </Affix>
    ))

storiesOf('Loadings', module)
    .add('primary', () => (
      <LoadingGooey />
    ))
