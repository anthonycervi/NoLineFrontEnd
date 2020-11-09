import React from 'react';
import FilterSlider from '../comps/FilterSlider';
import EditBar from '../comps/EditBar';
import FoodIcon from '../comps/FoodIcon';
import Button from '../comps/Button';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topBar: {
        alignContent: 'center',
        marginTop: 50,
        position: 'absolute',
        left: 0,
        right: 75,
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
        
    },

    filterHeading:{
        fontSize: 16,
    },

    sliderFlex: {
        display: 'flex',
        flexDirection: 'column'
    },

    buttonCenter:{
        alignItems: 'center'
    }
})


export default function SearchFilters() {
    return <View>
        
        <View style={styles.topBar}>
            <EditBar left="Cancel" middle="Search Filters" right="Clear Filters" />
        </View>

        <View style={styles.filters}>
            <View>
                <View style={styles.sliderFlex}>
                    <FilterSlider text="Wait Time" slidenumber="10 min" number="2+ hours"/>
                </View>
            </View>

            <View >
                <View style={styles.sliderFlex}>
                    <FilterSlider text="Distance" slidenumber="10 km" number="50 km"/>
                </View>
            </View>

            <View>
                <Text style={styles.filterHeading}>Food</Text>
                <FoodIcon />
            </View>

            <View style={styles.buttonCenter}>
                <Button text="Save Changes"/>
            </View>
        </View>
        
    </View>
}