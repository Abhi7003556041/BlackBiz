//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppButton, Container, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const TechnicalIndicators = () => {
    const colors = useTheme()
    const colorChange = (data: any) => {
        console.log('data', data);
        if (data == 'Sell') {
            return '#F44040'
        }
        else if (data == 'Buy') {
            return '#FFCB59'
        }
        else {
            return '#FFFFFF'
        }
    }

    const Technical_Indicator = [
        {
            Indicator: 'RSI(14)',
            value: '43.701',
            Action: 'Sell',


        },
        {
            Indicator: 'STOCH(9,6)',
            value: '97.000',
            Action: 'Overbought',


        },
        {
            Indicator: 'STOCHRSI(14)',
            value: '19.192',
            Action: 'Oversold',


        },
        {
            Indicator: 'MACD(12,26)',
            value: '12.220',
            Action: 'Buy',


        },
        {
            Indicator: 'ATR(14)',
            value: '158.5907',
            Action: 'High Volatility'

        },
        {
            Indicator: 'ADX(14)',
            value: '38.351',
            Action: 'Sell'

        },
        {
            Indicator: 'CCI(14)',
            value: '-125.9320',
            Action: 'Sell'

        },
        {
            Indicator: 'Highs/Lows(14)',
            value: '-105.6652',
            Action: 'Sell'

        },
        {
            Indicator: 'UO',
            value: '43.701',
            Action: 'Sell'

        },
        {
            Indicator: 'ROC',
            value: '-1.040',
            Action: 'Sell'

        },
        {
            Indicator: 'WilliamsR',
            value: '-3.518',
            Action: 'Sell'

        },
        {
            Indicator: 'BullBear(13)',
            value: '-302.8706',
            Action: 'Sell'

        },
    ]
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20

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
                    >Indicator</Text>

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
                        >Value</Text>
                    </View>


                    <View>
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12
                            }}
                        >Action</Text>
                    </View>
                </View>

            </View>

            <FlatList
                data={Technical_Indicator}
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
                                >{item.Indicator}</Text>

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
                                >{item.value}</Text>




                                <Text
                                    style={{
                                        fontFamily: FONTS.semibold,
                                        color: colorChange(item.Action),

                                        fontSize: 12
                                    }}
                                >{item.Action}</Text>



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
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.semibold,
                                    fontSize: 14
                                }}
                            >Buy (2)</Text>
                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.semibold,
                                    fontSize: 14,
                                    marginTop: 5,
                                    marginLeft: 5,
                                    alignItems: 'center'
                                }}
                            >Sell (10)</Text>
                        </View>
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                                marginTop: 5,
                                // marginLeft: 10,
                                // alignItems: 'center'
                            }}
                        >Neutral (3)</Text>

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
export default TechnicalIndicators;
