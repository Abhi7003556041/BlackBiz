//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const BusinessCardForAllShare = (props: {item: any,}) => {
    console.log('item', props.item);
    
    const colors = useTheme()
    return (
        <Pressable
        onPress={props.item?.onpress}
            style={{
                paddingTop: 15,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.semibold,
                        color: colors.primaryFontColor,
                        fontSize: 14
                    }}
                >
                    {props.item?.name}
                </Text>

                <Text
                    style={{
                        fontFamily: FONTS.semibold,
                        color: colors.primaryFontColor,
                        fontSize: 14
                    }}
                >
                    26,535.76
                </Text>

            </View>
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 10
                }}
            >
                {
                    props.item?.status === true ?
                        <Icon
                            name='clockcircle'
                            type='AntDesign'
                            color={'#28B473'}
                        />
                        :
                        <Icon
                            name='clockcircle'
                            type='AntDesign'
                            color={'#EF3340'}
                        />

                }
                <Text
                    style={{
                        color: colors.secondaryFontColor,
                        fontFamily: FONTS.medium,
                        fontSize: 12,
                        marginLeft: 10
                    }}
                >{props.item?.time_city}</Text>
                <View
                    style={{
                        flex: 1
                    }}
                />
                {props.item?.status == true ?
                    <Text
                        style={{
                            color: '#28B473',
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            marginLeft: 10
                        }}
                    >
                        +0,73 (+0,52%)
                    </Text>
                    :
                    <Text
                        style={{
                            color: '#EF3340',
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            marginLeft: 10
                        }}
                    >
                        +0,73 (+0,52%)
                    </Text>
                }
            </View>
            <View
                style={{
                    alignItems: 'center',
                    paddingTop: 10
                }}
            >
                <Image
                    source={require('../../Assets/images/businessLine.png')}
                    style={{
                        width: '100%',

                    }}
                />
            </View>
            
        </Pressable>
    );
};



export default BusinessCardForAllShare;
