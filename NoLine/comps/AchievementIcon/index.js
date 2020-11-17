import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';

import Hand from '../../public/hand.png';
import Facebook from '../../public/facebook.png';
import Review from '../../public/review.png';
import Time from '../../public/time.png';

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

const HandPNG = {
    src: Hand
  }
  
  const FacebookPNG = {
    src: Facebook
  }
  
  const ReviewPNG = {
    src: Review
  }

  const TimePNG = {
    src: Time
  }

  const AchievementImage = styled.Image`
    width: 40px;
    height: 40px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
`;

const AchievementIcon = ({ image, text, text2 }) => {
    return (
        <View>
        <IconContainer>
            <Icon>
                <AchievementImage source={ReviewPNG.src}/>
            </Icon>
            
            <TextContainer>
                <Text>{text}</Text>
            </TextContainer>
            <TextContainer2>
                <Text>{text2}</Text>
            </TextContainer2>
        </IconContainer>
        </View>
    );
};

AchievementIcon.defaultProps = {
    text: "Write a review",
    text2: "+300",
    image: "/review.png",
};

export default AchievementIcon;
