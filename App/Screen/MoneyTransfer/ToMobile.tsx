//import liraries

import React, { Component, useState } from 'react';
import {
    View, Text, StyleSheet, ScrollView,
    StatusBar as RNStatusbar, Image, FlatList, Pressable
} from 'react-native';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';
import ContactDetails from '../../Component/ContactDetails';
// import { FlatList } from 'react-native-gesture-handler';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const ToMobile = () => {
    const colors = useTheme()
    const [start, setStar] = useState(false)

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
    const contactList = [
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqk7VPVs2EvLY7BL6PEi7Sd1W35__yl2IHfUfb21RTNXNzjPzFxTflG_Y8-3Ml2St9Lk&usqp=CAU' },

        },
    ]
    return (
        <Container>
            <AppBar.Back
                title='Upi Money Transfer'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.regular,
                    fontSize: 15,
                    textAlign: 'center'
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
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 10,

                    }}
                >


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <AppTextInput
                            placeholder="Enter name  or  Mobile Number"
                            inputStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 12,
                                color: colors.secondaryFontColor,
                                paddingHorizontal: 10,
                                width: 0
                            }}
                            mainContainerStyle={{
                                flex: 1
                            }}
                        />
                        <View
                            style={{
                                marginLeft: 10,
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={require('../../Assets/images/contact.png')}
                                style={{
                                    height: 31.2,
                                    width: 23.4
                                }}
                                resizeMode='contain'
                            />
                            <Text
                                style={{
                                    fontFamily: FONTS.regular,
                                    color: colors.primaryFontColor,
                                    fontSize: 10,
                                    marginTop: 5
                                }}
                            >Contact</Text>
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
                            marginTop: 20
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                color: colors.primaryFontColor,
                                fontSize: 15
                            }}
                        >Contacts</Text>


                        <View
                            style={{
                                height: 15
                            }}
                        />

                    </View>

                    <Container>
                        <FlatList
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                            renderItem={({ item }) => {
                                return (
                                    <ContactDetails item={item} />
                                )
                            }}
                        />
                    </Container>



                </View>
            </ScrollView>
        </Container>

    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ToMobile;
