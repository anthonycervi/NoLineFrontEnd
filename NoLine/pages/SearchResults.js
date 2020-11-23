/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import {Link} from "react-router-native";
import InputIconBar from '../comps/InputIconBar';
import Button from '../comps/Button';
import SearchResult from '../comps/SearchResult'
import Navigator from '../comps/Navigator'
import Filter from '../comps/Filter'


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




// const [backend, setBackend] = useState([])
// const [resttitle, setRestTitle] = useState([])
// const [imgsrc, setImg] = useState([])
// const [reviewnum, setReviewNum] = useState([])
// const [username, setUsername] = useState([])
// const [waittime, setWaittime] = useState([])
// const [timeago, setTimeAgo] = useState([])

// const HandleGetAllRecipes = async (keyword,name)=>{ //keyword is passed back out
//   console.log("clicked", keyword);
//  var resp = await axios.post("https://noline-293103.firebaseio.com",{
//  });
//  console.log(resp.data);
//  setRecipes([...resp.data]);

// }

// const HandleGetSearchResult = async ()=> {
//   console.log("Pulled from Database");
//   var resp = await axios.get("https://noline-293103.firebaseio.com", {
//   });
//   console.log(resp.data);
//   setBackend([...resp.data]);
// }


const SearchResultPage = () =>{
  return <View style={styles.cont}>
 {/* //<Button text="Get All Recipes" onClick={HandleGetSearchResult()} /> */}
            <View style={SearchInput.cont}>
            <InputIconBar text="Search" image="searchIconPNG.src"/>
            </View>

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

      <SearchResult></SearchResult>
      <SearchResult></SearchResult>
      <SearchResult></SearchResult>
      <SearchResult></SearchResult>
      
      
     

      
        
        
      <Navigator></Navigator>
  </View>
}

const styles = StyleSheet.create({
cont:{
  flex:1,
  justifyContent:"center",
}
})

const SearchInput = StyleSheet.create({
  cont:{
    flex:1,
  justifyContent:"center",
  left:20,
  width: 350,
  }
})

const SearchResultStyle = StyleSheet.create({

})

const ButtonStyles = StyleSheet.create({
  cont:{
    flexDirection:"row",
  margin:10,

  }
})

const BothButtonStyles = StyleSheet.create({
  cont:{
    flexDirection:"row",


  }
})

export default SearchResultPage;
//export {default} from './storybook';