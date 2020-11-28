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
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import axios from 'axios';
import {NativeRouter, Route, Link} from "react-router-native";
// import Slider from '../comps/Slider';
import Button from '../comps/Button';
import Navigator from '../comps/Navigator';
import SearchTitle from '../comps/SearchTitle';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import InputIconBar from '../comps/InputIconBar';
import sendIconPNG from '../public/sendIcon.png';
import MapOverlay from '../comps/MapOverlay';
import PlusPNG from '../public/plus.png';
import MinusPNG from '../public/minus.png';

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
     
       <View style={TextStyle.text}>
         <Text style={TextStyle.report}>Report the Current Wait Time!</Text>
       </View>

       <View>
         <Text style={TextStyle.min}>(num) min</Text>
       </View>

  <View style={ImageStyle.cont}>
    <Image 
    style={ImageStyle.image}
    source={require('../public/minus.png')} />
    <Image 
    style={ImageStyle.image}
    source={require('../public/plus.png')}/>
  </View>

 <View style={SliderStyle.cont}>
 <Slider
    style={{width: 300, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFD25B"
    maximumTrackTintColor="#C4C4C4"
    thumbTintColor="#FFD25B"
  />
 </View>

 <View style={TextStyle.number}>
   <View>
     <Text>0 min</Text>
   </View>
   <View>
     <Text>2+ hours</Text>
   </View>
 </View>

<View style={ButtonStyle.cont}>
  <Link to="/map1">
 <Button style = {ButtonStyle.cont} text="Submit" buttonwidth={135} buttonheight={35}></Button> 
 </Link>
 </View>
 {/* </Link> */}

 <View>
   <Text style={TextStyle.report}>Comments</Text>
   <InputIconBar text="Add a Comment..." width="331" image={sendIconPNG.src}/>
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
    top:40
  }
})

const ButtonStyle = StyleSheet.create({
  cont:{
  position:"relative",
  flex:1,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  bottom:10
  }
})

const TextStyle = StyleSheet.create({
  text:{
    top:40
  },

  number:{
    display: "flex",
    alignItems: "stretch",
    flexDirection:"row",
    justifyContent: "space-between",
    width:"75%",
    top:20
  },

  report:{
    fontSize:18,
  },

  min:{
    fontSize:16,
    top:50
  }
})

const SliderStyle = StyleSheet.create({
  cont:{
    position:"relative",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    top:25
  },
  slider:{
    height:5
  }
})

const MapContainer = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: 220,
    width: 340,
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    top:30,
    borderWidth:5,
    borderColor:"#FFD25B",
  },
  map: {
    flex:1,
    width:"100%",
    height:210.5,
    top:100,
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    ...StyleSheet.absoluteFillObject,
  },

})

const ImageStyle = StyleSheet.create({
  image:{
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#ffd25b",
  },
  cont:{
    display: "flex",
    alignItems: "stretch",
    flexDirection:"row",
    justifyContent: "space-between",
    width:"90%",
    top:55    
  }
})

export default SearchTitlePage;
//export {default} from './storybook';