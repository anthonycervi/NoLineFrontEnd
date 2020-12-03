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
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Link, useHistory, useParams} from "react-router-native";
import SearchBar from '../comps/SearchBar';
import Button from '../comps/Button';
import SearchResult from '../comps/SearchResult'
import Navigator from '../comps/Navigator'
import Filter from '../comps/Filter';
import searchIconPNG from '../public/searchIcon.png';
import styled, {css} from 'styled-components/native';
import CheckedSearch from '../public/Search_Checked.png';


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
  getAllRestaurants,
  getAllPhotos, 
  getRestaurant
} from '../database/functions';

import {
  getRestaurantsAroundUser,
  searchLocation
} from '../mapAPI/apiConnect';

import {
  setFullname
} from './signUp'

import {
  RestaurantDetail
} from '../pages/SearchTitle'

const SearchResultPage = () => {
  //grab name, icon, user_rating_total, rating under getRestaurantsAroundUser function
  //grab formatted_address under searchLocation
  //photo_reference??
  const {keyword} = useParams();
  const [restaurant, setRestaurant] = useState([])
  const [coordinates, setCoordinates] = useState([])
  const [count, setCount] = React.useState(0);
  const [fullname, setFullname] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  //create input state for places so its not hardcoded and then use state on the function variable.

  
  const getAllRestaurantsDetails = async() => {
    try {
      // const details = await getAllRestaurants(keyword || "sushi");
      // console.log(details.result.geometry.location.lat);
      setRestaurant(await getAllRestaurants(keyword || "sushi", lat, long));
    } catch (err) {
      console.log(err);
    }
  }

  
  
  useEffect(() => {
    getAllRestaurantsDetails();
    // console.log('Run useeffect');
    setCount(100);
    }, []);

  return <View style={PageContainer.cont}>
            <View style={SearchInput.cont}>
              <SearchBar text=" Search" style={SearchBarInput.cont}/>
              <TouchableOpacity style={SearchButton.cont}></TouchableOpacity>
            </View>
            <View style={BothButtonStyles.cont}>

                {/* <View style={ButtonStyles.cont}>
                   
                </View>
              
                <View style={ButtonStyles.cont}>
               
                </View> */}
                <View style={FilterStyles.cont}>
                  <Filter/>
                </View>
            </View>
            <View style={ScrollContainer.cont}>
            <ScrollView>
        {
          restaurant.map((item,i) => {
            
            const lat1 = 49.205440;
            const lon1 = -122.944100;
            const lon2 = item.geometry.location.lng;
            const lat2 = item.geometry.location.lat;
            
          function distance() {
            var p = 0.017453292519943295;    // Math.PI / 180
            var c = Math.cos;
            var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                    c(lat1 * p) * c(lat2 * p) * 
                    (1 - c((lon2 - lon1) * p))/2;
          
            return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
          }

          const distanceValue = distance()
          const roundDistanceValue = Math.round(distanceValue * 10) / 10
            return <SearchResult key={i} id={item.place_id} name={item.name} IImage={item.photos} revnum={"(" + item.user_ratings_total + " reviews)"} stars={item.rating + "/5"} textWait={(item.waitTime) + " min"}textDistance={roundDistanceValue + " km"}></SearchResult>
          })
        }
     </ScrollView>
     </View>
     <View style={Nav.nav}>
       
       </View> 
       
      
      <View style={Nav.nav}>
       
      <Navigator image1={CheckedSearch}></Navigator>
       </View>
      
     </View>
}

const PageContainer = StyleSheet.create({
  cont:{
    justifyContent: "center",
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    flexDirection:"column",
    // flex: 1,
    // width: "100%",
    // height: "100%",
  }
})


const SearchInput = StyleSheet.create({
  cont:{
  // flex:1,
  flexDirection: "row",
  width:"90%",
  // backgroundColor: "pink",
  overflow: "hidden",
  // marginBottom: 15,
  position: "absolute",
  top: -80,
  
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
    alignItems:"flex-end",
    // flex: 1,
  }
})

const TopContentContainer = StyleSheet.create({
  cont:{
  // justifyContent:"center",
  height:135,
  backgroundColor:'#00000000',
  }
})

const Nav = StyleSheet.create({
  nav:{
    position: "absolute",
    bottom: -106,
    
  }
})

const ButtonStyles = StyleSheet.create({
  cont:{
  marginRight:10,
  backgroundColor:'#00000000',

  }
})

const ScrollContainer = StyleSheet.create({
  cont:{
  // marginRight:10,
  backgroundColor:'#00000000',
  width:"100%",
  height:530,
  bottom: -20,
  position: "relative",

  }
})


const BothButtonStyles = StyleSheet.create({
  cont:{
    flexDirection:"row",
    justifyContent: "center",
    display:"flex",
    alignContent:"center",
    alignItems:"center",
    // backgroundColor:'#00000000',
    // backgroundColor: 'blue',
    // flex:1,
    width:"90%",


  },

})

const FilterStyles = StyleSheet.create({
  cont:{
  // backgroundColor:"red",
  // width:10,
  // height:"100%",
  justifyContent: "center",
  display:"flex",
  alignContent:"center",
  alignItems:"flex-end",
  flexDirection:"column",
  position:"absolute",
  flex: 1,
  top: -15,
  right:2,

  }
})

export default SearchResultPage;