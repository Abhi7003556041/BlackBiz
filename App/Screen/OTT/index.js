//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { moderateScale } from '../../PixelRatio/index';

// create a component
const ViewAllRow = ({ title = '', containerStyle = {}, rightText = '', onRightTextPress }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text
                style={styles.titleText}
            >{title}</Text>

            <Text
                style={styles.rightTextStyle}
                onPress={onRightTextPress ? onRightTextPress : null}
            >
                {rightText}
            </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(10),
        marginTop: moderateScale(5),
        alignItems: 'center'
    },
    titleText: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: '#fff'
    },
    rightTextStyle: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: '#FFC100'
    }
});

//make this component available to the app
export default ViewAllRow;
