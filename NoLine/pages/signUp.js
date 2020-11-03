/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Button from '../comps/Button';
import InputBox from '../comps/InputBox';
import AccountText from '../comps/AccountText';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const signUp = () =>{
  return <View>
      <InputBox />
      <InputBox />
      <InputBox />
      <Button />
      <AccountText />
  </View>
}

export default signUp;
// export {default} from './storybook';