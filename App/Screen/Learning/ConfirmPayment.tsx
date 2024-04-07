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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const ConfirmPayment = () => {
    const colors = useTheme()
    const [OtpCode, setOtpCode] = useState('');
    return (
        <Container>
            <KeyboardAwareScrollView>
                <AppBar.Back
                    title='Enroll Course'
                    backgroundColor={'transparent'}
                    titlePosition='left'
                    titleStyle={{
                        fontFamily: FONTS.bold,
                        fontSize: 15,
                        color: colors.primaryFontColor
                    }}


                    style={{
                        marginTop: RNStatusbar.currentHeight
                    }}
                    onLeftIconPress={() => NavigationService.back()}
                />
                <StatusBar
                    backgroundColor={'transparent'}
                    barStyle='light-content'
                    translucent={true}
                />

                <Text style={{
                    fontSize: 14, fontFamily: FONTS.medium,
                    color: colors.primaryFontColor, textAlign: 'center',
                    marginTop: height / 5.5,
                    marginBottom: 40
                }}>Enter your PIN to confirm payment</Text>


                <OtpInputs
                    handleChange={code => setOtpCode(code)}
                    numberOfInputs={4}
                    autofillFromClipboard={true}
                    inputContainerStyles={{
                        marginHorizontal: 10


                    }}
                    style={{
                        // width: 400,
                        alignSelf: 'center',
                        marginTop: 20,
                        flexDirection: 'row',



                    }}
                    inputStyles={{
                        backgroundColor: colors.pageBackgroundColor,
                        // elevation: 3,
                        borderWidth: 1,
                        borderColor: colors.secondaryFontColor,
                        height: 40,
                        width: 60,
                        borderRadius: 5,
                        elevation: 10,
                        textAlign: 'center',
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.medium
                    }}
                />

                <AppButton

                    title="Continue"
                    textStyle={{
                        color: colors.pageBackgroundColor,
                        fontFamily: FONTS.bold,
                        fontSize: 16
                    }}
                    style={{
                        backgroundColor: colors.primaryThemeColor,
                        borderRadius: 30,
                        marginVertical: 20,
                        width: '80%', alignSelf: 'center',
                        marginTop: height / 3

                    }}
                    onPress={() => NavigationService.navigate('Successful')}
                />
            </KeyboardAwareScrollView>
        </Container>
    )
}

export default ConfirmPayment

const styles = StyleSheet.create({})