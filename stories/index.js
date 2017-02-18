import React from 'react';
import 'babel-polyfill';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import KawaiiPlanet from '../src/js/components/KawaiiPlanet';
import Welcome from './Welcome';
import '../src/sass/storybook.scss';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Icon Kawaii', module)
    .add('Moon', () => (
      <KawaiiPlanet mood="cross" size={200}/>
    ))
