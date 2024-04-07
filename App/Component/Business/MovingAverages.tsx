//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppButton, Container, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const MovingAverages = () => {
    const colors = useTheme()
    const movingAverages = [
        {
            label: 'MA5',
            simple: '25,913.02',
            Exponential: '25,936.40',
            status_ex: false,
            status_simple: false,

        },
        {
            label: 'MA10',
            simple: '25,913.02',
            Exponential: '25,936.40',
            status_ex: true,
            status_simple: false,

        },
        {
            label: 'MA20',
            simple: '25,913.02',
            Exponential: '25,936.40',
            status_ex: false,
            status_simple: false,


        },
        {
            label: 'MA50',
            simple: '25,913.02',
            Exponential: '25,936.40',
            status_ex: false,
            status_simple: true,

        },
        {
            label: 'MA100',
            simple: '25,913.02',
            Exponential: '25,936.40',
            status_ex: false,
            status_simple: false,

        },
        {
            label: 'MA200',
            simple: '25,913.02',
            Exponential: '25,936.40',
            status_ex: false,
            status_simple: false,

        },

    ]
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}
            >
                <View
                    style={{
                        width: '50%'
                    }}
                >
                    <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    >Moving Averages</Text>
                </View>

                <View
                    style={{
                        width: '50%'
                    }}
                >
                    <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.regular,
                            fontSize: 14
                        }}
                    >20 JUN 2020,  04:07</Text>
                </View>



            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10

                }}
            >
                <View
                    style={{
                        width: '50%'
                    }}
                >
                </View>


                <View
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View>
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12
                            }}
                        >Simple</Text>
                    </View>


                    <View>
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12
                            }}
                        >Exponential</Text>
                    </View>
                </View>

            </View>

            <FlatList
                data={movingAverages}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 10
                            }}
                        >
                            <View
                                style={{
                                    width: '50%'
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.semibold,
                                        color: colors.primaryFontColor,
                                        fontSize: 12
                                    }}
                                >{item.label}</Text>

                            </View>

                            <View
                                style={{
                                    width: '50%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {item.status_simple ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.semibold,
                                            color: colors.primaryThemeColor,
                                            fontSize: 12
                                        }}
                                    >{item.simple}</Text>
                                    :
                                    <Text
                                        style={{
                                            fontFamily: FONTS.semibold,
                                            color: '#F44040',
                                            fontSize: 12
                                        }}
                                    >{item.simple}</Text>
                                }


                                {item.status_ex ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.semibold,
                                            color: colors.primaryThemeColor,
                                            fontSize: 12
                                        }}
                                    >{item.Exponential}</Text>
                                    :
                                    <Text
                                        style={{
                                            fontFamily: FONTS.semibold,
                                            color: '#F44040',
                                            fontSize: 12
                                        }}
                                    >{item.Exponential}</Text>
                                }


                            </View>

                        </View>
                    )
                }}
            />

            <View
                style={{
                    marginTop: 15
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: 14,
                        color: colors.primaryFontColor
                    }}
                >Summary</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            marginTop: 10
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 15
                            }}
                        >Buy (2)</Text>
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 15,
                                marginTop: 5
                            }}
                        >Sell (10)</Text>
                    </View>

                    <View>
                        <AppButton
                            title='Strong Sell'
                            style={{
                                marginTop: 20,
                                marginHorizontal: 0,
                                backgroundColor: '#DE4C4C',
                                height: 48,
                                width: 168,
                                borderRadius: 0

                            }}
                            textStyle={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                            }}

                        />
                    </View>

                </View>

            </View>
        </Container>
    );
};



//make this component available to the app
export default MovingAverages;
