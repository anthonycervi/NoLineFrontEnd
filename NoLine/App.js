/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter, Route, Link} from "react-router-native";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ProfileBio from './pages/ProfileBio';
//import ProfileAwards from './pages/ProfileAwards';
//import EditProf from './pages/EditProf';

const App = () =>{
  return <View>
    <ProfileBio/>
  </View>
}

const styles = StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default App;
//export {default} from './storybook';