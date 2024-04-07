//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, StatusBar as RNStatusbar, Image, FlatList } from 'react-native';
import { AppBar, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';

import BusinessCardForAllShare from '../../Component/Business/BusinessCardForAllShare';
import BusinessHaeder from '../../Component/Header/BusinessHeader';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const Index = () => {
    const colors = useTheme()
    const allData = [
        {
            name: 'Peugeot',
            time_city: '11:43:21  |  Paris',
            status: true,
            onpress: () =>  NavigationService.navigate('StartTrading')
        },
        {
            name: 'Nasdaq',
            time_city: '11:43:21  |  NASDAQ',
            status: false,
            onpress: () =>  NavigationService.navigate('StartTrading'),
        },
        {
            name: 'Bovespa',
            time_city: '11:43:21  |  BMF',
            status: false,
            onpress: () =>  NavigationService.navigate('StartTrading'),
        },
        {
            name: 'DAX',
            time_city: '11:43:21  |  Xetra',
            status: true,
            onpress: () =>  NavigationService.navigate('StartTrading')
        },
        {
            name: 'S&P/TSX',
            time_city: '11:43:21  |  CBOE',
            status: false,
            onpress: () =>  NavigationService.navigate('StartTrading')
        },
        {
            name: 'CAC40',
            time_city: '11:43:21  |  Paris',
            status: true,
            onpress: () =>  NavigationService.navigate('StartTrading')
        },
    ]
    return (
        <Container>
            <BusinessHaeder title='Business' />
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryThemeColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                                textDecorationLine: 'underline'

                            }}
                        >All Share</Text>
                        <Pressable
                        onPress={() => NavigationService.navigate('MyProfile')}
                        >
                            <Text
                                style={{
                                    color: colors.secondaryFontColor,
                                    fontFamily: FONTS.semibold,
                                    fontSize: 14,

                                }}
                            >My Portfolio</Text>
                        </Pressable>

                    </View>


                    <FlatList
                        data={allData}
                        renderItem={({ item }) => {
                            return (
                                <BusinessCardForAllShare item={item}
                                />
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
export default Index;
