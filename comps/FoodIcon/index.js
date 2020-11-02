import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from 'react-native';

const IconContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconImg = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
`;

const TextContainer = styled.View`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodIcon = ({ image, text }) => {
    return (
        <View>
            <IconContainer>
                <IconImg img src={image} />
                <TextContainer>
                    {text}
                </TextContainer>
            </IconContainer>
        </View>
    );
};

FoodIcon.defaultProps = {
    text: "American",
    image: "/American.svg",
};

export default FoodIcon;
