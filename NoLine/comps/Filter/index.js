import React from 'react';
import styled from 'styled-components/native';
import {View,Image} from "react-native";
import {Link} from "react-router-native";

const FilterContainer = styled.View`
    width: 40;
    height: 40;
    top:6.5;
    left:90;
    
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
     `;

const FilterImage = styled.Image`
position:relative;

width:30;
height:30;
`;


 const Filter = ({}) => {
       return <View><FilterContainer style ={{}}>
            <Link to ="/filterpage">
              <FilterImage source={require('../../public/Filter.png')}/>
              </Link>
              </FilterContainer>
              
              </View>
    
    }

    Filter.defaultProps= {}

export default Filter;