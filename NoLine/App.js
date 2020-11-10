/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import InputComp from './comps/InputComp';
import SearchResult from './comps/SearchResult'
import SearchTitle from './comps/SearchTitle'


const App = () =>{
  return <View>
    <SearchResult/>
    
  </View>
}

export default App;
//export {default} from './storybook';