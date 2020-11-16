/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Button from '../comps/Button';
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
      <Button text="Sign In"/>
      <Button text="Sign Up" color="white"/>
  </View>
}

export default startScreen;
// export {default} from './storybook';