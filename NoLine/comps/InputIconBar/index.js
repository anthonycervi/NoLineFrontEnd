import React from 'react';
import styled, {css} from 'styled-components';
//import {View} from 'react-native';

import searchIcon from '../../public/searchIcon.svg';
import sendIcon from '../../public/sendIcon.svg';

const IconBarContainer = styled.div`
    // width: 100%; 
    // margin-bottom: 10px

    input {
        border: 1px solid #FFD25B;
        border-radius: 5px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        height: 30px;
        width 20%;
        padding: 10px; 
        text-align: left; 
    }

    input:focus {
        border: 1px solid #8486D1;
    }

    span {
        position: absolute;
        padding: 10px;
        line-height: 30px;
        left: 19%;
        top: 20px;
    }
`;

const searchSVG = {
    src: searchIcon
}

const sendSVG = {
    src: sendIcon
}

const InputIconBar = ({text, image}) => {
    return <IconBarContainer>
            <input type="text" placeholder={text}/>
            <span>
                <img src={image}/>
            </span>
        </IconBarContainer>
}

InputIconBar.defaultProps = {
   text: "Search",
   image: "searchSVG.src"
}

export default InputIconBar;