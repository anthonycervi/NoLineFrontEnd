import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';

import Search from '../../public/Search.png';
import LocationPin from '../../public/LocationPin.png';
import Profile from '../../public/Profile.png';

import CheckedSearch from '../../public/Search_Checked.png';
import CheckedLocationPin from '../../public/LocationPin_Checked.png';
import CheckedProfile from '../../public/Profile_Checked.png';


import {NativeRouter, Route, Link} from "react-router-native";

const NavContainer = styled.View`
  height: 87px;
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction:row;
 
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

const Navigator = () => {

const [image, setImg] = useState(null);


  return (
    <View>
      <NavContainer>
        <Link to="/searchicon">
           <NavImage onPress={()=>{setImg(image.CheckedSearch);}} source={SearchPNG.src}/> 
        </Link>
        <Link to="/map1">
          <NavImage source={LocationPNG.src}/> 
        </Link>
        <Link to="/profilenav">
          <NavImage source={UserPNG.src}/> 
        </Link>
      </NavContainer>
    </View>
  );
};

export default Navigator;
