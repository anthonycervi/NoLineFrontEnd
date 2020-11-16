/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MapOverlay from '../comps/MapOverlay';
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
      <MapOverlay />
  </View> 
}

export default Map2;
//export {default} from './storybook';