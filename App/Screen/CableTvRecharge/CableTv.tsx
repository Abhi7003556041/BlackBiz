//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image, FlatList, Pressable } from 'react-native';
import { AppBar, Container, StatusBar, useTheme, Text, AppTextInput } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const CableTv = () => {
    const colors = useTheme()
    const operatorData = [
        {
            image: <Image
                source={require('../../Assets/images/dgitalTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'XYX Digital TV',
            onpress:  () =>  NavigationService.navigate('SelectOperator')
        },


        {
            image: <Image
                source={require('../../Assets/images/abcTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'ABC Digital TV',
            onpress:  () =>  NavigationService.navigate('SelectOperator')
        },

        {
            image: <Image
                source={require('../../Assets/images/colorsTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'Ipsum Digital TV',
            onpress:  () =>  NavigationService.navigate('SelectOperator')
        },

        {
            image: <Image
                source={require('../../Assets/images/abcTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'ABC Digital TV',
            onpress:  () =>  NavigationService.navigate('SelectOperator')
        },

        {
            image: <Image
                source={require('../../Assets/images/dgitalTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'XYX Digital TV',
            onpress:  () =>  NavigationService.navigate('SelectOperator')
        },
    ]

    const dthRechargeData = [
        {
            image: <Image
                source={require('../../Assets/images/tataforcableTv.png')}
                style={{
                    height: 15,
                    width: 36
                }}
                resizeMode='contain'
            />,
            label: 'Tata Play  TV',
            onpress: () => NavigationService.navigate('DthRecharge')

        },

        {
            image: <Image
                source={require('../../Assets/images/sunforcableTv.png')}
                style={{
                    height: 20,
                    width: 36
                }}
                resizeMode='contain'
            />,
            label: 'Sun  Cable  TV',
            onpress: () => NavigationService.navigate('DthRecharge')

        },

        {
            image: <Image
                source={require('../../Assets/images/tataforcableTv.png')}
                style={{
                    height: 19,
                    width: 36
                }}
                resizeMode='contain'
            />,
            label: 'Tata Play  TV',
            onpress: () => NavigationService.navigate('DthRecharge')

        },

        {
            image: <Image
                source={require('../../Assets/images/tataforcableTv.png')}
                style={{
                    height: 19,
                    width: 36
                }}
                resizeMode='contain'
            />,
            label: 'Tata Play  TV',
            onpress: () => NavigationService.navigate('DthRecharge')

        },

        {
            image: <Image
                source={require('../../Assets/images/tataforcableTv.png')}
                style={{
                    height: 19,
                    width: 36
                }}
                resizeMode='contain'
            />,
            label: 'Tata Play  TV',
            onpress: () => NavigationService.navigate('DthRecharge')

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
                        marginHorizontal: 20,
                    }}
                >
                    <Text.Heading
                        title='Pay Cable TV Bill & DTH Recharge'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    />

                    <AppTextInput
                        leftIcon={{
                            name: 'search',
                            type: 'EvilIcon',

                        }}
                        placeholder='Search  or Filter transactions'

                        mainContainerStyle={{
                            flex: 1,
                            marginTop: 20,

                        }}
                        inputContainerStyle={{
                            borderColor: colors.primaryFontColor
                        }}
                        inputStyle={{
                            fontFamily: FONTS.medium,

                            // paddingHorizontal: 10
                        }}
                    />




                </View>

                <View
                    style={{
                        height: 31,
                        backgroundColor: colors.primaryThemeColor,
                        marginVertical: 20
                    }}
                >

                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            color: colors.pageBackgroundColor,
                            fontSize: 12,
                            paddingHorizontal: 20,
                            marginVertical: 5
                        }}
                    >Select Operator</Text>
                </View>

                {operatorData.map((item, index) => {
                    return (
                        <Pressable
                            key={index}
                            style={{
                                marginHorizontal: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 15
                            }}
                            onPress={item.onpress}
                        >

                            <View
                                style={{
                                    height: 46,
                                    width: 46,
                                    borderRadius: 23,
                                    backgroundColor: colors.primaryFontColor,
                                    alignItems: 'center'
                                }}
                            >
                                {item.image}

                            </View>

                            <View
                                style={{
                                    marginLeft: 15,
                                    flex: 1
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 13,
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.secondaryFontColor,
                                        paddingBottom: 15,
                                        width: '100%',
                                        color: colors.primaryFontColor,
                                    }}
                                >{item.label}</Text>
                            </View>



                        </Pressable>
                    )
                })
                }
                <View
                    style={{
                        marginVertical: 20,
                        marginHorizontal: 10,
                    }}
                >
                    <Image
                        source={require('../../Assets/images/cableTvBanner.png')}
                        style={{
                            width: '100%',
                            height: 62
                        }}
                        resizeMode='contain'
                    />
                </View>

                <Text.Heading
                    title='DTH Recharge'
                    style={{
                        fontFamily: FONTS.bold,
                        marginHorizontal: 10,
                        fontSize: 18
                    }}
                />
                <Text.SubHeading
                    title='Sellect Your  DTH Operator'
                    style={{
                        fontFamily: FONTS.semibold,
                        marginHorizontal: 10,
                        fontSize: 12,
                        color: colors.primaryFontColor,
                        marginTop: 10
                    }}
                />
                <FlatList
                    horizontal={true}
                    data={dthRechargeData}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 10,
                                    marginTop: 20,
                                    paddingBottom: 20
                                }}
                            >
                                <Pressable
                                    style={{
                                        height: 135,
                                        width: 110,
                                        borderWidth: 1,
                                        borderColor: colors.primaryFontColor,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={item.onpress}
                                >
                                    <View
                                        style={{
                                            height: 48,
                                            width: 48,
                                            backgroundColor: colors.primaryFontColor,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 24
                                        }}
                                    >
                                       {item.image}

                                    </View>

                                    <Text
                                        style={{
                                            fontFamily: FONTS.regular,
                                            fontSize: 10,
                                            marginVertical: 10
                                        }}
                                    >{item.label}</Text>
                                    </Pressable>

                            </View>
                        )
                    }}
                />




            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default CableTv;
