import React from 'react';
import styled from 'styled-components/native';
import {View, TextInput, Text,} from "react-native";


const InputBoxContainer = styled.TextInput`
   height: 49;
    width: 304;
    background-color: white;
    border: 2px solid #FFD25B;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    position: relative;
    display: block;
    align-self: stretch;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 15;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    overflow: hidden;
     `;


 const SearchBar = ({text, onChangeText,}) => {
       return  <View>
          
                  <InputBoxContainer placeholder={text} onChangeText={onChangeText}></InputBoxContainer>
                 
               </View>
              
    
    }

    SearchBar.defaultProps= {
        text:"Default",
        onChangeText:()=>{}
         }

export default SearchBar;