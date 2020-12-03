/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NativeRouter, Route, Link, useHistory } from "react-router-native";
import React, { useState } from 'react';
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
  TouchableOpacity,
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

const signUp = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const handleSignUp = async () => {
    const data = {
      example: "idk"
    }
    try {
      const res = await registerUser(email, pass, confirmPassword, data, fullname);
      // console.log('Sign Up success', res);
      history.push("/signupbutton");
    } catch (err) {
      console.log(err)
    }
  }
  // const history = useHistory();
  return <View style={MainContainer.cont}>

          <View style={LogoStyles.cont}>
            <LogoOnly />
          </View>

          <View style={ContentContainer.cont}>
            <View style={InputStyles.cont}>
        <InputBox text=" Username" onChangeText={(text) => {
          setFullname(text)
         }}/>
            </View>

            <View style={InputStyles.cont}>
            <InputBox text=" Email" onChangeText={(text)=>{
                  setEmail(text)
                }}/>
            </View>

            <View style={InputStyles.cont}>
            <InputBox text=" Password" onChangeText={(text) => {
                  setPass(text)
                }}/>
            </View>

            <View style={InputStyles.cont}>
            <InputBox text=" Confirm Password" onChangeText={(text) => {
                  setConfirmPassword(text)
                }}/>
            </View>

            <View style={ButtonStyles.cont}>
              
        <Button
          text="SIGN UP"
          buttonbgcolor="#FFD25B"
          buttoncolor="white"
          buttonfontsize={24}
          onPress={handleSignUp}
        />
            </View>
          </View>

          <View style={AccountTextStyles.cont}>
          <TouchableOpacity 
        onPress={() => {
            history.push("/signin")
          }}>
            {/* <Link to="signin"> */}
            <AccountText text="Have an account? &nbsp;" text2=" Sign In"/>
            {/* </Link> */}
            </TouchableOpacity>
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
      top: 10,
    }
    })

    const ContentContainer = StyleSheet.create({
      cont:{
        position: "relative",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: 55,
        
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
        bottom: -59,
        
        
      }
      })

export default signUp;
