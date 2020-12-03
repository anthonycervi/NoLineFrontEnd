/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import SliderText from 'react-native-slider-text';
import Slider from '@react-native-community/slider';
import axios from 'axios';
import {NativeRouter, Route, Link, useParams} from "react-router-native";
// import Slider from '../comps/Slider';
import Button from '../comps/Button';
import Navigator from '../comps/Navigator';
import Message from '../comps/Message';
import SearchTitle from '../comps/SearchTitle';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import InputIconBar from '../comps/InputIconBar';
import sendIconPNG from '../public/sendIcon.png';
import MapOverlay from '../comps/MapOverlay';
import PlusPNG from '../public/plus.png';
import MinusPNG from '../public/minus.png';
import { getAllPhotos } from '../database/functions';
import {getRestaurant} from '../database/functions';
import config from '../database/firebase.config.json';
import '../public/down.png'
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
  const [sliderValue, setSliderValue] = useState(0);
  const [searchText, setSearchText] = useState("5 min wait");
  const [name, setName] = useState("")
  const [revnum, setRevnum] = useState("")
  const [rating, setRating] = useState("")
  const [photo, setPhoto] = useState("")
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
const {id} = useParams();

 const RestaurantDetail = async() =>{
  if(id){
    var details = await getRestaurant(id);
    // console.log("details", JSON.stringify(details.result, null, 2));
    setName(details.result.name);
    console.log(details.result)
    setRevnum(details.result.user_ratings_total);
    setRating(details.result.rating);
    // setLat(details.results.lat);
    // setLong(details.results.lng);
    setLong(details.result.geometry.location.lng);
    setLat(details.result.geometry.location.lat);
    // console.log(details.result.geometry.location.lat);
    setPhoto(details.result.photos[0].photo_reference);

    //Review Stars / 5 = "rating", Image = "icon",location: lat / lng, user_ratings_total

  }
}
useEffect(()=>{
  RestaurantDetail()
}, [id]);


//COORDINATES

const MyLatLng = {lat: lat, lng: long};
var markers = [
  {
    id: String,
  coordinate: MyLatLng,
  title: "String",
  description: String
        
  }
]


return   <ScrollView>
  <View style={styles.cont}>
    <View style={title.cont}>
 <SearchTitle h1text={name} revnum={revnum} text={searchText} stars={rating + "/5"} photourl={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=${config.apiKey}`}></SearchTitle>
 </View>
 {/* <Link to="/submitting"> */}

 <View style={MapContainer.container}>

      

      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={MapContainer.map}
      annotations={markers}
       region={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
        
       }}
       
     >
     </MapView>
     </View>
     
       <View style={TextStyle.text}>
         <Text style={TextStyle.report}>Report the Current Wait Time!</Text>
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
 <SliderText style={SliderStyle.slider}
    style={{width: 200, height: 40}}
    stepValue={5}
    minimumValue={0}
    maximumValue={120}
    onValueChange={(id) => setSliderValue(id)}
    sliderValue={sliderValue}
    minimumTrackTintColor="#FFD25B"
    maximumTrackTintColor="#C4C4C4"
    thumbTintColor="#FFD25B"
    minimumValueLabel="0 min"
    maximumValueLabel="2+ hours"  
  />
 </View>

<View style={ButtonStyle.cont}>
  <Link to="/map1">
 <Button style = {ButtonStyle.cont} text="Submit" buttonwidth={135} buttonheight={35} onPress={()=>{
   setSearchText(`${sliderValue} min wait`)
 }}></Button> 
 </Link>
 </View>
 {/* </Link> */}


 <ScrollView>
 <View style={Comment.space}>
   <Text style={TextStyle.report}>Comments</Text>
   <InputIconBar style={TextStyle.input} text="Add a Comment..." width="331" image={sendIconPNG.src}/>
  <View style={Comment.message}>
    <Message title="Long Wait Time" messageBody="This restaurant currently has 30minutes of wait time, not 10minute." timestamp="1m" username="BogaXD12"/>
    <Message title="Amazing Place" messageBody="Of course one expects really fresh sushi in Vancouver.  Restaurant sushi is not only fresh but well portioned and presented." timestamp="32m" username="Antony" />
    <Message title="Very busy" messageBody="Been waiting for a table for an hour." timestamp="58m" username="farhazzz"/>
    <Message title="Huge line up" messageBody="Very busy right now, huge line up here right now." timestamp="2h" username="farhazzz"/>

   </View>
 </View>
 </ScrollView>


<View style={Nav.cont}>
<Navigator></Navigator>
</View>
  </View>
  </ScrollView>
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
    bottom:0
  }
})

const Comment = StyleSheet.create({
  space:{
    height:"100%",
    width:"100%",
    top:10
  },
  
  message:{
    height:"100%",
    width:"100%",
    display:'flex',
    justifyContent:"space-around",
  }
})

const ButtonStyle = StyleSheet.create({
  cont:{
  position:"relative",
  flex:1,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  bottom:25
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
    fontSize:22,
  },

  min:{
    fontSize:16,
    top:50
  },

  input:{
    top:50
  }
})

const SliderStyle = StyleSheet.create({
  cont:{
    position:"relative",
    width:"80%",
    top:10
  },
  slider:{
    width:"50%"
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
    top:101  
  }
})

export default SearchTitlePage;
//export {default} from './storybook';