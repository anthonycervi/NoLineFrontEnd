import React from 'react';
import styled, {css} from 'styled-components/native';
//import {View} from 'react-native';

const BarContainer = styled.View`
    display: flex;
    align-items: stretch;
`;

const BarItem = styled.Text`
    background-color: #fff;
    color: #9D9D9D;
    text-align: center;
    width: 10%; //width 100%
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
`;

const HeadingMiddle = styled.Text`
    text-transform: uppercase;
    color: #FFD25B;
    font-weight: 600;
    text-align: center;
`;

const Left = styled.Text`
    color: #9D9D9D;
    font-weight: 500;
`;

const PCont = styled.View``;
const PText = styled.Text``;
const Right = styled.Text`
    color: #8486D1;;
    font-weight: 500;
`;

const EditBar = ({left, middle, right}) => {
    return <BarContainer>
        <BarItem>{left}</BarItem>
        <BarItem><HeadingMiddle>{middle}</HeadingMiddle></BarItem>
        <BarItem><Right>{right}</Right></BarItem>

    </BarContainer>
}

EditBar.defaultProps = {
   left: "Cancel",
   middle: "Edit Profile",
   right: "Done"
}

export default EditBar;