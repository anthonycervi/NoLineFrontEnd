import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, TextInput, Image} from 'react-native';

import searchIcon from '../../public/searchIcon.png';
import sendIcon from '../../public/sendIcon.png';

const IconBarContainer = styled.View`
        border: 2px solid #FFD25B;
        border-radius: 5px;
        height: 40px;
        width 20%;
        padding: 10px; 
        text-align: left; 

    input:focus {
        border: 2px solid #8486D1;
    }
`;

const SpanView = styled.Image`
    position: absolute;
    padding: 10px;
    left: 95%;
    top: 10px;
`;

const searchIconPNG = {
    src: searchIcon
}

const sendIconPNG = {
    src: sendIcon
}

const InputIconBar = ({text, image}) => {
    return <IconBarContainer>
            <TextInput type="text" placeholder={text}/>
            <SpanView source={searchIconPNG.src}/>
        </IconBarContainer>
}

InputIconBar.defaultProps = {
   text: "Search",
   image: "searchIconPNG.src",
}

export default InputIconBar;