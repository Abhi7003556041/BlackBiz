//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Container } from 'react-native-basic-elements';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale, verticalScale } from '../../PixelRatio';

// create a component
const Reedem = () => {
    return (
        <Container>
            <Pressable
                style={styles.mainView}>
                <View style={styles.cardView}>

                    <View
                        style={{
                            height: '100%',
                            width: '44%', marginRight: moderateScale(0),
                            // alignItems: 'center',
                            justifyContent:'center',
                            marginLeft:7
                        }}
                    >
                        <Image source={require('../../Assets/images/sports.png')}
                            style={styles.giftImage}
                        />
                    </View>

                    <View
                    style={{
                        justifyContent:'center'
                    }}
                    >
                        <Text
                            style={{
                                color: COLORS.dark11,
                                fontSize: moderateScale(14), fontFamily: FONTS.Bold,
                                width: '60%'
                                // marginBottom:moderateScale(10)
                            }}>item.scratchName</Text>
                        <Text style={{
                            color: COLORS.dark11,
                            width: '60%',
                            fontSize: moderateScale(10),
                            fontFamily: FONTS.Bold,
                            marginVertical: moderateScale(8)
                        }}>Scratch and Win Amazing Prizes & Gift Cards</Text>

                        <Pressable
                            style={styles.pointBtn}
                        >
                            <Text style={{
                                color: COLORS.white, fontFamily: FONTS.Bold,
                                
                            }}>30 Points</Text>
                        </Pressable>
                    </View>



                </View>



            </Pressable>
        </Container> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    mainView: {
        alignItems: 'center',

    },

    cardView: {
        height: verticalScale(110),
        width: '93%',
        backgroundColor: COLORS.gray11,
        borderRadius: 10,
        marginVertical: moderateScale(6),
        flexDirection: 'row',
        padding: moderateScale(5),
        // alignItems:'center'
    },

    giftImage: {
        // height:verticalScale(50),
        height: '90%',
        width: '80%',
        borderRadius: 8,
        // alignSelf:'center'


    },
    text: {
        fontSize: moderateScale(12),
        fontFamily: FONTS.Medium,
        color: COLORS.white,
        marginLeft: moderateScale(12),
    },
    boldtext: {
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        marginLeft: moderateScale(7),
    },

    pointBtn: {
        height: verticalScale(25),
        width: '50%', backgroundColor: COLORS.themecolor,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:moderateScale(10),
        borderRadius: 6
    }
});

//make this component available to the app
export default Reedem;
