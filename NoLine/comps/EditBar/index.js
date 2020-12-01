import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Link, useHistory} from "react-router-native";
const BarContainer = styled.View`
    display: flex;
    width: 100%;
    flex-direction:row;
    
    
`;

const BarItem = styled.Text`
    background-color: blue;
    color: #9D9D9D;
    text-align: center;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

const HeadingMiddle = styled.Text`
    text-transform: uppercase;
    color: #FFD25B;
    font-size: 12;
    font-weight: 600;
    text-align: center;
`;

const Left = styled.Text`
    color: #9D9D9D;
    font-weight: 500;
    font-size: 20;
    
`;

const PCont = styled.View``;
const PText = styled.Text``;
const Right = styled.Text`
    color: #8486D1;;
    font-weight: 500;
    font-size:20;
`;

const EditBar = ({left, middle, right}) => {
    const history = useHistory();
    return <BarContainer>
        <BarItem>

        <TouchableOpacity  
        onPress={() => {
            history.push("/profilebio")
          }}>  
            <Left>{left}</Left>
            </TouchableOpacity>


        </BarItem>
        <BarItem><HeadingMiddle>{middle}</HeadingMiddle></BarItem>
        <BarItem>

        <TouchableOpacity  
        onPress={() => {
            history.push("/profilebio")
          }}>              
            <Right>{right}</Right>            
            </TouchableOpacity>


            </BarItem>
    </BarContainer>
}

EditBar.defaultProps = {
   left: "Cancel",
   middle: "Edit Profile",
   right: "Done"
}

export default EditBar;