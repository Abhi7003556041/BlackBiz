//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native';
import { AppBar, Text, Container, StatusBar, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const PayUsingCrad = () => {
    const colors = useTheme()
    const feesType = [
        {
            image: <Image
                source={require('../../Assets/images/reading.png')}
                resizeMode='contain'
                style={{
                    height: 40,
                    width: 40
                }}
            />,
            name: 'Tuition  Fees',
        },
        {
            image: <Image
                source={require('../../Assets/images/collegeFees.png')}
                resizeMode='contain'
                style={{
                    height: 40,
                    width: 40
                }}
            />,
            name: 'School Fees',
        },
        {
            image: <Image
                source={require('../../Assets/images/schoolFees.png')}
                resizeMode='contain'
                style={{
                    height: 40,
                    width: 40
                }}
            />,
            name: 'College Fees',
        },
        {
            image: <Image
                source={require('../../Assets/images/home.png')}
                resizeMode='contain'
                style={{
                    height: 40,
                    width: 40
                }}
            />,
            name: 'Hostel Fees',
        },
    ]
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
                rightActions={[
                    {
                        icon: <Text style={{
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            color: colors.primaryFontColor
                        }}>FAQ</Text>
                    },
                    {
                        icon: <Text style={{
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            color: colors.primaryFontColor,
                            marginLeft: 10
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
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >

                    <Text.Heading
                        title='Pay Education Fees Using Credit Card'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 18,
                            color: colors.primaryFontColor
                        }}
                    />

                    <Text.SubHeading
                        title='Or Prepaid / Debit card or UPI'
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: 12,
                            color: colors.primaryFontColor,
                            marginVertical: 10
                        }}
                    />


                </View>

                <View
                    style={{
                        height: 31,
                        backgroundColor: colors.primaryThemeColor,
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color: colors.pageBackgroundColor,
                            fontSize: 12,
                            paddingHorizontal: 10,
                            marginVertical: 5
                        }}
                    >Select Type of Fees</Text>
                </View>

                {feesType.map((item, index) => {
                    return (
                        <View
                            style={{
                                marginTop: 20,
                                flexDirection: 'row',
                                marginHorizontal: 20,
                            }}
                        >
                            {item.image}

                            <View
                                style={{
                                    marginLeft: 15,
                                    borderBottomWidth: 1,
                                    borderColor: colors.primaryFontColor,
                                    width: '85%',
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 14,
                                        color: colors.primaryFontColor
                                    }}
                                >{item.name}</Text>
                            </View>

                        </View>
                    )
                })}
                <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginTop: 20,
                    paddingBottom: 10
                }}
                >
                    <Image
                        source={require('../../Assets/images/educationfeebanner.png')}
                        resizeMode='contain'
                        style={{
                            // height: 116,
                            width: '100%',
                            
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
export default PayUsingCrad;
