import React from 'react';
import styled, {css} from 'styled-components';
import ProfilePic from '../../public/ProfilePic.svg';

const ProfileContainer = styled.div`
    text-align: center;
    font-family: Montserrat;
    font-style: normal;

    h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 0px;
    }

    p {
        height: 13px;
        font-weight: normal;
        font-size: 14px;
        line-height: 13px;
        color: #ccc;
        margin-top: 4px;
    }

    h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        color: #8486D1;
    }
`;

const ProfileSVG = {
    src: ProfilePic
}

const Profile = ({fname, lname, city, province, score}) => {
    return <ProfileContainer>
        <img src={ProfileSVG.src}/>
        <h2>{fname} {lname}</h2>
        <p>{city}, {province}</p>
        <h1>{score} Points</h1>
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