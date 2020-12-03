import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from 'react-native';

import CheckIcon from '../CheckIcon';

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
import CheckImage from '../../public/check.png'


const Container = styled.View`
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const FlexItem = styled.TouchableOpacity`
    width: 100px;
    margin: 10px;
    align-items: center;
    justify-content: center;
    position:relative;
`;

const FoodImage = styled.Image`
    width: 40px;
    height: 30px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
    
`;

const CheckMark = styled.Image`
position:absolute;
    top:-10;
    right:15;
    width:20px;
    height:20px;
`;

const Label = styled.Text`
    text-align: center;
    line-height: 40px;
    font-size: 12px;
`;

const Check = styled.View`
    display:${props=>props.checked ? "inline-flex" : "none"};
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

const CheckPNG = {
    src: CheckImage
}

const FoodIcon = ({ image, text, onPress }) => {
    const[checked, setChecked] = useState(0);

    return (
        <View>
            <Container>
                <FlexItem onPress={() => {
                    onPress("American Food")
                    setChecked(1)
                }}>
                    <FoodImage source={AmericanPNG.src}/>
                    {checked===1 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Check>
                        <CheckIcon/>
                    </Check>
                    <Label>American</Label>
                </FlexItem >

                <FlexItem onPress={() => {
                    onPress("Chinese Food")
                    setChecked(2)
                }}>
                    <FoodImage source={ChinesePNG.src}/>
                    {checked===2 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Chinese</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("French Food")
                    setChecked(3)
                }}>
                    <FoodImage source={FrenchPNG.src}/>
                    {checked===3 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>French</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Indian Food")
                    setChecked(4)
                }}>
                    <FoodImage source={IndianPNG.src}/>
                    {checked===4 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Indian</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Italian Food")
                    setChecked(5)
                }}>
                    <FoodImage source={ItalianPNG.src}/>
                    {checked===5 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Italian</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Mexican Food")
                    setChecked(6)
                }}>
                    <FoodImage source={MexicanPNG.src}/>
                    {checked===6 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Mexican</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Arabic Food")
                    setChecked(7)
                }}>
                    <FoodImage source={MiddleEastPNG.src}/>
                    {checked===7 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Middle East</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Pizza Food")
                    setChecked(8)
                }}>
                    <FoodImage source={PizzaPNG.src}/>
                    {checked===8 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Pizza</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Seafood Food")
                    setChecked(9)
                }}>
                    <FoodImage source={SeafoodPNG.src}/>
                    {checked===9 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Seafood</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Sushi Food")
                    setChecked(10)
                }}>
                    <FoodImage source={SushiPNG.src}/>
                    {checked===10 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Sushi</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Thai Food")
                    setChecked(11)
                }}>
                    <FoodImage source={ThaiPNG.src}/>
                    {checked===11 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Thai</Label>
                </FlexItem>

                <FlexItem onPress={() => {
                    onPress("Vietnamese Food")
                    setChecked(12)
                }}>
                    <FoodImage source={VietnamesePNG.src}/>
                    {checked===12 ? <CheckMark source={CheckPNG.src}/> : null}
                    <Label>Vietnamese</Label>
                </FlexItem>
                
            </Container>
        </View>
    );
};

FoodIcon.defaultProps = {
    text: "American",
    image: "/American.svg",
    onPress:() => {}
};

export default FoodIcon;
