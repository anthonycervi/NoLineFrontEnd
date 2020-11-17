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
import LogoAndName from "../comps/LogoAndName";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

const startScreen = () =>{
  return <View style={MainContainer.cont}>

            <View style={LogoStyles.cont}>
              <LogoAndName />
            </View>

            
            <View style={ButtonStyles.cont}>
              <Link to="/signup">
                <Button text="SIGN UP" buttonbgcolor="#FFD25B" buttoncolor="white" buttonfontsize={24}/>
              </Link>
            </View>
            

            <View style={ButtonStyles.cont}>
              <Link to="/signin">
                <Button style={ButtonTextStyles.cont} text="SIGN IN" buttonbgcolor="white" buttoncolor="#FFD25B" buttonbordercolor="#FFD25B" buttonborderstyle="solid" buttonfontsize={24} />
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
    top: -55,
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

  const ButtonTextStyles = StyleSheet.create({
    cont:{
      fontSize: 24,
    }
    })

export default startScreen;
// export {default} from './storybook';




// Attempted to put TouchableHighlight on the button but routing would not work when I did.

{/* <TouchableHighlight activeOpacity={0.7}
                    underlayColor="#FFFFFF"
                    onPress={() => {}}>

 </TouchableHighlight> */}