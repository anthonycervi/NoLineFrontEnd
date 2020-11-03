import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
width: ${props => props.width ? props.width :"332"};
height: ${props => props.height ? props.height :"69"};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor :"white"};

`;

const SearchImg = styled.div`
width: 71px;
height:69px;
border-radius:11px;
color: ${props => props.color ? props.color : "#c4c4c4" };
margin-right:1em;
`;

const Header = styled.h1`
position:relative;
top:-0.4em;
`;

const Star = styled.div`
width:13.4px;
height:11.55px;
position:relative;
margin:2px;
`;

const StarDiv = styled.div`
width:94.87px;
height:11.55px;
display:flex;
position:relative;
left:-12.25em;
top:3em;
`;

const HeaderDiv = styled.div`
display:flex;
width: ${props => props.width ? props.width :"332"};
height: ${props => props.height ? props.height :"69"};
`;

const WaitDiv = styled.div`
display:flex;
width: ${props => props.width ? props.width :"332"};
height: ${props => props.height ? props.height :"69"};
`;

const WaitTime = styled.h1`
color: ${props => props.color ? props.color : "#D4170B" };
position:relative;
top:-.8em;
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

const SearchTitle = ({text,color,width,height,stars,h1text,username,time,revnum}) => {
   return <SearchDiv>
       <HeaderDiv>
<SearchImg color={color}> <img src="RestImg.png"/></SearchImg>
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
<WaitDiv>
<WaitTime>{text}</WaitTime>
<RecentUpdate>Last updated by {username} {time} ago</RecentUpdate>
</WaitDiv>
   </SearchDiv>

}

SearchTitle.defaultProps= {
   text:"1 hr wait",
   color:"#D4170B",
   width:"332px",
   height:"69px",
   backgroundColor:"white",
   stars:"5",
   h1text:"Chronic Tacos",
   username:"@user",
   time:"30m",
   revnum:"16"
 }

export default SearchTitle