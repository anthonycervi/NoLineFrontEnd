/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MapOverlay from '../comps/MapOverlay';
import InputIconBar from '../comps/InputIconBar';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Map2 = () =>{
  return <View>
    <InputIconBar />
    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={MapContainer.map}
       region={{
        latitude: 49.27966,
        longitude: -123.11993,
        latitudeDelta: 0.055,
        longitudeDelta: 0.055,
       }}
     >
     </MapView>
      <MapOverlay />
  </View> 
}

const MapContainer = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default Map2;
//export {default} from './storybook';

