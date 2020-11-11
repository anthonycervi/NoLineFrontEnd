import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';
import InputComp from '../comps/InputComp'
import SearchTitle from '../comps/SearchTitle'
import UserPage from '../comps/UserPage'
import MapOverlay from '../comps/MapOverlay'
import SearchResult from '../comps/SearchResult'
import SearchResults from '../../pages/SearchResults';
// import Message from '../../comps/Message';

storiesOf('InputIconBar', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Input Comp', () => (
    <InputComp/> 
  ))
  .add('Search Title', () => (
    <SearchTitle/>
  ))
  .add('UserPage', () => (
    <UserPage/>
  ))
  .add('Search Results', () => (
    <SearchResult/>
  ))
  .add('MapOverlay', () => (
    <MapOverlay/>
  ))