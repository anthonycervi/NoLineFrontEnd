import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native';
import '../../public/Star.png';
import { Link, useHistory } from "react-router-native";
import { getAllPhotos } from '../../database/functions';

const OverlayDiv = styled.View`
width: ${props => props.width ? props.width :"375px"};
height: ${props => props.height ? props.height :"110px"};
backgroundColor: ${props => props.backgroundColor ? props.backgroundColor :"#00000000"};
margin:8px;
display:flex;
border-radius:7px;

position:relative;
`;

const SearchImg = styled.View`

border-radius:11px;
color: ${props => props.color ? props.color : "#c4c4c4" };
margin-right:16px;
margin-left:12px;
position:relative;
top:12%;
top:4px;
left:-7px;
`;

const Header = styled.Text`
position:relative;
font-size:18px;
text-align:left;
top:-65px;
left:85px;

color: #38383F;
height:48px;
`;

const Star = styled.View`
width:40px;
height:25.55px;
position:relative;
margin:2px;
flexDirection:row;
left:80px;
top:-60px;

`;


const WaitTime = styled.Text`
color: ${props => props.color ? props.color : "#25D22C" };
position:relative;
font-size:20px;
margin-left:10px;
top:-140px;
left:280px;

`;

const Distance = styled.Text`
color: ${props => props.color ? props.color : "black" };
position:relative;
font-size:20px;
margin-left:10px;
left:273px;
top:-143px;
`;

const RecentUpdate = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
left:56px;
top:-9.5px;
padding-left:-4px;

`;

const ReviewNumber = styled.Text`
color: ${props => props.color ? props.color : "#999999" };
position:relative;
top:-57px;
left:155px;
`;

const HeaderDiv = styled.View`
width:149px;
height:16px;


`;

const StarDiv = styled.View`
flex:1;
flexDirection:row;

`;

const InfoDiv = styled.View`

`;

const TopLine = styled.View`
width:1.68px;
height:64px;
background-color:#c4c4c4;
position:relative;
margin-left:16px;
top:-78px;
left:250px;
`;

const SideLine = styled.View`
width:98.68px;
height:1.68px;
background-color:#c4c4c4;
position:relative;
margin-left:10px;
top:-140px;
left:260px;
`;

const ProfilePic = styled.View`
width:7.22px;
height:7px;
position:relative;

`;

const UserDiv = styled.View`
position:relative;
top:-140px;
left:240px;
`;

const TimeDiv = styled.View`
color: ${props => props.color ? props.color : "#c4c4c4" };
position:relative;
flexDirection:row;
left:55px;

`;

const SeperatingDiv = styled.View`
width:350px;
height:2px;
background-color:#c4c4c4;
position:relative;
left:11.2px;
top:-150px;
`;

const Main = styled.View`

`;

const Usernametext = styled.Text`
color:#c4c4c4;
position:relative;
top:-10px;
left:100px;
`;

const UsernameDiv = styled.View`
color:grey
`;

const ProfileImageIcon = styled.View`
position:relative;
left:47px;
top:5px;
`;

const TimeText = styled.Text`
color:#c4c4c4;
position:relative;
left:-15px;
top:-15px;
`;

const IconImage = styled.Image`
width:70px;
height:70px;
margin-top:10px;
border-radius:10px;
`;

const StarText = styled.Text`
position:relative;
right:0px;
left:4px;
bottom:0px;
font-size:16px;
color: #38383F;
`;

const StarImg = styled.Image`
width:20px;
height:20px;
`;

const RevText = styled.Text`

`;

const SearchResult = ({ IImage, textDistance, color, width, height, stars, name, username, time, revnum, textWait, id }) => {
   
   const [photo, setPhoto] = useState('');
   useEffect(() => {
      const fetch = async () => {
         const newPhoto = await getAllPhotos(IImage[0].photo_reference);
         setPhoto(newPhoto);
         console.log(newPhoto);
      }
      fetch();
   }, [])
   const history = useHistory();
   return <View><Main>

{/* <TouchableOpacity
        onPress={() => {
            history.push("/restauranttitle"+id)
          }}> */}
      <Link to = {"/restauranttitle/"+id}>
      <OverlayDiv>
     <Text>{
      photo && <SearchImg color={color}><IconImage source={{uri:(photo)}}/></SearchImg>  
      }</Text>


      
<HeaderDiv>
<Header><Text>{name}</Text></Header>
<StarDiv>
  
<Star><StarImg source={require('../../public/Star.png')}/><StarText>{stars}</StarText></Star>



</StarDiv>
<ReviewNumber><RevText>{revnum}</RevText></ReviewNumber>
</HeaderDiv>
<TopLine></TopLine>

<InfoDiv>
<Distance><Text>{textDistance}</Text></Distance>
<SideLine></SideLine>
<WaitTime><Text>{textWait}</Text></WaitTime>
<UserDiv>
   <ProfileImageIcon>
<Image source={require('../../public/mapoverlayprofile.png')}/>
</ProfileImageIcon>
<RecentUpdate> <Usernametext>{username}</Usernametext></RecentUpdate>
<TimeDiv><TimeText>at {time}</TimeText></TimeDiv>
</UserDiv>
</InfoDiv>
<SeperatingDiv></SeperatingDiv>
</OverlayDiv>
</Link>
{/* </TouchableOpacity> */}
   </Main>
  
   </View>
   
}

import '../../public/NoLine_Logo_Final.png'

SearchResult.defaultProps= {
   textWait:"10 min",
   textDistance:"1.5 km",
   color:"#D4170B",
   width:"331px",
   height:"90px",
   backgroundColor:"#fafafa",
   stars:"5",
   name:null,
   username:"farhazl",
   time:"12:00 PM",
   revnum:null,
   IImage: '../../public/NoLine_Logo_Final.png',
   stars:"4",
   id:""
 }

export default SearchResult