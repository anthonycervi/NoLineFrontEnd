import React from 'react';
import styled from 'styled-components/native';
import {View, Image} from "react-native";
import NoLine_Logo_Only from '../../public/NoLine_Logo_Only.png';



const LogoImage = styled.Image`
    width: 180px;
    height: 180px;
    resize-mode: contain;
    align-items: center;
    justify-content: center;
`;


const NoLine_Logo_OnlyPNG = {
    src: NoLine_Logo_Only
}

 const LogoOnly = ({Image}) => {
       return <View>

                <LogoImage source={NoLine_Logo_OnlyPNG.src} />
            
              </View>
    
    }

    LogoOnly.defaultProps= {
        image: "/NoLine_Logo_Only.png",
    }

export default LogoOnly;