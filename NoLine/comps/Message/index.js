import React from 'react';
import styled, {css} from 'styled-components/native';
import {View, Text, Image} from 'react-native';

import ProfilePic from '../../public/MessageProfile.svg';

const MessageContainer = styled.View`
    display: grid;
    grid-template-columns: 1fr 1.2fr 0.8fr 1fr;
    grid-template-rows: 1fr 1fr 1.4fr;
    gap: 0px 0px;
    width: 40%;

    font-family: Montserrat;
    font-style: normal;
`;

const MessageHeading = styled.View`
    grid-area: 1 / 2 / 2;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
`;

const Review = styled.View`
    grid-area: 1 / 3 / 2;
`;

const UserPic = styled.View`
    grid-area: 1 / 1 / 3;
    align-self: center;
    text-align: center;
`;

const Username = styled.View`
    grid-area: 3 / 1 / 4; 
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    color: #ccc;
`;

const MessageBody = styled.View`
    grid-area: 2 / 2 / 4; 
    font-weight: normal;
    font-size: 12px;
    color: #ccc;
`;

const SpannedView = styled.View`
    color: #FAD744;
    display: block;
`;

const ProfileSVG = {
    src: ProfilePic
}

const Message = ({title, messageBody, timestamp, username}) => {
    return <MessageContainer>
        <MessageHeading>{title}</MessageHeading>
        <Review><SpannedView>&#9733; &#9733; &#9733; &#9733; &#9733;</SpannedView></Review>
        <UserPic><Image source={ProfileSVG.src}/></UserPic>
        <Username>{username}<br/>{timestamp}</Username>
        <MessageBody>{messageBody}</MessageBody>
    </MessageContainer>
}

Message.defaultProps = {
    title: "Heading",
    messageBody: "Message...",
    timestamp: "now",
    username: "username"
}

export default Message;