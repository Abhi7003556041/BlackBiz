import {
    StyleSheet, Text, View, ScrollView,
    StatusBar as RNStatusbar, Image, Pressable, FlatList,
    ImageSourcePropType, SectionList, Dimensions
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import ViewAllRow from './index';

const { height, width } = Dimensions.get('window')

interface cardDataType {
    img: ImageSourcePropType
}
const Movies = () => {

    const [cardData, setCardData] = useState<cardDataType[]>([

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

    ])

    const moviCard = ({ item }:{item:any}) => {
     
        return (
            <View style={{ marginBottom: 10 }}>
                <Image source={item.img}
                    style={{ width: width / 3.5, height: 180, }}
                    resizeMode='contain' />
            </View>
        )
    }
    return (
        <Container>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                numColumns={3}
                data={cardData}
                renderItem={moviCard}
            />
        </Container>
    )
}

export default Movies

const styles = StyleSheet.create({})