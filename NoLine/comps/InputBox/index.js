import React from 'react';
import styled from 'styled-components/native';
import {View, TextInput, Text} from "react-native";

const InputBoxContainer = styled.TextInput`
    width: 289px;
    height: 49px;
    background-color: #EBEBEB;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
     `;


 const InputBox = ({text}) => {
       return <View><InputBoxContainer placeholder={text}>
       </InputBoxContainer></View>
              
    
    }

    InputBox.defaultProps= {
        text:"Default"
         }

export default InputBox;