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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import InputIconBar from '../comps/InputIconBar';

import MapOverlay from '../comps/MapOverlay'

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
    <View style={title.cont}>
 <SearchTitle></SearchTitle>
 </View>
 
 {/* <Link to="/submitting"> */}

 <View style={MapContainer.container}>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={MapContainer.map}
       region={{
         latitude: 37.78825,
         longitude: -123.120735,
         latitudeDelta: 3.115,
         longitudeDelta: 3.1121,
       }}
     >
     </MapView>
     </View>
     
 <View style={SliderStyle.cont}>
 <Slider > </Slider>
 </View>

<View style={ButtonStyle.cont}>
  <Link to="/map1">
 <Button style = {ButtonStyle.cont} text="Submit" buttonwidth={135} buttonheight={35}></Button> 
 </Link>
 </View>
 {/* </Link> */}

 <View>
   <Text>Comments</Text>
   <InputIconBar text="Add a Comment..." width="331"/>
 </View>


<View style={Nav.cont}>
<Navigator></Navigator>
</View>
  </View>
}

const styles = StyleSheet.create({
cont:{
 flex:1,
  justifyContent:"center",
  alignItems:"center"
}
})

const title= StyleSheet.create({
  cont:{
    position:"relative",
  }
})

const Nav = StyleSheet.create({
  cont:{
    position:"relative",
    flex:1,
    top:80
  }
})

const ButtonStyle = StyleSheet.create({
  cont:{
  position:"relative",
  flex:1,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  top:40
  }
})

const SliderStyle = StyleSheet.create({
  cont:{
    position:"relative",
    width:"100%",
    top:90
  }
})

const MapContainer = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: 700,
    width: 300,
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    flex:1,
    top:30,
    right:15
  },
  map: {
    flex:1,
    width:"110%",
    height:200,
    top:100,
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    ...StyleSheet.absoluteFillObject,
  },

})

export default SearchTitlePage;
//export {default} from './storybook';