import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from 'react-native';

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
        <User src="/Profile.svg" />
      </NavContainer>
    </View>
  );
};

export default Navigator;
