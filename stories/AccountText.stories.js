import React from 'react';
import AccountText from '../comps/AccountText';



export default {
    title: 'Example/AccountText',
    component: AccountText
}



export const DefaultAccountText = () => <AccountText/>

export const CreateNow = () => <AccountText text="Don't have an account? &nbsp;" text2=" Create Now"/>

export const SignIn = () => <AccountText text="Have an account? &nbsp;" text2=" Sign In"/>

export const ForgotPassword = () => <AccountText text="Forgot Password?"/>