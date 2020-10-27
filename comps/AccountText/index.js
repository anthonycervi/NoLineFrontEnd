import React from 'react';
import styled from 'styled-components';




const AccountTextContainer = styled.p`
    position:relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-text: center;
    justify-content: center;
    font-family: Montserrat;
    font-weight: 400;
    font-style: normal;
    font-size: 11px;
    color: #B0B0B0;
     `;

 const AccountText = ({text, text2, span}) => {
       return <AccountTextContainer style ={{text, span}}>
                {text} <span>{text2}</span>
              </AccountTextContainer>
    
    }

// const AccountTextContainer = styled.div`
//     width: 500px;
//     height: 200px;
//     position:relative;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     align-text: center;
//     justify-content: center;
//      `;

// const AccountTextMain = styled.p`
//     position:relative;
//     color: ${props => props.accounttextcolor ? props.accounttextcolor : "white" };
//     font-family: Montserrat;
//     font-style: ${props => props.accounttext1fontstyle ? props.accounttext1fontstyle : "normal" };
//     font-weight: ${props => props.accounttext1fontweight ? props.accounttext1fontweight : "500" };
//     font-size: ${props => props.accounttext1fontsize ? props.accounttext1fontsize : "24px" };
//      `;

// const AccountTextBold = styled.p`
//     position:relative;
//     color: ${props => props.accounttextcolor ? props.accounttextcolor : "white" };
//     font-family: Montserrat;
//     font-style: ${props => props.accounttext2fontstyle ? props.accounttext2fontstyle : "normal" };
//     font-weight: ${props => props.accounttext2fontweight ? props.accounttext2fontweight : "500" };
//     font-size: ${props => props.accounttext2fontsize ? props.accounttext2fontsize : "24px" };
//     `;

     



//  const AccountText = ({text1, text2, accounttext1fontstyle, accounttext1fontweight, accounttext1fontsize, accounttext2fontstyle, accounttext2fontweight, accounttext2fontsize}) => {
//        return <AccountTextContainer style ={{}}>
//                 <AccountTextMain style ={{fontStyle: accounttext1fontstyle,
//                                           fontWeight: accounttext1fontweight,
//                                           fontSize: accounttext1fontsize}}>
//                     {text1}
//                 </AccountTextMain>

//                 <AccountTextBold style ={{fontStyle: accounttext2fontstyle,
//                                           fontWeight: accounttext2fontweight,
//                                           fontSize: accounttext2fontsize}}>
//                     {text2}
//                 </AccountTextBold>
//               </AccountTextContainer>
    
//     }

    AccountText.defaultProps= {
        text:"Defalt"
    }

export default AccountText;