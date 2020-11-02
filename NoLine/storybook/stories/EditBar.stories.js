import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import EditBar from '../../comps/EditBar';
//import InputIconBar from '../../comps/InputIconBar';

storiesOf('EditBar', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Basic EditBar', () => (
    <EditBar />
  ))
  .add('2nd EditBar', () => (
    <EditBar />
  ))


  // storiesOf('InputIconBar', module).add('Basic InputIconBar', () => (
  //   <InputIconBar />
  // ))
  //.add() more stories
