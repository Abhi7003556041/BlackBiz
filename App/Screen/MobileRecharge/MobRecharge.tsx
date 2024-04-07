//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native';
import { AppBar, Text, Container, StatusBar, useTheme, AppTextInput, Icon } from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const MobRecharge = () => {
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
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 10
                    }}
                >
                    <Text.Heading
                        title='Recharge  or Pay Mobile Bills'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 18,
                            marginHorizontal: 10
                        }}
                    />


                    <Image
                        source={require('../../Assets/images/paymobileBill.png')}
                        style={{
                            height: 62,
                            width: '100%',
                            marginTop: 20,
                        }}
                        resizeMode='contain'
                    />


                    <AppTextInput
                        placeholder='Enter Name Or Mobile Number'
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            fontSize: 15,
                            paddingHorizontal: 10
                        }}
                        placeholderTextColor={colors.primaryFontColor}
                        inputContainerStyle={{
                            borderColor: colors.primaryFontColor,
                            marginTop: 30
                        }}
                        rightAction={<Icon
                            name='dial-pad'
                            type='Entypo'
                        />}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignItems: 'center',

                        }}
                    >
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' }}
                            style={{
                                height: 62,
                                width: 62,
                                borderRadius: 31
                            }}
                            resizeMode='contain'
                        />

                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottomWidth: 1,
                            borderBottomColor: '#fff',
                            paddingBottom: 10
                        }}>
                            <View
                                style={{
                                    flex: 1,
                                    marginLeft: 10,

                                }}
                            >
                                <Text.Heading
                                    title='Recharge My Number'
                                    style={{
                                        fontFamily: FONTS.regular,
                                        fontSize: 14
                                    }}
                                />
                                <Text.SubHeading
                                    title='XXXXXXX538'
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 10,
                                        marginTop: 5
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    // flex: 1,

                                }}
                            >

                                <Icon
                                    name='arrow-forward-ios'
                                    type='MaterialIcon'
                                    color={colors.primaryFontColor}
                                    style={{
                                        paddingHorizontal: 10
                                    }}
                                />
                            </View>
                        </View>


                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30,
                    }}
                >

                    <View
                        style={{
                            height: 62,
                            width: 62,
                            borderWidth: 1,
                            borderRadius: 31,
                            borderColor: colors.secondaryFontColor,
                            marginHorizontal: 10,

                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >

                        <Image
                            source={require('../../Assets/images/mobPhone.png')}
                        />

                    </View>


                    <View
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Text.Heading
                            title='Recharge For a Contact'
                            style={{
                                fontFamily: FONTS.regular,
                                fontSize: 14
                            }}
                        />
                        <Text.SubHeading
                            title='View Contact'
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                marginTop: 5
                            }}
                        />
                    </View>

                </View>


            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    header_text: {
        fontFamily: FONTS.medium,
        fontSize: 15
    }
});

//make this component available to the app
export default MobRecharge;
