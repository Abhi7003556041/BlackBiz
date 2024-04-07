//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image,StatusBar as RNStatusbar } from 'react-native';
import { AppBar, Container, Icon, StatusBar,  } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const BusinessHaeder = (props: {title: any}) => {
    return (
        <View>
            <AppBar.Back
                title={props.title  ? props.title  : 'Business' }

                titleStyle={{
                    fontFamily: FONTS.semibold,
                    fontSize: 18
                }}
                backgroundColor={'transparent'}
                titlePosition='left'
                rightActions={[
                    {
                        icon:
                            <Pressable
                            onPress={() => NavigationService.navigate('watchList')}
                            >
                                <Image
                                    source={require('../../Assets/images/wishlist.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: 21,
                                        width: 21
                                    }}
                                />
                            </Pressable>

                    },
                    {
                        icon:
                            <Pressable
                                // onPress={() => NavigationService.navigate('Search')}
                            >

                                <Icon
                                    name='search1'
                                    type='AntDesign'
                                    style={{
                                        marginLeft: 20
                                    }}
                                    size={20}
                                />
                            </Pressable>

                    },

                ]}
                onLeftIconPress={() => NavigationService.back()}
                style={{
                    marginTop: RNStatusbar.currentHeight,
                }}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
        </View>
    );
};



//make this component available to the app
export default BusinessHaeder;
