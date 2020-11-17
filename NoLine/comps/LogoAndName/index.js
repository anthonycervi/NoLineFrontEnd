import React from 'react';
import styled from 'styled-components/native';
import {View, Image} from "react-native";
import NoLine_Logo_Final from '../../public/NoLine_Logo_Final.png';



const LogoImage = styled.Image`
    width: 250px;
    height: 250px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;


const NoLine_Logo_FinalPNG = {
    src: NoLine_Logo_Final
}

 const LogoAndName = ({Image}) => {
       return <View>

                <LogoImage source={NoLine_Logo_FinalPNG.src} />
            
              </View>
    
    }

    LogoAndName.defaultProps= {
        image: "/NoLine_Logo_Only.png",
    }

export default LogoAndName;