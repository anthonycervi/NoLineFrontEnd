import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native';
import {NativeRouter, Route, Link, useHistory} from "react-router-native";
import YellowLine from '../../public/yellowline.png'


const TopDiv = styled.View`
width: ${props => props.width ? props.width :"375px"};
height: ${props => props.height ? props.height :"23px"};
flexDirection:row;
position:relative;
right:30px;
`;

const GreyDiv = styled.View`
width:350px;
height:2px;
position:relative;
background-color:#999999;
position:relative;
top:20px;
`;

const YellowDiv = styled.View`
width:175px;
height:4px;
right:170px;
position:relative;
background-color:#FFD25B;

`;

const ProfileText = styled.Text`
position:relative;
left:115px;
`;

const MainDiv = styled.View`
display:flex;
`;

const AwardsText =styled.Text`
position:relative;
right:110px;
`;

const YellowLineDiv = styled.Image`
position:absolute;
    top:0;
    left:0;
    width:20px;
    height:20px;
`;

const YellowLinePNG = {
  src: YellowLine
}

const UserPage = ({width,height, award, profile, onPress}) => {
   const history = useHistory();

   const [isEnabled, setIsEnabled] = useState(0);
   
   return <View><TopDiv>
       <ProfileText>



      <TouchableOpacity 
        onPress={() => {
        onPress("Profile")
        isEnabled(1)
        }} 
        onPress={() => {
            history.push("/profilebio")
          }}>     
          <Text>{profile}</Text>
          {setIsEnabled===1 ? <YellowLineDiv source={YellowLinePNG.src}/> : null}
          </TouchableOpacity>



      </ProfileText>
<GreyDiv></GreyDiv>
<MainDiv>
<AwardsText>



<TouchableOpacity onPress={() => {
        onPress("Awards")
        isEnabled(2)
        }} 
        onPress={() => {
            history.push("/profileawards")
          }}> 
   <Text>{award}</Text>
   {setIsEnabled===2 ? <YellowLineDiv source={YellowLinePNG.src}/> : null}

   </TouchableOpacity>



</AwardsText>
{/* <YellowDiv></YellowDiv> */}
</MainDiv>
   </TopDiv>
   </View>
}

UserPage.defaultProps= {
award:"Awards",
profile:"Profile"
 }

export default UserPage