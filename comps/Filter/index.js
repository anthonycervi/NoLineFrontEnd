import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    width: 21px;
    height: 21px;
    background-color: #EBEBEB;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(/Filter.svg); 
    background-repeat: no-repeat;
     `;



 const Filter = ({}) => {
       return <FilterContainer style ={{}}>
              </FilterContainer>
    
    }

    Filter.defaultProps= {}

export default Filter;