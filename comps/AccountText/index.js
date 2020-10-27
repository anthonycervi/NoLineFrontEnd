import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from "react-native";

const TextAlt = styled.Text`
font-weight:700;
`;

const AccountTextContainer = styled.Text`
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
     `;

 const AccountText = ({text, text2}) => {
       return <View>
                <AccountTextContainer>
                {text} 
              </AccountTextContainer>
                <TextAlt>{text2}</TextAlt>
              </View>
    
    }

    AccountText.defaultProps= {
        text:""
    }

export default AccountText;