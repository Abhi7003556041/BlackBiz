//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { AppButton, Container, useTheme } from 'react-native-basic-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BusinessCardForAllShare from '../../Component/Business/BusinessCardForAllShare';
import StockDetails from '../../Component/Business/StockDetails';
import BusinessHaeder from '../../Component/Header/BusinessHeader';
import { FONTS } from '../../Constants/Fonts';

// create a component
const WatchList = () => {
    const colors = useTheme()
    const allData = [
        {
            name: 'Peugeot',
            time_city: '11:43:21  |  Paris',
            status: true
        },
        {
            name: 'Nasdaq',
            time_city: '11:43:21  |  NASDAQ',
            status: false
        },
        {
            name: 'Bovespa',
            time_city: '11:43:21  |  BMF',
            status: false
        },

    ]
    const stockDetails = [
        {
            image:  require('../../Assets/images/Stock(1).png'),
            title: 'Stocks - S&P Ralies as Tech Rebounds, Tariffs…',

        },
        {
            image:  require('../../Assets/images/Stock(3).png'),
            title: 'Point/Counterpoint: The Case for the Euro',

        },
        {
            image:  require('../../Assets/images/Stock(4).png'),
            title: 'Coronavirus ‘Second Wave’ could mean more losses for Euro to US Dollar',

        },
    ]
    return (
        <Container>
            <BusinessHaeder title='Watch list'/>
            <ScrollView>
            <View
                style={{
                    marginTop: 10,
                    marginHorizontal: 10
                }}
            >
                <FlatList
                    data={allData}
                    renderItem={({ item }) => {
                        return (
                            <BusinessCardForAllShare item={item}
                            />
                        )
                    }}
                />
                <AppButton
                    title='Start Trading'
                    style={{
                        marginTop: 20,
                        marginHorizontal: 0
                    }}
                    textStyle={{
                        color: colors.pageBackgroundColor,
                        fontFamily: FONTS.semibold,
                        fontSize: 14,
                    }}
                />

                    <FlatList 
                    data={stockDetails}
                    renderItem={({item}) => {
                        return(
                            <StockDetails item={item}/>
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



//make this component available to the app
export default WatchList;
