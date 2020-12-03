import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import ProfilePic from '../../public/joshprofile.jpg';

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

const ProfileImg = styled.Image`
width:150px;
height:150px;
border-radius:100px
`;

const ProfileSVG = {
    src: ProfilePic
}

const EditProfile = () => {
    return <ProfileContainer>
        <ProfileImg source={ProfileSVG.src}/>
        <HeadingTwo>Change Profile Picture</HeadingTwo>
    </ProfileContainer>
}

export default EditProfile;