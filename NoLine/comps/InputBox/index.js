import React from 'react';
import styled from 'styled-components/native';
import {View, TextInput, Text} from "react-native";

const InputBoxContainer = styled.TextInput`
    width: 289;
    height: 49;
    background-color: #EBEBEB;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: normal;
    font-size: 15;
     `;


 const InputBox = ({text}) => {
       return <View><InputBoxContainer placeholder={text}>
       </InputBoxContainer></View>
              
    
    }

    InputBox.defaultProps= {
        text:"Default"
         }

export default InputBox;