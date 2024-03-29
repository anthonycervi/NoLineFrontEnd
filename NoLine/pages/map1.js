/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from '../comps/Navigator';
import InputIconBar from '../comps/InputIconBar';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
 import MapImg from '../public/map.png'
 import styled, {css} from 'styled-components/native';
import MapOverlay from '../comps/MapOverlay'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

// THE FOLLOWING IS COMMENTED OUT UNTIL ADRIAN PROVIDES US THE INFO TO PULL FROM :)

// const [backend, setBackend] = useState([])
// const [resttitle, setRestTitle] = useState([])
// const [imgsrc, setImg] = useState([])
// const [reviewnum, setReviewNum] = useState([])
// const [username, setUsername] = useState([])
// const [waittime, setWaittime] = useState([])
// const [timeago, setTimeAgo] = useState([])
// const [distance, setDistance] = useState([])

// const HandleGetMapOverlay = async ()=> {
//   console.log("Pulled from Database");
//   var resp = await axios.post("Adrians repo link",{
//     //POST / AWAIT COMPONENTS
//   });
//   console.log(resp.data);
//   setBackend([...resp.data]);
// }

const MapPNG = {
  src: MapImg
}

const MapImage1 = styled.Image`
  width: 500;
  height: 450;
  margin-top: 10px;
`;

const Map = () =>{
  return (
    <View style={MainContainer.cont}>
      <View style={SearchContainer.cont}>
      <InputIconBar />
      </View>
      <MapImage1 source={require('../public/map.png')}/>
      <MapOverlay></MapOverlay>
      {/* <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={MapContainer.map}
       region={{
         latitude: 37.78825,
         longitude: -123.120735,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}
    <View style={NavContainer.cont}>
      <Navigator />
    </View>

 </View>
  )
}



const MainContainer = StyleSheet.create({
  cont:{
    position: "relative",
   
    
  }
})
  
const MapContainer = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    position:"relative",  
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    flex:1
  },
  map: {
    flex:1,
    ...StyleSheet.absoluteFillObject,
  },
})


const SearchContainer = StyleSheet.create({
    cont:{
      position: "relative",
     
    }
    })

    const NavContainer = StyleSheet.create({
      cont:{
        position: "relative",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        top:25,  
        left:21  
      }
      })

      


export default Map;
//export {default} from './storybook';