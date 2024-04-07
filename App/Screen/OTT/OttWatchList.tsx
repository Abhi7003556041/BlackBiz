//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions ,ImageSourcePropType, Pressable, Image, StatusBar as RNStatusbar,} from 'react-native';
import { AppBar, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import { FlatList } from 'react-native-gesture-handler';
import { FONTS } from '../../Constants/Fonts';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import { CategoryWiseVideoResponseData } from '../../Models/OttModel';
import NavigationService from '../../Services/NavigationService';
import OttServices from '../../Services/OttServices';

const { height, width } = Dimensions.get('window')

type Props = StackScreenProps<AppStackModel,'OttWatchList'>

interface cardDataType {
    img: ImageSourcePropType
}

// create a component
const OttWatchList = (props:Props) => {
  const colors = useTheme();
  const [watchList,setWatchList] = useState<Array<CategoryWiseVideoResponseData>>([])

  useEffect(()=>{
    getWatchList()
  },[])

    const getWatchList = () => {
        OttServices.getWatchList()
            .then((res)=>{
                console.log('watchlist>>>>',res)
                setWatchList(res.data)
            })
    }


    const moviCard = ({ item }:{item:CategoryWiseVideoResponseData}) => {
        return (
            <Pressable style={{ marginBottom: 10,marginTop:10 }}
            onPress={() => props.navigation.replace('VedioPlay',{data:item,catId:item.category[0].categoryID})}
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
        <AppBar.Back
        title="Watch List"
        backgroundColor={'transparent'}
        titlePosition="left"
        titleStyle={{
          fontFamily: FONTS.bold,
          fontSize: 15,
          color: colors.primaryFontColor,
        }}
        rightActions={[
          {
            icon: <Icon name="search1" type="AntDesign" size={20} />,
          },
        ]}
        style={{
          marginTop: RNStatusbar.currentHeight,
        }}
        onLeftIconPress={() => NavigationService.back()}
      />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
        <FlatList
            numColumns={3}
            data={watchList}
            renderItem={moviCard}
        />
    </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default OttWatchList;
