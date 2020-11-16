import React from 'react';
import styled, { css } from 'styled-components/native';
import { View, Text, Image } from 'react-native';

import ProfilePic from '../../public/MessageProfile.png';

const MessageContainer = styled.View`

    font-family: Montserrat;
    font-style: normal;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.View`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1
`;

const MessageHeading = styled.Text`

    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
`;

const Review = styled.View`

`;

const UserPic = styled.View`
    align-items: center;
`;

const Username = styled.Text`
   
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    color: #ccc;
`;

const MessageBody = styled.Text`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 2   

    font-weight: normal;
    font-size: 12px;
    color: #ccc;
`;

const SpannedView = styled.Text`
    color: #FAD744;
    display: flex;
`;

const ProfilePNG = {
    src: ProfilePic
}

const Message = ({ title, messageBody, timestamp, username }) => {
    return <MessageContainer>
    <Row>
        <Column>
            <UserPic>
                <Text><Image source={ProfilePNG.src}/></Text>
            </UserPic>
        </Column>

        <Column>
            <MessageHeading>
                <Text>{title}</Text>
            </MessageHeading>
        </Column>

        <Column>
            <Review>
                <SpannedView><Text>&#9733;&#9733;&#9733;&#9733;&#9733;</Text></SpannedView>
            </Review>
        </Column>
    </Row>

    <Row>
        <Column>
            <Username>
                <Text>{"\n"}@{username}</Text><Text>{"\n"}{timestamp} ago</Text>
            </Username>
        </Column>

        <MessageBody>
            <Text>{messageBody}</Text>
        </MessageBody>
    </Row>
    </MessageContainer>
}

Message.defaultProps = {
    title: "Heading",
    messageBody: "Message...",
    timestamp: "now",
    username: "username"
}

export default Message;