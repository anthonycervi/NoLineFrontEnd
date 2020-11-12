import React from 'react';
import Divider from '../../comps/Divider'
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

storiesOf('MyDivider', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

  .add('Divider', () => (
    <Divider />
  ))