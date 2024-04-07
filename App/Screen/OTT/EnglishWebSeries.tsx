import {
    StyleSheet, Text, View, ScrollView,
    StatusBar as RNStatusbar, Image, Pressable, FlatList,
    ImageSourcePropType, Dimensions
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

const { height, width } = Dimensions.get('window')
interface cardDataType {
    img: ImageSourcePropType
}

const EnglishWebSeries = () => {
    const colors = useTheme()

    const [cardData, setCardData] = useState<cardDataType[]>([
        {
            img: require('../../Assets/images/movie1.png')
        },
        {
            img: require('../../Assets/images/movie2.png')
        },
        {
            img: require('../../Assets/images/movie3.png')
        },
        {
            img: require('../../Assets/images/movie4.png')
        },
        {
            img: require('../../Assets/images/movie5.png')
        },
        {
            img: require('../../Assets/images/movie6.png')
        },
        {
            img: require('../../Assets/images/movie7.png')
        },
        {
            img: require('../../Assets/images/movie8.png')
        },
        {
            img: require('../../Assets/images/movie9.png')
        },
        {
            img: require('../../Assets/images/movie1.png')
        },
        {
            img: require('../../Assets/images/movie5.png')
        },
        {
            img: require('../../Assets/images/movie6.png')
        },
        {
            img: require('../../Assets/images/movie7.png')
        },
        {
            img: require('../../Assets/images/movie2.png')
        },
        {
            img: require('../../Assets/images/movie3.png')
        },
    ])

    const moviCard = ({ item }: { item: any }) => {
        return (
            <View style={{ marginBottom: 10 }}>
                <Image source={item.img}

                    style={{ width: width / 3.5, height: 180, }}
                    resizeMode='contain' />
            </View>
        )
    }
    return (
        <Container style={{flex:1}}>
            <AppBar.Back
                title='English Web Seris'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    color: colors.primaryFontColor
                }}

                rightActions={[
                    {
                        icon: <Icon
                            name='search1'
                            type='AntDesign'
                            size={20}
                        />
                    },
                    {
                        icon: <Icon
                            name='dots-three-vertical'
                            type='Entypo'
                            size={17}
                            style={{
                                marginLeft: 28,
                                marginRight: 20
                            }}
                        />,

                        onPress: () => console.log("bal")
                    }
                ]}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
                onLeftIconPress={() => NavigationService.back()}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />

                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    numColumns={3}
                    data={cardData}
                    renderItem={moviCard}
                />

           

            {/* <View style={{ height: 340 }} /> */}
        </Container>
    )
}

export default EnglishWebSeries

const styles = StyleSheet.create({})