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
        margin:0,
    },

    acheivementscont: {
        display:'flex',
    },

    achievements:{
        bottom:10

    },

    nav:{
        position:'relative',
        top:4,
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
            <UserPage />
        </View>

        <View>
            <View style={styles.achievements}>
                <AchievementIcon/>
            </View>

        </View>

        <View style={styles.nav}>
            <Navigator />
        </View>
    </View>
}