//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Container } from 'react-native-basic-elements';
import AnalysisBlog from '../../Component/Business/AnalysisBlog';
import BusinessHaeder from '../../Component/Header/BusinessHeader';

// create a component
const SeeAllAnalysisBlog = () => {
    const Analysisdata = [
        {
            image: require('../../Assets/images/Cohen.png'),
            title: 'Asia Session: Regional Indices Jumps As Fed Rides To The Rescue; Dollar Sags',
            name: 'Jeffray Harley'
        },
        {
            image: require('../../Assets/images/Harely.png'),
            title: "3 Stock To Watch In The Coming Week: Apple, Nike, Pacific Gas & Electric",
            name: 'Chris Cohen'
        },
        {
            image: require('../../Assets/images/Monica.png'),
            title: 'Opening Bell: Futures, Stocks Wobble On Hope Vs Despair Marry-Go-Ground',
            name: 'Hey Hey Monica'
        },
        {
            image: require('../../Assets/images/Cohen.png'),
            title: 'Asia Session: Regional Indices Jumps As Fed Rides To The Rescue; Dollar Sags',
            name: 'Jeffray Harley'
        },
        {
            image: require('../../Assets/images/Harely.png'),
            title: "3 Stock To Watch In The Coming Week: Apple, Nike, Pacific Gas & Electric",
            name: 'Chris Cohen'
        },
        {
            image: require('../../Assets/images/Monica.png'),
            title: 'Opening Bell: Futures, Stocks Wobble On Hope Vs Despair Marry-Go-Ground',
            name: 'Hey Hey Monica'
        },
        {
            image: require('../../Assets/images/Cohen.png'),
            title: 'Asia Session: Regional Indices Jumps As Fed Rides To The Rescue; Dollar Sags',
            name: 'Jeffray Harley'
        },
        {
            image: require('../../Assets/images/Harely.png'),
            title: "3 Stock To Watch In The Coming Week: Apple, Nike, Pacific Gas & Electric",
            name: 'Chris Cohen'
        },
        {
            image: require('../../Assets/images/Monica.png'),
            title: 'Opening Bell: Futures, Stocks Wobble On Hope Vs Despair Marry-Go-Ground',
            name: 'Hey Hey Monica'
        },
    ]
    return (
        <Container>
            <BusinessHaeder title='Analysis Blog' />
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                     <FlatList
                            data={Analysisdata}
                            renderItem={({ item }) => {
                                return (
                                    <AnalysisBlog item={item} />
                                )
                            }}
                        />

                        <View 
                        style={{
                            height: 20
                        }}
                        />
                </View>
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default SeeAllAnalysisBlog;
