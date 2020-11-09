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

//import Page from './pages/searchFilters';
import Page from './pages/reviews';

const App = () =>{
  return <View>
    <Page />
  </View>
}

// const styles = StyleSheet.create({
//   cont:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   }
// })

export default App;
//export {default} from './storybook';