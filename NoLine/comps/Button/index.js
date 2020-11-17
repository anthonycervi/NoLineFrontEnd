import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableHighlight, StyleSheet} from "react-native";

const ButtonContainer = styled.View`
    width: ${props => props.buttonwidth ? props.buttonwidth :284};
    height: ${props => props.buttonheight ? props.buttonheight :44};
    background-color: ${props => props.buttonbgcolor ? props.buttonbgcolor : "#FFD25B" };
    color: ${props => props.buttoncolor ? props.buttoncolor : "white" };
    font-family: Montserrat;
    font-style: ${props => props.buttonfontstyle ? props.buttonfontstyle : "normal" };
    font-weight: ${props => props.buttonfontweight ? props.buttonfontweight : 500 };
    font-size: ${props => props.buttonfontsize ? props.buttonfontsize : 24 };
    position:relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border-style: ${props => props.buttonborderstyle ? props.buttonborderstyle : "solid" };
    border-color: ${props => props.buttonbordercolor ? props.buttonbordercolor : "#FFD25B" };
    border-width: ${props => props.buttonborderwidth ? props.buttonborderwidth : 5 };
     `;


 const Button = ({buttonwidth, buttonheight, buttonbgcolor, buttoncolor, buttonfontstyle, buttonfontweight, buttonfontsize, buttonbordercolor, buttonborderstyle, buttonborderwidth, text}) => {
       return <View>

           <ButtonContainer style ={{backgroundColor: buttonbgcolor, 
                                              color: buttoncolor, 
                                              width: buttonwidth, 
                                              height: buttonheight, 
                                              color: buttoncolor,
                                              fontStyle: buttonfontstyle,
                                              fontWeight: buttonfontweight,
                                              fontSize: buttonfontsize,
                                              borderColor: buttonbordercolor,
                                              borderStyle: buttonborderstyle,
                                              borderWidth: buttonborderwidth}}>
                <Text style = {{color: buttoncolor, fontSize: buttonfontsize}}>{text}</Text>
              </ButtonContainer>
             
              </View>
    
    }

    Button.defaultProps= {
        buttonwidth:289,
        buttonheight:49,
        buttonbgcolor:"#FFD25B",
        buttoncolor:"white",
        buttonborder:"3px solid #FFD25B",
        buttonborderstyle: "solid",
        buttonbordercolor: "#FFD25B",
        buttonborderwidth: 5,
        buttonfontsize: 15,
        text:"Default"
         }

export default Button;