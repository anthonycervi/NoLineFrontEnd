/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from '../comps/Navigator';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './comps/Navigator';

const Map = () =>{
  return <View>
      <Navigator />
  </View>
}

export default Map;
//export {default} from './storybook';