//import liraries
// import { useTheme } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { Container, Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../Constants/Fonts';
import { ContactDetailsModel } from '../Models/Contact/Contact';


const ContactDetails: React.FC<ContactDetailsModel> = ({ item }) => {
    const colors = useTheme()
    const [Value, setValue] = useState(false)
    return (

        <View
            style={{
                flexDirection: 'row',
                marginTop: 10
            }}
        >
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU' }}
                style={{
                    height: 46,
                    width: 46,
                    borderRadius: 23
                }}
                resizeMode='contain'
            />

            <View>
                <Text
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: 12,
                        color: colors.primaryFontColor,
                        marginLeft: 10
                    }}
                >Christy Andreas</Text>
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        color: colors.secondaryFontColor,
                        fontSize: 10,
                        marginLeft: 10
                    }}
                >Paypal • Jhone@gmail.com</Text>
            </View>
            <View
                style={{
                    flex: 1
                }}
            />
            <Pressable onPress={() => setValue(s => !s)} >
                {Value ? <>
                    <Icon
                        name='star'
                        type='AntDesign'
                      color={'yellow'}
                    />
                </> : <>
                    <Icon
                        name='star'
                        type='AntDesign'
                    />
                </>}

            </Pressable>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ContactDetails;
