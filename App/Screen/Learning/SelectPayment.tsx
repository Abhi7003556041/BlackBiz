import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable, ScrollView,Dimensions
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card, RadioButton, AppButton
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

const { height, width } = Dimensions.get('window')


const SelectPayment = () => {
    const colors = useTheme()
    const [selected, setSelected] = useState(false);
    return (
        <Container>
            <AppBar.Back
                title='Enroll Course'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    color: colors.primaryFontColor
                }}

                rightActions={[
                    {
                        icon:

                            <View style={{
                                borderColor: colors.primaryFontColor,
                                borderWidth: 1,
                                height: 20, width: 20, borderRadius: 15,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Icon
                                    name='dots-horizontal'
                                    type='MaterialCommunityIcon'
                                    size={13}

                                />
                            </View>
                        ,

                        onPress: () => console.log("bal")
                    },


                ]}
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

            <ScrollView
                showsVerticalScrollIndicator={false}>

                <Text
                    style={{
                        fontSize: 14, fontFamily: FONTS.medium,
                        color: colors.primaryFontColor, marginLeft: 15
                    }}
                >Select the payment method you want to use</Text>

                <Card style={{
                    width: '90%', alignSelf: 'center',
                    borderColor: colors.primaryFontColor,
                    borderWidth: 0.8,
                    flexDirection: 'row', alignItems: 'center',
                    height: 70,
                    borderRadius: 25,
                    paddingRight: 20,
                    marginVertical: 20
                }}>

                    <Image source={require('../../Assets/images/paypal.png')}
                        style={{
                            resizeMode: 'contain',
                            marginLeft: 20
                        }}
                    />
                    <Text style={{
                        marginLeft: 10, flex: 1,
                        color: colors.primaryFontColor, fontSize: 13, fontFamily: FONTS.medium
                    }}>PayPal</Text>


                    <RadioButton
                        selected={selected}
                        onChange={(val) => setSelected(val)}
                        size={23}
                        activeColor={colors.primaryThemeColor}

                    />

                </Card>

                <Card style={{
                    width: '90%', alignSelf: 'center',
                    borderColor: colors.primaryFontColor,
                    borderWidth: 0.8,
                    flexDirection: 'row', alignItems: 'center',
                    height: 70,
                    borderRadius: 25,
                    paddingRight: 20,
                    marginVertical: 10
                }}>

                    <Image source={require('../../Assets/images/google.png')}
                        style={{
                            resizeMode: 'contain',
                            marginLeft: 20
                        }}
                    />
                    <Text style={{
                        marginLeft: 10, flex: 1,
                        color: colors.primaryFontColor, fontSize: 13, fontFamily: FONTS.medium
                    }}>Google Pay</Text>


                    <RadioButton
                        selected={selected}
                        onChange={(val) => setSelected(val)}
                        size={23}
                        activeColor={colors.primaryThemeColor}

                    />

                </Card>

                <Card style={{
                    width: '90%', alignSelf: 'center',
                    borderColor: colors.primaryFontColor,
                    borderWidth: 0.8,
                    flexDirection: 'row', alignItems: 'center',
                    height: 70,
                    borderRadius: 25,
                    paddingRight: 20,
                    marginVertical: 10
                }}>

                    <Image source={require('../../Assets/images/apple.png')}
                        style={{
                            resizeMode: 'contain',
                            marginLeft: 20
                        }}
                    />
                    <Text style={{
                        marginLeft: 10, flex: 1,
                        color: colors.primaryFontColor, fontSize: 13, fontFamily: FONTS.medium
                    }}>Apple Pay</Text>


                    <RadioButton
                        selected={selected}
                        onChange={(val) => setSelected(val)}
                        size={23}
                        activeColor={colors.primaryThemeColor}

                    />

                </Card>

                <Card style={{
                    width: '90%', alignSelf: 'center',
                    borderColor: colors.primaryFontColor,
                    borderWidth: 0.8,
                    flexDirection: 'row', alignItems: 'center',
                    height: 70,
                    borderRadius: 25,
                    paddingRight: 20,
                    marginVertical: 10
                }}>

                    <Image source={require('../../Assets/images/visa.png')}
                        style={{
                            resizeMode: 'contain',
                            marginLeft: 6
                        }}
                    />
                    <Text 
                    allowFontScaling={false}
                    style={{
                        marginLeft: 10, flex: 1,
                        color: colors.primaryFontColor, fontSize: 13, fontFamily: FONTS.medium
                    }}>•••• •••• •••• •••• 4679</Text>


                    <RadioButton
                        selected={selected}
                        onChange={(val) => setSelected(val)}
                        size={23}
                        activeColor={colors.primaryThemeColor}

                    />

                </Card>

                <AppButton
                    title="Add New Card"
                    textStyle={{
                        fontSize: 14, fontFamily: FONTS.medium,

                    }}
                    style={{
                        backgroundColor: 'transparent',
                        borderColor: colors.primaryFontColor,
                        borderWidth: 1,
                        borderRadius: 30, width: '90%', alignSelf: 'center',
                        marginTop: 20,
                        height: 55,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center'

                    }} />
            </ScrollView>

            <View style={{
                width: '100%',
                borderTopWidth: 0.6,
                borderRightWidth: 0.6,
                borderLeftWidth: 0.6,

                borderColor: colors.primaryFontColor,

                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                justifyContent: 'flex-end',
                marginTop: 20,


            }}>
                <AppButton

                    title="Enroll Course - $40"
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
                        height: height / 17,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center'

                    }}
                    onPress={() => NavigationService.navigate('ConfirmPayment')}
                />
            </View>
        </Container>
    )
}

export default SelectPayment

const styles = StyleSheet.create({})