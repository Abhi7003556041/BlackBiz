//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useTheme, Container, Text, AppButton, StatusBar, AppTextInput, Icon, CheckBox } from 'react-native-basic-elements';
import OtpInputs from 'react-native-otp-inputs';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

const { height, width } = Dimensions.get('window')
// create a component
const OtpVerification = () => {
    const [OtpCode, setOtpCode] = useState('');
    const colors = useTheme()
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='light-content'
            />
            <View
                style={{
                    // height: height/2,
                    marginTop: height / 7,
                    paddingHorizontal: 10
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        marginHorizontal: 10,

                    }}
                >
                    <Text.Heading
                        title='Enter OTP'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 20
                        }}
                    />
                    <Text.SubHeading
                        title={'We have just sent you 4 digit code via \n your  phone number xxxxxxx538'}
                        style={{
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            textAlign: 'center',
                            marginTop: 10,
                            color: colors.primaryFontColor
                        }}
                    />
                </View>
                <OtpInputs
                    handleChange={code => setOtpCode(code)}
                    numberOfInputs={4}
                    autofillFromClipboard={true}
                    inputContainerStyles={{
                        marginHorizontal: 10


                    }}
                    style={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between'


                    }}
                    inputStyles={{
                        backgroundColor: colors.pageBackgroundColor,
                        // elevation: 3,
                        borderWidth: 1,
                        borderColor: colors.secondaryFontColor,
                        height: 40,
                        width: 40,
                        borderRadius: 15,
                        elevation: 10,
                        textAlign: 'center',
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.medium
                    }}
                />
                <View
                    style={{
                        marginVertical: 20,
                    }}
                >
                    <AppButton
                        shadow={true}
                        title="Continue"
                        textStyle={{
                            color: colors.pageBackgroundColor,
                            fontFamily: FONTS.medium,
                            fontSize: 14,
                            // marginVertical: 30,
                        }}
                        style={{
                            borderRadius: 30,
                            marginTop: 20,
                            alignSelf: 'center',
                            width: '90%'
                        }}
                        onPress={() => NavigationService.navigate('LoginSuccessPage')}
                    />

                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            marginVertical: 30,
                            marginHorizontal: 10,
                            textAlign: 'center',
                            fontSize: 10
                        }}
                    >Didn’t receive the code?<Text
                        style={{
                            color: colors.primaryThemeColor,
                            fontFamily: FONTS.medium,
                            fontSize: 10
                        }}
                    > Resend Code</Text></Text>
                </View>

            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default OtpVerification;
