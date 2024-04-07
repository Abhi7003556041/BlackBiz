//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar as RNStatusbar } from 'react-native';
import { AppBar, AppButton, AppTextInput, Container, StatusBar, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const ForgetPassword = () => {
    const colors = useTheme()
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                titlePosition='left'
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
            <View
                style={{
                    marginTop: 10,
                    marginHorizontal: 20
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.semibold,
                        color: colors.primaryFontColor,
                        textAlign: 'center',
                        fontSize: 18
                    }}
                >
                    Forgot Password
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        color: colors.primaryFontColor,
                        textAlign: 'center',
                        fontSize: 12,
                        marginVertical: 10
                    }}
                >Recover your account password</Text>

                <View
                    style={{
                        marginVertical: 20 
                    }}
                >
                    <AppTextInput
                        title='Phone Number'
                        titleStyle={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.regular,
                            fontSize: 12,
                            paddingHorizontal: 20
                        }}
                        inputContainerStyle={{
                            borderRadius: 30
                        }}

                        placeholder="Enter Your Phone Number"
                        inputStyle={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.medium,
                            fontSize: 10,
                            paddingHorizontal: 10
                        }}

                    />
                </View>
                <View
                style={{
                   marginVertical: 5
                }}
                >
                    <AppButton
                        title='Continue'
                        textStyle={{
                            fontFamily: FONTS.medium,
                            color: colors.pageBackgroundColor,
                            fontSize: 12,
                        }}

                        style={{
                            borderRadius: 30,
                            marginTop: 20,
                            margin: 0,
                            marginHorizontal: 0,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        onPress={() => NavigationService.navigate('ForgetPassword')}
                    />
                </View>


            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ForgetPassword;
