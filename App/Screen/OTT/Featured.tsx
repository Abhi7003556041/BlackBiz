import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar as RNStatusbar,
  Image,
  Pressable,
  FlatList,
  ImageSourcePropType,
  SectionList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AppBar,
  AppTextInput,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';
import FastImage from 'react-native-fast-image';

import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import ViewAllRow from './index';
import Swiper from 'react-native-swiper';
import {ActivityIndicator} from 'react-native-paper';
import {moderateScale} from '../../PixelRatio';
import OttServices from '../../Services/OttServices';
import {
  FeaturedVideoResponseData,
  GetAllBannerResponseData,
} from '../../Models/OttModel';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';

type Props = StackScreenProps<AppStackModel,'Featured'>

const {height, width} = Dimensions.get('window');
interface movieWebDataType {
  title: string;
  titleA: string;
  data: [];
}

const Featured = (props:Props) => {
  const colors = useTheme();
  const [banner, setBanner] = useState<Array<GetAllBannerResponseData>>([]);
  const [featured, setFeatured] = useState<Array<FeaturedVideoResponseData>>(
    [],
  );
  useEffect(() => {
    getAllBanner();
    getAllFeaturedVideo();
  }, []);

  const getAllBanner = () => {
    OttServices.getAllBanner().then(res => {
      console.log('banner', res.data);
      setBanner(res.data);
    });
  };

  const getAllFeaturedVideo = () => {
    OttServices.getAllFeaturedVideo().then(res => {
      console.log('Featured>>>>', res.data);
      setFeatured(res.data);
    });
  };

  return (
    <Container style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10}}>
        {banner.length > 0 ? (
          <Swiper
            autoplay={true}
            loop={true}
            loadMinimalLoader={<ActivityIndicator />}
            style={{height: moderateScale(200)}}
            paginationStyle={{bottom: 20}}
            showsButtons={false}
            activeDotColor={'blue'}
            removeClippedSubviews={false}
            autoplayDirection={true}>
            {banner.map((item, index) => {
              return (
                <FastImage
                  key={index}
                  source={{
                    uri: item.image,
                    priority: FastImage.priority.normal,
                  }}
                  style={{
                    width: width - 20,
                    height: moderateScale(200),
                    alignSelf: 'center',
                    marginVertical: moderateScale(8),
                    borderRadius: 5,
                    backgroundColor: '#000',
                  }}
                />
              );
            })}
          </Swiper>
        ) : null}

        {/* <FlatList
        //   columnWrapperStyle={{justifyContent: 'space-evenly'}}
          numColumns={2}
          data={featured}
          renderItem={({item}) => {
            console.log('hasdga',item.name)
            return (
              <Pressable
              style={{
                width:'100%'
              }}
              >
                <ViewAllRow
                  title={item.name}
                  rightText="See More"
                  onRightTextPress={() =>
                    NavigationService.navigate('EnglishWebSeries')
                  }
                //   containerStyle={{
                //     width: '94%',
                //     alignSelf: 'center',
                //     marginTop: 10,
                //   }}
                />
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}
                >
                    <Text
                    style={{
                        color:'white'
                    }}
                    >{item.name}</Text>
                    <Text
                    style={{
                        color:'white'
                    }}
                    >See more</Text>
                </View>
                <View
                style={{
                    // width: width,
                    // paddingHorizontal: 10,
                    // alignSelf: 'center',
                    // marginTop: 20,
                    flexDirection: 'row',
                    // alignItems: 'center',
                    // justifyContent: 'space-between',
                  }}
                >
                {item.categoryVideos.map((val)=>{
                    return(
                <Pressable>
                <Image
                  source={{uri:val.thumbline}}
                  style={{width: '30%', height: 180, resizeMode: 'contain'}}
                />
                <Image
                  source={require('../../Assets/images/movie2.png')}
                  style={{width: '30%', height: 180, resizeMode: 'contain'}}
                />
                <Image
                  source={require('../../Assets/images/movie3.png')}
                  style={{width: '30%', height: 180, resizeMode: 'contain'}}
                />
              </Pressable>
                    )
                })}
                </View>

              </Pressable>
            );
          }}
        /> */}
        {featured.map(res => {
          return (
            <Pressable
            style={{
                marginHorizontal: moderateScale(10),
                marginTop: moderateScale(10),
            }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Pressable>
                <Text
                  style={{
                    fontFamily: FONTS.bold,
                    fontSize: 16,
                    color: '#fff'
                  }}
                  >
                  {res.name}
                </Text>
                </Pressable>
                <Pressable
                onPress={()=>{
                    props.navigation.jumpTo(res.name);
                }}
                >
                <Text
                  style={{
                    fontFamily: FONTS.bold,
                    fontSize: 14,
                    color: '#FFC100'
                  }}>
                  See more
                </Text>
                </Pressable>
              </View>
              <View
              style={{
                flexDirection:'row'
              }}
              >
                {res.categoryVideos.map(val => {
                    console.log('asdfjkhkjsa',val.thumbline)
                  return (
                    <Pressable
                    style={{
                        marginVertical:10
                    }}
                    onPress={() => props.navigation.navigate('VedioPlay',{data:val,catId:res._id})}
                    >
                      <Image
                        source={{uri:val.thumbline}}
                        style={{
                          width: width/3.5,
                          height: 180,
                          resizeMode: 'cover',
                          marginLeft:10,
                          borderRadius:10
                        }}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </Pressable>
          );
        })}

        {/* <View style={{height: 340}} /> */}
      </ScrollView>
    </Container>
  );
};

export default Featured;

const styles = StyleSheet.create({});
