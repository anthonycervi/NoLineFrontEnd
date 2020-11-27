import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, TextInput, Image} from 'react-native';
import searchIcon from '../../public/searchIcon.png';
import sendIcon from '../../public/sendIcon.png';

const IconBarContainer = styled.View`
        border: 2px solid #FFD25B;
        border-radius: 5px;
        height: 40px;
        width: ${props => props.width ? props.width :331};
        padding: 10px; 
        text-align: left; 
        color: #32353f;
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

const InputIconBar = ({text, image, width}) => {
    return <IconBarContainer>
            <TextInput type="text" placeholder={text}/>
            <SpanView source={image}/>
        </IconBarContainer>
}

InputIconBar.defaultProps = {
   text: "Search",
   image: sendIconPNG.src,
   width:331
}

export default InputIconBar;