//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';

const GradientTab = ({ activeColors = ['#F82476', '#1DA1F2'], selected = false, activeFontColor, inactiveFontColor, tabStyle,
    text, gradientStart, gradientEnd }) => {
    return (
        <LinearGradient
            style={[styles.tabStyle, {
                // backgroundColor: selected ? activeTabColor : null
            },
                tabStyle
            ]}
            colors={selected ? activeColors : ['transparent', 'transparent']}
            start={gradientStart}
            end={gradientEnd}
        >
            <Text
                style={[styles.tabText, {
                    color: selected ? activeFontColor : inactiveFontColor
                }]}
            >{text}</Text>
        </LinearGradient>
    )
}

const NormalTab = ({ selected = false, activeFontColor, inactiveFontColor, tabStyle, text, activeTabColor }) => {
    return (
        <View
            style={[styles.tabStyle, {
                backgroundColor: selected ? activeTabColor : null
            },
                tabStyle
            ]}
        >
            <Text
                style={[styles.tabText, {
                    color: selected ? activeFontColor : inactiveFontColor
                }]}
            >{text}</Text>
        </View>
    )
}
const AppTopTab = ({ inactiveFontColor = COLORS.primaryFontColor, tabStyle = {}, containerStyle = {}, activeTabColor = COLORS.primaryThemeColor, activeFontColor = COLORS.secondaryFontColor,
    tabs = [], gradient = false, activeColors, gradientEnd, gradientStart }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View>
            <View style={[styles.container, containerStyle]}>
                {
                    tabs.map((item, index) => {
                        return (
                            <Pressable
                            
                                onPress={() => setSelectedIndex(index)}
                                style={{
                                    flex: 1
                                }}
                            >
                                {
                                    gradient ?
                                        <GradientTab
                                            activeColors={activeColors}
                                            selected={selectedIndex == index}
                                            activeFontColor={activeFontColor}
                                            inactiveFontColor={inactiveFontColor}
                                            tabStyle={tabStyle}
                                            text={item.text}
                                            gradientStart={gradientStart}
                                            gradientEnd={gradientEnd}
                                        />
                                        :
                                        <NormalTab
                                            selected={selectedIndex == index}
                                            activeFontColor={activeFontColor}
                                            inactiveFontColor={inactiveFontColor}
                                            tabStyle={tabStyle}
                                            text={item.text}
                                            activeTabColor={activeTabColor}
                                        />
                                }
                            </Pressable>

                        )
                    })
                }
            </View>

            {
                tabs[selectedIndex].component
            }
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: COLORS.pageBackgroundColor,
        padding: 5,
        flexDirection: 'row',
        borderRadius: 10
    },
    tabStyle: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabText: {
        color: COLORS.primaryFontColor,
        fontFamily: FONTS.semibold,
        marginTop: 3
    }
});

//make this component available to the app
export default AppTopTab;
