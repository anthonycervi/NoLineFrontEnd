import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';
import '../../public/Search.svg';
import '../../public/LocationPin.svg';
import '../../public/Profile.svg';

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
        <Magnifier>
            {/* <Image source={require('../../public/Search.svg')}/> */}
        </Magnifier>
        <Location>
            {/* <Image source={require('../../public/LocationPin.svg')}/> */}
        </Location>
        <User>
            {/* <Image source={require('../../public/Profile.svg')}/> */}
        </User>
      </NavContainer>
    </View>
  );
};

export default Navigator;
