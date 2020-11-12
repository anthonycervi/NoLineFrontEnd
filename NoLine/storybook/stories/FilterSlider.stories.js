import React from 'react';
import FilterSlider from '../../comps/FilterSlider'
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('MyFilterSlider', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('FilterSlider', () => (
    <FilterSlider />
  ))