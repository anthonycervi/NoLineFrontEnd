/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SearchResult from '../comps/SearchResult';
import InputIconBar from '../comps/InputIconBar';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Map2 = () =>{
  return <View>
      <InputIconBar />
      <SearchResult />
  </View> 
}

export default Map2;
//export {default} from './storybook';