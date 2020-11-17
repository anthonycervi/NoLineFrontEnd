import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';
import '../../public/Search.png';
import '../../public/LocationPin.png';
import '../../public/Profile.png';
import {NativeRouter, Route, Link} from "react-router-native";

const NavContainer = styled.View`
  height: 87px;
  width:99%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction:row;
  border: 0.5px solid black;
  padding-bottom: 30px;
`;

const Magnifier = styled.View`
width:60px;
height:60px;
background-color:#FAD;
`;

const Location = styled.View`
width:60px;
height:60px;
background-color:#FAD;
`;

const User = styled.View`
width:60px;
height:60px;
background-color:#FAD;
`;

const Navigator = () => {
  return (
    <View>
      <NavContainer>
<Link to="/searchicon">
        <Magnifier>
           <Image source={require('../../public/Search.png')}/> 
        </Magnifier>
        </Link>
        <Link to="/map1">
        <Location>
        <Image source={require('../../public/LocationPin.png')}/> 
        </Location>
        </Link>
        <Link to="/profilenav">
        <User>
        <Image source={require('../../public/Profile.png')}/> 
        </User>
        </Link>
      </NavContainer>
    </View>
  );
};

export default Navigator;
