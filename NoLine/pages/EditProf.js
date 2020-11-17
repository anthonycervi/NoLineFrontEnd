import React from 'react';
import Profile from '../comps/Profile';
import EditBar from '../comps/EditBar';
import Button from '../comps/Button';
import {View, Text, StyleSheet} from 'react-native';
import InputComp from '../comps/InputComp';


const styles = StyleSheet.create({
    bar :{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:-15
    },


    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:20
    },

    inputs: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginLeft:4
    },

    buttons: {
        display:'flex',
        alignItems:'center',
    },

    space:{
        marginBottom:30,
    },

    pagespace:{
        marginBottom:-220
    }
})

export default function ProfileBio() {
    return <View style={styles.pagespace}>

        <View style={styles.bar}>
            <EditBar />
        </View>

        <View style={styles.profileComp}>
            <Profile/>
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
            {/* <Button buttonheight="49" buttonwidth="238" text="SAVE CHANGES" buttoncolor="white" buttonbgcolor="#FFD25B"/> */}
        </View>
    </View>
}