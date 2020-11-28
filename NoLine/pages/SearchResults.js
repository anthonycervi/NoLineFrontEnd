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
      console.log(getAllRestaurants);
    } catch (err) {
      console.log(err);
    }
  }
    
  // return <View>
  //   <ScrollView>
  //           <View style={SearchInput.cont}>
  //           <InputIconBar text="Search" image={searchIconPNG}/>
  //       </View>
        
const getAllRestaurantsNames = async () => {
  try {
    const res = await searchLocation(place, apiKey);
    const restaurantNameArr = [];
    res.forEach(data => {
      restaurantNameArr.push(data.name);
    });
    console.log(restaurantNameArr)
    setName(restaurantNameArr)
  } catch (err) {
    console.log(err);
  }
  }
  
  //need to work on this
  const getAllRestaurantsphotos = async () => {
    try {
      const res = await searchLocation(place, apiKey);
      const arr = []
      res.forEach(photos => {
        const PhotoRef = ((photos.photos[0].photo_reference));
        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${PhotoRef}&key=${apiKey}`;
        arr.push(url);
        setPhoto(arr);
      });
      console.log(arr);
    } catch (err) {
      console.log(err);
    }
    }

    // const getAllRestaurantsRating = async () => {
    //   try {
    //     const res = await searchLocation(place, apiKey);
    //     const arr = []
    //     res.forEach(rating => {
    //       const userRating = (rating.rating);
    //     });
    //     arr.push(userRating);

    //   } catch (err) {
    //     console.log(err);
    //   }
    //   }
     
      const getAllRestaurantsUserRatingTotal = async () => {
        try {
          const res = await searchLocation(place, apiKey);
          const userRatingArr = []
          res.forEach(user_ratings_total => {
            userRatingArr.push(user_ratings_total.user_ratings_total);
          });
          setRatingTotal(userRatingArr);
          console.log(userRatingArr);
        } catch (err) {
          console.log(err);
        }
        }
     
        const getAllRestaurantsFormattedAddress = async () => {
          try {
            const res = await searchLocation(place, apiKey);
            res.forEach(formatted_address => {
              console.log(formatted_address.formatted_address);
            });
          } catch (err) {
            console.log(err);
          }
          }
    
  return <View style={PageContainer.cont}>
            <View style={SearchInput.cont}>
              <SearchBar text=" Search" style={SearchBarInput.cont}/>
              <TouchableOpacity style={SearchButton.cont}></TouchableOpacity>
            </View>
        {/* <Button text="Get All Recipes" onPress={getAllRestaurantDetails} /> */}
            <View style={BothButtonStyles.cont}>

                <View style={ButtonStyles.cont}>
                    <Link to ="/">
                    <Button text="Wait Time" buttonborder={"3px solid #FFD25B"} buttonwidth={100} buttonheight={32}></Button> 
                    </Link>
                </View>
              
                <View style={ButtonStyles.cont}>
                    <Button text="Distance" buttonbgcolor="white" buttonborder buttoncolor="#FFD25B" buttonwidth={100} buttonheight={32} ></Button> 
                </View>
                <View style={FilterStyles.cont}>
                  <Filter/>
                </View>
            </View>
            <ScrollView>
        {
          restaurant.map(item => <SearchResult key={item.name} name={item.name} IImage={item.photos} revnum={item.user_ratings_total}></SearchResult> )
        }
     </ScrollView>
     <View style={Nav.nav}>
       
       </View> 
       
      
      <View style={Nav.nav}>
      <Navigator onPress={getAllRestaurantsDetails}></Navigator>
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