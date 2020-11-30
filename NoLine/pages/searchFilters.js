import React, {useState} from 'react';
import FilterSlider from '../comps/FilterSlider';
import EditBar from '../comps/EditBar';
import FoodIcon from '../comps/FoodIcon';
import Button from '../comps/Button';
import CheckIcon from '../comps/CheckIcon';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useHistory } from "react-router-native";


const styles = StyleSheet.create({
    topBar: {
        alignContent: 'center',
        position: 'absolute',
        right: -43,
        top:10
    },

    filters: {
        display: 'flex',
        // flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        alignContent: 'stretch',
        height: 1000,
        left: 20,
        width: 365,
        top:40
    },

    filterHeading:{
        fontSize: 16,
    },

    sliderFlex: {
        display: 'flex',
        flexDirection: 'column',
        top:10
    },

    buttonCenter:{
        alignItems: 'center',
        bottom:150
    },

    filterItem:{
        bottom:70
    },

    page:{
        height:1000,
    },
})


export default function SearchFilters() {
    const history = useHistory();
    return <View styles={styles.page}>
        <ScrollView>
            
        <View style={styles.topBar}>
            <EditBar left="Cancel" middle="Search Filters" right="Clear Filters" />
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
        </ScrollView>
    </View>
}
