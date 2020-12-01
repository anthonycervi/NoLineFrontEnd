import React, {useState} from 'react';
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

import {
    addUser,
    addRating,
    getUserWithUid,
    registerUser,
    addReview,
    login,
    getReviewsByRestaurant,
    getUserFirstname,
    logout,
    addComment,
    getCommentsByRestaurant,
    addWaitTime,
    getWaitTime,
    addPoints,
    getAllPoints,
    getAllRestaurantByWaitTime,
    getAllRestaurants,
    getAllPhotos,
    getDistanceFromLatLonInKm,
    deg2rad,
} from '../database/functions';
  




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

    TitleText:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        color:'grey',
        // backgroundColor: "green",
        
    },

    TextDisplay:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        width:350,
        height: 49,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        fontSize: 30,
        
    },

    InsertText:{
        fontSize: 22,
        color: "#8486D1",
        fontWeight: "bold",       
    },


})

export default function ProfileBio({ onPress }) {
    const [fullname, setFullname] = useState("");

    const getUserName = async() => {
    try {
        const user= await getUserWithUid();
        setFullname(user.firstname);
    } catch (err) {
        console.log(err);
    }
}


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
            {/* {
                (<Profile key={user.firstname} profilename={(user.firstname)}></Profile>)
            } */}
        </View>

        <View style={styles.profAwards}>
        
            <UserPage />
        
        </View>

        <View style={styles.inputs}>
            <View style={styles.space}>
                <Text style={styles.TitleText}>Wait Times Reported</Text>
                <View style={styles.TextDisplay}>
                <Text style={styles.InsertText}>test</Text>
                </View>
            </View>

            <View style={styles.space}>
                <Text style={styles.TitleText}>Reviews Written</Text>
                <View style={styles.TextDisplay}>
                <Text style={styles.InsertText}>test</Text>
                </View>
            </View>

            <View style={styles.space}>
                <Text style={styles.TitleText}>Bio</Text>
                <View style={styles.TextDisplay}>
                <Text style={styles.InsertText}>test</Text>
                </View>
            </View>
        </View>

        <View style={styles.nav}>
            <Navigator />
        </View>  

    </View>
}