import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput} from 'react-native';

const FormStyle = styled.Text`

`;
const FormLabel = styled.Text`

color: ${props => props.color ? props.color : "#686868" };
position:relative;
left:.5em;
`;

const FormInput = styled.TextInput`
width: ${props => props.width ? props.width :"384"};
height: ${props => props.height ? props.height :"45"};
margin:.5em;
border-radius:3.75%;

`;

const InputComp = ({text,color,width,height}) => {
   return <View><FormStyle>
    
  <FormLabel color={color}>{text}</FormLabel><br/> 
  <FormInput width={width} height={height}/> <br/>
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