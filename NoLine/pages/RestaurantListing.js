/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from '../comps/Button';
import SearchResult from '../comps/SearchResult';
import Filter from '../comps/Filter';
import SearchTitle from '../comps/SearchTitle'
 //SEARCH COMPS
//2 MAJOR COMPONENTS ON THIS PAGE IS IN THE BACKEND: MAP + COMMENT COMPONENT
const RestaurantListing = () =>{
  return <View>
    < SearchTitle/>
    <Map></Map>
    <REPORTWAITCOMP></REPORTWAITCOMP>
    <COMMENT></COMMENT>
  </View>
}

export default RestaurantListing;
//export {default} from './storybook'; 