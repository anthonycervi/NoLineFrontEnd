import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';

import Hand from '../../public/hand.png';
import Facebook from '../../public/facebook.png';
import Review from '../../public/review.png';
import Time from '../../public/time.png';

const IconContainer = styled.View`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`;

const IconRow = styled.View`
display:flex;
align-items: center;
justify-content: center;
flex-direction:row;
`;

const IconCont = styled.View`
  margin-top:5px;
  margin-bottom:-30;
  margin-right:15px;
  margin-left:15px;
`;

const Icon = styled.View`
margin: 30px;
align-items: center;
justify-content: center;
padding:20px;
border: solid #ffd25b 2px;
border-radius: 100px;
display:flex;
`;

const TextCont = styled.View`
  flex-direction:column;
  display:flex;
  justify-content: center;
  align-items: center;
  bottom:25px
`;

const TextContainer = styled.Text`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:1px;
`;

const TextContainer2 = styled.Text`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AchievementImage = styled.Image`
width: 40px;
height: 40px;
resize-mode: contain;
align-items: center;
justify-content: center;
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

const AchievementIcon = ({ image, text, text2, }) => {
    return (
        <View>
        <IconContainer>
            <IconRow>
              <IconCont>
              <Icon>
                <AchievementImage source={HandPNG.src}/>
              </Icon>
              <TextCont>
                <TextContainer>Refer a friend</TextContainer>
                <TextContainer2>+100</TextContainer2>
              </TextCont>
              </IconCont>
              
              <IconCont>
              <Icon>
              <AchievementImage source={FacebookPNG.src}/>
              </Icon>
              <TextCont>
                <TextContainer>Share on Facebook</TextContainer>
                <TextContainer2>+100</TextContainer2>
              </TextCont>
              </IconCont>
            </IconRow>
            
            <IconRow>
            <IconCont>
              <Icon>
                <AchievementImage source={ReviewPNG.src}/>
              </Icon>
              <TextCont>
                <TextContainer>Write a Review</TextContainer>
                <TextContainer2>+300</TextContainer2>
              </TextCont>
              </IconCont>

              <IconCont>
              <Icon>
              <AchievementImage source={TimePNG.src}/>
              </Icon>
              <TextCont>
                <TextContainer>Report a Wait Time</TextContainer>
                <TextContainer2>+250</TextContainer2>
              </TextCont>
              </IconCont>
            </IconRow>

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
