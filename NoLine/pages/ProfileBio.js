import React from 'react';
import Profile from '../comps/Profile';
import InputComp from '../comps/InputComp';
import UserPage from '../comps/UserPage';
import Navigator from '../comps/Navigator';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },

    profAwards: {
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

    nav:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    }
})

export default function ProfileBio() {
    return <View>
        <View style={styles.profileComp}>
            <Profile />
        </View>

        <View style={styles.profAwards}>
            <UserPage />
        </View>

        <View style={styles.inputs}>
            <View>
                <InputComp text="Wait Times Reported"/>
            </View>

            <View>
                <InputComp text="Reviews Written" />
            </View>

            <View>
                <InputComp text="Bio" />
            </View>
        </View>

        <View style={styles.nav}>
            <Navigator />
        </View>
    </View>
}