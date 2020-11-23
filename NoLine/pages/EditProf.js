import React from 'react';
import EditProfile from '../comps/EditProfile';
import EditBar from '../comps/EditBar';
import Button from '../comps/Button';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import InputComp from '../comps/InputComp';
import {NativeRouter, Route, Link} from "react-router-native";



const styles = StyleSheet.create({
    bar :{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:5
    },


    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:20,
    },

    inputs: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginLeft:4,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderBottomWidth:0
    },

    buttons: {
        display:'flex',
        alignItems:'center',
        marginBottom:30
    },

    space:{
        marginBottom:30,
    },

    pagespace:{
        height:"100%",
    },
})

export default function ProfileBio() {
    return <View style={styles.pagespace}>
            <ScrollView>
            <View style={styles.bar}>
                <EditBar />
            </View>

            <View style={styles.profileComp}>
                <EditProfile/>
            </View>

            <View style={styles.inputs}>
                <View style={styles.space}>
                    <InputComp text="Name"/>
                </View>

                <View style={styles.space}>
                    <InputComp text="Email"/>
                </View >

                <View style={styles.space}>
                    <InputComp text="Password"/>
                </View>

                <View style={styles.space}>
                    <InputComp text="Confirm Password"/>
                </View>

                <View style={styles.space}>
                    <InputComp text="Location"/>
                </View>

                <View style={styles.space}>
                    <InputComp text="Bio" height="130"/>
                </View>
            </View>

            <View style={styles.buttons}>
                <Link to="/profilebio">
                    <Button text="SAVE CHANGES" buttoncolor="white" buttonfontsize={24}/>
                </Link>
            </View>
            </ScrollView>
    </View>

}