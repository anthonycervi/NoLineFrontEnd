/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import {NativeRouter, Route, Link} from "react-router-native";
import Slider from '../comps/Slider';
import Button from '../comps/Button';
import Navigator from '../comps/Navigator';
import SearchTitle from '../comps/SearchTitle';
import '../public/minus.png';
import '../public/plus.png';

// THE FOLLOWING IS COMMENTED OUT UNTIL ADRIAN PROVIDES US THE INFO TO PULL FROM :)

// const [backend, setBackend] = useState([])
// const [resttitle, setRestTitle] = useState([])
// const [imgsrc, setImg] = useState([])
// const [reviewnum, setReviewNum] = useState([])
// const [username, setUsername] = useState([])
// const [waittime, setWaittime] = useState([])
// const [timeago, setTimeAgo] = useState([])

// const HandleGetSearchTitle = async ()=> {
//   console.log("Pulled from Database");
//   var resp = await axios.post("Adrians repo link",{
//     //POST / AWAIT COMPONENTS
//   });
//   console.log(resp.data);
//   setBackend([...resp.data]);
// }

//MAP COMPONENT IS ADRIAN'S GOOGLE MAP API
const SearchTitlePage = () =>{
  return <View style={styles.cont}>
 <SearchTitle style={title.cont}></SearchTitle>
 {/* <Link to="/submitting"> */}
 <View style={SliderStyle.cont}>
 <Slider > </Slider>
 </View>
<View style={ButtonStyle.cont}>
  <Link to="/map1">
 <Button style = {ButtonStyle.cont} text="Submit" buttonwidth={135} buttonheight={35}></Button> 
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
 flex:1
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
    top:190,
    flex:1,
    
  }
})

const ButtonStyle = StyleSheet.create({
  cont:{
  position:"relative",
  flex:1,
  left:120,
  top:280
  }
})

const SliderStyle = StyleSheet.create({
  cont:{
    position:"relative",
    top:250,
    
  }
})

export default SearchTitlePage;
//export {default} from './storybook';