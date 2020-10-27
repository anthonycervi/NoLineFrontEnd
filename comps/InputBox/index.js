import React from 'react';
import styled from 'styled-components';

const InputBoxContainer = styled.input`
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


 const InputBox = ({}) => {
       return <InputBoxContainer placeholder="text">
              </InputBoxContainer>
              
    
    }

    InputBox.defaultProps= {
        text:"Default"
         }

export default InputBox;