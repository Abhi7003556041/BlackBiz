//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme} from 'react-native-basic-elements';
import {COLORS} from './App/Constants/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './App/Navigation/AuthStack';
import NavigationService from './App/Services/NavigationService';
import AppStack from './App/Navigation/AppStack';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './App/redux/store';
import AuthService from './App/Services/AuthService';
import {setUser} from './App/redux/reducer/User';

import {ReactNativeFirebase} from '@react-native-firebase/app';
const Stack = createStackNavigator();
// create a component
const App = () => {
  const loginStatus = useSelector((state: RootState) => state.User.loginStatus);
  const dispatch = useDispatch();
  // const [isLoggedin,setIsloggedin] useState
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 6000);
    getUserData();
    console.log('status>>>>>>>>>>', loginStatus);
  }, []);

  const getUserData = () => {
    AuthService.getAccount()
      .then(res => {
        console.log('res1332>>>>>>>>>>', res);
        if (res != null) {
          dispatch(setUser(res));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View
      style={{
        flex: 1
      }}>
      <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: COLORS.secondaryThemeColor,
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: COLORS.pageBackgroundColor,
            headerColor: COLORS.pageBackgroundColor,
            pageBackgroundColor: COLORS.pageBackgroundColor,
            tabBarColor: '#fff',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: COLORS.primaryThemeColor,
            borderColor: '#999',
            dark: COLORS.dark11,
          },
          dark: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: COLORS.secondaryThemeColor,
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: COLORS.pageBackgroundColor,
            headerColor: COLORS.pageBackgroundColor,
            pageBackgroundColor: COLORS.pageBackgroundColor,
            tabBarColor: '#fff',
            shadowColor: '#999',
            statusBarStyle: 'dark-content',
            buttonColor: COLORS.primaryThemeColor,
            borderColor: '#999',
          },
        }}
        mode="dark">
        <NavigationContainer
          ref={r => NavigationService.setTopLevelNavigator(r)}
          theme={{
            colors: {
              background: COLORS.pageBackgroundColor,
              primary: COLORS.primaryThemeColor,
              card: COLORS.cardcolor,
              text: COLORS.primaryFontColor,
              notification: COLORS.primaryThemeColor,
              border: '#999',
            },
            dark: true,
          }}>
          <Stack.Navigator
            initialRouteName="AuthStack"
            screenOptions={{
              headerShown: false,
            }}>
            {loginStatus == false ? (
              <Stack.Screen name="AuthStack" component={AuthStack} />
            ) : (
              <Stack.Screen name="AppStack" component={AppStack} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Theme.Provider>
    </View>
  );
};

//make this component available to the app
export default App;
