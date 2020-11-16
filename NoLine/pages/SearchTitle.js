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
import {NativeRouter, Route, Link} from "react-router-native";
import Slider from '../comps/Slider';
import Button from '../comps/Button';
import Navigator from '../comps/Navigator';
import SearchTitle from '../comps/SearchTitle';

//MAP COMPONENT IS ADRIAN'S GOOGLE MAP API
const SearchTitlePage = () =>{
  return <View style={styles.cont}>
 <SearchTitle style={title.cont}></SearchTitle>
 {/* <Link to="/submitting"> */}
<View style={ButtonStyle.cont}>
  <Link to="/map1">
 <Button text="Submit" buttonwidth={135} buttonheight={35}></Button> 
 </Link>
 </View>
 {/* </Link> */}


<View style={Nav.cont}>
<Navigator></Navigator>
</View>
  </View>
}

const styles = StyleSheet.create({
cont:{
  
}
})

const title= StyleSheet.create({
  cont:{
    position:"relative",
    top:100
  }
})

const Nav = StyleSheet.create({
  cont:{
    position:"relative",
    top:520
  }
})

const ButtonStyle = StyleSheet.create({
  cont:{
    position:"relative",
    left:120,
    top:300,
    flex:1,
    justifyContent:"center",
    alignContent:"center"
  }
})

export default SearchTitlePage;
//export {default} from './storybook';