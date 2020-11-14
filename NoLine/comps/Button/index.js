import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from "react-native";

const ButtonContainer = styled.View`
    width: ${props => props.buttonwidth ? props.buttonwidth :289};
    height: ${props => props.buttonheight ? props.buttonheight :49};
    background-color: ${props => props.buttonbgcolor ? props.buttonbgcolor : "#FFD25B" };
    color: ${props => props.buttoncolor ? props.buttoncolor : "white" };
    font-family: Montserrat;
    font-style: ${props => props.buttonfontstyle ? props.buttonfontstyle : "normal" };
    font-weight: ${props => props.buttonfontweight ? props.buttonfontweight : 500 };
    position:relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
     `;

 const Button = ({buttonwidth, buttonheight, buttonbgcolor, buttoncolor, buttonfontstyle, buttonfontweight, buttonfontsize, text}) => {
       return <View><ButtonContainer style ={{backgroundColor: buttonbgcolor, 
                                        color: buttoncolor, 
                                        width: buttonwidth, 
                                        height: buttonheight, 
                                        color: buttoncolor,
                                        fontStyle: buttonfontstyle,
                                        fontWeight: buttonfontweight,
                                        fontSize: buttonfontsize}}>
                <Text>{text}</Text>
              </ButtonContainer></View>
    
    }

    Button.defaultProps= {
        buttonwidth:289,
        buttonheight:49,
        buttonbgcolor:"#FFD25B",
        buttoncolor:"white",
        buttonborder:"3px solid #FFD25B",
        text:"Default"
         }

export default Button;