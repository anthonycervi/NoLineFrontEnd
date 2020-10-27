import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: ${props => props.buttonwidth ? props.buttonwidth :"289px"};
    height: ${props => props.buttonheight ? props.buttonheight :"49px"};
    background-color: ${props => props.buttonbgcolor ? props.buttonbgcolor : "#FFD25B" };
    color: ${props => props.buttoncolor ? props.buttoncolor : "white" };
    font-family: Montserrat;
    font-style: ${props => props.buttonfontstyle ? props.buttonfontstyle : "normal" };
    font-weight: ${props => props.buttonfontweight ? props.buttonfontweight : "500" };
    font-size: ${props => props.buttonfontsize ? props.buttonfontsize : "24px" };
    position:relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    box-shadow: inset 0px 0px 0px 3px #FFD25B;
    box-sizing: border-box;
     `;

 const Button = ({buttonwidth, buttonheight, buttonbgcolor, buttoncolor, buttonfontstyle, buttonfontweight, buttonfontsize, text}) => {
       return <ButtonContainer style ={{backgroundColor: buttonbgcolor, 
                                        color: buttoncolor, 
                                        width: buttonwidth, 
                                        height: buttonheight, 
                                        color: buttoncolor,
                                        fontStyle: buttonfontstyle,
                                        fontWeight: buttonfontweight,
                                        fontSize: buttonfontsize}}>
                {text}
              </ButtonContainer>
    
    }

    Button.defaultProps= {
        buttonwidth:"289px",
        buttonheight:"49px",
        buttonbgcolor:"#FFD25B",
        buttoncolor:"white",
        buttonborder:"3px solid #FFD25B",
        text:"Default"
         }

export default Button;