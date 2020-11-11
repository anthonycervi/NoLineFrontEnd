import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';

import Search from '../../public/Profile.png'

const NavContainer = styled.View`
  height: 87px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0.5px solid black;
  padding-bottom: 30px;
`;

const Magnifier = styled.View`
width:50px;
height:50px;
`;

const Location = styled.View`
width:50px;
height:50px;`;

const User = styled.View`
width:50px;
height:50px;`;

const Navigator = () => {
  return (
    <View>
      <NavContainer>
        <Magnifier src="/Search.svg" />
        <Location src="/LocationPin.svg" />
        <User src="/Profile.png" />
      </NavContainer>
    </View>
  );
};

export default Navigator;
