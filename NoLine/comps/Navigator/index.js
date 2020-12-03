import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Search from '../../public/Search.png';
import LocationPin from '../../public/LocationPin.png';
import Profile from '../../public/Profile.png';

import CheckedSearch from '../../public/Search_Checked_New.png';
import CheckedLocationPin from '../../public/LocationPin_Checked.png';
import CheckedProfile from '../../public/Profile_Checked_New.png';

import {NativeRouter, Route, Link, useHistory} from "react-router-native";

const NavContainer = styled.View`
  height: 87px;
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction:row;
  background-color:#00000000;
  padding-bottom: 13px;
`;


const SearchPNG = {
  src: Search
}

const LocationPNG = {
  src: LocationPin
}

const UserPNG = {
  src: Profile
}

const NavImage = styled.Image`
    width: 40px;
    height: 40px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
`;

const CheckedSearchPNG={
  src:CheckedSearch
}

const CheckedLocationPinPNG={
  src:CheckedLocationPin
}
const CheckedProfilePNG={
  src:CheckedProfile
}


const Navigator = ({image1, image2, image3}) => {

const [image, setImg] = useState(null);

const history = useHistory();
  return (
    <View>
      <NavContainer>


      <TouchableOpacity  
        onPress={() => {
            history.push("/searchicon")
          }}>  
           <NavImage source={image1}/> 
        </TouchableOpacity>


        <TouchableOpacity 
        onPress={() => {
            history.push("/map1")
          }}>
          <NavImage source={image2}/> 
          </TouchableOpacity>


          <TouchableOpacity  
        onPress={() => {
            history.push("/profilenav")
          }}>
          <NavImage source={image3}/> 
          </TouchableOpacity>


      </NavContainer>
    </View>
  );
};

Navigator.defaultProps = {
  image1: SearchPNG.src,
  image2: LocationPNG.src,
  image3: UserPNG.src,
}

export default Navigator;
