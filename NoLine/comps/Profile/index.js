import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import ProfilePic from '../../public/ProfilePic.png';

const ProfileContainer = styled.View`
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    align-items:center;
    justify-content:center;
`;

const HeadingTwo = styled.Text`
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0px;
    top:10px;
`;

const Paragraph = styled.Text`
    height: 13px;
    font-weight: normal;
    font-size: 14px;
    line-height: 13px;
    color: #ccc;
    margin-top: 4px;
    top:7px;
`;

const HeadingOne = styled.Text`
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #8486D1;
    top:15px
`;

const ProfileSVG = {
    src: ProfilePic
}

const Profile = ({fname, lname, city, province, score}) => {
    return <ProfileContainer>
        <Image source={ProfileSVG.src}/>
        <HeadingTwo>{fname} {lname}</HeadingTwo>
        <Paragraph>{city}, {province}</Paragraph>
        <HeadingOne>{score} Points</HeadingOne>
    </ProfileContainer>
}

Profile.defaultProps = {
    fname: "First",
    lname: "Last",
    city: "City",
    province: "Province",
    score: "0"
}

export default Profile;