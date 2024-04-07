//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppButton, Container, StatusBar, useTheme } from 'react-native-basic-elements';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import { AuthStackModel } from '../../Models/Navigation/AuthStackModel';
import { setUser } from '../../redux/reducer/User';
import { useAppDispatch } from '../../redux/store';
import AuthService from '../../Services/AuthService';
import NavigationService from '../../Services/NavigationService';

type Props = StackScreenProps<AppStackModel,'OrderSuccessFull'>;
const OrderSuccessFull = (props: Props) => {
    // const {token} = props.route.params;
    const dispatch = useAppDispatch();
    const colors = useTheme()

    // const getProfile = () =>{
    //     AuthService.getProfile()
    //         .then((res)=>{
    //             console.log('323>>>>>>',res)
    //             dispatch(setUser(res.data));
    //             AuthService.setAccount(res.data)
    //         })
    //         .catch((err)=>{
    //             console.log("err",err)
    //         })
    // }

    return (

        <Container>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='light-content'
            />
            <View
                style={{
                    flex: 0.5
                }}
            />
            <View
                style={{
                    marginTop: 30,
                    paddingHorizontal: 30
                }}
            >
                <Image
                    source={require('../../Assets/images/success.png')}
                    style={{
                        height: 104.7,
                        width: 104.7,
                        alignSelf: 'center',
                        marginVertical:20
                        // backgroundColor:'red'
                    }}
                    resizeMode='contain'
                />
                <Text
                    style={{
                        fontFamily: FONTS.semibold,
                        color: colors.primaryFontColor,
                        textAlign: 'center',
                        marginTop: 15,
                        fontSize: 18
                    }}
                >Order {""} placed {'\n'} successfully</Text>

                {/* <Text
                    style={{
                        fontFamily: FONTS.regular,
                        color: colors.primaryFontColor,
                        textAlign: 'center',
                        marginTop: 10
                    }}
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}

                {/* <View> */}
                <AppButton
                    title='Continue'
                    textStyle={{
                        fontFamily: FONTS.medium,
                        color: colors.pageBackgroundColor,
                        fontSize: 15,
                    }}

                    style={{
                        // width: 200,
                        borderRadius: 30,
                        marginTop: 20,
                        justifyContent: 'center',
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    // onPress={() => NavigationService.navigate('AppStack')}
                    onPress={() => {
                        props.navigation.replace('Eshop_Index')
                        
                    }}
                />
                {/* </View> */}

            </View>
            <View
                style={{
                    flex: 1
                }}
            />
        </Container>

    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default OrderSuccessFull;
