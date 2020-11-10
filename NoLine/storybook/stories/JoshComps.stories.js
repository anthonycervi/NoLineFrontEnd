import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import InputComp from '../comps/InputComp'
import SearchTitle from '../comps/SearchTitle'
import UserPage from '../comps/UserPage'
import MapOverlay from '../comps/MapOverlay'
import SearchResult from '../comps/SearchResult'
// import Message from '../../comps/Message';

storiesOf('InputIconBar', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Basic EditBar', () => (
    <InputComp/> 
  ))
  .add('Profile', () => (
    <SearchTitle/>
  ))
  .add('IconBar', () => (
    <UserPage/>
  ))