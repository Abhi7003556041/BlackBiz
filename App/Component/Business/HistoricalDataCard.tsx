//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container,useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const HistoricalDataCard = () => {
    const colors = useTheme()
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 50,
                }}
            >
                <Text
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: 12,
                        color: colors.primaryFontColor

                    }}
                >26,289.98</Text>

                <View
                    style={{
                        height: 50,
                        width: 5,
                        backgroundColor: colors.pageBackgroundColor,
                        position: 'absolute',
                        bottom: 0,
                        right: 5

                    }}
                />
            </View>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default HistoricalDataCard;
