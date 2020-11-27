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
        margin:20,
        top: 22,
    },

    profAwards: {
        display:'flex',
        margin:0,
        // top: 22,
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
        // left:338,
        // bottom:-10,
        color:"#9D9D9D"
    },

    edittextCont:{
        width: 34,
        justifyContent:"center",
        left:330,
        top: 36,
        color:"#9D9D9D"
    },

    MainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },

    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        left: 3,
        bottom: 6,
    },
})

export default function ProfileBio() {
    return <View style={styles.MainContainer}>

        <View style={styles.edittextCont}>
            
            <Text style={styles.edittext}>
                
            </Text>
            
        </View>

    <View style={styles.container}>

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

    </View>
}