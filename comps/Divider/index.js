import React from "react";
import styled, { css } from "styled-components";

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DividerLine = styled.div`
  border-top: 2px solid #e6e6e6;
  width: 100%;
  margin-top: 50px;
`;

const Divider = () => {
  return (
    <DividerContainer>
      <DividerLine />
    </DividerContainer>
  );
};

export default Divider;
