//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native';
import { AppBar, Container, StatusBar, useTheme, Text, Icon } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const TransferToBank = () => {
    const colors = useTheme()
    const recentspayment = [
        {

            day: 'today',
            payment_type: 'Send',
            color:  '#0FA72D'
        },
        {
            day: 'Yesterday',
            payment_type: 'Send',
            color:  '#0FA72D'
        },
        {
            day: 'today',
            payment_type: 'Failed',
            color:  '#C03010'
        },
        {
            day: 'today',
            payment_type: 'Send',
            color:  '#0FA72D'
        },
        {
            day: 'Yesterday',
            payment_type: 'Received',
            color: '#D16B11'
        },
    ]
    return (
        <Container>
            <AppBar.Back
                // title='Money Transfer  to  Bank Account'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.regular,
                    fontSize: 10,
                    textAlign: 'center'
                }}
                rightActions={[
                    {
                        icon: <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.medium,
                                fontSize: 12
                            }}
                        >Help</Text>,
                        onPress: () => console.log("bal")
                    },
                    {
                        icon: <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.medium,
                                fontSize: 12,
                                marginLeft: 20
                            }}
                        >Settings</Text>,

                        onPress: () => console.log("bal")
                    }
                ]}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
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
                        marginTop: 15,
                        marginHorizontal: 10
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    >Money Transfer  to  Bank Account</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: colors.primaryFontColor,
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/bank.png')}
                                resizeMode='contain'
                                style={{
                                    height: 28,
                                    width: 28
                                }}
                            />
                        </View>

                        <View
                            style={{
                                marginLeft: 20
                            }}
                        >
                            <Text style={styles.title_text}>Enter Bank A/c  details</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>Choose Bank or enter IFSC details</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Icon
                            name='chevron-forward-sharp'
                            type='Ionicon'
                            size={30}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: colors.primaryFontColor,
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/upi.png')}
                                resizeMode='contain'
                                style={{
                                    height: 35,
                                    width: 28
                                }}
                            />
                        </View>

                        <View
                            style={{
                                marginLeft: 20
                            }}
                        >
                            <Text style={styles.title_text}>Enter UPI ID</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>Pay to Bank A/c Useing UPI ID</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Icon
                            name='chevron-forward-sharp'
                            type='Ionicon'
                            size={30}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: colors.primaryFontColor,
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/bi_phone.png')}
                                resizeMode='contain'
                                style={{
                                    height: 28,
                                    width: 28
                                }}
                            />
                        </View>

                        <View
                            style={{
                                marginLeft: 20
                            }}
                        >
                            <Text style={styles.title_text}>Search Name or Enter Mobile</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>Direct Transfer to linked bank A/c</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Icon
                            name='chevron-forward-sharp'
                            type='Ionicon'
                            size={30}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: colors.primaryFontColor,
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/bank.png')}
                                resizeMode='contain'
                                style={{
                                    height: 28,
                                    width: 28
                                }}
                            />
                        </View>

                        <View
                            style={{
                                marginLeft: 20,
                                // alignItems: 'center'
                            }}
                        >
                            <Text style={styles.title_text}>View Saved Bank Accounts</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>See beneficiaries saved using A/c number</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Icon
                            name='chevron-forward-sharp'
                            type='Ionicon'
                            size={30}
                        />

                    </View>

                    <View
                        style={{
                            marginTop: 20
                        }}
                    >
                        <Text.Heading
                            title='Recents Payments'
                            style={styles.recent_text}
                        />
                        {recentspayment.map((item, index) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}
                                >
                                    <Image
                                        source={{ uri: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }}
                                        style={{
                                            height: 46,
                                            width: 46,
                                            borderRadius: 23
                                        }}
                                    />

                                    <View
                                        style={{
                                            marginLeft: 10
                                        }}
                                    >
                                        <Text style={styles.recent_title_text}>Jhone Andreas</Text>
                                        <Text.SubHeading
                                            title='Paypal • Jhone@gmail.com'
                                            style={styles.sub_text}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex: 1
                                        }}
                                    />

                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <View
                                        style={{
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            width: 100,

                                        }}
                                        >
                                            <View
                                                style={{

                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontFamily: FONTS.medium,
                                                        fontSize: 11
                                                    }}
                                                >$ 50
                                                    <Text
                                                        style={{
                                                            fontFamily: FONTS.semibold,
                                                            fontSize: 11,
                                                            color: item.color
                                                        }}
                                                    >{'   '}{item.payment_type}</Text></Text>

                                            </View>

                                            <View
                                                style={{
                                                    // marginLeft: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontFamily: FONTS.medium,
                                                        fontSize: 8,

                                                    }}
                                                >{item.day}
                                                    <Text
                                                        style={{
                                                            fontFamily: FONTS.medium,
                                                            fontSize: 8
                                                        }}
                                                    >{'  '}4:50 pm</Text></Text>
                                            </View>
                                        </View>


                                    </View>


                                </View>
                            )
                        })}
                    </View>

                </View>

            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    title_text: {
        fontFamily: FONTS.medium,
        fontSize: 14
    },
    recent_text: {
        fontFamily: FONTS.medium,
        fontSize: 15
    },
    sub_text: {
        fontFamily: FONTS.medium,
        fontSize: 10
    },
    recent_title_text: {
        fontFamily: FONTS.medium,
        fontSize: 14
    }
});

//make this component available to the app
export default TransferToBank;
