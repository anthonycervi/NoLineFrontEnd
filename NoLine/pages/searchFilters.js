import React, { useState } from 'react';
import FilterSlider from '../comps/FilterSlider';
import EditBar from '../comps/EditBar';
import FoodIcon from '../comps/FoodIcon';
import Button from '../comps/Button';
import CheckIcon from '../comps/CheckIcon';
import { View, Text, StyleSheet, ScrollView, onPress, TouchableOpacity } from 'react-native';
import { useHistory } from "react-router-native";
import SliderText from 'react-native-slider-text';


const styles = StyleSheet.create({
    topBar: {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        position: 'relative',
        top: 10
    },

    filters: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        // justifyContent: 'space-evenly',
        alignItems: 'stretch',
        alignContent: 'stretch',
        // height: 1000,
        width: "90%",
        top: -0
    },

    WaitTimeText: {
        fontSize: 17,
        // top: 40,
        // left: 20,
        // backgroundColor: "blue",
        // width:60,
        // height:30,
    },

    TitleDiv: {
        fontSize: 20,
        top: 95,
        left: 0,
        // backgroundColor: "pink",
        width:120,
        // height:30,
        alignItems: 'center',
        justifyContent: "center",
    },

    TitleDiv2: {
        fontSize: 20,
        top: 120,
        left: 118,
        // backgroundColor: "pink",
        width:120,
        // height:30,
        alignItems: 'center',
        justifyContent: "center",
        position:"relative",
    },

    waittimeslider: {
        bottom: 20,
        // backgroundColor:"lightblue",
        // width:120,
        height:80,
    },

    buttonCenter: {
        alignItems: 'center',
        bottom: 684,
        right:-154,

    },

    filterItem: {
        bottom: 40,
        left: -9,
        marginTop: 40,
        top: 30,
    },

    greenBar: {
        width: "90%",
        position: "relative",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        flex: 1,
        marginTop: 15,
    },

    clearRight: {
        alignItems: 'flex-end',
        flex: 1,
        color: "#9D9D9D",
        fontSize: 20,
    },

    cancelLeft: {
        flex: 1,
    },

    cancelClear: {
        color: "#9D9D9D",
        fontSize: 20,
    },

    cancelClear2: {
        color: "#8486D1",
        fontSize: 20,
    },

    ContentContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },

    distanceheading: {
        bottom: 20,
        fontSize: 20
    },

    distanceslider: {
        bottom: 0,
        // backgroundColor:"lightblue",
        height:80,
    },

    foodheader: {
        fontSize: 20
    },

    waittimeheader:{
        fontSize:20,
        right:130,
        top:30
    },

    Values2:{
        width: "96%",
        height: 10,
        position: "relative",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        flex: 1,
        // marginTop: 15,
        // backgroundColor:"red",
        position:"absolute",
        left:7,
        top:205,

    },

    Values:{
        width: "96%",
        height: 10,
        position: "relative",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        flex: 1,
        // marginTop: 15,
        // backgroundColor:"red",
        position:"absolute",
        left:8,
        top:79,

    },

    ValueLeft:{
        flex: 1,
    },

    ValueRight:{
        alignItems: 'flex-end',
        flex: 1,
        color: "#9D9D9D",
        fontSize: 20,
    },

    TextStyles:{
        color: "#9D9D9D",
        fontSize: 14,
    },

    Filler:{
        color: "blue",
        height:190,
        width:200,
        bottom:20,
    },
})


export default function SearchFilters() {
    const [sliderValue, setSliderValue] = useState(0);
    const history = useHistory();

    const [keyword, setKeyword] = useState("")

    return <View styles={styles.page}>
        <ScrollView>
            <View style={styles.ContentContainer}>
                {/* <View style={styles.topBar}>
                        <EditBar left="Cancel" middle="Search Filters" right="Clear Filters" />
                    </View> */}







                <View style={styles.greenBar}>
                    <View style={styles.cancelLeft}>
                        <TouchableOpacity
                            onPress={() => {
                                history.push("/searchicon")
                            }}>
                            <Text style={styles.cancelClear}>Cancel</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.clearRight}>
                        <TouchableOpacity
                            onPress={() => {
                                history.push("/searchicon")
                            }}>
                            <Text style={styles.cancelClear2}></Text>
                        </TouchableOpacity>
                    </View>
                </View>













                <View style={styles.TitleDiv}>
                    <Text style={styles.WaitTimeText}>Wait Time</Text>
                </View>


                <View style={styles.filters}>
                    {/* <View> */}
                        <View style={styles.waittimeslider}>
                            <SliderText 
                                style={{ width: 200, height: 40, justifyContent: "center",}}
                                stepValue={5}
                                minimumValue={0}
                                maximumValue={120}
                                onValueChange={(id) => setSliderValue(id)}
                                sliderValue={sliderValue}
                                minimumTrackTintColor="#FFD25B"
                                maximumTrackTintColor="#C4C4C4"
                                thumbTintColor="#FFD25B"
                                minimumValueLabel=" "
                                maximumValueLabel=" "
                            />

                        </View>
                    {/* </View> */}


                <View style={styles.Values}>
                    <View style={styles.ValueLeft}>
                            <Text style={styles.TextStyles}>0 mins</Text>                     
                                </View>

                                <View style={styles.ValueRight}>
                            <Text style={styles.TextStyles}>2 hrs +</Text>                    
                    </View>
                </View>








                <View style={styles.TitleDiv2}>
                    <Text style={styles.WaitTimeText}>Distance</Text>
                </View>


                        {/* <View> */}
                            {/* <View style={styles.sliderFlex}> */}
                            {/* <View> */}
                        <View style={styles.distanceslider}>
                            <SliderText
                                style={{ width: 200, height: 40 }}
                                stepValue={1}
                                minimumValue={0}
                                maximumValue={50}
                                onValueChange={(id) => setSliderValue(id)}
                                sliderValue={sliderValue}
                                minimumTrackTintColor="#FFD25B"
                                maximumTrackTintColor="#C4C4C4"
                                thumbTintColor="#FFD25B"
                                minimumValueLabel=" "
                                maximumValueLabel=" "
                            />
                            </View>
                        {/* </View> */}
                        
                        <View style={styles.filterItem}>
                            {/* <Text style={styles.filterHeading}>Food{"\n"}</Text> */}
                            <FoodIcon onPress={(word)=> {
                            setKeyword(word)
                            }} />
                        </View>
                    {/* </View> */}

                   


                    <View style={styles.Values2}>
                    <View style={styles.ValueLeft}>
                            <Text style={styles.TextStyles}>1 km</Text>                     
                                </View>

                                <View style={styles.ValueRight}>
                            <Text style={styles.TextStyles}>50 km</Text>                    
                    </View>
                </View>





{/* <View style={styles.Filler}></View> */}

                        <View style={styles.buttonCenter}>
                            <Button onPress={() => {
                            history.push("/savechanges/" + keyword)
                        }}text="Done" buttonfontsize={20} buttonbgcolor="#00000000" buttoncolor="#8486D1" buttonbordercolor="#00000000"/>
                        </View>
                    {/* </View> */}
                </View>
            </View>
        </ScrollView>
    </View>
}
