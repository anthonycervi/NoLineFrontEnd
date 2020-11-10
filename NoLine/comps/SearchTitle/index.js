import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image} from 'react-native';

const SearchDiv = styled.View`
width: ${props => props.width ? props.width :"332"};
height: ${props => props.height ? props.height :"69"};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor :"white"};

`;

const SearchImg = styled.View`
width: 71px;
height:69px;
border-radius:11px;
color: ${props => props.color ? props.color : "#c4c4c4" };
margin-right:16px;
`;

const Header = styled.Text`
position:relative;
top:-6.4px;
`;

const Star = styled.View`
width:13.4px;
height:11.55px;
position:relative;
margin:2px;
`;

const StarDiv = styled.View`
width:94.87px;
height:11.55px;
display:flex;
position:relative;
left:-196px;
top:48px;
`;

const HeaderDiv = styled.View`
display:flex;
width: ${props => props.width ? props.width :"332"};
height: ${props => props.height ? props.height :"69"};
`;

const WaitDiv = styled.View`
display:flex;
width: ${props => props.width ? props.width :"332"};
height: ${props => props.height ? props.height :"69"};
`;

const WaitTime = styled.Text`
color: ${props => props.color ? props.color : "#D4170B" };
position:relative;
top:-12.8px;
`;

const RecentUpdate = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:20px;
top:-7.2px;
`;

const ReviewNumber = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
top:-14.4px;
left:8px;
`;

const SearchTitle = ({text,color,width,height,stars,h1text,username,time,revnum}) => {
   return <View> <SearchDiv>
       <HeaderDiv>
<SearchImg color={color}> <Image src="RestImg.png"/></SearchImg>
<Header>{h1text}</Header>
<StarDiv>
<Star> <Image src="Star.png"/></Star>
<Star> <Image src="Star.png"/></Star>
<Star> <Image src="Star.png"/></Star>
<Star> <Image src="Star.png"/></Star>
<Star> <Image src="Star.png"/></Star>
<ReviewNumber>({revnum})</ReviewNumber>
</StarDiv>
</HeaderDiv>
<WaitDiv>
<WaitTime>{text}</WaitTime>
<RecentUpdate>Last updated by {username} {time} ago</RecentUpdate>
</WaitDiv>
   </SearchDiv>
   </View> 
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