//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native';
import { AppBar, Text, Container, StatusBar, useTheme, Icon, AppButton } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const SelectOperator = () => {
    const colors = useTheme()
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                style={{
                    marginTop: RNStatusbar.currentHeight,
                    marginHorizontal: 10
                }}
                rightActions={[
                    {
                        icon: <Text style={{
                            fontFamily: FONTS.medium,
                            fontSize: 15,
                            color: colors.primaryFontColor
                        }}>Help</Text>
                    },

                ]}
                onLeftIconPress={() => NavigationService.back()}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            {/* <ScrollView
                contentContainerStyle={{
                    flex: 1
                }}
            > */}

                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        flex: 1
                    }}
                >
                    <Text.Heading
                        title='Enter Connection Details'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 18
                        }}
                    />

                    <View
                        style={{
                            height: 47,
                            borderWidth: 1,
                            borderColor: colors.primaryFontColor,
                            borderRadius: 10,
                            marginTop: 20,
                            paddingVertical: 10,
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/dgitalTv.png')}
                        />
                        <Text
                            style={{
                                marginLeft: 15,
                                fontFamily: FONTS.medium,
                                fontSize: 15,
                                color: colors.primaryFontColor
                            }}
                        >XYZ Digital TV</Text>
                    </View>



                    <View
                        style={{
                            height: 47,
                            borderWidth: 1,
                            borderColor: colors.primaryFontColor,
                            borderRadius: 10,
                            marginTop: 20,
                            paddingVertical: 10,
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                fontSize: 12,
                                color: colors.primaryFontColor
                            }}
                        >Mobile Number/ Account Number / MCA ID</Text>



                    </View>
                    <View
                        style={{
                            flex: 1,
                            
                        }}
                    />


                    <AppButton
                        title='Proceed'
                        style={{
                            borderRadius: 30,
                            
                        }}
                        textStyle={{
                            fontFamily:  FONTS.medium,
                            fontSize: 15,
                            color: colors.pageBackgroundColor
                        }}
                    
                    />

                    <View 
                    style={{
                        height: 20
                    }}
                    />
                </View>
            {/* </ScrollView> */}
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default SelectOperator;
