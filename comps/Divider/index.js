import React from "react";
import styled, { css } from "styled-components";
import { View, Text } from 'react-native';


const DividerContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DividerLine = styled.View`
  border-top: 2px solid #e6e6e6;
  width: 100%;
  margin-top: 50px;
`;

const Divider = () => {
  return (
    <View>
    <DividerContainer>
      <DividerLine />
    </DividerContainer>
    </View>
  );
};

export default Divider;
