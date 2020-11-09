import React from 'react';
import EditBar from '../comps/EditBar';
import SearchResult from '../comps/SearchResult';
import Navigator from '../comps/Navigator';
import Message from '../comps/Message';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topBar: {
        alignContent: 'center',
        marginTop: 50,
        position: 'absolute',
        left: 0,
        right: 75,
    },

    flexx: {
        display: 'flex',
        // flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        height: 750,
        left: 0,
        width: 365,
    },

    filterHeading:{
        fontSize: 18,
    },

    sliderFlex: {
        display: 'flex',
        flexDirection: 'column'
    },

    navBar:{
       // alignItems: 'center',
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
        width: 400
    },

    bigContainer:{
        marginTop: 75,
        padding: 15
    },

    paddingSpace:{
        height: 10
    }
})

export default function reviews() {
    return <View>

        <View style={styles.topBar}>
            <EditBar left=" " middle=" " right="Back" />
        </View>

    <View style={styles.bigContainer}>
        <View>
            <Text style={styles.filterHeading}>Search Result Comp Goes Here...</Text>
            {/* <SearchResult /> */}
        </View>

        <View style={styles.paddingSpace}></View>
        <View style={styles.paddingSpace}></View>

        <View style={styles.flexx}>
            <View>
                <Text style={styles.filterHeading}>Reviews{"\n"}</Text>
            </View>

            <View style={styles.paddingSpace}></View>

            <View >
                <View style={styles.sliderFlex}>
                    <Message title="Amazing Place!" messageBody="Of course one expects really fresh sushi in Vancouver.  Restaurant sushi is not only fresh but well portioned and presented.  With a beautiful ambiance overlooking the water it is a pleasure to dine at." timestamp="2m" username="user123"/>
                </View>
            </View>

        </View>

        <View style={styles.navBar}>
                <Navigator />
        </View>
    </View>
    </View>
}