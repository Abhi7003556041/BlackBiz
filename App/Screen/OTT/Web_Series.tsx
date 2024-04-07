import {
    StyleSheet, Text, View, ScrollView,
    StatusBar as RNStatusbar, Image, Pressable, FlatList,
    ImageSourcePropType, SectionList, Dimensions
} from 'react-native'
import React, { useEffect, useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import ViewAllRow from './index';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import OttServices from '../../Services/OttServices';
import { CategoryWiseVideoResponseData } from '../../Models/OttModel';

const { height, width } = Dimensions.get('window')

interface cardDataType {
    img: ImageSourcePropType
}

type Props = StackScreenProps<AppStackModel,'WebSerise'>
const Web_Series = (props:Props) => {
    const Id = props.route.params._id
    console.log('ID>>>',Id)
    const [videoData,setVideoData] = useState<Array<CategoryWiseVideoResponseData>>([])
    useEffect(()=>{
        categoryWiseVideo()
    },[])
    const categoryWiseVideo = () => {
        console.log('balll')
        OttServices.CategoryWiseVideo(Id)
            .then((res)=>{
                console.log('categoryWIsevisdeo>>>',res.data)
                setVideoData(res.data)
            })
    }

    const moviCard = ({ item }:{item:CategoryWiseVideoResponseData}) => {
        return (
            <Pressable
             style={{ marginBottom: 10,marginTop:10 }}
            onPress={() => props.navigation.navigate('VedioPlay',{data:item,catId:Id})}
            >
                <Image 
                    source={{uri:item.thumbline}}
                    style={{ width: width / 3.37, height: 180, borderRadius:10,marginLeft:10}}
                    resizeMode='cover' />
            </Pressable>
        )
    }
    return (
        <Container>
            <FlatList
                // columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                numColumns={3}
                data={videoData}
                renderItem={moviCard}
            />
        </Container>
    )
}

export default Web_Series

const styles = StyleSheet.create({})