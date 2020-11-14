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

import InputIconBar from './comps/InputIconBar';
import Button from './comps/Button';
import SearchResult from './comps/SearchResult'
import Navigator from './comps/Navigator'

const App = () =>{
  return <View style={styles.cont}>
<InputIconBar></InputIconBar>
      <Button></Button> 
      <Button></Button> 
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

const SearchResultStyle = StyleSheet.create({

})

export default App;
//export {default} from './storybook';