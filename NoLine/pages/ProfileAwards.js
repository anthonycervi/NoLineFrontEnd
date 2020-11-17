import React from 'react';
import Profile from '../comps/Profile';
import AchievementIcon from '../comps/AchievementIcon';
import UserPage from '../comps/UserPage';
import Navigator from '../comps/Navigator';
import {View, Text, StyleSheet} from 'react-native';
import {NativeRouter, Route, Link} from "react-router-native";
// import axios from 'axios';


// const [backend, setBackend] = useState(null);
// const [profilepic, setProfilepic] = useState(null);
// const [name, setName] = useState(null);
// const [location, setLocation] = useState(null);
// const [points, setPoints] = useState(null);

// const HandleGetProfile = async () => {
//     var resp = await axios.get(//Adrian's backend);
//     console.log("clicked");
//     setBackend([...resp.data]);
//     setProfilepic([...resp.data]);
//     setName([...resp.data]);
//     setLocation([...resp.data]);
//     setPoints([...resp.data]);
// }

const styles = StyleSheet.create({
    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:20
    },

    profAwards: {
        display:'flex',
    },

    acheivementscont: {
        display:'flex',
    },

    achievements:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        margin:20
    },

    nav:{
        position:'relative',
        top:20
    },

    edittext:{
        fontSize:20,
        justifyContent:"flex-end",
        left:338,
        bottom:-10,
        color:"#9D9D9D"
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
            <Profile/>
        </View>

        <View style={styles.profAwards}>
            <Link to="/profilebio">
            <UserPage />
            </Link>
        </View>

        <View style={styles.achievementscont}>
            <View style={styles.achievements}>
                <AchievementIcon text="Refer a friend" text2="+100"/>
                <AchievementIcon text="Share on Facebook" text2="+100"/>
            </View>


            <View style={styles.achievements}>
                <AchievementIcon text="Write a Review" text2="+300"/>
                <AchievementIcon text="Report a wait time" text2="+2000" />
            </View>

        </View>

        <View style={styles.nav}>
            <Navigator />
        </View>
    </View>
}