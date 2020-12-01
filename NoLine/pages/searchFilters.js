import React, {useState} from 'react';
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
        display:"flex",
        alignItems: "center",
        alignContent: "center",
        position: 'relative',
        top:10
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
        top:40
    },

    waittimeheader:{
        fontSize: 20,
        top:40,
        left:20
    },

    waittimeslider: {
        display: 'flex',
        flexDirection: 'column',
        bottom:30
    },

    buttonCenter:{
        alignItems: 'center',
        bottom:75,
     
    },

    filterItem:{
        bottom:40
    },

    greenBar:{
        width: "90%",
        position: "relative",
        justifyContent: "center",
        display:"flex",
        alignItems: "center",
        alignContent: "center",
        flexDirection:"row",
        flex: 1,
        marginTop:15,
    },

    clearRight:{
        alignItems: 'flex-end',
        flex: 1,
        color: "#9D9D9D",
        fontSize: 20,
    },

    cancelLeft:{
        flex: 1,
    },

    cancelClear:{
        color: "#9D9D9D",
        fontSize: 20,
    },

    ContentContainer:{
        width:"100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },

    distanceheading:{
        bottom:20,
        fontSize:20
    },

    distanceslider:{
        bottom:40
    },

    foodheader:{
        fontSize:20
    }
})


export default function SearchFilters() {
    const [sliderValue, setSliderValue] = useState(0);
    const history = useHistory();
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



                    <View style={styles.filters}>
                        <View>
                            <View style={styles.sliderFlex}>
                                <FilterSlider text="Wait Time" slidenumber="10 min" number="2+ hours"/>
                            </View>
                        </View>

                        <View>
                            <View style={styles.sliderFlex}>
                                <FilterSlider text="Distance" slidenumber="10 km" number="50 km"/>
                            </View>
                        </View>
                        
                        <View style={styles.filterItem}>
                            <Text style={styles.filterHeading}>Food{"\n"}</Text>
                            <FoodIcon />
                        </View>

                        <View style={styles.buttonCenter}>
                            <Button onPress={() => {
                            history.push("/signinbutton")
                        }}text="SAVE CHANGES" buttonfontsize={24}/>
                        </View>
                    </View>
            </View> 
        </ScrollView>
    </View>
}
