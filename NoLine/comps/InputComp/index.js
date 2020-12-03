import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput} from 'react-native';

const FormStyle = styled.Text`

`;
const FormLabel = styled.Text`

color: ${props => props.color ? props.color : "#686868" };


`;

const FormInput = styled.TextInput`
width: ${props => props.width ? props.width :"350px"};
height: ${props => props.height ? props.height :"45px"};
    background-color: #EBEBEB;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: normal;
    font-size: 15;

`;

const InputComp = ({text,color,width,height}) => {
   return <View>
  <FormLabel color={color}>{text}</FormLabel>
  <FormInput placeholder={" "}></FormInput>
  
   </View>
}

InputComp.defaultProps= {
   text:"Default",
   color:"#686868",
   width:"384%",
   height:"45px",
   //TEST
 }

export default InputComp;