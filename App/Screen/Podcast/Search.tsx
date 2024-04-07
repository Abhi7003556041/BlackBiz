//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, FlatList, TextInput } from 'react-native';
import { AppBar, AppTextInput, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Component/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';


// create a component
const SearchPodcast = () => {
    const colors = useTheme();

    const recentSearch = [
        {
            name: 'Happy People Are Annoying'
        },

        {
            name: 'How Our Brains Construct Reality'
        },
        {
            name: 'Understanding Social Position'
        },
        {
            name: 'Persuasion in a World'
        },
        {
            name: 'How to Make What Matters Effortless'
        },
        {
            name: 'Reclaiming Our Future with Technology'
        },
        {
            name: 'The Myth of Meritocracy'
        },
    ]
    return (
        <Container>
            <View
            style={{
                height: 80,
            }}
            >
            <BackHeader />
            </View>
           
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10,
                        
                    }}
                >
                    <AppTextInput
                        leftIcon={{
                            name: 'search',
                            type: 'EvilIcon',

                        }}
                        placeholder='Podcast'
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
                        onSubmitEditing={() => NavigationService.navigate('SearchPodcastInList')}
                    />

                   

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 16
                            }}
                        >Recent Searches</Text>
                        <Text
                            style={{
                                color: colors.primaryThemeColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 14
                            }}
                        >Clear All</Text>

                    </View>

                    <View
                        style={{
                            height: 0.5,
                            opacity: 0.5,
                            backgroundColor: colors.primaryFontColor,
                            marginTop: 10
                        }}
                    />
                    <FlatList
                        data={recentSearch}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        marginTop: 20,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: colors.secondaryFontColor,
                                            fontFamily: FONTS.semibold,
                                            fontSize: 14
                                        }}
                                    >{item.name}</Text>

                                    <View
                                        style={{
                                            height: 22,
                                            width: 22,
                                            borderWidth: 1,
                                            borderColor: colors.secondaryFontColor,
                                            borderRadius: 8,
                                            alignItems: 'center',
                                            paddingVertical: 2
                                        }}
                                    >

                                        <Icon
                                            name='cross'
                                            type='Entypo'
                                            size={15}
                                            color={colors.secondaryFontColor}
                                        />
                                    </View>


                                </View>
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
export default SearchPodcast;
