import React from 'react';
import Profile from '../comps/Profile';
import AchievementIcon from '../comps/AchievementIcon';
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

    acheivements: {
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gridColumnGap:100,
        gridRowGap:20,
    },

    nav:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'fixed',
    },

    completed:{
        color:'#CBCBCB',
    },

    uncompleted:{
        color:'#000000',
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

        <View style={styles.achievements}>
            <View style={styles.completed}>
                <AchievementIcon text="Refer a friend" text2="+100"/>
            </View>

            <View style={styles.uncompleted}>
                <AchievementIcon text="Share on Facebook" text2="+100"/>
            </View >

            <View style={styles.uncompleted}>
                <AchievementIcon text="Write a Review" text2="+300"/>
            </View>

            <View style={styles.completed}>
                <AchievementIcon text="Report a wait time" text2="+2000" />
            </View>
        </View>

        <View style={styles.nav}>
            <Navigator />
        </View>
    </View>
}