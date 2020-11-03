import React from 'react';
import styled from 'styled-components/native';
import {View} from "react-native";

const FilterContainer = styled.View`
    width: 21px;
    height: 21px;
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