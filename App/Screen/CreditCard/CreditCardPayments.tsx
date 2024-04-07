//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar as RNStatusbar, Image, Pressable } from 'react-native';
import { AppBar, Text, Container, StatusBar, useTheme, AppTextInput } from 'react-native-basic-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const CreditCardPayment = () => {
    const colors = useTheme()
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
                        title='Pay Your Credit Card Bill'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    />

                    <Text.SubHeading
                        title='Late Fee Protection, Only on Guypay'
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: 12,
                            marginTop: 10,
                            color: colors.primaryFontColor
                        }}
                    />


                    <Text
                        style={{
                            marginTop: 20,
                            fontFamily: FONTS.semibold,
                            color: colors.primaryFontColor,
                            fontSize: 15
                        }}
                    >Enter Credit Card Number</Text>

                    <AppTextInput
                        placeholder='xxxx - xxxx - xxxx - xxxx'
                        mainContainerStyle={{
                            marginTop: 15,

                        }}
                        placeholderTextColor={colors.primaryFontColor}
                        inputStyle={{
                            fontFamily: FONTS.regular
                        }}
                        inputContainerStyle={{
                            paddingHorizontal: 10
                        }}
                    />

                    <AppTextInput
                        placeholder='Nick Name'
                        mainContainerStyle={{
                            marginTop: 15,

                        }}
                        inputStyle={{
                            fontFamily: FONTS.regular
                        }}
                        inputContainerStyle={{
                            paddingHorizontal: 10
                        }}
                    />
                    <View
                        style={{
                            marginTop: 20
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/creditcard.png')}
                            style={{
                                height: 97,
                                width: '100%',
                            }}
                            resizeMode='contain'
                        />
                    </View>

                    <View
                        style={{
                            height: 185,
                            borderWidth: 1,
                            borderColor: colors.primaryFontColor,
                            marginTop: 20,
                            borderRadius: 10,
                        }}
                    >

                        <View
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/remainder.png')}
                                resizeMode='contain'
                                style={{
                                    height: 32,
                                    width: 32
                                }}
                            />

                            <Pressable
                                style={{
                                    marginLeft: 10,
                                    borderBottomWidth: 1,
                                    borderColor: colors.primaryFontColor,
                                    paddingVertical: 15,
                                    width: '85%'
                                }}
                                onPress={() => NavigationService.navigate('ManageNotification')}
                            >
                                <Text.Heading
                                    title='Manage Reminders'
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 15
                                    }}
                                />


                                <Text.SubHeading
                                    title='Manage your credit card bills reminders'
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 10,
                                        paddingVertical: 5
                                    }}
                                />

                            </Pressable>

                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/faq.png')}
                                resizeMode='contain'
                                style={{

                                }}
                            />

                            <Pressable
                                style={{
                                    marginLeft: 10,
                                    borderBottomWidth: 1,
                                    borderColor: colors.primaryFontColor,
                                    paddingVertical: 15,
                                    width: '85%',
                                    paddingBottom: 5
                                }}
                                onPress={() => NavigationService.navigate('FAQ')}
                            >
                                <Text.Heading
                                    title='Frequently asked Questions'
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 15
                                    }}
                                />


                                <Text.SubHeading
                                    title='Find answers to commonly asked questions
                                    related to credit card bill payment'
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 10,
                                        paddingVertical: 5,

                                    }}
                                />

                            </Pressable>

                        </View>




                    </View>




                </View>

                <View
                    style={{
                        height: 64,
                        backgroundColor: 'rgba(0, 0, 0, 0.36)',
                        marginTop: 20,
                        flexDirection: 'row',
                        // paddingVertical: 10,
                        alignItems: 'center',
                        marginHorizontal: 20,
                        justifyContent: 'space-between',
                        marginBottom: 30
                    }}
                >
                    <Image
                        source={require('../../Assets/images/Supported.png')}
                        resizeMode='contain'
                    />

                    <Image
                        source={require('../../Assets/images/american.png')}
                        resizeMode='contain'
                    />

                    <Image
                        source={require('../../Assets/images/visa.png')}
                        resizeMode='contain'
                    />


                    <Image
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MasterCard_logo.png/640px-MasterCard_logo.png'}}
                        resizeMode='contain'
                        style={{
                            height: 35,
                            width:35
                        }}
                    />


                    <Image
                        source={require('../../Assets/images/rupay.png')}
                        resizeMode='contain'
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
export default CreditCardPayment;
