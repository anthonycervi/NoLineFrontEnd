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
  useState,
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

import React from 'react';
import { NativeRouter, Route, Link, useHistory } from "react-router-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


import { firestore } from './database/firebase';
import { auth } from "./database/firebase";
import { getRestaurantsAroundUser, searchLocation } from './mapAPI/apiConnect';
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
import startScreen from './pages/startScreen';
import SearchResult from './comps/SearchResult';
import AppProvider from './context/provider'
//Adrian Testing backend functions
 //test Add User
  // useEffect( ()=> {
  //   console.log("app loading");
  //   const newUser = addUser(user);
  //   console.log(newUser);
  // }, []);

  //test user with UID
  // useEffect(() => {
  //   (async()=>{
  //     const oldUser = await getUserWithUid("bM9KctEvqZMIvq4j0RC9hCduQEx1");
  //     setUser(oldUser);
  //     console.log(oldUser);
  //   })()
  // }, [setUser]);

  // test login
  //   useEffect(() => {
  //   (async()=>{
  //     const oldUser = await login("test123@gmail.com", "test123");
  //     setUser(oldUser);
  //     // console.log(oldUser);
  //     console.log("hi")
  //   })()
  // }, [setUser]);

  //test create review
  // useEffect(()=>{
  // (async ()=>{
  //   await login("test123@gmail.com", "test123");
  //   const add  = await addReview("ChIJq2tI6HtxhlQRBaKUv59cS9E","it is bad really bad");
  // })()
  // },[])

  //test get review
  // useEffect(()=>{
  //   (async ()=>{
  //       const reviews = await getReviewsByRestaurant("ChIJq2tI6HtxhlQRBaKUv59cS9E");
  //       console.log(reviews[0]);
  //     })()
  // }, [])
  

  //test create comment
  // useEffect(()=>{
  // (async ()=>{
  //   await login("test123@gmail.com", "test123");
  //   const add = await addComment("ChIJq2tI6HtxhlQRBaKUv59cS9E","wait time is good");
  //   console.log(add);
  // })()
  // }, [])
  
  //test get comment
  //   useEffect(()=>{
  //   (async ()=>{
  //       const comments = await getCommentsByRestaurant("ChIJq2tI6HtxhlQRBaKUv59cS9E");
  //       console.log(comments[0]);
  //     })()
  // }, [])

  //test addWaitTimme
  // useEffect(()=>{
  // (async ()=>{
  //   await login("test123@gmail.com", "test123");
  //   const add = await addWaitTime("ChIJq2tI6HtxhlQRBaKUv59cS9E", 5);
  //   console.log(add);
  // })()
  // }, [])
  
  //test get waittime
  //   useEffect(()=>{
  //   (async ()=>{
  //       const waittime = await getWaitTime("ChIJq2tI6HtxhlQRBaKUv59cS9E");
  //       console.log(waittime[0]);
  //     })()
  // }, [])

  //test add points
  // useEffect(() => {
  //   (async () => {
  //     await login("test123@gmail.com", "test123");
  //     const add = await addPoints(600);
  //     console.log(add);
  //   })()
  // }, [])

  //test get sum of points based on user
  // useEffect(() => {
  //   (async () => {
  //     await login("test123@gmail.com", "test123");
  //     const add = await getAllPoints();
  //     console.log(add);
  //   })()
  // }, [])


  //test get all restaurant by wait time
  // useEffect(() => {
  //   (async () => {
  //     await login("test123@gmail.com", "test123");
  //     const results = await getAllRestaurantByWaitTime();
  //     console.log(results)
  //   })()
  // }, [])

const App = () => {
  return <AppProvider><NativeRouter><View style={styles.cont}>
    <Route exact path="/" component={startScreen} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/signin" component={SignInPage} />
    <Route exact path="/signupbutton" component={SearchResultPage} />
    <Route exact path="/signinbutton" component={SearchResultPage} />
    <Route exact path="/searchicon" component={SearchResultPage} />
    <Route exact path="/map1" component={Map1Page} />
    <Route exact path="/profilenav" component={ProfilePage} />

    <Route path="/restauranttitle/:id" component={SearchTitlePage} />

    <Route exact path="/profileawards" component={ProfileAwardsPage} />
    <Route exact path="/editprofile" component={EditProfPage} />
    <Route exact path="/profilebio" component={ProfileBioPage} />
    <Route exact path="/filterpage" component={SearchFiltersPage} />
    <Route path="/savechanges/:keyword" component={SearchResultPage} />

    {/* <Route exact path="/submitting" component={SignInPage}/> */}


  </View>
  </NativeRouter>
  </AppProvider>
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
  }
})

const MapContainer = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    position: "relative",
    flex: 1
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  },
})


const SearchContainer = StyleSheet.create({
  cont: {
    position: "relative",

  }
})

export default App;
//export {default} from './storybook';