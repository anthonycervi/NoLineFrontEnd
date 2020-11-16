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

import {NativeRouter, Route, Link} from "react-router-native";

import InputIconBar from './comps/InputIconBar';
import Button from './comps/Button';
import SearchResult from './comps/SearchResult';
import Navigator from './comps/Navigator';
import SearchTitlePage from './pages/SearchTitle';
import SearchResultPage from './pages/SearchResults';
import Page from './pages/SearchResults';

const App = () =>{
  return <NativeRouter><View style={styles.cont}>
    <Link to ="/searchresults">
    <Text>Go Home</Text>
    </Link>
    <Route exact path="/searchresults" component={Page}/>

  </View>
  </NativeRouter>
}

const styles = StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:"center",
  }
  })

export default App;
//export {default} from './storybook';