import {
    View, Text, Pressable, StatusBar as RNStatusbar, ScrollView, TouchableOpacity,
    Linking,
    StyleSheet,
    Image,

} from 'react-native'
import React, { useEffect } from 'react'
import { AppBar, AppTextInput, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { FlatList } from 'react-native-gesture-handler'

const Scan = () => {
    const colors = useTheme()
    // const onSuccess = (e: any) => {
    //     Linking.openURL(e.data).catch(err =>
    //         console.error('An error occured', err)
    //     );
    // };


    useEffect(() => {
        setTimeout(() => {
            NavigationService.navigate('PaymentSection')
        }, 10000);
    }, [])

    const contactData = [
        {
            image: { uri: 'https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png' },
            name: 'Nicklaus'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD0XLEaT5CtjF-wjpktGBOGZ3zcNZuyVVj5osLcVXyra9HytvgxyiLclfJpQDDcZQbaQ&usqp=CAU' },
            name: 'Michale'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU' },
            name: 'Marrie'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lg9hHD1UFxGf6Ecqn7mnWhIngmabFH4q9CQkhIEmKKyFMUHJC67W2gaMbnaatRaq-rc&usqp=CAU' },
            name: 'eleven'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGNOdbeaGTYnc3fUN2gAi_H6g4Mx4OtHWu9hvAIQeZ3sA0SeRfDMvgaD79qH0gyZOtRA&usqp=CAU' },
            name: 'Henna'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqk7VPVs2EvLY7BL6PEi7Sd1W35__yl2IHfUfb21RTNXNzjPzFxTflG_Y8-3Ml2St9Lk&usqp=CAU' },
            name: 'sera'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqk7VPVs2EvLY7BL6PEi7Sd1W35__yl2IHfUfb21RTNXNzjPzFxTflG_Y8-3Ml2St9Lk&usqp=CAU' },
            name: 'sera'
        },
    ]

    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                titlePosition='left'
                rightActions={[
                    {
                        icon:
                            <Pressable
                                onPress={() => NavigationService.navigate('Scan')}
                            >
                                <Icon
                                    name='qr-code-scanner'
                                    type='MaterialIcon'
                                />
                            </Pressable>

                    },
                    {
                        icon:
                            <Pressable
                                onPress={() => NavigationService.navigate('Search')}
                            >
                                <Icon
                                    name='search1'
                                    type='AntDesign'
                                    style={{
                                        marginLeft: 10
                                    }}
                                />
                            </Pressable>

                    },
                    {
                        icon:

                            <Pressable
                                onPress={() => NavigationService.navigate('Notification')}
                            >
                                <Icon
                                    name='notifications-outline'
                                    type='Ionicon'
                                    style={{
                                        marginLeft: 10
                                    }}

                                />
                            </Pressable>

                    }
                ]}
                onLeftIconPress={() => NavigationService.back()}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            {/* <ScrollView> */}




            <View
                style={{
                    marginTop: 10,
                    marginHorizontal: 20,
                    flex: 1
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 40
                        // flex: 1
                    }}
                >
                    <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.semibold,
                            fontSize: 15,
                            paddingBottom: 25
                        }}
                    >Scan any Qr code  to pay</Text>
                    <Image
                        source={require('../../Assets/images/ScanQrCode.png')}
                        resizeMode='contain'
                        style={{
                            height: 100,
                            width: 100
                        }}
                    />

                    {/* <QRCodeScanner
                        onRead={onSuccess}
                        flashMode={RNCamera.Constants.FlashMode.torch}
                        topContent={
                            <Text style={styles.centerText}>
                                Go to{' '}
                                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                                your computer and scan the QR code.
                            </Text>
                        }
                        bottomContent={
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <Text style={styles.buttonText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        }
                    /> */}
                </View>

                <View
                    style={{
                        flex: 1
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <AppTextInput
                        placeholder='Enter name  or Mobile Number'
                        placeholderTextColor={colors.primaryFontColor}
                        mainContainerStyle={{
                            width: "90%",
                            
                        }}
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            fontSize: 10,
                            paddingHorizontal: 10
                        }}

                    />

                    <Icon
                        name='contacts-outline'
                        type='MaterialCommunityIcon'
                        size={25}
                    />


                </View>






            </View>
            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',

                }}
            >
                <FlatList
                    horizontal={true}
                    data={contactData}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    alignItems: 'center',
                                    // justifyContent: 'space-evenly'
                                }}
                            >
                                <Image
                                    source={item.image}
                                    style={{
                                        height: 46,
                                        width: 46,
                                        borderRadius: 23
                                    }}
                                />
                                <Text
                                    style={{
                                        color: colors.primaryFontColor,
                                        marginTop: 5,
                                        fontFamily: FONTS.medium,
                                        fontSize: 12
                                    }}
                                >{item.name}</Text>
                            </View>
                        )
                    }}

                />
            </View>

            <View 
            style={{
                height: 20
            }}
            />

            {/* </ScrollView> */}

        </Container>
    )
}

export default Scan

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})