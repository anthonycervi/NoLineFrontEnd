import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import EditBar from '../../comps/EditBar';
import Profile from '../../comps/Profile';
import InputIconBar from '../../comps/InputIconBar';
// import Message from '../../comps/Message';

storiesOf('EditBar', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Basic EditBar', () => (
    <EditBar />
  ))
  .add('Profile', () => (
    <Profile />
  ))
  .add('IconBar', () => (
    <InputIconBar />
  ))
  // .add('Message', () => (
  //   <Message />
  // ))


  // storiesOf('InputIconBar', module).add('Basic InputIconBar', () => (
  //   <InputIconBar />
  // ))
  //.add() more stories
