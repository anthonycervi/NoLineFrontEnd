import React from 'react';
import styled from 'styled-components';

const TopDiv = styled.div`
width: ${props => props.width ? props.width :"375"};
height: ${props => props.height ? props.height :"23"};
`;

const GreyDiv = styled.div`
width:186px;
height:1px;
position:relative;
background-color:#999999;
`;

const YellowDiv = styled.div`
width:186px;
height:4px;
position:relative;
background-color:#FFD25B;
left:8.4em;
top:-.2em;
`;

const ProfileText = styled.p`
position:relative;
left:4em;
top:.5em;
`;

const MainDiv = styled.div`
display:flex;
`;

const AwardsText =styled.p`
position:relative;
left:15em;
top:-3em;
`;

const UserPage = ({width,height}) => {
   return <TopDiv>
       <ProfileText>Profile</ProfileText>
<GreyDiv></GreyDiv>
<MainDiv>
<AwardsText>Awards</AwardsText>
<YellowDiv></YellowDiv>
</MainDiv>
   </TopDiv>
   
}

UserPage.defaultProps= {

 }

export default UserPage