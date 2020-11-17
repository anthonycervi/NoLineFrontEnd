import React from 'react';
import InputBox from '../comps/InputBox';



export default {
    title: 'Example/InputBox',
    component: InputBox
}



export const DefaultInputBox = () => <InputBox text="test"/>

export const NameInputBox = () => <InputBox text="Name"/>

export const EmailInputBox = () => <InputBox text="Email"/>

export const PasswordInputBox = () => <InputBox text="Password"/>