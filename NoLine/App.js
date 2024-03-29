/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

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
} from './database/functions';

import React, { useState } from 'react';
import {NativeRouter, Route, Link} from "react-router-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


import { firestore } from './database/firebase';
import { auth } from "./database/firebase";
import { getRestaurantsAroundUser, searchLocation } from './mapAPI/apiConnect';
// import Button from './comps/Button';
// import SearchResult from './comps/SearchResult';
// import Navigator from './comps/Navigator';
import SearchTitlePage from './pages/SearchTitle';
import SearchResultPage from './pages/SearchResults';
// import Page from './pages/SearchResults';
import StartScreen from './pages/startScreen'
import SignUpPage from './pages/signUp'
import SignInPage from './pages/signIn'
import Map1Page from './pages/map1'
import ProfilePage from './pages/ProfileBio'
import SearchFiltersPage from './pages/searchFilters'
import ProfileAwardsPage from './pages/ProfileAwards'
import EditProfPage from './pages/EditProf'
import ProfileBioPage from './pages/ProfileBio'



const App = () =>{
  return <NativeRouter><View style={styles.cont}>
  <Route exact path="/" component={StartScreen} />
  <Route exact path="/signup" component={SignUpPage}/>
  <Route exact path="/signin" component={SignInPage}/>
  <Route exact path="/signupbutton" component={SearchResultPage}/>
  <Route exact path="/signinbutton" component={SearchResultPage}/>
  <Route exact path="/searchicon" component={SearchResultPage}/>
  <Route exact path="/map1" component={Map1Page}/>
  <Route exact path="/profilenav" component={ProfilePage}/>
  <Route exact path="/restauranttitle" component={SearchTitlePage}/>
  <Route exact path="/profileawards" component={ProfileAwardsPage}/>
  <Route exact path="/editprofile" component={EditProfPage}/>
  <Route exact path="/profilebio" component={ProfileBioPage}/>
  <Route exact path="/filterpage" component={SearchFiltersPage}/>

  {/* <Route exact path="/submitting" component={SignInPage}/> */}


  </View>
  </NativeRouter>
}

const styles = StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:"center",
  }
  })

  const MapContainer = StyleSheet.create({
    container: {
      //...StyleSheet.absoluteFillObject,
      height: 700,
      width: 400,
      position:"relative",
      flex:1
    },
    map: {
      flex: 1,
        ...StyleSheet.absoluteFillObject
    },
  })
  
  
  const SearchContainer = StyleSheet.create({
      cont:{
        position: "relative",
       
      }
      })

export default App;
//export {default} from './storybook';