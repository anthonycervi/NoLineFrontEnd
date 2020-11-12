import React from 'react';
import CheckIcon from '../../comps/CheckIcon'
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('MyCheckIcon', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('CheckIcon', () => (
    <CheckIcon />
  ))