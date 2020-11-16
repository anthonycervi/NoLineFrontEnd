import React from 'react';
import Profile from '../comps/Profile';
import EditBar from '../comps/EditBar';
import inputComp from '../comps/inputComp';
import Button from '../comps/Button';
import {View, Text, StyleSheet} from 'react-native';
import InputComp from '../comps/inputComp';

const styles = StyleSheet.create({
    bar :{
        display:'flex',
        marginTop:50,
        position:'absolute',
        alignItems:'center'
    },


    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },

    inputs: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },

    buttons: {
        display:'flex',
        alignItems:'center',
    }
})

export default function ProfileBio() {
    return <View>
        <View style={styles.bar}>
            <EditBar />
        </View>

        <View style={styles.profileComp}>
            <Profile />
        </View>

        <View style={styles.inputs}>
            <View>
                <InputComp text="Name"/>
            </View>

            <View>
                <InputComp text="Email"/>
            </View >

            <View>
                <InputComp text="Password"/>
            </View>

            <View>
                <InputComp text="Confirm Password"/>
            </View>

            <View>
                <InputComp text="Location"/>
            </View>

            <View>
                <InputComp text="Bio" height="130"/>
            </View>
        </View>

        <View style={styles.buttons}>
            <Button buttonheight="49" buttonwidth="238" text="SAVE CHANGES" buttoncolor="white" buttonbgcolor="#FFD25B"/>
        </View>
    </View>
}