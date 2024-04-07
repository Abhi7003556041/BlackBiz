import { View, Text, StyleSheet, ScrollView, StatusBar as RNStatusbar } from 'react-native'
import React from 'react'
import { Accordion, AppBar, Container, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'


const FAQ = () => {
    const colors = useTheme()
    return (
        <Container>
            <AppBar.Back
                title='FAQs: Credit Card Bill'
                titleStyle={{
                    fontFamily: FONTS.semibold,
                    fontSize: 15
                }}
                backgroundColor={'transparent'}
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
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color: colors.primaryThemeColor
                        }}
                    >Paying your CC Bill</Text>


                    {[1, 2, 3].map((item, index) => {
                        return (
                            <>
                                <Accordion
                                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
                                    containerStyle={{
                                        // margin: 10,
                                        marginHorizontal: 0,
                                        paddingBottom: 10


                                    }}
                                    titleStyle={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 12,
                                        paddingBottom: 10
                                    }}
                                    shadow={true}
                                >
                                    <Accordion.Item
                                        style={{

                                            marginHorizontal: 0
                                        }}
                                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus ante hendrerit enim non donec scelerisque etiam eleifend leo.'
                                        titleStyle={{
                                            fontFamily: FONTS.regular,
                                            fontSize: 10,
                                            marginHorizontal: 0,
                                            margin: 0,
                                        }}
                                    />

                                </Accordion>
                                <View
                                    style={{
                                        height: 1,
                                        backgroundColor: colors.primaryFontColor
                                    }}
                                />
                            </>

                        )
                    })}


                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color: colors.primaryThemeColor,
                            marginVertical: 10
                        }}
                    >Your Recent Payment</Text>


                    {[1, 2, 3].map((item, index) => {
                        return (
                            <>
                                <Accordion
                                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
                                    containerStyle={{
                                        // margin: 10,
                                        marginHorizontal: 0,
                                        paddingBottom: 10


                                    }}
                                    titleStyle={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 12,
                                        paddingBottom: 10
                                    }}
                                    shadow={true}
                                >
                                    <Accordion.Item
                                        style={{

                                            marginHorizontal: 0
                                        }}
                                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus ante hendrerit enim non donec scelerisque etiam eleifend leo.'
                                        titleStyle={{
                                            fontFamily: FONTS.regular,
                                            fontSize: 10,
                                            marginHorizontal: 0,
                                            margin: 0,
                                        }}
                                    />

                                </Accordion>
                                <View
                                    style={{
                                        height: 1,
                                        backgroundColor: colors.primaryFontColor
                                    }}
                                />
                            </>

                        )
                    })}


                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color: colors.primaryThemeColor,
                            marginVertical: 10
                        }}
                    >Managing Your cards</Text>


                    {[1, 2, 3].map((item, index) => {

                        return (
                            <>
                                <Accordion
                                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
                                    containerStyle={{
                                        // margin: 10,
                                        marginHorizontal: 0,
                                        paddingBottom: 10


                                    }}
                                    titleStyle={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 12,
                                        paddingBottom: 10
                                    }}
                                    shadow={true}
                                >
                                    <Accordion.Item
                                        style={{

                                            marginHorizontal: 0
                                        }}
                                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus ante hendrerit enim non donec scelerisque etiam eleifend leo.'
                                        titleStyle={{
                                            fontFamily: FONTS.regular,
                                            fontSize: 10,
                                            marginHorizontal: 0,
                                            margin: 0,
                                        }}
                                    />

                                </Accordion>
                                <View
                                    style={{
                                        height: 1,
                                        backgroundColor: colors.primaryFontColor,

                                    }}
                                />


                            </>

                        )
                    })}

                    <View
                        style={{
                            marginBottom: 20
                        }}
                    />


                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({

})

export default FAQ