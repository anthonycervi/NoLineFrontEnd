import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';

import American from '../../public/American.png';
import Chinese from '../../public/Chinese.png';
import French from '../../public/French.png';
import Indian from '../../public/Indian.png';
import Italian from '../../public/Italian.png';
import Mexican from '../../public/Mexican.png';
import MiddleEast from '../../public/MiddleEast.png';
import Pizza from '../../public/Pizza.png';
import Seafood from '../../public/Seafood.png';
import Sushi from '../../public/Sushi.png';
import Thai from '../../public/Thai.png';
import Vietnamese from '../../public/Vietnamese.png';


const Container = styled.View`
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const FlexItem = styled.View`
    width: 100px;
    margin: 10px;
    align-items: center;
    justify-content: center;
`;

const FoodImage = styled.Image`
    width: 40px;
    height: 30px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
`;

const Label = styled.Text`
    text-align: center;
    line-height: 40px;
    font-size: 12px;
`;

const AmericanPNG = {
    src: American
}

const ChinesePNG = {
    src: Chinese
}

const FrenchPNG = {
    src: French
}

const IndianPNG = {
    src: Indian
}

const ItalianPNG = {
    src: Italian
}

const MexicanPNG = {
    src: Mexican
}

const MiddleEastPNG = {
    src: MiddleEast
}

const PizzaPNG = {
    src: Pizza
}

const SeafoodPNG = {
    src: Seafood
}

const SushiPNG = {
    src: Sushi
}

const ThaiPNG = {
    src: Thai
}

const VietnamesePNG = {
    src: Vietnamese
}


const FoodIcon = ({ image, text }) => {
    return (
        <View>
            <Container>
                <FlexItem>
                    <FoodImage source={AmericanPNG.src}/>
                    <Label>American</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={ChinesePNG.src}/>
                    <Label>Chinese</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={FrenchPNG.src}/>
                    <Label>French</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={IndianPNG.src}/>
                    <Label>Indian</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={ItalianPNG.src}/>
                    <Label>Italian</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={MexicanPNG.src}/>
                    <Label>Mexican</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={MiddleEastPNG.src}/>
                    <Label>Middle East</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={PizzaPNG.src}/>
                    <Label>Pizza</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={SeafoodPNG.src}/>
                    <Label>Seafood</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={SushiPNG.src}/>
                    <Label>Sushi</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={ThaiPNG.src}/>
                    <Label>Thai</Label>
                </FlexItem>

                <FlexItem>
                    <FoodImage source={VietnamesePNG.src}/>
                    <Label>Vietnamese</Label>
                </FlexItem>
                
            </Container>
        </View>
    );
};

FoodIcon.defaultProps = {
    text: "American",
    image: "/American.svg",
};

export default FoodIcon;
