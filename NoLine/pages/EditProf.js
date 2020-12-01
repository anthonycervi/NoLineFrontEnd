import React from 'react';
import EditProfile from '../comps/EditProfile';
import EditBar from '../comps/EditBar';
import Button from '../comps/Button';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import InputComp from '../comps/InputComp';
import {Link, useHistory} from "react-router-native";



const styles = StyleSheet.create({
    // bar :{
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     top:10,
        
    // },


    profileComp: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        top: 27,
        margin: 10,
        marginBottom:50,
        // backgroundColor:"blue",
    },

    allContent: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'blue',
        width:"100%",
    },

    inputs: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginLeft:4,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderBottomWidth:0,
        marginTop:6,
        // width: "70%",
    },

    buttons: {
        display:'flex',
        alignItems:'center',
        // margin:60,
        // marginBottom:90,
    },

    space:{
        marginBottom:30,
        marginRight: 3,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },

    pagespace:{
        height:"100%",
        // justifyContent:'center',
        // alignItems:'center',
        // display:'flex',
    
    },

    edittext:{
        fontSize:20,
        justifyContent:"center",
        
        color:"#9D9D9D",
    },

    buttonArea:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'green',
        // height:100,
        marginTop:50,
        width:"100%",
    },

    edittextCont:{
        width: 61,
        justifyContent:"center",
        left:28,
        top: 30,
        color:"#9D9D9D",
        
    }, 

})

const ButtonStyles = StyleSheet.create({
    cont:{
        display:'flex',
        alignItems:'center',
        margin:60,
        marginBottom:90, 
    }
    })

// const ButtonSave = StyleSheet.create({
//     display:'flex',
//     alignItems:'center',
//     margin:60,
//     marginBottom:90,
// })

export default function EditProf() {
    const history = useHistory();
    return <View style={styles.pagespace}>
                <View style={styles.allContent}>
                    <ScrollView>

                    <TouchableOpacity style={styles.edittextCont}
                    onPress={() => {
                        history.push("/profilebio")
                    }}>
                            <Text style={styles.edittext}>
                            Cancel
                            </Text>            
                    </TouchableOpacity>

                

                    <View style={styles.profileComp}>
                        <EditProfile/>
                    </View>

                    <View style={styles.inputs}>
                        <View style={styles.space}>
                            <InputComp text="Name"/>
                        </View>

                        {/* <View style={styles.space}>
                            <InputComp text="Email"/>
                        </View >

                        <View style={styles.space}>
                            <InputComp text="Password" width="100px"/>
                        </View>

                        <View style={styles.space}>
                            <InputComp text="Confirm Password"/>
                        </View> */}

                        <View style={styles.space}>
                            <InputComp text="Location"/>
                        </View>
       
                        <View style={styles.space}>
                            <InputComp text="Bio" height="130"/>
                        </View>
        
                    </View>

                    <View style={styles.buttonArea}>
        
                            <Button  style={ButtonStyles.cont} onPress={() => {
                        history.push("/profilebio")
                    }} text="SAVE CHANGES" buttoncolor="white" buttonfontsize={24}/>
                        </View>
                    
                    </ScrollView>
            </View>           
    </View>

}



// style={ButtonSave}