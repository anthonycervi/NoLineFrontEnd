/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from '../comps/Navigator';
import SearchBar from '../comps/SearchBar';
// import InputIconBar from '../comps/InputIconBar';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
 import MapImg from '../public/map.png'
 import styled, {css} from 'styled-components/native';
import MapOverlay from '../comps/MapOverlay';
import searchIconPNG from '../public/searchIcon.png';
import Search from '../public/Search_White.png';
import CheckedLocationPin from '../public/LocationPin_Checked.png';



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
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

// const MapPNG = {
//   src: MapImg
// }

// const MapImage1 = styled.Image`
//   width: 500;
//   height: 450;
//   margin-top: 10px;
// `;

const Map = () =>{
  return (
    <View style={MainContainer.cont}>
      
      
      <View style={MainMapContainer.cont}>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={MapContainer.map}
       region={{
         latitude: 49.27966,
         longitude: -123.11993,
         latitudeDelta: 0.055,
         longitudeDelta: 0.055,
       }}
     >
     </MapView>
     </View>
     
     <View style={SearchInput.cont}>
          <SearchBar text=" Search" style={SearchBarInput.cont}/>
          <TouchableOpacity style={SearchButton.cont}>
          <SearchImage source={SearchPNG.src}/> 
          </TouchableOpacity>
     </View>

    <View style={NavContainer.cont}>
      <Navigator image2={CheckedLocationPin}/>
    </View>
<View style={WhiteBox.cont}></View>
 </View>
//  </View>
  )
}

const SearchPNG = {
  src: Search
}

const SearchImage = styled.Image`
    width: 30px;
    height: 30px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
`;

const MainContainer = StyleSheet.create({
  cont:{
    position: "relative",
    alignItems: "center"
   
    
  }
})

const WhiteBox = StyleSheet.create({
  cont:{
    position: "absolute",
    height:77,
    width:15,
    backgroundColor:"white",
    bottom:0,
    left:0,
  }
})

const MainMapContainer = StyleSheet.create({
  cont:{
    position: "relative",
    height: "100%",
    width: "100%"
   
    
  }
})
  
const MapContainer = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 400,
    position:"relative",  
    alignContent: 'center',
    justifyContent: 'center',
    display: "flex",
    flex:1
  },
  map: {
    flex:1,
    width:"100%",
    height:"100%",
    ...StyleSheet.absoluteFillObject,
  },

})




const SearchContainer = StyleSheet.create({
    cont:{
      position: "absolute",
      alignContent: 'center',
      justifyContent: 'center',
      display: "flex",
      top:20,
      width:"90%",
      backgroundColor: "white",
      borderRadius: 5,
     
    }
    })

    const NavContainer = StyleSheet.create({
      cont:{
        position: "absolute",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        bottom:-10,  
        left:4,
        backgroundColor: "white"  
      }
      })


      const SearchInput = StyleSheet.create({
        cont:{
        // flex:1,
        flexDirection: "row",
        width:"90%",
        top:12,
        // backgroundColor: "pink",
        overflow: "hidden",
        // marginBottom: 15,
        // top:-750,
        marginTop:10,
        position:"absolute",
        
        }
      })
      
      const SearchBarInput = StyleSheet.create({
        cont:{
          // flex: 2,
          alignSelf:"stretch",
          display: "flex",
          width:250,
        }
      })
      
      const SearchButton = StyleSheet.create({
        cont:{
          width: 49,
          height: 49,
          backgroundColor: "#FFD25B",
          borderBottomEndRadius: 5,
          borderTopEndRadius: 5,
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          // alignItems:"flex-end",
          // flex: 1,
        }
      })

      


export default Map;
//export {default} from './storybook';