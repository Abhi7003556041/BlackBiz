import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, Dimensions, ScrollView

} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card, RadioButton, AppButton
} from 'react-native-basic-elements';
import OtpInputs from 'react-native-otp-inputs';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
const height = Dimensions.get('window').height;

const Successful = () => {
    const colors = useTheme()
    return (
        <Container>

            <Image source={require('../../Assets/images/Group90.png')}
                style={{
                    height: 180,
                    width: 185, resizeMode: 'contain',
                    alignSelf: 'center',
                    marginTop: height / 4
                }}
            />
            <Text style={{
                color: colors.primaryThemeColor, fontSize: 20,
                fontFamily: FONTS.bold,
                textAlign: 'center', alignItems: 'center', marginTop: 20
            }}>Enroll Course Successful!</Text>

            <Text style={{
                color: colors.primaryFontColor, fontSize: 16,
                fontFamily: FONTS.medium,
                textAlign: 'center', alignItems: 'center', marginTop: 20
            }}>You have successfully made payment{'\n'} and enrolled the course.</Text>

            <AppButton

                title="View Course"
                textStyle={{
                    color: colors.pageBackgroundColor,
                    fontFamily: FONTS.bold,
                    fontSize: 14
                }}
                style={{
                    backgroundColor: colors.primaryThemeColor,
                    borderRadius: 30,

                    width: '70%', alignSelf: 'center',
                    marginTop: 24

                }}
            onPress={() => NavigationService.navigate('MostPopularCourses')}
            />

            <AppButton

                title="View E-Receipt"
                textStyle={{
                    color: colors.primaryFontColor,
                    fontFamily: FONTS.bold,
                    fontSize: 14
                }}
                style={{
                    backgroundColor: '#35383F',
                    borderRadius: 30,

                    width: '70%', alignSelf: 'center',
                    marginTop: 10

                }}
            //onPress={() => NavigationService.navigate('Successful')}
            />
        </Container>
    )
}

export default Successful

const styles = StyleSheet.create({})