import { View, StyleSheet, StatusBar as RNStatusbar, Image, Pressable } from 'react-native'
import React from 'react'
import { AppBar, Text, Container, StatusBar, useTheme, AppTextInput } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'
import { ScrollView } from 'react-native-gesture-handler'

const PayBroadBandBills = () => {
    const colors = useTheme()
    const operatorData = [
        {
            image: <Image
                source={require('../../Assets/images/dgitalTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'XYX Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },


        {
            image: <Image
                source={require('../../Assets/images/abcTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'ABC Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },

        {
            image: <Image
                source={require('../../Assets/images/colorsTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'Ipsum Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },

        {
            image: <Image
                source={require('../../Assets/images/abcTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'ABC Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },

        {
            image: <Image
                source={require('../../Assets/images/dgitalTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'XYX Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },

        {
            image: <Image
                source={require('../../Assets/images/abcTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'ABC Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },

        {
            image: <Image
                source={require('../../Assets/images/colorsTv.png')}
                style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 25
                }}
                resizeMode='contain'
            />,
            label: 'Ipsum Digital TV',
            onpress: () => NavigationService.navigate('OperatorBills')
        },


    ]
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
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    <Text.Heading
                        title='Pay Cable TV Bill & DTH Recharge'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    />

                    <AppTextInput
                        leftIcon={{
                            name: 'search',
                            type: 'EvilIcon',

                        }}
                        placeholder='Search Operator'

                        mainContainerStyle={{
                            flex: 1,
                            marginTop: 20,

                        }}
                        inputContainerStyle={{
                            borderColor: colors.primaryFontColor
                        }}
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            fontSize: 12
                        }}
                    />



                </View>

                <View
                    style={{
                        height: 31,
                        backgroundColor: colors.primaryThemeColor,
                        marginVertical: 20
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color: colors.pageBackgroundColor,
                            marginHorizontal: 20,
                        }}
                    >Select Operator</Text>
                </View>

                {operatorData.map((item, index) => {
                    return (
                        <Pressable
                            key={index}
                            style={{
                                marginHorizontal: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 15
                            }}
                            onPress={item.onpress}
                        >

                            <View
                                style={{
                                    height: 46,
                                    width: 46,
                                    borderRadius: 23,
                                    backgroundColor: colors.primaryFontColor,
                                    alignItems: 'center'
                                }}
                            >
                                {item.image}

                            </View>

                            <View
                                style={{
                                    marginLeft: 15,
                                    flex: 1
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 13,
                                        borderBottomWidth: 1,
                                        borderBottomColor: colors.secondaryFontColor,
                                        paddingBottom: 15,
                                        width: '100%',
                                        color: colors.primaryFontColor,
                                    }}
                                >{item.label}</Text>
                            </View>



                        </Pressable>
                    )
                })
                }

                <View 
                style={{
                    height: 20
                }}
                />

            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({

})

export default PayBroadBandBills