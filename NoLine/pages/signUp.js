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
      <InputBox text="Full Name"/>
      <InputBox text="Email"/>
      <InputBox text="Password"/>
      <Button text="SIGN UP" buttonbgcolor="#FFD25B" buttoncolor="white"/>
      <AccountText text="Have an account? &nbsp;" text2=" Sign In"/>
  </View>
}

export default signUp;
// export {default} from './storybook';