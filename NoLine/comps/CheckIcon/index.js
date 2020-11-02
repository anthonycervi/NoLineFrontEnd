import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from 'react-native';

const IconContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBorder = styled.View`
display: flex;
justify-content: center;
align-items: center;
background-color: #ffd25b;
border-radius: 50px;
width: 22px;
height: 22px;
box-shadow: 1px 4px 4px #888888;
`;

const IconImg = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 9px;
height: 9px;
`;

const CheckIcon = () => {
    return (
        <View>
        <IconContainer>
            <IconBorder>
            <IconImg img src="Check.svg"/>
            </IconBorder>
        </IconContainer>
        </View>
    );
};

export default CheckIcon;
