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
import {Link, useHistory} from "react-router-native";
import SearchBar from '../comps/SearchBar';
import Button from '../comps/Button';
import SearchResult from '../comps/SearchResult'
import Navigator from '../comps/Navigator'
import Filter from '../comps/Filter';
import searchIconPNG from '../public/searchIcon.png';
import styled, {css} from 'styled-components/native';


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
  getDistanceFromLatLonInKm,
  deg2rad,
} from '../database/functions';

import {
  getRestaurantsAroundUser,
  searchLocation
} from '../mapAPI/apiConnect';

import {
  setFullname
} from './signUp'

const SearchResultPage = () => {
  //grab name, icon, user_rating_total, rating under getRestaurantsAroundUser function
  //grab formatted_address under searchLocation
  //photo_reference??

  const [restaurant, setRestaurant] = useState([])
  const [coordinates, setCoordinates] = useState([])
  const [count, setCount] = React.useState(0);
  const [fullname, setFullname] = useState("");

  //create input state for places so its not hardcoded and then use state on the function variable.

  
  const getAllRestaurantsDetails = async() => {
    try {
      setRestaurant(await getAllRestaurants("sushi"));
    } catch (err) {
      console.log(err);
    }
  }
  // const getDistance = async () => {
  //   try {
  //     lat1 = "49.27966";
  //     lon1 = "-123.11993";
  //     restaurant.map(item => {
  //       const container = {};
  //       container[item.geometry];
  //       console.log(container); 
  //     } );
  //     // setCoordinates(await getgetDistanceFromLatLonInKm(lat1, lon1, lat2, lon2));
  //   } catch (err) {
  //      console.log(err);
  //   }
  // } 
  useEffect(() => {
    getAllRestaurantsDetails();
    console.log('Run useeffect');
    setCount(100);
    }, []);

  return <View style={PageContainer.cont}>
            <View style={SearchInput.cont}>
              <SearchBar text=" Search" style={SearchBarInput.cont}/>
              <TouchableOpacity style={SearchButton.cont}></TouchableOpacity>
            </View>
            <View style={BothButtonStyles.cont}>

                <View style={ButtonStyles.cont}>
                   
                </View>
              
                <View style={ButtonStyles.cont}>
               
                </View>
                <View style={FilterStyles.cont}>
                  <Filter/>
                </View>
            </View>
            <ScrollView>
        {
          restaurant.map(item => <SearchResult key={item.waitTime} name={item.name} IImage={item.photos} revnum={"(" + item.user_ratings_total + " reviews)"} stars={item.rating + "/5"} textWait={(item.waitTime) + " min"}></SearchResult>)
        }
     </ScrollView>
     <View style={Nav.nav}>
       
       </View> 
       
      
      <View style={Nav.nav}>
       
      <Navigator ></Navigator>
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
  marginBottom: 15,
  
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
    
    
  }
})

const ButtonStyles = StyleSheet.create({
  cont:{
  marginRight:10,
  backgroundColor:'#00000000',

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
  flex: 1,

  }
})

export default SearchResultPage;