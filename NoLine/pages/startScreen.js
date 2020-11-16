/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NativeRouter, Route, Link} from "react-router-native";
import React from 'react';
import Button from '../comps/Button';
import SignUpPage from './signUp'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//import EditBar from './comps/EditBar';

const startScreen = () =>{
  return <View>
    <Link to="/signup">
      <Button />
      </Link>
      <Link to="/signin">
      <Button/>
      </Link>
  </View>
  
}

export default startScreen;
// export {default} from './storybook';