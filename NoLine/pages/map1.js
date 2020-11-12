/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from '../comps/Navigator';
import InputIconBar from '../comps/InputIconBar';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const Map = () =>{
  return <View>
      <InputIconBar />
      <Navigator />
  </View>
}

export default Map;
//export {default} from './storybook';