//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { AppButton, Container, Icon, useTheme } from 'react-native-basic-elements';
import BusinessOverViewCardDetails from '../../Component/Business/BusinessOverViewCradDetails';
import MovingAverages from '../../Component/Business/MovingAverages';
import PivotPoints from '../../Component/Business/PivotPoints';
import { FONTS } from '../../Constants/Fonts';
import TechnicalIndicators from './TechnicalIndicators';

// create a component
const Technical = () => {
    const colors = useTheme()

    return (
        <Container>
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <BusinessOverViewCardDetails />

                    <AppButton
                        title='Strong Sell'
                        style={{
                            marginTop: 20,
                            marginHorizontal: 0,
                            backgroundColor: '#DE4C4C',

                        }}
                        textStyle={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.semibold,
                            fontSize: 14,
                        }}

                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                                color: colors.primaryFontColor
                            }}
                        >Moving Averages</Text>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 14,
                                color: colors.primaryThemeColor
                            }}
                        >Strong sell</Text>


                        <Icon
                            name='dot-fill'
                            type='Octicons'
                            color={colors.primaryThemeColor}
                            size={15}
                            style={{
                                marginLeft: 10
                            }}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        <View
                            style={{
                                height: 52,
                                width: 160,
                                borderWidth: 1,
                                borderColor: '#312D42',
                                borderRadius: 10,
                                marginTop: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}
                        >
                            <Icon
                                name='arrow-down'
                                type='Entypo'
                                color={'#28B473'}
                                style={{
                                    paddingVertical: 15,

                                }}
                            />

                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 14,
                                    color: colors.primaryFontColor
                                }}
                            >Buy</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 16,
                                    color: colors.primaryFontColor,

                                }}
                            >2</Text>

                        </View>

                        <View
                            style={{
                                height: 52,
                                width: 150,
                                borderWidth: 1,
                                borderColor: '#312D42',
                                borderRadius: 10,
                                marginTop: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                marginLeft: 10
                            }}
                        >
                            <Icon
                                name='arrow-up'
                                type='Entypo'
                                color={'#DE4C4C'}
                                style={{
                                    paddingVertical: 15,

                                }}
                            />
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 14,
                                    color: colors.primaryFontColor
                                }}
                            >Sell</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 16,
                                    color: colors.primaryFontColor,

                                }}
                            >10</Text>

                        </View>
                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                                color: colors.primaryFontColor
                            }}
                        >Moving Averages</Text>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 14,
                                color: colors.primaryThemeColor
                            }}
                        >Strong sell</Text>


                        <Icon
                            name='dot-fill'
                            type='Octicons'
                            color={colors.primaryThemeColor}
                            size={15}
                            style={{
                                marginLeft: 10
                            }}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        <View
                            style={{
                                height: 52,
                                width: 160,
                                borderWidth: 1,
                                borderColor: '#312D42',
                                borderRadius: 10,
                                marginTop: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}
                        >
                            <Icon
                                name='arrow-down'
                                type='Entypo'
                                color={'#28B473'}
                                style={{
                                    paddingVertical: 15,

                                }}
                            />

                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 14,
                                    color: colors.primaryFontColor
                                }}
                            >Buy</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 16,
                                    color: colors.primaryFontColor,

                                }}
                            >1</Text>

                        </View>

                        <View
                            style={{
                                height: 52,
                                width: 150,
                                borderWidth: 1,
                                borderColor: '#312D42',
                                borderRadius: 10,
                                marginTop: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                marginLeft: 10
                            }}
                        >
                            <Icon
                                name='arrow-up'
                                type='Entypo'
                                color={'#DE4C4C'}
                                style={{
                                    paddingVertical: 15,

                                }}
                            />
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 14,
                                    color: colors.primaryFontColor
                                }}
                            >Sell</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 16,
                                    color: colors.primaryFontColor,

                                }}
                            >8</Text>

                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 10
                        }}
                    >
                        <View
                            style={{
                                height: 32,
                                width: 80,
                                backgroundColor: '#261C0C',
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.semibold,
                                    fontSize: 12
                                }}
                            >Hourly</Text>


                        </View>
                        <Text
                            style={{
                                color: colors.secondaryFontColor,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: FONTS.semibold,
                                fontSize: 12,

                            }}
                        >Daily</Text>
                        <Text
                            style={{
                                color: colors.secondaryFontColor,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: FONTS.semibold,
                                fontSize: 12,

                            }}
                        >Weekly</Text>
                        <Text
                            style={{
                                color: colors.secondaryFontColor,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: FONTS.semibold,
                                fontSize: 12

                            }}
                        >Monthly</Text>

                    </View>

                    <AppButton
                        title='Start Trading'
                        style={{
                            marginTop: 20,
                            marginHorizontal: 0,
                            marginBottom: 20
                        }}
                        textStyle={{
                            color: colors.pageBackgroundColor,
                            fontFamily: FONTS.semibold,
                            fontSize: 14,
                        }}
                    />

                    {/* Pivot Points */}

                    <PivotPoints />


                    {/* Moving Averages */}

                    <MovingAverages />


                    {/* Technical indicators */}

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 10,
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
                            >Technical Indicator</Text>
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

                    <TechnicalIndicators />

                    <View
                        style={{
                            height: 20
                        }}
                    />

                </View>
            </ScrollView>

        </Container>
    );
};



//make this component available to the app
export default Technical;
