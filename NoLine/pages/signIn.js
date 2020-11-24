/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NativeRouter, Route, Link,useHistory} from "react-router-native";
import React, {useState} from 'react';
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

import {
  addUser,
  addRating,
  getUserWithUid,
  registerUser,
  addReview,
  login,
  getReviewsByRestaurant,
  getUserFirstname,
  logout,
  addComment,
  getCommentsByRestaurant,
  addWaitTime,
  getWaitTime,
  addPoints,
  getAllPoints,
  getAllRestaurantByWaitTime,
} from '../database/functions';

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

const signIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogIn = () => {
    console.log(email,pass);
    login(email,pass)
      .then(user=>{
        console.log('login success', user);
        history.push("/SearchTitle")
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const history = useHistory();

  return <View style={MainContainer.cont}>

            <View style={LogoStyles.cont}>
              <LogoOnly />
            </View>

            <View style={ContentContainer.cont}>
              <View style={InputStyles.cont}>
                <InputBox text="Email" onChangeText={(text)=>{
                  setEmail(text)
                }}/>
              </View>

              <View style={InputStyles.cont}>
                <InputBox text="Password" onChangeText={(text)=>{
                  setPass(text)
                }}/>
              </View>

              <View style={ButtonStyles.cont}>
                <Button onPress={handleLogIn} 
                  text="SIGN IN" 
                  buttonbgcolor="#FFD25B" 
                  buttoncolor="white" 
                  buttonfontsize={24} 
                />
              </View>
            </View>

              <View style={AccountTextStyles.cont}>
                <Link to="signup">
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