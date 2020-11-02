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

const Icon = styled.View`
display: flex;
align-items: center;
justify-content: center;
border: solid #ffd25b 2px;
border-radius: 50px;
width: 77px;
height: 77px;
`;

const IconImg = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
`;

const TextContainer = styled.View`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer2 = styled.View`
  font-size: 12px;
  color: #cbcbcb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AchievementIcon = ({ image, text, text2 }) => {
    return (
        <View>
        <IconContainer>
            <Icon>
                <IconImg img src={image} />
            </Icon>
            <TextContainer>
                {text}
            </TextContainer>
            <TextContainer2>
                {text2}
            </TextContainer2>
        </IconContainer>
        </View>
    );
};

AchievementIcon.defaultProps = {
    text: "Write a review",
    text2: "+300",
    image: "/review.svg",
};

export default AchievementIcon;
