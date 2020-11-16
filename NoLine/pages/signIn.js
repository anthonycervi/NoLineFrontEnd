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

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: 'center',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

  innerText: {
    color: 'white',
  },

  ContentContainer: {
    height: 500,
    width: 500,
    alignContent: 'center',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },

  Padding: {
    padding: 30,
    margin: 30,
  }
})

const signIn = () =>{
  return <View style={styles.mainContainer}>
           {/* <View style={styles.mainContainer}> */}
              <InputBox text="Email"/>
              <InputBox style={styles.Padding} text="Password"/>
              <Link to='/signinbutton'>
              <Button style={styles.innerText} text="SIGN IN" buttonbgcolor="#FFD25B" buttoncolor="white"/>
              </Link>             
              <AccountText text2="Forgot Password?"/>
            {/* </View> */}
            <Link to="/signup">
              <AccountText text="Don't have an account? &nbsp;" text2=" Create Now"/>
              </Link>
            </View>
}

export default signIn;
// export {default} from './storybook';