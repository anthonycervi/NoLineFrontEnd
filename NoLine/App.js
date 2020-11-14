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
import SearchResult from './comps/SearchResult';

import SearchResultPage from './pages/SearchResults'

const App = () =>{
  return <View style={styles.cont}>
 <SearchResultPage></SearchResultPage>
  </View>
}

const styles = StyleSheet.create({
cont:{
  flex:1,
  justifyContent:"center",
}
})


export default App;
//export {default} from './storybook';