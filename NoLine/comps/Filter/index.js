import React from 'react';
import styled from 'styled-components/native';
import {View,Image, TouchableOpacity} from "react-native";
import {Link, useHistory} from "react-router-native";

const FilterContainer = styled.View`
    width: 30;
    height: 30;
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
  const history = useHistory();
       return <View><FilterContainer style ={{}}>
            <TouchableOpacity  
                            onPress={() => {
                                history.push("/filterpage")
                            }}>
              <FilterImage source={require('../../public/Filter.png')}/>
              </TouchableOpacity>
              </FilterContainer>
              
              </View>
    
    }

    Filter.defaultProps= {}

export default Filter;