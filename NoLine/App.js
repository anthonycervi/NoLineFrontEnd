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

const SearchResultPage = () =>{
  return <View style={styles.cont}>
    <View style={SearchInput.cont}>
<InputIconBar></InputIconBar>
</View>
<View style={ButtonStyles.cont}>
      <Button text="Wait Time" buttonborder={"3px solid #FFD25B"} buttonwidth={100} buttonheight={32}></Button> 
      <Button text="Distance" buttonbgcolor="white" buttonborder buttonwidth={100} buttonheight={32} ></Button> 
      </View>
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
  left:20
  }
})

const SearchResultStyle = StyleSheet.create({

})

const ButtonStyles = StyleSheet.create({
  cont:{
    flexDirection:"row",
  margin:10
  }
})

export default SearchResultPage;
//export {default} from './storybook';