import { View, ScrollView, StatusBar as RNStatusbar, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppBar, AppButton, AppTextInput, Container, Icon, RadioButton, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import NavigationService from '../../Services/NavigationService'
import { FONTS } from '../../Constants/Fonts'
// import { Colors } from 'react-native/Libraries/NewAppScreen'


const PaymentSection = () => {
    const colors = useTheme()
    const [Wallet, setWallet] = useState(false);
    const [sbiBank, setsbiBank] = useState(false);
    const [iciciBank, seticiciBank] = useState(false);
    const [hdfcBank, sethdfcBank] = useState(false)

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
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/userPayment.png')}
                            resizeMode='contain'
                            style={{
                                height: 85,
                                width: 85
                            }}
                        />
                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                marginTop: 12,
                                color: colors.primaryFontColor
                            }}
                        >Sallie Store</Text>

                        <Text
                            style={{
                                fontFamily: FONTS.medium,
                                marginTop: 10,
                                // marginTop: 10,
                                fontSize: 10,
                                color: colors.secondaryFontColor
                            }}
                        >You are paying</Text>

                        <AppTextInput
                            placeholder='$0'
                            mainContainerStyle={{
                                width: 50,
                                marginTop: 10

                            }}
                            inputContainerStyle={{
                                borderWidth: 0,
                                borderBottomWidth: 1
                            }}

                            inputStyle={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: FONTS.medium,
                                paddingHorizontal: 10,

                            }}
                        />

                        <AppTextInput
                            placeholder='Add Description'
                            mainContainerStyle={{
                                width: '40%',
                                marginTop: 5

                            }}
                            inputContainerStyle={{
                                borderWidth: 0,
                                borderBottomWidth: 1,

                            }}

                            inputStyle={{
                                fontFamily: FONTS.medium,
                                paddingHorizontal: 25,
                                fontSize: 10

                            }}
                        />
                    </View>


                </View>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >

                    <Text
                        style={{
                            fontFamily: FONTS.medium
                        }}
                    >Sellect  Wallet</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >
                        <RadioButton
                            selected={Wallet}
                            onChange={(val) => setWallet(val)}
                            size={25}
                            activeColor={colors.primaryFontColor}

                        />

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 12,
                                marginLeft: 10
                            }}
                        >My Wallet Balance</Text>
                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Image
                            source={require('../../Assets/images/walletwithmoney.png')}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >
                        <RadioButton
                            selected={iciciBank}
                            onChange={(val) => seticiciBank(val)}
                            size={25}
                            activeColor={colors.primaryFontColor}

                        />

                        <View>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 12,
                                    marginLeft: 10
                                }}
                            >ICICI Bank</Text>

                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 10,
                                    marginLeft: 10,
                                    color: colors.secondaryFontColor
                                }}
                            >xx53</Text>
                        </View>

                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Image
                            source={require('../../Assets/images/icici.png')}
                        />

                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >
                        <RadioButton
                            selected={sbiBank}
                            onChange={(val) => setsbiBank(val)}
                            size={25}
                            activeColor={colors.primaryFontColor}

                        />

                        <View>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 12,
                                    marginLeft: 10
                                }}
                            >State Bank  of India</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 10,
                                    marginLeft: 10,
                                    color: colors.secondaryFontColor
                                }}
                            >xx53</Text>
                        </View>

                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Image
                            source={require('../../Assets/images/sbi.png')}
                        />

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >
                        <RadioButton
                            selected={hdfcBank}
                            onChange={(val) => sethdfcBank(val)}
                            size={25}
                            activeColor={colors.primaryFontColor}

                        />

                        <View>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 12,
                                    marginLeft: 10
                                }}
                            >HDFC Bank</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 10,
                                    marginLeft: 10,
                                    color: colors.secondaryFontColor
                                }}
                            >xx53</Text>
                        </View>

                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Image
                            source={require('../../Assets/images/hdfc.png')}
                        />

                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >

                        <Icon
                            name='add-circle-outline'
                            type='Ionicon'
                            style={{
                                marginRight: 15
                            }}
                            size={25}
                        />



                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 12,
                                // marginLeft: 10
                            }}
                        >Add Another Bank Account </Text>


                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Icon
                            name='bank-outline'
                            type='MaterialCommunityIcon'
                            style={{
                                marginLeft: 10
                            }}
                        />

                    </View>
                </View>

                <AppButton 
                title='Proceed to Pay'
                textStyle={{
                    fontSize: 15,
                    fontFamily: FONTS.semibold,
                    color: colors.pageBackgroundColor
                    
                }}
                
                style={{
                    marginTop: 20,
                    borderRadius: 30,
                    marginBottom: 20,
                    

                }}
                />


            </ScrollView>

        </Container>
    )
}

const styles = StyleSheet.create({
    title_text: {
        fontFamily: FONTS.medium,
        fontSize: 14
    },
})

export default PaymentSection