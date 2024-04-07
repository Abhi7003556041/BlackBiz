//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Pressable } from 'react-native';
import { AppButton, Container, Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import BusinessOverViewCardDetails from '../../Component/Business/BusinessOverViewCradDetails';
import StockDetails from '../../Component/Business/StockDetails';
import NavigationService from '../../Services/NavigationService';

const screenWidth = Dimensions.get("window").width;

// create a component
const OverView = () => {
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


    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 193, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        // marginTop: 10
    };

    const data = {
        labels: ["1D", "1W", "1M", "1Y", "5Y", "Max"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(255, 193, 0, 0.16 ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        // legend: ["Rainy Days"] // optional
    };

    const GraphData = [
        {
            label: 'Day’s range',
            count: '25,078.41 - 25,965.55'
        },
        {
            label: '52wk range',
            count: '18,213.65 - 29,568.57'
        },
        {
            label: 'Previous Close',
            count: '25,128.17'
        },

        {
            label: 'Open',
            count: '25,659.42'
        },

        {
            label: 'Volumn',
            count: '521,185,430'
        },

        {
            label: 'Average Vol. (3m)',
            count: '502,157,511'
        },

        {
            label: '# Components',
            count: '30'
        },

        {
            label: '1-Year Change',
            count: '-1.86%'
        },


    ]

    return (
        <Container>
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <BusinessOverViewCardDetails />

                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={256}
                        // verticalLabelRotation={30}
                        chartConfig={chartConfig}
                        bezier
                        style={{
                            paddingTop: 20,

                        }}
                    />

                    <AppButton
                        title='Start Trading'
                        style={{
                            marginTop: 20,
                            marginHorizontal: 0,
                            marginBottom: 20
                        }}
                        textStyle={{
                            color: colors.pageBackgroundColor,
                            fontFamily: FONTS.semibold,
                            fontSize: 14,
                        }}
                    />

                    <FlatList
                        data={GraphData}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 10,
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: colors.primaryFontColor,
                                            fontFamily: FONTS.semibold,
                                            fontSize: 12
                                        }}
                                    >{item.label}</Text>

                                    <Text
                                        style={{
                                            color: colors.primaryFontColor,
                                            fontFamily: FONTS.regular,
                                            fontSize: 12
                                        }}
                                    >{item.count}</Text>

                                </View>
                            )
                        }}
                    />

                    <View
                        style={{
                            marginTop: 15,

                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontSize: 16,
                                fontFamily: FONTS.semibold
                            }}
                        >Technical</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}
                        >
                            <View>
                                <AppButton
                                    title='Sell'
                                    textStyle={{
                                        fontFamily: FONTS.semibold,
                                        fontSize: 14,
                                        color: '#F44040'

                                    }}

                                    style={{
                                        backgroundColor: '#FFD7D7',
                                        height: 40,
                                        width: 72,
                                        marginHorizontal: 0,
                                        marginTop: 15
                                    }}
                                />
                                <Text
                                    style={{
                                        color: colors.secondaryFontColor,
                                        fontFamily: FONTS.medium,
                                        textAlign: 'center',
                                        marginTop: 5
                                    }}
                                >Hourly</Text>
                            </View>


                            <View
                                style={{
                                    marginLeft: 5
                                }}
                            >
                                <AppButton
                                    title='Neutral'
                                    textStyle={{
                                        fontFamily: FONTS.semibold,
                                        fontSize: 14,
                                        color: colors.primaryFontColor

                                    }}

                                    style={{
                                        backgroundColor: '#7B788A',
                                        height: 40,
                                        width: 72,
                                        marginHorizontal: 0,
                                        marginTop: 15
                                    }}
                                />
                                <Text
                                    style={{
                                        color: colors.secondaryFontColor,
                                        fontFamily: FONTS.medium,
                                        textAlign: 'center',
                                        marginTop: 5
                                    }}
                                >Daily</Text>
                            </View>

                            <View
                                style={{
                                    marginLeft: 5
                                }}
                            >
                                <AppButton
                                    title='Buy'
                                    textStyle={{
                                        fontFamily: FONTS.semibold,
                                        fontSize: 14,
                                        color: '#EBB337'

                                    }}

                                    style={{
                                        backgroundColor: colors.primaryFontColor,
                                        height: 40,
                                        width: 72,
                                        marginHorizontal: 0,
                                        marginTop: 15,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: colors.secondaryFontColor,
                                        fontFamily: FONTS.medium,
                                        textAlign: 'center',
                                        marginTop: 5
                                    }}
                                >Weekly</Text>
                            </View>


                            <View
                                style={{
                                    marginLeft: 5
                                }}
                            >
                                <AppButton

                                    title='Strong Buy'
                                    textStyle={{
                                        fontFamily: FONTS.semibold,
                                        fontSize: 14,
                                        color: colors.pageBackgroundColor

                                    }}

                                    style={{
                                        backgroundColor: colors.primaryThemeColor,
                                        height: 40,
                                        width: 98,
                                        marginHorizontal: 0,
                                        marginTop: 15
                                    }}
                                />
                                <Text
                                    style={{
                                        color: colors.secondaryFontColor,
                                        fontFamily: FONTS.medium,
                                        textAlign: 'center',
                                        marginTop: 5
                                    }}
                                >Monthly</Text>
                            </View>


                        </View>

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

                    </View>

                    <View
                        style={{
                            height: 10
                        }}
                    />



                </View>
            </ScrollView>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
        alignItems: 'center'
    }
});


//make this component available to the app
export default OverView;
