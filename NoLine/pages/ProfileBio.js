import React from 'react';
import Profile from '../comps/Profile';
import InputComp from '../comps/InputComp';
import UserPage from '../comps/UserPage';
import Navigator from '../comps/Navigator';
import {View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import {NativeRouter, Route, Link, useHistory} from "react-router-native";
import axios from 'axios';


// const [backend, setBackend] = useState(null);
// const [profilepic, setProfilepic] = useState(null);
// const [name, setName] = useState(null);
// const [location, setLocation] = useState(null);
// const [points, setPoints] = useState(null);
// const [waittime, setWaittime] = useState(null);
// const [reviewwritten, setReviewwritten] = useState(null);
// const [bio, setBio] = useState(null);

// const HandleGetProfile = async () => {
//     var resp = await axios.get(//Adrian's backend);
//     console.log("clicked");
//     setBackend([...resp.data]);
//     setProfilepic([...resp.data]);
//     setName([...resp.data]);
//     setLocation([...resp.data]);
//     setPoints([...resp.data]);
//     setWaittime([...resp.data]);
//     setReviewwritten([...resp.data]);
//     setBio([...resp.data]);
// }

const styles = StyleSheet.create({
    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        marginBottom:20,

    },

    profAwards: {
        display:'flex',
        marginBottom:35,
    },

    inputs: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginLeft:4,
        // width:"50%",
    },

    nav:{
        display:'flex',
        position:'relative',
        bottom:-27,
    },

    edittext:{
        fontSize:20,
        justifyContent:"flex-end",
        // left:338,
        // bottom:-3,
        color:"#9D9D9D"
    },

    space:{
        marginBottom:30,
        marginRight: 3,
        
    },

    edittextCont:{
        width: 34,
        justifyContent:"center",
        left:151,
        top: 4,
        color:"#9D9D9D",
        
    },

    PageCont:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        
    },
    

})

export default function ProfileBio({onPress}) {
    const history = useHistory();
    return <View style={styles.PageCont}>
        
        <TouchableOpacity style={styles.edittextCont} 
        onPress={() => {
            history.push("/editprofile")
          }}>              
                    <Text onPress={onPress} style={styles.edittext}>
                        Edit
                    </Text>
            
        </TouchableOpacity>

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
                <InputComp text="Reviews Written"/>
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