import { View,  StyleSheet, Image } from 'react-native'
import React from 'react'
import { Card, Text, Container, StatusBar, useTheme } from 'react-native-basic-elements'
import SearchHeader from '../../Component/Header/SearchHeader'
import { FONTS } from '../../Constants/Fonts'
import { COLORS } from '../../Constants/Colors'

const Search = () => {
    const colors = useTheme()
    const travel = [
        {
            image: <Image
                source={require('../../Assets/images/FlightTicket.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Flight Ticket'
        },

        {
            image: <Image
                source={require('../../Assets/images/carbon_train-ticket.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Train Ticket'
        },

        {
            image: <Image
                source={require('../../Assets/images/carbon_train-profile.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Metro Ticket'
        },

        {
            image: <Image
                source={require('../../Assets/images/cil_bus-alt.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Bus Ticket'
        },

        {
            image: <Image
                source={require('../../Assets/images/hotel.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Hotel'
        },

        {
            image: <Image
                source={require('../../Assets/images/bx_movie-play.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Movie Ticket'
        },

        {
            image: <Image
                source={require('../../Assets/images/eventTickets.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'Events Ticket'
        },

        {
            image: <Image
                source={require('../../Assets/images/more.png')}
                resizeMode='contain'
                style={{
                    height: 24,
                    width: 24
                }}
            />,
            name: 'More'
        },
    ]
    return (
        <Container>
            <SearchHeader />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />

            <View
                style={{
                    marginTop: 50,
                    marginHorizontal: 10
                }}
            >
                <Card
                    style={{
                        borderWidth: 1,
                        borderColor: colors.secondaryFontColor,
                        borderRadius: 10,
                        paddingHorizontal: 10,

                    }}
                >
                    <Text.Heading
                        title='Popular Services'
                        style={{
                            fontFamily: FONTS.semibold,
                            color: COLORS.primaryFontColor,
                            fontSize: 15
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            marginTop: 10
                        }}
                    >
                        {travel.map((item, index) => {
                            return (
                                <View key={index}
                                    style={{
                                        marginTop: 15,
                                        paddingHorizontal: 5,
                                        alignItems: 'center'
                                    }}
                                >
                                    <View
                                        style={{
                                            height: 50,
                                            width: 50,
                                            backgroundColor: colors.secondaryThemeColor,
                                            borderRadius: 25,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {item.image}
                                    </View>


                                    <View
                                        style={{
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: FONTS.medium,
                                                fontSize: 10
                                            }}
                                        >{item.name}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </Card>
            </View>
        </Container>
    )
}



export default Search

const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15
    }
})