//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthStackModel } from '../Models/Navigation/AuthStackModel';
// import ForgetPassword from '../Screen/Auth/ForgetPassword';
import GetStart from '../Screen/Auth/GetStart';
import LandingPage from '../Screen/Auth/LandingPage';
import LoginSuccessPage from '../Screen/Auth/LoginSuccessPage';
import OtpVerification from '../Screen/Auth/OtpVerification';
import Register from '../Screen/Auth/Register';
import SignIn from '../Screen/Auth/SignIn';



const Stack = createStackNavigator<AuthStackModel>()
// create a component
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="GetStart" component={GetStart} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="LoginSuccessPage" component={LoginSuccessPage} />
            <Stack.Screen name="Register" component={Register} />

            {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
        </Stack.Navigator>
    );
};


//make this component available to the app
export default AuthStack;
