import React from 'react';
import styled from 'styled-components';

const OverlayDiv = styled.div`
width: ${props => props.width ? props.width :"390px"};
height: ${props => props.height ? props.height :"110px"};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor :"blue"};
border:1px solid #c4c4c4;
display:flex;
box-shadow: -3px 7px #c4c4c4;
border-radius:7px;

`;

const SearchImg = styled.div`
width: 71px;
height:69px;
border-radius:11px;
color: ${props => props.color ? props.color : "#c4c4c4" };
margin-right:1em;
margin-left:.75em;
position:relative;
top:12%;

`;

const Header = styled.h1`
position:relative;
font-size:20px;
text-align:left;

`;

const Star = styled.div`
width:13.4px;
height:11.55px;
position:relative;
margin:2px;
`;


const WaitTime = styled.h1`
color: ${props => props.color ? props.color : "#25D22C" };
position:relative;
font-size:18px;
margin-left:10px;
top:-18px;
`;

const Distance = styled.h1`
color: ${props => props.color ? props.color : "black" };
position:relative;
font-size:18px;
margin-left:10px;
`;

const RecentUpdate = styled.p`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:1.25em;
top:-.45em;
`;

const ReviewNumber = styled.p`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
top:-.9em;
left:.5em;
`;

const HeaderDiv = styled.div`
width:149px;
height:16;
display:block;

`;

const StarDiv = styled.div`
display:flex;
`;

const InfoDiv = styled.div`
display:block;
`;

const TopLine = styled.div`
width:1.68px;
height:64px;
background-color:#c4c4c4;
position:relative;
margin-left:1em;
top:.8em;
`;

const SideLine = styled.div`
width:58.68px;
height:1.68px;
background-color:#c4c4c4;
position:relative;
margin-left:10px;
top:-8px;
`;

const ProfilePic = styled.div`
width:7.22px;
height:7px;
position:relative;
top:-2em;
left:.75em;
`;

const UserDiv = styled.div`
display:flex;
position:relative;
top:-2.5em;
left:-.7em;
`;

const TimeDiv = styled.div`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:-2.5em;
top:1.8em;
`;

const MapOverlay = ({textDistance,color,width,height,stars,h1text,username,time,revnum,textWait}) => {
   return <OverlayDiv>
     
<SearchImg color={color}> <img src="RestImg.png"/></SearchImg>
<HeaderDiv>
<Header>{h1text}</Header>
    <StarDiv>
<Star> <img src="Star.png"/></Star>
<Star> <img src="Star.png"/></Star>
<Star> <img src="Star.png"/></Star>
<Star> <img src="Star.png"/></Star>
<Star> <img src="Star.png"/></Star>
<ReviewNumber>({revnum})</ReviewNumber>
</StarDiv>
</HeaderDiv>
<TopLine></TopLine>

<InfoDiv>
<Distance>{textDistance}</Distance>
<SideLine></SideLine>
<WaitTime>{textWait}</WaitTime>
<UserDiv>
<RecentUpdate><img src="mapoverlayprofile.png"/> {username}</RecentUpdate>
<TimeDiv>
{time} ago
</TimeDiv>
</UserDiv>
</InfoDiv>

   </OverlayDiv>

}

MapOverlay.defaultProps= {
   textWait:"10 min",
   textDistance:"1.5 km",
   color:"#D4170B",
   width:"331px",
   height:"90px",
   backgroundColor:"blue",
   stars:"5",
   h1text:"Chronic Tacos",
   username:"user123",
   time:"30m",
   revnum:"16"
 }

export default MapOverlay