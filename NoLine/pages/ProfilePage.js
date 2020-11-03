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
import InputComp from '../../comps/InputComp';

const ProfilePage = () =>{
  return <View>
      {/* Name, Email, Password, Confirm Password, Location, Wait Times Reported, Reviews Written, Email (Profile), Bio */}
    <InputComp /> 
    <InputComp />
    <InputComp />
    <InputComp />
    <InputComp />
    <InputComp />
    <InputComp />
    <InputComp />
    <InputComp />
  </View>
}

export default ProfilePage;
