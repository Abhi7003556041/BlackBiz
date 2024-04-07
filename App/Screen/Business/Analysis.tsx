//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import { Container, Text, useTheme, Icon } from 'react-native-basic-elements';
import AnalysisBlog from '../../Component/Business/AnalysisBlog';
import StockDetails from '../../Component/Business/StockDetails';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const Analysis = () => {
    const colors = useTheme()
    const stockDetails = [
        {
            image: require('../../Assets/images/Stock(1).png'),
            title: 'Stocks - S&P Ralies as Tech Rebounds, Tariffs…',
            type: 'OverView'


        },
        {
            image: require('../../Assets/images/Stock(3).png'),
            title: 'Point/Counterpoint: The Case for the Euro',
            type: 'OverView'

        },
        {
            image: require('../../Assets/images/Stock(4).png'),
            title: 'Coronavirus ‘Second Wave’ could mean more losses for Euro to US Dollar',
            type: 'OverView'

        },
    ]
    const Analysisdata = [
        {
            image: require('../../Assets/images/Cohen.png'),
            title: 'Asia Session: Regional Indices Jumps As Fed Rides To The Rescue; Dollar Sags',
            name: 'Jeffray Harley'
        },
        {
            image: require('../../Assets/images/Harely.png'),
            title: "3 Stock To Watch In The Coming Week: Apple, Nike, Pacific Gas & Electric",
            name: 'Chris Cohen'
        },
        {
            image: require('../../Assets/images/Monica.png'),
            title: 'Opening Bell: Futures, Stocks Wobble On Hope Vs Despair Marry-Go-Ground',
            name: 'Hey Hey Monica'
        },
    ]
    return (
        <Container>
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 10
                    }}
                >
                    <View
                        style={styles.time_date}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                fontSize: 12,
                                color: colors.primaryFontColor
                            }}
                        >09:25</Text>
                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                fontSize: 12,
                                color: colors.primaryFontColor
                            }}
                        >March 11 . 2020</Text>
                    </View>

                    <Text.Heading
                        title='Stocks - S&P Ralies as Tech Rebounds Tariff Less Hashier Platiner Lamp'
                        numberOfLines={2}
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 16,
                            paddingVertical: 10
                        }}
                    />
                    <Text
                        style={styles.sub_text}
                    >
                        That is Peter Turchin, a 63-year-old researcher at the University of Connecticut, sharing his thoughts in a story for Time.com on where the U.S. goes from here.
                    </Text>

                    <View
                        style={styles.image}
                    >
                        <Image
                            source={require('../../Assets/images/Analysis_image.png')}
                            style={{
                                height: 160,
                                width: '100%'
                            }}
                        />

                    </View>

                    <Text style={styles.sub_text}>As the divide between the rich and the poor has only widened during the coronavirus pandemic, Turchin said he believes tensions “may escalate all the way to a civil war.”</Text>

                    <View
                        style={{
                            marginTop: 10,
                           
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 16,
                                    color: colors.primaryFontColor
                                }}
                            >News</Text>

                            <Pressable
                                onPress={() => NavigationService.navigate('SeeAllNews')}
                            >
                                <Icon
                                    name='right'
                                    type='AntDesign'
                                />
                            </Pressable>
                        </View>


                        <FlatList
                            data={stockDetails}
                            renderItem={({ item }) => {
                                return (
                                    <StockDetails item={item} />
                                )
                            }}
                        />


                    </View>

                    <View
                        style={{
                            marginTop: 10,
                            paddingBottom: 20
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 16,
                                    color: colors.primaryFontColor
                                }}
                            >Analysis Blog</Text>

                            <Pressable
                                onPress={() => NavigationService.navigate('SeeAllAnalysisBlog')}
                            >
                                <Icon
                                    name='right'
                                    type='AntDesign'
                                />
                            </Pressable>
                        </View>


                        <FlatList
                            data={Analysisdata}
                            renderItem={({ item }) => {
                                return (
                                    <AnalysisBlog item={item} />
                                )
                            }}
                        />


                    </View>


                </View>
            </ScrollView>


        </Container>
    );
};

const styles = StyleSheet.create({
    time_date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    sub_text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
    },

})



//make this component available to the app
export default Analysis;
