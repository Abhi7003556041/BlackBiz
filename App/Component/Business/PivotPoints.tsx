//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const PivotPoints = () => {
    const colors = useTheme()
    const pivotPoints = [
        {
            level: 'R3',
            classic: '26,183.33',
            fibonacci: '26,121.36'
        },
        {
            level: 'R2',
            classic: '26,183.33',
            fibonacci: '26,121.36'
        },
        {
            level: 'R1',
            classic: '26,183.33',
            fibonacci: '26,121.36'
        },
        {
            level: 'Pivot Points',
            classic: '25,935.45',
            fibonacci: '25,935.45'
        },
        {
            level: 'S1',
            classic: '26,183.33',
            fibonacci: '26,121.36'
        },
        {
            level: 'S2',
            classic: '26,183.33',
            fibonacci: '26,121.36'
        },
        {
            level: 'S3',
            classic: '26,183.33',
            fibonacci: '26,121.36'
        },
    ]
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
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
                            fontSize: 16
                        }}
                    >Pivot Points</Text>
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
                    <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.regular,
                            fontSize: 12
                        }}
                    >Level</Text>
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
                        >Classic</Text>
                    </View>


                    <View>
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12
                            }}
                        >Fibonacci</Text>
                    </View>
                </View>

            </View>

            <FlatList
                data={pivotPoints}
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
                                >{item.level}</Text>

                            </View>

                            <View
                                style={{
                                    width: '50%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.semibold,
                                        color: '#F44040',
                                        fontSize: 12
                                    }}
                                >{item.classic}</Text>
                                <Text
                                    style={{
                                        fontFamily: FONTS.semibold,
                                        color: '#F44040',
                                        fontSize: 12
                                    }}
                                >{item.fibonacci}</Text>

                            </View>

                        </View>
                    )
                }}
            />

        </Container>
    );
};



//make this component available to the app
export default PivotPoints;
