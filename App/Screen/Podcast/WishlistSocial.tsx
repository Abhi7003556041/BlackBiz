//import liraries
// import { Image } from 'native-base';
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {
  AppBar,
  AppButton,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';
import {FlatList} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {GetALLPodcast, GetALLPodcastData} from '../../Models/PodcastModel';
import { moderateScale } from '../../PixelRatio';
import { deletedWishList, setWishList } from '../../redux/reducer/Podcast';
import { RootState, useAppDispatch } from '../../redux/store';
import NavigationService from '../../Services/NavigationService';
import PodcastServices from '../../Services/PodcastServices';
import Toast from 'react-native-simple-toast';

type Props = StackScreenProps<AppStackModel, 'WishlistSocial'>;
// create a component
const WishlistSocial = (props: Props) => {
  const colors = useTheme();
  const [allWish, setAllWish] = useState<Array<GetALLPodcastData>>();
  const {wishList} = useSelector((state:RootState)=>state.Podcast)
  const dispatch = useAppDispatch()
  useEffect(() => {
    getAllPodcast();
  }, []);

  const getAllPodcast = () => {
    PodcastServices.getAllWishList().then(res => {
      console.log('ALlWish', res.data);
    //   setAllWish(res.data);
        dispatch(setWishList(res.data))
    });
  };

  const deleteWishList = (val:string) =>{
    dispatch(deletedWishList(val))
    PodcastServices.deleteWishList(val)
        .then((res)=>{
            console.log('deklele',res) 
            Toast.show('Removed From Playlist', Toast.SHORT);

        })
  } 

  return (
    <Container>
      <AppBar.Back
        backgroundColor={'transparent'}
        titlePosition="left"
        title="PlayList"
        onLeftIconPress={() => NavigationService.back()}
        style={{
          marginTop: 30,
        }}
      />
      <View
      style={{
        width:'100%',
        height:0.5,
        backgroundColor:'grey',
        marginBottom:10
      }}
      >
        
      </View>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      {wishList.length ? 
      <FlatList
        data={wishList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Pressable
              style={{
                // marginTop: 15,
                flexDirection: 'row',
                marginBottom: 15,
                justifyContent: 'space-between',
              }}
              onPress={() => props.navigation.navigate('Episode',{data:wishList,item:item})}
            >
              <View
                style={{
                  width: '30%',
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                <Image
                  source={{uri:item.thumbline}}
                //   source={require('../../Assets/images/news2.png')}
                  style={{
                    height: 116,
                    width: 116,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  width: '60%',
                }}>
                <Text
                  allowFontScaling={false}
                  style={{
                    color: COLORS.primaryFontColor,
                    fontFamily: FONTS.semibold,
                    fontSize: 14,
                    // textAlign: 'center'
                  }}>
                  {item.name}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: COLORS.primaryFontColor,
                      fontFamily: FONTS.regular,
                      fontSize: 12,
                      maxWidth: '60%',
                    }}>
                    jdsjkjdlskd
                  </Text>

                  <Text
                    style={{
                      color: COLORS.primaryFontColor,
                      fontFamily: FONTS.regular,
                      fontSize: 12,
                      marginLeft: 10,
                    }}>
                    |
                  </Text>

                  <Text
                    style={{
                      color: COLORS.primaryFontColor,
                      fontFamily: FONTS.regular,
                      fontSize: 12,
                      marginLeft: 10,
                    }}>
                    {item.duration}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  {/* {props.item?.type == 'history' ?

                        <AppButton
                            title='Completed'
                            textStyle={{
                                fontFamily: FONTS.semibold,
                                color: COLORS.primaryThemeColor,
                                fontSize: 10,
                                marginRight: 10
                            }}
                            style={{
                                // height: 30,
                                // width:30,
                                borderRadius: 20,
                                marginHorizontal: 0,
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: COLORS.primaryThemeColor,
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            

                            buttonIcon={{
                                position: 'left',
                                name: 'controller-play',
                                type: 'Entypo',
                                color: COLORS.primaryThemeColor,
                                style: {
                                    marginLeft: 10
                                }
                            }}
                            // onPress={() => NavigationService.navigate('PlayPodcast')}
                        />

                        :  */}

                  <AppButton
                    // title='Play'
                    textStyle={{
                      fontFamily: FONTS.semibold,
                      color: COLORS.pageBackgroundColor,
                      fontSize: 10,
                      // marginRight: 10
                      // marginLeft:7
                    }}
                    style={{
                      height: 28,
                      width: 28,

                      borderRadius: 20,
                      marginHorizontal: 0,
                      // flexDirection:'column',
                      justifyContent: 'center',

                      alignItems: 'center',
                    }}
                    buttonIcon={{
                      position: 'left',
                      name: 'controller-play',
                      type: 'Entypo',
                      color: COLORS.pageBackgroundColor,
                      style: {
                        marginLeft: 0,
                      },
                    }}
                    onPress={() => NavigationService.navigate('PlayPodcast',{data:wishList ,item:item})}
                  />

                  {/* {
                        props.item?.playList ? */}
                  {/* <Pressable>
                    <Icon
                      name="playlist-plus"
                      type="MaterialCommunityIcon"
                      style={{
                        marginLeft: 15,
                      }}
                      size={20}
                    />
                  </Pressable> */}
                  {/* :
                            <Icon
                                name='checksquare'
                                type='AntDesign'
                                style={{
                                    marginLeft: 15
                                }}
                                color='#0ABE75'
                                size={20}
                            /> */}

                  {/* {
                        props.item?.downloads ? */}
                  <Icon
                    name="download-box"
                    type="MaterialCommunityIcon"
                    style={{
                      marginLeft: 20,
                    }}
                    color="#0ABE75"
                    size={20}
                  />
                  {/* :
                            <Icon
                                name='download-box-outline'
                                type='MaterialCommunityIcon'
                                style={{
                                    marginLeft: 15
                                }}
                                size={20}
                            /> */}

                  {/* } */}

                  <View
                    style={{
                      flex: 1,
                    }}
                  />
                  <Pressable
                  onPress={()=>{
                    deleteWishList(item._id)
                  }}
                  style={{
                    width:30,
                    height:30,
                    // backgroundColor:COLORS.gray11,
                    borderRadius:20,
                    alignItems:'center',
                    justifyContent:'center'
                    // alignSelf:'center'
                  }}
                  >
                  <Icon
                    name="delete"
                    type="AntDesign"
                    style={{
                    //   marginLeft: 10,
                    }}
                    size={17}
                  />
                  </Pressable>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
      :
      <View
            style={{
              // flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(250),
            }}>
            <Icon
              name="search-off"
              type="MaterialIcon"
              size={80}
              //   style={{
              //     //marginLeft: 28,
              //     marginRight: 20,
              //   }}
            />
            <Text
              style={{
                color: COLORS.primaryThemeColor,
              }}>
              No Wishlist found
            </Text>
          </View>
}
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
export default WishlistSocial;
