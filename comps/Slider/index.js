import React from "react";
import styled, { css } from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;   
`;

const TextContainer = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 5px;
`;

const MainMinute = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SliderConst = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Decrease = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #ffd25b;
  margin: 10px;
`;

const MinusIcon = styled.img`
width:100%;
height:8px;
`;

const MainSlider = styled.input`
  display: flex;
  align-items: center;
  color: #ffd25b;;
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #ffd25b;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    }
    &::-webkit-slider-thumb{
        -webkit-apperance:none;
        apperance:none;
        height: 15px;
        width: 15px;
        border-radius: 10px;
        background-color: #ffd25b;
        cursor: pointer;
  
    }&::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #E5E5E5;
    cursor: pointer;
  }

`;

const Increase = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #ffd25b;
  margin: 10px;
`;

const PlusIcon = styled.img`
width:100%;
height:8px;
`;

const NumberContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
`;

const MinuteContainer = styled.div`
  font-size: 13px;
  width:13%;
`;

const HourContainer = styled.div`
  font-size: 13px;
  display: flex;
`;

const Slider = ({text}) => {
    return (
        <SliderContainer>
            <TextContainer>
                Report the current wait time!
      </TextContainer>
            <MainMinute>
                {text}
      </MainMinute>
            <SliderConst>
                <Decrease>
                    <MinusIcon img src="Minus.svg" />
                </Decrease>
                <MainSlider input type="range" min="0" max="120" step="5"/>
                <Increase>
                    <PlusIcon img src="Plus.svg" />
                </Increase>
            </SliderConst>
            <NumberContainer>
                <MinuteContainer>
                    0 min
        </MinuteContainer>
                <HourContainer>
                    2+ hours
        </HourContainer>
            </NumberContainer>
        </SliderContainer>
    );
};

Slider.defaultProps = {
    text:"15 min"
}

export default Slider;