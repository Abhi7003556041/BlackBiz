//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Container } from 'react-native-basic-elements';
import StockDetails from '../../Component/Business/StockDetails';
import BusinessHaeder from '../../Component/Header/BusinessHeader';

// create a component
const SeeAllNews = () => {
    const stockDetails = [
        {
            image: require('../../Assets/images/Stock(1).png'),
            title: 'Stocks - S&P Ralies as Tech Rebounds, Tariffs…',
            type: 'OverView'


        },
        {
            image: require('../../Assets/images/Stock(3).png'),
            title: 'Point/Counterpoint: The Case for the Euro',
            type: 'OverView'

        },
        {
            image: require('../../Assets/images/Stock(4).png'),
            title: 'Coronavirus ‘Second Wave’ could mean more losses for Euro to US Dollar',
            type: 'OverView'

        },
        {
            image: require('../../Assets/images/Stock(1).png'),
            title: 'Stocks - S&P Ralies as Tech Rebounds, Tariffs…',
            type: 'OverView'


        },
        {
            image: require('../../Assets/images/Stock(3).png'),
            title: 'Point/Counterpoint: The Case for the Euro',
            type: 'OverView'

        },
        {
            image: require('../../Assets/images/Stock(4).png'),
            title: 'Coronavirus ‘Second Wave’ could mean more losses for Euro to US Dollar',
            type: 'OverView'

        },
        {
            image: require('../../Assets/images/Stock(1).png'),
            title: 'Stocks - S&P Ralies as Tech Rebounds, Tariffs…',
            type: 'OverView'


        },
        {
            image: require('../../Assets/images/Stock(3).png'),
            title: 'Point/Counterpoint: The Case for the Euro',
            type: 'OverView'

        },
        {
            image: require('../../Assets/images/Stock(4).png'),
            title: 'Coronavirus ‘Second Wave’ could mean more losses for Euro to US Dollar',
            type: 'OverView'

        },
    ]
    return (
        <Container>
            <BusinessHaeder title='News' />
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <FlatList
                        data={stockDetails}
                        renderItem={({ item }) => {
                            return (
                                <StockDetails item={item} />
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
export default SeeAllNews;
