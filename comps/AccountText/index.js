import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from "react-native";



const AccountTextContainer = styled.p`
    position:relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-text: center;
    justify-content: center;
    font-family: Montserrat;
    font-weight: 400;
    font-style: normal;
    font-size: 11px;
    color: #B0B0B0;
    span {
        font-weight:700;
    }
     `;

 const AccountText = ({text, text2, span}) => {
       return <View><AccountTextContainer style ={{text, span}}>
                {text} <span>{text2}</span>
              </AccountTextContainer></View>
    
    }

    AccountText.defaultProps= {
        text:""
    }

export default AccountText;