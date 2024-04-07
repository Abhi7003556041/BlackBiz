//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native';
import { AppBar, Container, StatusBar, useTheme, Text, Icon, AppTextInput } from 'react-native-basic-elements';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const Passbook = () => {
    const colors = useTheme()
    const recentspayment = [
        {

            day: 'today',
            payment_type: 'Send',
            color: '#0FA72D'
        },
        {
            day: 'Yesterday',
            payment_type: 'Send',
            color: '#0FA72D'
        },
        {
            day: 'today',
            payment_type: 'Failed',
            color: '#C03010'
        },
        {
            day: 'today',
            payment_type: 'Send',
            color: '#0FA72D'
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
                title='Accounts & Balance History'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.regular,
                    fontSize: 15,
                    textAlign: 'center'
                }}

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
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >

                        <Image
                            source={require('../../Assets/images/walletwithmoney.png')}
                            resizeMode='contain'
                            style={{
                                height: 28,
                                width: 28
                            }}
                        />


                        <View
                            style={{
                                marginLeft: 20
                            }}
                        >
                            <Text style={styles.title_text}>My Wallet Balance</Text>

                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 12
                            }}
                        >$1,540.32</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >

                        <Image
                            source={require('../../Assets/images/icici.png')}
                            resizeMode='contain'
                            style={{
                                height: 35,
                                width: 28
                            }}
                        />


                        <View
                            style={{
                                marginLeft: 20
                            }}
                        >
                            <Text style={styles.title_text}>ICICI Bank</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>xx23</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                color: COLORS.primaryFontColor,
                                fontSize: 9
                            }}
                        >Check balance</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >

                        <Image
                            source={require('../../Assets/images/sbi.png')}
                            resizeMode='contain'
                            style={{
                                height: 28,
                                width: 28
                            }}
                        />

                        <View
                            style={{
                                marginLeft: 20
                            }}
                        >
                            <Text style={styles.title_text}>State Bank  of India</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>xx23</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                color: COLORS.primaryFontColor,
                                fontSize: 9
                            }}
                        >Check balance</Text>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >

                        <Image
                            source={require('../../Assets/images/hdfc.png')}
                            resizeMode='contain'
                            style={{
                                height: 28,
                                width: 28
                            }}
                        />


                        <View
                            style={{
                                marginLeft: 20,
                                // alignItems: 'center'
                            }}
                        >
                            <Text style={styles.title_text}>HDFC Bank</Text>
                            <Text style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}>xx23</Text>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                color: COLORS.primaryFontColor,
                                fontSize: 9
                            }}
                        >Check balance</Text>

                    </View>

                    <View
                        style={{
                            marginTop: 20
                        }}
                    >
                        <Text.Heading
                            title='See all  transactions'
                            style={styles.recent_text}
                        />


                        <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:10
                        }}
                        >
                            <AppTextInput 
                            leftIcon={{
                                    name:'search',
                                    type:'EvilIcon',
                                    
                            }}
                            placeholder='Search  or Filter transactions'
                            mainContainerStyle={{
                                flex: 1
                            }}
                            inputStyle={{
                                fontFamily: FONTS.medium,
                                
                                // paddingHorizontal: 10
                            }}
                            />

                            <Image 
                            source={require('../../Assets/images/filter.png')}
                            style={{
                                marginLeft: 10
                            }}
                            />
                        </View>
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
export default Passbook;
