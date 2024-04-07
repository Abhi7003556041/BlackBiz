//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar as RNStatusbar, ScrollView, Image, FlatList } from 'react-native';
import { AppBar, AppButton, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import NewPodcastCard from '../../Component/Podcast/NewPodcastCard';
import { FONTS } from '../../Constants/Fonts';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import NavigationService from '../../Services/NavigationService';
type Props = StackScreenProps<AppStackModel,'NewUpdates'>
// create a component
const NewUpdates = (props:Props) => {
    const colors = useTheme();
    const [allPodcast] = useState(props.route.params.data) 
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
                title='New Updates'
                titleStyle={{
                    fontFamily: FONTS.semibold,
                    fontSize: 18
                }}
                backgroundColor={'transparent'}
                titlePosition='left'
                rightActions={[

                    // {
                    //     icon:
                    //         <Pressable
                    //             onPress={() => NavigationService.navigate('Search')}
                    //         >
                    //             <Icon
                    //                 name='dots-horizontal-circle-outline'
                    //                 type='MaterialCommunityIcon'
                    //                 style={{
                    //                     marginLeft: 20
                    //                 }}
                    //                 size={25}
                    //             />
                    //         </Pressable>

                    // },

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
                        marginTop: 15,
                        marginHorizontal: 10
                    }}
                >
                   <FlatList
                        data={allPodcast}
                        renderItem={({ item }) => {
                            console.log('item', item);

                            return (
                                <NewPodcastCard item={item} data={allPodcast} />
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
export default NewUpdates;
