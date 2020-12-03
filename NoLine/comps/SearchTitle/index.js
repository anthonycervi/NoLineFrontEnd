import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image} from 'react-native';
import { getAllPhotos } from '../../database/functions';
const SearchDiv = styled.View`
width: ${props => props.width ? props.width :"380px"};
height: ${props => props.height ? props.height :"120px"};

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
width:40px;
height:25.55px;
position:relative;
margin:2px;
flexDirection:row;
left:90px;
top:-50px;
`;

const StarDiv = styled.View`
flex:1;
flexDirection:row;
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
top:20px;
left:10px;
font-size:24px;
font-weight:bold;
`;

const RecentUpdate = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:145px;
bottom:4px;

`;

const ReviewNumber = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
top:-47px;
left:175px;
`;

const StarImg = styled.Image`
width:20px;
height:20px;
`;

const StarText = styled.Text`
position:relative;
right:0px;
left:4px;
bottom:0px;
font-size:16px;
color: #38383F;
`;

const IconImage = styled.Image`
width:70px;
height:70px;
margin-top:10px;
border-radius:10px;
position:relative;
bottom:5px;
`;

const SearchTitle = ({photourl, text,color,width,height,stars,h1text,username,time,revnum}) => {
   
   
   return <View><SearchDiv>
       <HeaderDiv>
<SearchImg color={color}><IconImage source={{uri:(photourl)}}/></SearchImg>
<Header>{h1text}</Header>
<StarDiv>
<Star><StarImg source={require('../../public/Star.png')}/><StarText>{stars}</StarText></Star>
</StarDiv>
<ReviewNumber>({revnum})</ReviewNumber>
</HeaderDiv>
<WaitDiv>
<WaitTime>{text}</WaitTime>
<RecentUpdate>Updated by {username} {time} ago</RecentUpdate>
</WaitDiv>
   </SearchDiv>
   </View> 
}

SearchTitle.defaultProps= {
   text:"1 hr wait",
   color:"#D4170B",
   width:"332px",
   height:"69px",
   stars:"5",
   h1text:"Chronic Tacos",
   username:"@user",
   time:"30m",
   revnum:"16",
   stars:"4",
   photourl:"null"
 }

export default SearchTitle