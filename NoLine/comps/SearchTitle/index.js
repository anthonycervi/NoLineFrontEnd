import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image} from 'react-native';

const SearchDiv = styled.View`
width: ${props => props.width ? props.width :"380px"};
height: ${props => props.height ? props.height :"120px"};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor :"white"};
border: 1px solid white;
position:relative;
left:6px;
top:6px;
borderRadius:12px;
`;

const SearchImg = styled.View`
width: 71px;
height:69px;
border-radius:11px;
color: ${props => props.color ? props.color : "#c4c4c4" };
margin-right:16px;
margin-left:12px;
top:10px;
`;

const Header = styled.Text`
position:relative;
font-size:22px;
top:-55px;
left:95px;
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
flexDirection:row;
position:relative;
top:-45px;
left:93px;
`;

const HeaderDiv = styled.View`
display:flex;
width: ${props => props.width ? props.width :"332px"};
height: ${props => props.height ? props.height :"69px"};
`;

const WaitDiv = styled.View`
display:flex;
width: ${props => props.width ? props.width :"332px"};
height: ${props => props.height ? props.height :"69px"};
`;

const WaitTime = styled.Text`
color: ${props => props.color ? props.color : "#D4170B" };
position:relative;
top:14px;
left:10px;
font-size:24px;
font-weight:bold;
`;

const RecentUpdate = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:120px;
top:-10px;
`;

const ReviewNumber = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
top:-60px;
left:185px;
`;

const StarImg = styled.Image`
width:25px;
height:25px;
`;

const SearchTitle = ({text,color,width,height,stars,h1text,username,time,revnum}) => {
   return <View><SearchDiv>
       <HeaderDiv>
<SearchImg color={color}><Image source={require('../../public/RestImg.png')}/></SearchImg>
<Header>{h1text}</Header>
<StarDiv>
<Star><StarImg source={require('../../public/Star.png')}/></Star>
</StarDiv>
<ReviewNumber>({revnum})</ReviewNumber>
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