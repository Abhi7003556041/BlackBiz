//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { Container } from 'react-native-basic-elements';
import NewPodcastCard from '../../Component/Podcast/NewPodcastCard';
import NavigationService from '../../Services/NavigationService';

// create a component
const History = () => {
    const newUpdates = [
        {
            image: require('../../Assets/images/OfficeLadies.png'),
            name: '865: Daniel Levin | Finding a Missing Person in the Middle',
            subText: 'Office Ladies',
            onPress: () => NavigationService.navigate('Episode'),
            playList: true,
            downloads: true,
            type: 'history'
           
        },
        {
            image: require('../../Assets/images/invest.png'),
            name: '927: Deep Dive | How to Quit Your Job the Right Way',
            onPress: () => NavigationService.navigate('Episode'),
            subText: 'Invest',
            playList: false,
            downloads: false,
            type: 'history'
           
        },
        {
            image: require('../../Assets/images/stuff.png'),
            name: '862: Jocko Willink | The Winning Example of Extreme..',
            subText: 'Stuff You Should Know',
            onPress: () => NavigationService.navigate('Episode'),
            playList: false,
            downloads: true,
            type: 'history'
           
        },
        {
            image: require('../../Assets/images/pivot.png'),
            name: '821: Dwyane Wade | A Life Bigger Than Basketball',
            subText: 'Pivot Show',
            onPress: () => NavigationService.navigate('Episode'),
            playList: false,
            downloads: true,
            type: 'history'
           
        },
        {
            image: require('../../Assets/images/WhatADay.png'),
            name: '729: David Rubenstein | Patriotic Philanthropy and L...',
            subText: 'What a day',
            onPress: () => NavigationService.navigate('Episode'),
            playList: false,
            downloads: false,
            type: 'history'
           
        }
    ]
    return (
      <Container>
         <FlatList
                data={newUpdates}
                renderItem={({ item }) => {
                    console.log('item', item);

                    return (
                        <NewPodcastCard item={item} />
                    )
                }}
            />
      </Container>
    );
};


//make this component available to the app
export default History;
