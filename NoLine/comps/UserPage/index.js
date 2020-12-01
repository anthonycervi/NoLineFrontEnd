import React from 'react';
import styled, {css} from 'styled-components/native';
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native';
import {NativeRouter, Route, Link, useHistory} from "react-router-native";


const TopDiv = styled.View`
width: ${props => props.width ? props.width :"375px"};
height: ${props => props.height ? props.height :"23px"};
flexDirection:row;
position:relative;
right:30px;
`;

const GreyDiv = styled.View`
width:175px;
height:2px;
position:relative;
background-color:#999999;
position:relative;
top:20px;
`;

const YellowDiv = styled.View`
width:175px;
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

const UserPage = ({width,height, award, profile, onPress}) => {
   const history = useHistory();
   return <View><TopDiv>
       <ProfileText>



       <TouchableOpacity  
        onPress={() => {
            history.push("/profilebio")
          }}>       
          <Text>{profile}</Text>
          </TouchableOpacity>



      </ProfileText>
<GreyDiv></GreyDiv>
<MainDiv>
<AwardsText>



<TouchableOpacity 
        onPress={() => {
            history.push("/profileawards")
          }}> 
   <Text>{award}</Text>
   </TouchableOpacity>



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