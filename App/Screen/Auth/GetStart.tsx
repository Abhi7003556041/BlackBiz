//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useTheme, Container, Text, AppButton, StatusBar } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { AuthStackModel } from '../../Models/Navigation/AuthStackModel';
import NavigationService from '../../Services/NavigationService';

const { height, width } = Dimensions.get('window')
type Props = StackScreenProps<AuthStackModel, 'GetStart'>
// create a component
const GetStart = (props :Props) => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar
                backgroundColor={colors.pageBackgroundColor}
                barStyle='light-content'
            />
            <View
                style={{
                    height: height - 250
                }}
            >
                <View style={styles.slide1}>
                    <Image
                        source={require('../../Assets/images/pig.png')}
                        resizeMode='contain'
                        style={{
                            width: width - 50,
                        }}
                    />
                </View>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 10,
                }}
            >
                <Text.Heading
                    title={'Manage your finances \n now more easily'}
                    style={{
                        fontFamily: FONTS.semibold,
                        fontSize: 20,
                        // color: colors.primaryFontColor,
                        textAlign: 'center'
                    }}
                />
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: 10,
                        textAlign: 'center',
                        color: colors.secondaryFontColor,
                        marginTop: 10
                    }}
                >Semper in cursus magna et eu varius nunc {'\n'} adipiscing. Elementum justo, laoreet id {'\n'} sem . </Text>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 30
                }}
            >
                <AppButton
                    shadow={true}
                    title="Get Started"
                    textStyle={{
                        color: colors.pageBackgroundColor,
                        fontFamily: FONTS.regular,
                        fontSize: 15
                    }}
                    style={{
                        borderRadius: 30,
                        width: 251,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    onPress={() => props.navigation.navigate('SignIn')}
                />
            </View>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical:100

    },
});

//make this component available to the app
export default GetStart;
