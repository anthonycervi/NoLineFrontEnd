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
} from '../database/functions';

import {
  getRestaurantsAroundUser,
  searchLocation
} from '../mapAPI/apiConnect';



// const HandleGetAllRecipes = async (keyword,name)=>{ //keyword is passed back out
//   console.log("clicked", keyword);
//  var resp = await axios.post("https://noline-293103.firebaseio.com",{
//  });
//  console.log(resp.data);
//  setRecipes([...resp.data]);
// }


// const HandleGetAllRecipes = async (keyword,name)=>{ //keyword is passed back out
//   console.log("clicked", keyword);
//  var resp = await axios.post("https://mdia25262020.herokuapp.com/allrecipes",{
//    token:"secrettoken",
//    keyword:keyword,
//    name:name
//  });
//  console.log(resp.data);
//  setRecipes([...resp.data]);


// {

//   recipes.map((o,i)=>{
//     console.log("inside the array...", o,i);
//     return <Card
//       key={i}
//       name={o.name}
//       description={o.description}
//       image={o.image}
//       forked={o.forked}
//   notes={o.notes}
//   tag={o.tag}
//     />
  
//   })
// }

const SearchResultPage = () => {
  //grab name, icon, user_rating_total, rating under getRestaurantsAroundUser function
  //grab formatted_address under searchLocation
  //photo_reference??

  const [backend, setBackend] = useState([]);
  const [name, setName] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [ratingtotal, setRatingTotal] = useState([]);
  const [restaurantRating, setRestaurantRating] = useState([]);

  //Need to consolidate
  
  const apiKey = "AIzaSyClUvR3dTnBzmjHKPFEwqCLY9IIY_xaUZY"; 
  const place = "sushi";
  
  const getAllRestaurantDetails = async () => {
    try {
      getAllRestaurantsphotos();
      getAllRestaurantsUserRatingTotal();
      getAllRestaurantsNames();
    } catch (err) {
      console.log(err);
    }
  }
    
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
    } catch (err) {
      console.log(err);
    }
  }
  const getAllRatings = async () => {
    try {
      const res = await searchLocation(place, apiKey);
      const restaurantRatingArr = [];
      res.forEach(rating => {
        restaurantRatingArr.push(rating.rating);
      })
      setRestaurantRating(restaurantRatingArr);
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
  
  return <View >
            <View style={SearchInput.cont}>
            <InputIconBar text="Search" image={searchIconPNG}/>
        </View>
        <Button text="Get All Recipes" onPress={getAllRestaurantDetails} />
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


     <SearchResult  name={name[0]} IImage={photo[0]} revnum={ratingtotal[0]}></SearchResult>
     <SearchResult  name={name[1]} IImage={photo[1]} revnum={ratingtotal[1]}></SearchResult>
     <SearchResult  name={name[2]} IImage={photo[2]} revnum={ratingtotal[2]}></SearchResult>
     <SearchResult  name={name[3]} IImage={photo[3]} revnum={ratingtotal[3]}></SearchResult>

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
    top:12,
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
//export {default} from './storybook';