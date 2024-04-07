//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import BusinessHaeder from '../../Component/Header/BusinessHeader';
import { FONTS } from '../../Constants/Fonts';

// create a component
const MyProfile = () => {
    const colors = useTheme()
    return (
    <Container>
        <BusinessHaeder title='My Profile'/>
        <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Image 
            source={require('../../Assets/images/BusinessProfile.png')}
            resizeMode='contain'
            style={{
                height: 317,
                width: '100%'
            }}
            />
            <Text
            style={{
                fontFamily:  FONTS.medium,
                fontSize: 15,
                color:  colors.primaryFontColor,
                marginTop: 10
            }}
            >
            You haven’t Invested Yet
            </Text>
        </View>
    </Container>
    );
};



//make this component available to the app
export default MyProfile;
