import React from 'react';
import 'babel-polyfill';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/js/components/Button';
import FloatingButton from '../src/js/components/FloatingButton'
import LoadingGooey from '../src/js/components/LoadingGooey';
import KawaiiPlanet from '../src/js/components/KawaiiPlanet';
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
    <FloatingButton onClick={action('clicked')} type="primary" icon="fi flaticon-add"></FloatingButton>
  ));

storiesOf('Loadings', module)
    .add('primary', () => (
      <LoadingGooey />
    ))

storiesOf('Icon Kawaii', module)
    .add('Moon', () => (
      <KawaiiPlanet eyes="cross" size={200}/>
    ))
