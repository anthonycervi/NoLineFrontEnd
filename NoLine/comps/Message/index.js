import React from 'react';
import styled, {css} from 'styled-components';

import ProfilePic from '../../public/MessageProfile.svg';

const MessageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.2fr 0.8fr 1fr;
    grid-template-rows: 1fr 1fr 1.4fr;
    gap: 0px 0px;
    width: 40%;

    font-family: Montserrat;
    font-style: normal;

// .Heading { grid-area: 1 / 2 / 2; }
// .Review { grid-area: 1 / 3 / 2; }
// .ProfilePic { grid-area: 1 / 1 / 3; }
// .Username { grid-area: 3 / 1 / 4; }
// .Message { grid-area: 2 / 2 / 4; }
`;

const MessageHeading = styled.div`
    grid-area: 1 / 2 / 2;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
`;

const Review = styled.div`
    grid-area: 1 / 3 / 2;

    span {
        color: #FAD744;
        display: block;
    }
`;

const UserPic = styled.div`
    grid-area: 1 / 1 / 3;
    align-self: center;
    text-align: center;
`;

const Username = styled.div`
    grid-area: 3 / 1 / 4; 
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    color: #ccc;
`;

const MessageBody = styled.div`
    grid-area: 2 / 2 / 4; 
    font-weight: normal;
    font-size: 12px;
    color: #ccc;
`;

const ProfileSVG = {
    src: ProfilePic
}

const Message = ({title, messageBody, timestamp, username}) => {
    return <MessageContainer>
        <MessageHeading>{title}</MessageHeading>
        <Review><span>&#9733; &#9733; &#9733; &#9733; &#9733;</span></Review>
        <UserPic><img src={ProfileSVG.src}/></UserPic>
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