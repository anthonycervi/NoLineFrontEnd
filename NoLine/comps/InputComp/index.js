import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput} from 'react-native';

const FormStyle = styled.Text`

`;
const FormLabel = styled.Text`

color: ${props => props.color ? props.color : "#686868" };


`;

const FormInput = styled.View`
width: ${props => props.width ? props.width :"384px"};
height: ${props => props.height ? props.height :"45px"};
border:1px solid black;


`;

const InputComp = ({text,color,width,height}) => {
   return <View><FormStyle>
    
  <FormLabel color={color}>{text}</FormLabel>
  <FormInput width={width} height={height}/> 
   </FormStyle>
   </View>
}

InputComp.defaultProps= {
   text:"Default",
   color:"#686868",
   width:"384px",
   height:"45px"
   //TEST
 }

export default InputComp