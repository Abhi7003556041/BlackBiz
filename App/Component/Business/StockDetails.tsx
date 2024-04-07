//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const StockDetails = (props: { item: any }) => {
    console.log('overview', props.item);

    const colors = useTheme();
    return (
        <Container>
            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View
                    style={{
                        width: '30%'
                    }}
                >
                    <Image
                        source={props.item?.image}
                        style={{
                            height: 88,
                            width: 100,
                            borderRadius: 10
                        }}
                    />
                </View>

                <View
                    style={{
                        width: '70%',
                        marginLeft: 20,

                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                color: colors.secondaryFontColor,
                                fontSize: 12
                            }}
                        >EUR/USD</Text>
                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                color: '#0AA793',
                                fontSize: 12
                            }}
                        >  +0.16%</Text>
                    </View>
                    <View

                        style={{

                            paddingVertical: 5,
                            // maxWidth: '90%'
                        }}
                    >
                        <Text
                            numberOfLines={2}
                            style={{
                                fontFamily: FONTS.medium,
                                color: colors.primaryFontColor,
                                fontSize: 14,
                                maxWidth: '80%'
                            }}
                        >{props.item?.title}</Text>
                    </View>


                    <View
                        style={{
                            // paddingVertical: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // alignItems: 'center',
                            // backgroundColor: 'white',
                            width: '90%'
                            
                        }}
                    >
                        {props.item?.type == 'OverView' ?
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: '#EF3340',
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    maxWidth: '60%'
                                }}
                            >STOCK MARKETS</Text>
                            :
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: colors.primaryThemeColor,
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    maxWidth: '60%'
                                }}
                            >STOCK MARKETS</Text>


                        }
                        <Text
                            style={{
                                color: colors.secondaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12,
                                // paddingRight: 15,
                                maxWidth: '40%'
                            }}
                        >12 hours ago</Text>
                    </View>

                </View>

            </View>
        </Container>
    );
};



//make this component available to the app
export default StockDetails;
