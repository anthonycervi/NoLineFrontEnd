import React from "react";
import styled, { css } from "styled-components";

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconImg = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
`;

const TextContainer = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodIcon = ({ image, text }) => {
    return (
        <IconContainer>
            <IconImg img src={image} />
            <TextContainer>
                {text}
            </TextContainer>
        </IconContainer>
    );
};

FoodIcon.defaultProps = {
    text: "American",
    image: "/American.svg",
};

export default FoodIcon;
