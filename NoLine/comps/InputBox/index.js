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


 const InputBox = ({text, onChangeText}) => {
       return <View><InputBoxContainer placeholder={text} onChangeText={onChangeText}>
       </InputBoxContainer></View>
              
    
    }

    InputBox.defaultProps= {
        text:"Default",
        onChangeText:()=>{}
         }

export default InputBox;