import React from "react";
import styled, { css } from "styled-components";

const NavContainer = styled.div`
  height: 87px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0.5px solid black;
  padding-bottom: 30px;
`;

const Magnifier = styled.img`
width:50px;
height:50px;
`;

const Location = styled.img`
width:50px;
height:50px;`;

const User = styled.img`
width:50px;
height:50px;`;

const Navigator = () => {
  return (
    <div>
      <NavContainer>
        <Magnifier src="/Search.svg" />
        <Location src="/LocationPin.svg" />
        <User src="/Profile.svg" />
      </NavContainer>
    </div>
  );
};

export default Navigator;
