//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, StatusBar as RNStatusbar, Image, FlatList } from 'react-native';
import { AppBar, AppTextInput, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import { ToggleButtonGroupContext } from 'react-native-paper/lib/typescript/components/ToggleButton/ToggleButtonGroup';
import NewPodcastCard from '../../Component/Podcast/NewPodcastCard';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const Discover = () => {
    const colors = useTheme()
    const popularData = [
        {
            image: require('../../Assets/images/Tom.png'),

        },
        {
            image: require('../../Assets/images/PlanetMoney.png'),

        },
        {
            image: require('../../Assets/images/CanYouKeep.png'),

        },
        {
            image: require('../../Assets/images/death.png'),

        },
        {
            image: require('../../Assets/images/Jordan.png'),

        },
    ]

    const newUpdates = [
        {
            image: require('../../Assets/images/OfficeLadies.png'),
            name: '865: Daniel Levin | Finding a Missing Person in the Middle',
            subText: 'Office Ladies',
            onPress: () => NavigationService.navigate('Episode'),
            playList: true,
        },
        {
            image: require('../../Assets/images/invest.png'),
            name: '927: Deep Dive | How to Quit Your Job the Right Way',
            onPress: () => NavigationService.navigate('Episode'),
            subText: 'Invest',
            playList: false
        },
        {
            image: require('../../Assets/images/stuff.png'),
            name: '862: Jocko Willink | The Winning Example of Extreme..',
            subText: 'Stuff You Should Know',
            onPress: () => NavigationService.navigate('Episode'),
            playList: false
        },
        {
            image: require('../../Assets/images/pivot.png'),
            name: '821: Dwyane Wade | A Life Bigger Than Basketball',
            subText: 'Pivot Show',
            onPress: () => NavigationService.navigate('Episode'),
            playList: false
        },
        {
            image: require('../../Assets/images/WhatADay.png'),
            name: '729: David Rubenstein | Patriotic Philanthropy and L...',
            subText: 'What a day',
            onPress: () => NavigationService.navigate('Episode'),
            playList: false
        }
    ]
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                titlePosition='left'
                rightActions={[
                    {
                        icon:
                            <Pressable
                            // onPress={() => NavigationService.navigate('Scan')}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        color: colors.primaryFontColor
                                    }}
                                >Help</Text>
                            </Pressable>

                    },
                    {
                        icon:
                            <Pressable
                                onPress={() => NavigationService.navigate('Discover')}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        color: colors.primaryFontColor,
                                        marginLeft: 10
                                    }}
                                >Settings</Text>

                            </Pressable>

                    },

                ]}
                onLeftIconPress={() => NavigationService.back()}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/michrophone.png')}
                            resizeMode='contain'
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                color: colors.primaryFontColor,
                                marginLeft: 20
                            }}
                        >Discover</Text>

                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Pressable
                        // onPress={() => NavigationService.navigate('Search')}
                        >
                            <Icon
                                name='dots-horizontal-circle-outline'
                                type='MaterialCommunityIcon'
                                style={{
                                    marginLeft: 20
                                }}
                                size={25}
                            />
                        </Pressable>

                    </View>

                    <AppTextInput
                        leftIcon={{
                            name: 'search',
                            type: 'EvilIcon',

                        }}
                        placeholder='Search'
                        mainContainerStyle={{
                            marginTop: 10,


                        }}
                        inputContainerStyle={{
                            borderColor: colors.primaryFontColor,
                            backgroundColor: 'rgba(219, 219, 219, 0.10)'
                        }}
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            fontSize: 12
                        }}
                    />

                    <View
                        style={{
                            paddingVertical: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 16,
                                color: colors.primaryFontColor
                            }}
                        >
                            Popular & Trending Authors
                        </Text>

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                                color: colors.primaryThemeColor
                            }}
                        >
                            See all
                        </Text>

                    </View>


                    <FlatList
                        horizontal={true}
                        data={popularData}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 10
                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            height: 100,
                                            width: 100,

                                        }}
                                        resizeMode='contain'
                                    />

                                </View>
                            )
                        }}
                    />

                    <View
                        style={{
                            paddingVertical: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 16,
                                color: colors.primaryFontColor
                            }}
                        >
                            Most Listened Podcasts
                        </Text>

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                                color: colors.primaryThemeColor
                            }}
                        >
                            See all
                        </Text>

                    </View>

                    <FlatList
                        data={newUpdates}
                        renderItem={({ item }) => {
                            console.log('item', item);

                            return (
                                <NewPodcastCard item={item} />
                            )
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
export default Discover;
