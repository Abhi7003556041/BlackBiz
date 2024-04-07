//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';

// create a component
const BusinessOverViewCardDetails = () => {
    const colors = useTheme()
    return (
        <View
            style={{
                height: 84,
                width: '100%',
                backgroundColor: '#241A0C',
            }}
        >
            <View
                style={styles.card}
            >
                <Icon
                    name='arrow-up'
                    type='Entypo'
                    color={'#00FF89'}

                />
                <Text
                    style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.semibold,
                        fontSize: 16,
                        marginLeft: 10
                    }}
                >25,656.57</Text>
                <View
                    style={{
                        flex: 1
                    }}
                />

                <Text
                    style={{
                        color: '#00FF89',
                        fontFamily: FONTS.semibold,
                        fontSize: 12,
                        marginLeft: 10
                    }}
                >+0,73 (+0,52%)</Text>

            </View>

            <View
                style={styles.card}
            >
                <Icon
                    name='clockcircle'
                    type='AntDesign'
                    color={colors.primaryThemeColor}
                    size={15}
                />

                <Text
                    style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.medium,
                        fontSize: 12,
                        marginLeft: 10
                    }}
                >13/6 - Delayed. Currency in FRC</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center'
    }
});


//make this component available to the app
export default BusinessOverViewCardDetails;
