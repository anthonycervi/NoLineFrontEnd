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
import LogoOnly from "../comps/LogoOnly";

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
  return <View style={MainContainer.cont}>

            <View style={LogoStyles.cont}>
              <LogoOnly />
            </View>

            <View style={ContentContainer.cont}>
              <View style={InputStyles.cont}>
                <InputBox text="Email"/>
              </View>

              <View style={InputStyles.cont}>
                <InputBox text="Password"/>
              </View>

              <View style={ButtonStyles.cont}>
                <Link to = "/signupbutton">
                <Button text="SIGN IN" buttonbgcolor="#FFD25B" buttoncolor="white" buttonfontsize={24}/>
                </Link>
              </View>
            </View>

              <View style={AccountTextStyles.cont}>
                <Link to="signin">
                <AccountText text="Dont't have an account? &nbsp;" text2=" Create Now"/>
                </Link>
              </View>
            

          </View>
}


const MainContainer = StyleSheet.create({
  cont:{
    position: "relative",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
  })

  const LogoStyles = StyleSheet.create({
    cont:{
      position: "relative",
      alignContent: 'center',
      justifyContent: 'center',
      display: "flex",
      top: -60,
    }
    })

    const ContentContainer = StyleSheet.create({
      cont:{
        position: "relative",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        
      }
      })

const ButtonStyles = StyleSheet.create({
  cont:{
    position: "relative",
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    margin: 15,
    
  }
  })

  const InputStyles = StyleSheet.create({
    cont:{
      position: "relative",
      alignContent: 'center',
      justifyContent: 'center',
      display: "flex",
      margin: 10,
      
    }
    })

    const AccountTextStyles = StyleSheet.create({
      cont:{
        position: "relative",
        alignContent: 'center',
        justifyContent: 'center',
        display: "flex",
        margin: 10,
        bottom: -100,
       
        
      }
      })

export default signIn;
// export {default} from './storybook';