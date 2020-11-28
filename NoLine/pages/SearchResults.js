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
} from 'react-native';
import axios from 'axios';
import {Link, useHistory} from "react-router-native";
import InputIconBar from '../comps/InputIconBar';
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
} from '../database/functions';

import {
  getRestaurantsAroundUser,
  searchLocation
} from '../mapAPI/apiConnect';

const SearchResultPage = () => {
  //grab name, icon, user_rating_total, rating under getRestaurantsAroundUser function
  //grab formatted_address under searchLocation
  //photo_reference??

  const [restaurant, setRestaurant] = useState([])
  //create input state for places so its not hardcoded and then use state on the function variable.
  
  const getAllRestaurantsDetails = async() => {
    try {
      setRestaurant(await getAllRestaurants("sushi"));
    } catch (err) {
      console.log(err);
    }
  }
  
  return <View >
    <ScrollView>
            <View style={SearchInput.cont}>
            <InputIconBar text="Search" image={searchIconPNG}/>
        </View>
        <Button text="Get All Recipes" onPress={getAllRestaurantsDetails} />
            <View style={BothButtonStyles.cont}>

                <View style={ButtonStyles.cont}>
                    <Link to ="/">
                    <Button text="Wait Time" buttonborder={"3px solid #FFD25B"} buttonwidth={100} buttonheight={32}></Button> 
                    </Link>
                </View>
              
                <View style={ButtonStyles.cont}>
                    <Button text="Distance" buttonbgcolor="white" buttonborder buttoncolor="#FFD25B" buttonwidth={100} buttonheight={32} ></Button> 
                </View>
                <Filter/>
            </View>
        {
          restaurant.map(item => <SearchResult key={item.name} name={item.name} IImage={item.photo} revnum={item.user_ratings_total}></SearchResult> )
        }
     
     <View style={Nav.nav}>
       
       </View> 
       </ScrollView>
      
      <View style={Nav.nav}>
      <Navigator></Navigator>
       </View>
      
     </View>
}



const SearchInput = StyleSheet.create({
  cont:{
    flex:1,
  justifyContent:"center",
  left:20,
  width: 350,
  backgroundColor:'#00000000',
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
    flexDirection:"row",
  margin:10,
  backgroundColor:'#00000000',

  }
})

const BothButtonStyles = StyleSheet.create({
  cont:{
    flexDirection:"row",
    backgroundColor:'#00000000',

  },
})

export default SearchResultPage;