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
import Profile from './comps/Profile';

import ProfilePage from './pages/profile.js';

const App = () =>{
  return <View>
    <EditBar />
    <Profile/>
  </View>
}

export default App;
//export {default} from './storybook';