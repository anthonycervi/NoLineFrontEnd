import React from 'react';
import Navigator from '../../comps/Navigator'
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('MyNavigator', module)

  .add('Navigator', () => (
    <Navigator />
  ))