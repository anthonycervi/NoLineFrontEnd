import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, TextInput, Image } from 'react-native';
import '../../public/minus.png';
import '../../public/plus.png';


const SliderContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;   
`;

const TextContainer = styled.View`
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 5px;
`;

const MainMinute = styled.View`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SliderConst = styled.View`
  display: flex;
  align-items: stretch;
  flex-direction:row;
  width: 100%;
`;

const Decrease = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #ffd25b;
  margin: 10px;
`;

const MinusIcon = styled.View`
width:100%;
height:8px;
`;

const MainSlider = styled.View`
  display: flex;
  align-items: center;
  color: #ffd25b;;
  top:18px;
    
  
  width: 80%;
    height: 6px;
    border-radius: 5px;
    background: #ffd25b;
    }
    &::-webkit-slider-thumb{
        -webkit-apperance:none;
        apperance:none;
        height: 15px;
        width: 15px;
        border-radius: 10px;
        background-color: #ffd25b;
        cursor: pointer;
  
    }&::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #E5E5E5;
    cursor: pointer;
  }

`;

const Increase = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #ffd25b;
  margin: 10px;
`;

const PlusIcon = styled.View`
width:100%;
height:8px;
`;

const NumberContainer = styled.View`
  display: flex;
  align-items: stretch;
  flex-direction:row;
  justify-content: space-between;
  width: 80%;
`;

const MinuteContainer = styled.View`
  font-size: 13px;
`;

const HourContainer = styled.View`
  font-size: 13px;
  display: flex;
`;

const Slider = ({text}) => {
    return (
        <View>
        <SliderContainer>
            <TextContainer>
                <Text>Report the current wait time!</Text>
            </TextContainer>
            <MainMinute>
                <Text>{text}</Text>
            </MainMinute>
            <SliderConst>
                <Decrease>
                    <MinusIcon>
                      {/* <Image source={require('../../public/minus.png')}/> */}
                    </MinusIcon>
                </Decrease>
                <MainSlider input type="range" min="0" max="120" step="5"/>
                <Increase>
                    <PlusIcon>
                      {/* <Image source={require('../../public/plus.png')}/> */}                      
                    </PlusIcon>
                </Increase>
            </SliderConst>
            <NumberContainer>
                <MinuteContainer>
                    <Text>0 min</Text>
                </MinuteContainer>
                <HourContainer>
                    <Text>2+ hours</Text>
        </HourContainer>
            </NumberContainer>
        </SliderContainer>
        </View>
    );
};

Slider.defaultProps = {
    text:"15 min"
}

export default Slider;