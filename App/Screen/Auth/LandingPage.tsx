//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import React, { Component, useRef } from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import { useTheme, Container, Text, AppButton } from 'react-native-basic-elements';
import Swiper from 'react-native-swiper';
import { FONTS } from '../../Constants/Fonts';
import { AuthStackModel } from '../../Models/Navigation/AuthStackModel';
import NavigationService from '../../Services/NavigationService';
type Props = StackScreenProps<AuthStackModel, 'LandingPage'>
const { height, width } = Dimensions.get('window')
// create a component
const LandingPage = (props : Props) => {
    
    const colors = useTheme()
    const swiperRef = useRef(null);
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='light-content'
            />
            <View
                style={{
                    height: height-200
                }}
            >
                <Swiper
                    paginationStyle={{ bottom: 10 }}
                    loop={false}
                    ref={swiperRef}
                    autoplay={true}
                    activeDotColor={colors.primaryFontColor}
                    activeDotStyle={{
                        width: 24,
                        height: 8
                    }}
                    dotStyle={{
                        backgroundColor: colors.primaryFontColor
                    }}
                    style={{
                        marginTop: 120,
                    }}
                >
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../Assets/images/girlwithbook.png')}
                            resizeMode='contain'
                            style={{
                                width: width - 50,
                            }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../Assets/images/boywithmagnet.png')}
                            resizeMode='contain'
                            style={{
                                width: width - 50,
                            }}
                        />
                    </View >
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../Assets/images/girlwithcard.png')}
                            resizeMode='contain'
                            style={{
                                width: width - 50,
                            }}
                        />
                    </View>
                </Swiper>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 10
                }}
            >
                <Text.Heading
                    title={'Manage your finances \n now more easily'}
                    style={{
                        fontFamily: FONTS.semibold,
                        fontSize: 20,
                        // color: colors.primaryFontColor,
                        textAlign: 'center'
                    }}
                />
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: 10,
                        textAlign: 'center',
                        color: colors.secondaryFontColor
                    }}
                >Semper in cursus magna et eu varius nunc {'\n'} adipiscing. Elementum justo, laoreet id {'\n'} sem . </Text>
            </View>

            <View
            style={{
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 30
            }}
            >
                <AppButton
                    shadow={true}
                    title="Continue"
                    textStyle={{
                        color: colors.pageBackgroundColor,
                        fontFamily:  FONTS.medium,
                        fontSize: 15
                    }}
                    style={{
                        borderRadius: 30,
                        width: 251,
                        justifyContent: 'center',
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    onPress={() => props.navigation.navigate('GetStart')}
                />
            </View>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 25

    },
});

//make this component available to the app
export default LandingPage;
