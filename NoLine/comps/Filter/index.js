import React from 'react';
import styled from 'styled-components/native';
import {View} from "react-native";

const FilterContainer = styled.View`
    width: 21;
    height: 21;
    background-color: #EBEBEB;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
     `;



 const Filter = ({}) => {
       return <View><FilterContainer style ={{}}>
              </FilterContainer>
              </View>
    
    }

    Filter.defaultProps= {}

export default Filter;