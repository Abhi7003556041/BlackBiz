import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native'
import React from 'react'
import { AppBar, Text, Container, StatusBar, useTheme, AppTextInput, AppButton } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const OperatorBills = () => {
    const colors = useTheme()
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
                rightActions={[
                    {
                        icon: <Text style={{
                            fontFamily: FONTS.medium,
                            fontSize: 10,
                            color: colors.primaryFontColor,
                            marginLeft: 10
                        }}>Help</Text>
                    },

                ]}
                onLeftIconPress={() => NavigationService.back()}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            {/* <ScrollView> */}
            {/* <KeyboardAwareScrollView
            contentContainerStyle={{
                flex:1
            }}
            > */}
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20,
                        flex: 1
                    }}
                >
                    <Text.Heading
                        title='Pay Broadband & Wifi Bills'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    />

                    <View
                        style={{
                            height: 47,
                            borderWidth: 1,
                            borderColor: colors.primaryFontColor,
                            borderRadius: 10,
                            marginTop: 20,
                            paddingVertical: 10,
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/dgitalTv.png')}
                        />
                        <Text
                            style={{
                                marginLeft: 15,
                                fontFamily: FONTS.medium,
                                fontSize: 15,
                                color: colors.primaryFontColor
                            }}
                        >XYZ Broadband Service</Text>
                    </View>


                    <AppTextInput
                        placeholder='Customer ID'
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            paddingHorizontal: 10
                        }}
                        inputContainerStyle={{
                            marginTop: 15
                        }}
                    />

                    <AppTextInput
                        placeholder='Nick Name (Optional)'
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            paddingHorizontal: 10
                        }}
                        inputContainerStyle={{
                            marginTop: 15
                        }}
                    />


                    <View
                        style={{
                            flex: 1,

                        }}
                    />


                    <AppButton
                        title='Proceed'
                        style={{
                            borderRadius: 30,

                        }}
                        textStyle={{
                            fontFamily: FONTS.medium,
                            fontSize: 15,
                            color: colors.pageBackgroundColor
                        }}


                    />

                    <View
                        style={{
                            height: 20
                        }}
                    />



                </View>
            {/* </KeyboardAwareScrollView> */}


            {/* </ScrollView> */}
        </Container>
    )
}

const styles = StyleSheet.create({

})

export default OperatorBills