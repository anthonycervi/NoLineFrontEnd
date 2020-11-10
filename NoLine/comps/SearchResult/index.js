import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image} from 'react-native';


const OverlayDiv = styled.View`
width: ${props => props.width ? props.width :"70px"};
height: ${props => props.height ? props.height :"70px"};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor :"#c4c4c4"};
margin:8px;
display:flex;
border-radius:7px;

`;

const SearchImg = styled.View`
width: 71px;
height:69px;
border-radius:11px;
color: ${props => props.color ? props.color : "#c4c4c4" };
margin-right:16px;
margin-left:12px;
position:relative;
top:12%;

`;

const Header = styled.Text`
position:relative;
font-size:20px;
text-align:left;
top:-65px;
left:80px;
`;

const Star = styled.Text`
width:13.4px;
height:11.55px;
position:relative;
margin:2px;
`;


const WaitTime = styled.Text`
color: ${props => props.color ? props.color : "#25D22C" };
position:relative;
font-size:18px;
margin-left:10px;
top:-18px;
`;

const Distance = styled.Text`
color: ${props => props.color ? props.color : "black" };
position:relative;
font-size:18px;
margin-left:10px;
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

const HeaderDiv = styled.View`
width:149px;
height:16px;


`;

const StarDiv = styled.View`
display:flex;
`;

const InfoDiv = styled.View`

`;

const TopLine = styled.View`
width:1.68px;
height:64px;
background-color:#c4c4c4;
position:relative;
margin-left:16px;
top:12.8px;
`;

const SideLine = styled.View`
width:58.68px;
height:1.68px;
background-color:#c4c4c4;
position:relative;
margin-left:10px;
top:-8px;
`;

const ProfilePic = styled.View`
width:7.22px;
height:7px;
position:relative;
top:-32px;
left:12px;
`;

const UserDiv = styled.View`
display:flex;
position:relative;
top:-40px;
left:-11.2px;
`;

const TimeDiv = styled.View`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:-40px;
top:28.8px;
`;

const SeperatingDiv = styled.View`
width:350px;
height:2px;
background-color:#c4c4c4;
position:relative;
left:11.2px;
`;

const Main = styled.View`

`;

const SearchResult = ({textDistance,color,width,height,stars,h1text,username,time,revnum,textWait}) => {
   return <View><Main>
      
      <OverlayDiv>

<SearchImg color={color}><Text><Image source="RestImg.png"/></Text></SearchImg>
<HeaderDiv>
<Header><Text>{h1text}</Text></Header>
<StarDiv>
<Star><Text><Image source={"Star.png"}/></Text></Star>

<ReviewNumber><Text>{revnum}</Text></ReviewNumber>
</StarDiv>
</HeaderDiv>
<TopLine></TopLine>

<InfoDiv>
<Distance><Text>{textDistance}</Text></Distance>
<SideLine></SideLine>
<WaitTime><Text>{textWait}</Text></WaitTime>
<UserDiv>
<RecentUpdate> <Text><Image source="mapoverlayprofile.png"/> </Text>  <Text>{username} </Text></RecentUpdate>
<TimeDiv><Text>{time}</Text><Text>ago</Text></TimeDiv>
</UserDiv>
</InfoDiv>
</OverlayDiv>
<SeperatingDiv></SeperatingDiv>
   </Main>
  
   </View>
   
}

SearchResult.defaultProps= {
   textWait:"10 min",
   textDistance:"1.5 km",
   color:"#D4170B",
   width:"331px",
   height:"90px",
   backgroundColor:"#ffffff",
   stars:"5",
   h1text:"Chronic Tacos",
   username:"user123",
   time:"30m",
   revnum:"16"
 }

export default SearchResult