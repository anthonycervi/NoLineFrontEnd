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
import EditBar from './comps/EditBar';

const App = () =>{
  return <View>
    <EditBar />
  </View>
}

export default App;
//export {default} from './storybook'; 