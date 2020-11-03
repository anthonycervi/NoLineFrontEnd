import { storiesOf } from '@storybook/react-native';
import React from 'react';
import EditBar from '../../comps/EditBar';

storiesOf('EditBar', module)
  .add('Basic EditBar', () => (
    <EditBar />
  ))
  //.add() more stories
