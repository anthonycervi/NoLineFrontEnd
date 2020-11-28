import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;  
  bottom:80;
`;

const TextContainer = styled.Text`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const SliderConst = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top:13px;
`;

const MainSlider = styled.View`
display: flex;
align-items: center;
color: #ffd25b;
top:18px;
right:5px;
  

width: 90%;
  height: 6px;
  border-radius: 10px;
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

const NumberContainer = styled.View`
  display: flex;
  align-items: stretch;
  flex-direction:row;
  justify-content: space-between;
  width: 95%;
  top:25px;
  right:5px;
`;

const LeftContainer = styled.View`
  font-size: 13px;
`;

const RightContainer = styled.View`
  font-size: 13px;
  display: flex;
`;

const FilterSlider = ({text, number, slidenumber}) => {
    return (
        <View>
        <SliderContainer>
            <TextContainer>
                <Text>{text}</Text>
            </TextContainer>
            <SliderConst>
                <Slider 
                    style={{width: 350, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFD25B"
                    maximumTrackTintColor="#C4C4C4"
                    thumbTintColor="#FFD25B"
                />
            </SliderConst>
            <NumberContainer>
              <LeftContainer>
                <Text>{slidenumber}</Text>
              </LeftContainer>
              <RightContainer>
                <Text>{number}</Text>
              </RightContainer>
            </NumberContainer>
        </SliderContainer>
        </View>
    );
};

FilterSlider.defaultProps = {
    text: "Wait Time",
    number: "2+ hours",
    slidenumber: "10min"
};

export default FilterSlider;