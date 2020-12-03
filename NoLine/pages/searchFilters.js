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
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        alignContent: 'stretch',
        height: 1000,
        width: "90%",
        top: 40
    },

    waittimeheader: {
        fontSize: 20,
        top: 40,
        left: 20
    },

    waittimeslider: {
        // display: 'flex',
        // flexDirection: 'column',
        bottom: 30,
        // width: "50%",
        // right: -170,
    },

    buttonCenter: {
        alignItems: 'center',
        bottom: 65,

    },

    filterItem: {
        bottom: 40,
        left: -9,
        marginTop: 40,
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
        bottom: 40
    },

    foodheader: {
        fontSize: 20
    },

    waittimeheader:{
        fontSize:20,
        right:130,
        top:30
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
                            <Text style={styles.cancelClear}>Clear Filters</Text>
                        </TouchableOpacity>
                    </View>
                </View>













                <View>
                    <Text style={styles.waittimeheader}>Wait Time</Text>
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
                                minimumValueLabel="0 min"
                                maximumValueLabel="2+ hours"
                            />

                        </View>
                    {/* </View> */}












                    <View>
                        <Text style={styles.distanceheading}>Distance</Text>
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
                                minimumValueLabel="1km"
                                maximumValueLabel="50km"
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

                   









                        <View style={styles.buttonCenter}>
                            <Button onPress={() => {
                            history.push("/savechanges/" + keyword)
                        }}text="SAVE CHANGES" buttonfontsize={24}/>
                        </View>
                    {/* </View> */}
                </View>
            </View>
        </ScrollView>
    </View>
}
