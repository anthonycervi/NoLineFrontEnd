import React from 'react';
import Slider from '../../comps/Slider'
import { storiesOf } from '@storybook/react-native';

storiesOf('MySlider', module)

  .add('Slider', () => (
    <Slider />
  ))