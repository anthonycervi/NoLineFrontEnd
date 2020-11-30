import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text} from 'react-native';
import {Link} from "react-router-native";
const BarContainer = styled.View`
    display: flex;
    
    flex-direction:row;
    
    
`;

const BarItem = styled.Text`
    background-color: #00000000;
    color: #9D9D9D;
    text-align: center;
    width: 165px;
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
    font-size: 12;
`;

const PCont = styled.View``;
const PText = styled.Text``;
const Right = styled.Text`
    color: #8486D1;;
    font-weight: 500;
    font-size: 12;
`;

const EditBar = ({left, middle, right}) => {
    return <BarContainer>
        <BarItem>
            <Link to="profilebio">
            <Left>{left}</Left>
            </Link>
        </BarItem>
        <BarItem><HeadingMiddle>{middle}</HeadingMiddle></BarItem>
        <BarItem>
            <Link to="profilebio">
            <Right>{right}</Right>
            </Link>
            </BarItem>

    </BarContainer>
}

EditBar.defaultProps = {
   left: "Cancel",
   middle: "Edit Profile",
   right: "Done"
}

export default EditBar;