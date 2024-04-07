//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar as RNStatusbar } from 'react-native';
import { AppBar, Container, StatusBar, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const BackHeader = () => {
    const colors = useTheme()
    return (
       <View>
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
       </View>
    );
};



//make this component available to the app
export default BackHeader;
