//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, } from 'react-native';
import { Icon,useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const PodcastTrendingCard = () => {
    const colors = useTheme();
    const trendingData = [
        {
            image: require('../../Assets/images/Jordan.png'),
            name: 'The Jordan Harbinger Sh...'
        },
        {
            image: require('../../Assets/images/Pod.png'),
            name: 'Pod Save America',
        },
        {
            image: require('../../Assets/images/invest.png'),
            name: 'James Hendrickson'
        },
        {
            image: require('../../Assets/images/WhatADay.png'),
            name: 'What a Day'
        },
        {
            image: require('../../Assets/images/OfficeLadies.png'),
            name: 'Daniel Levin'
        }
    ]
    return (
        <View
        style={{
            marginTop: 20,
            marginHorizontal: 15
        }}
    >
        <FlatList
            data={trendingData}
            renderItem={({ item }) => {
                return (
                    <View
                        style={{
                            flexDirection: 'row',
                            // alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: '30%',
                                // marginTop: 10,
                                marginBottom: 15
                            }}
                        >
                            <Image
                                source={item.image}
                                resizeMode='contain'
                                style={{
                                    height: 100,
                                    width: 100
                                }}
                            />
                        </View>

                        <View
                            style={{
                                marginLeft: 10,
                                paddingHorizontal: 10,
                                width: '60%',
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.semibold,
                                    fontSize: 15
                                }}
                            >{item.name}</Text>

                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    paddingVertical: 5,
                                    fontFamily: FONTS.medium,
                                    fontSize: 12
                                }}
                            >685 Podcasts</Text>

                        </View>

                        <View
                            style={{
                                width: '10%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Icon
                                name='dots-three-vertical'
                                type='Entypo'
                                style={{
                                    marginLeft: 10
                                }}
                                size={15}
                            />
                        </View>
                    </View>
                )
            }}
        />


    </View>
    );
};



//make this component available to the app
export default PodcastTrendingCard;
