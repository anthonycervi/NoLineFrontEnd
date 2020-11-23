import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image} from 'react-native';
import {NativeRouter, Route, Link} from "react-router-native";


const TopDiv = styled.View`
width: ${props => props.width ? props.width :"375px"};
height: ${props => props.height ? props.height :"23px"};
flexDirection:row;
position:relative;
right:30px;
`;

const GreyDiv = styled.View`
width:186px;
height:2px;
position:relative;
background-color:#999999;
position:relative;
top:20px;
`;

const YellowDiv = styled.View`
width:186px;
height:4px;
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
left:60px;
`;

const UserPage = ({width,height,award,profile}) => {
   return <View><TopDiv>
       <ProfileText>
          <Link to="profilebio">
          <Text>{profile}</Text>
          </Link>
      </ProfileText>
<GreyDiv></GreyDiv>
<MainDiv>
<AwardsText>
   <Link to="profileawards">
   <Text>{award}</Text>
   </Link>
</AwardsText>
<YellowDiv></YellowDiv>
</MainDiv>
   </TopDiv>
   </View>
}

UserPage.defaultProps= {
award:"Awards",
profile:"Profile"
 }

export default UserPage