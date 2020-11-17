import React from 'react';
import Profile from '../comps/Profile';
import InputComp from '../comps/InputComp';
import UserPage from '../comps/UserPage';
import Navigator from '../comps/Navigator';
import {View, Text, StyleSheet} from 'react-native';
import {NativeRouter, Route, Link} from "react-router-native";

const styles = StyleSheet.create({
    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:10,

    },

    profAwards: {
        display:'flex',
        marginBottom:20,
    },

    inputs: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginLeft:4
    },

    nav:{
        display:'flex',
        position:'relative',
        marginBottom:-4
    },

    edittext:{
        fontSize:20,
        justifyContent:"flex-end",
        left:338,
        bottom:-10,
        color:"#9D9D9D"
    },

    space:{
        marginBottom:30,
    },

})

export default function ProfileBio() {
    return <View>
        
        <Link to="editprofile">
        <Text style={styles.edittext}>
            Edit
        </Text>
        </Link>

        <View style={styles.profileComp}>
            <Profile />
        </View>

        <View style={styles.profAwards}>
        <Link to="/profileawards">
            <UserPage />
        </Link>
        </View>

        <View style={styles.inputs}>
            <View style={styles.space}>
                <InputComp text="Wait Times Reported"/>
            </View>

            <View style={styles.space}>
                <InputComp text="Reviews Written" />
            </View>

            <View style={styles.space}>
                <InputComp text="Bio" height="100"/>
            </View>
        </View>

        <View style={styles.nav}>
            <Navigator />
        </View>
    </View>
}