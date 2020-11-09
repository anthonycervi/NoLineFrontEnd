import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, TextInput } from 'react-native';

const SliderContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;   
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
`;

const MainSlider = styled.TextInput`
  display: flex;
  align-items: center;
  color: #ffd25b;
  margin:15px;

 
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #ffd25b;


    }
    &::-webkit-slider-thumb{
     
        apperance:none;
        height: 15px;
        width: 15px;
        border-radius: 10px;
        background-color: #ffd25b;
        cursor: pointer;
  
    }
    &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #E5E5E5;
    cursor: pointer;
  }
`;

const SliderNumber = styled.Text`
font-size:13px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const NumberContainer = styled.View`
  display: flex;
  align-items:center;
  justify-content: flex-end;
  width: 100%;
  font-size:13px;
`;

const FilterSlider = ({text, number, slidenumber}) => {
    return (
        <View>
        <SliderContainer>
            <TextContainer>
                <Text>{text}</Text>
            </TextContainer>
            <SliderConst>
                <MainSlider input type="range" min="0" max="120" step="0"/>
            </SliderConst>
            <SliderNumber>
                <Text>{slidenumber}</Text>
            </SliderNumber>
            <NumberContainer>
                <Text>{number}</Text>
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