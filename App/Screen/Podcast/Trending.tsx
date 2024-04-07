//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, StatusBar as RNStatusbar, Image, FlatList } from 'react-native';
import { AppBar, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import PodcastTrendingCard from '../../Component/Podcast/PodcastTrendingCard';
import { FONTS } from '../../Constants/Fonts';


import NavigationService from '../../Services/NavigationService';

// create a component
const Trending = () => {
   
    return (
        <Container>
            <AppBar.Back
            title='Trending'
            titleStyle={{
                fontFamily:  FONTS.semibold,
                fontSize: 18
            }}
                backgroundColor={'transparent'}
                titlePosition='left'
                rightActions={[
                    {
                        icon:
                            <Pressable
                                onPress={() => NavigationService.navigate('Scan')}
                            >
                                <Icon
                                    name='link'
                                    type='Entypo'
                                    size={25}
                                />
                            </Pressable>

                    },
                    {
                        icon:
                            <Pressable
                                onPress={() => NavigationService.navigate('Search')}
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
                <PodcastTrendingCard />
            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Trending;
