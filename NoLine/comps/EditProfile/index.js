import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import ProfilePic from '../../public/ProfilePic.png';

const ProfileContainer = styled.View`
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const HeadingTwo = styled.Text`
    font-size: 16px;
    line-height: 29px;
    color:#8486D1;
`;


const ProfileSVG = {
    src: ProfilePic
}

const EditProfile = () => {
    return <ProfileContainer>
        <Image source={ProfileSVG.src}/>
        <HeadingTwo>Change Profile Picture</HeadingTwo>
    </ProfileContainer>
}

export default EditProfile;