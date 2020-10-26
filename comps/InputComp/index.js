import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.label`

`;
const FormLabel = styled.label`

color: ${props => props.color ? props.color : "#686868" };
position:relative;
left:.5em;
`;

const FormInput = styled.input`
width: ${props => props.width ? props.width :"384"};
height: ${props => props.height ? props.height :"45"};
margin:.5em;
border-radius:7px;

`;

const InputComp = ({text,color,width,height}) => {
   return <FormStyle>
    
  <FormLabel color={color}>{text}</FormLabel><br/> 
  <FormInput width={width} height={height}/> <br/>
   </FormStyle>

}

InputComp.defaultProps= {
   text:"Default",
   color:"#686868",
   width:"384px",
   height:"45px"
 }

export default InputComp