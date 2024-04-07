//import liraries
import React, {Component} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, FlatList} from 'react-native';
import {
  AppButton,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import {useSelector} from 'react-redux';
import {FONTS} from '../../Constants/Fonts';
import {
  AddWishList,
  GetALLPodcast,
  GetALLPodcastData,
} from '../../Models/PodcastModel';
import {updateWishlist} from '../../redux/reducer/Podcast';
import {RootState, useAppDispatch} from '../../redux/store';

import Queue from '../../Screen/MyLibrary/Queue';
import NavigationService from '../../Services/NavigationService';
import PodcastServices from '../../Services/PodcastServices';
import Toast from 'react-native-simple-toast';

type Props = {
  item: GetALLPodcastData;
  data: Array<GetALLPodcastData>;
};

// create a component
const NewPodcastCard = (props: Props) => {
  console.log('props.playList', props.item);
  const dispatch = useAppDispatch();
  const {podcastData} = useSelector((state: RootState) => state.Podcast);
  const [single, setSingle] = useState<Array<GetALLPodcastData>>([]);
  const [count, setCount] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const colors = useTheme();

  // useEffect(()=>{
  //     // addWishList()
  //     setData()
  // },[])
  console.log('podcastData', podcastData,props.item._id);
  
  let data1 =
    podcastData.filter(it => it._id == props.item._id)[0].wishlistCount == 1 ? true:false
  console.log('----->>>', data1);

  // const setData = () => {

  //     setSingle(data1)
  //     console.log('wiuoywuywui',data1)
  // }

  const addWishList = () => {
    // let data1 = podcastData.filter((it)=>it._id == props.item._id)
    dispatch(
      updateWishlist({
        Id: props.item._id,
      }),
    );
    let data: AddWishList = {
      ProductId: props.item._id,
    };
    PodcastServices.addWishList(data).then(res => {
      console.log('wishlistsocial', res);
      Toast.showWithGravity('ADDED TO PLAYLIST', Toast.SHORT, Toast.BOTTOM);
    });
  };

  //  let result:Array<GetALLPodcastData> =  podcastData.filter((it)=>{
  //             return it._id == props.item._id
  //         })
  //         console.log('result',result)
  //         result.map((res)=>{
  //             return(
  //                 setCount(res.wishlistCount)
  //             )
  //         }
  //         )

  return (
    <Container>
      <Pressable
        style={{
          marginTop: 15,
          flexDirection: 'row',
          marginBottom: 15,
          justifyContent: 'space-between',
        }}
        onPress={() =>
          NavigationService.navigate('Episode', {
            data: props.data,
            item: props.item,
          })
        }>
        {props.item.type == 'Queue' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '5%',
            }}>
            <Icon name="equal" type="MaterialCommunityIcon" size={15} />
          </View>
        ) : null}
        <View
          style={{
            width: '30%',
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <Image
            source={{uri: props.item.thumbline}}
            style={{
              height: 100,
              width: 120,
              borderRadius: 10,
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
              color: colors.primaryFontColor,
              fontFamily: FONTS.semibold,
              fontSize: 14,
              // textAlign: 'center'
            }}>
            {props.item.name}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 5,
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.regular,
                fontSize: 12,
                maxWidth: '60%',
              }}>
              {props.item.presnter}
            </Text>

            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.regular,
                fontSize: 12,
                marginLeft: 10,
              }}>
              |
            </Text>

            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.regular,
                fontSize: 12,
                marginLeft: 10,
              }}>
              {props.item.duration} mins
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            {props.item?.type == 'history' ? (
              <AppButton
                title="Completed"
                textStyle={{
                  fontFamily: FONTS.semibold,
                  color: colors.primaryThemeColor,
                  fontSize: 10,
                  marginRight: 10,
                }}
                style={{
                  // height: 30,
                  // width:30,
                  borderRadius: 20,
                  marginHorizontal: 0,
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: colors.primaryThemeColor,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                buttonIcon={{
                  position: 'left',
                  name: 'controller-play',
                  type: 'Entypo',
                  color: colors.primaryThemeColor,
                  style: {
                    marginLeft: 10,
                  },
                }}
                onPress={() => NavigationService.navigate('PlayPodcast')}
              />
            ) : (
              <AppButton
                // title='Play'
                textStyle={{
                  fontFamily: FONTS.semibold,
                  color: colors.pageBackgroundColor,
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
                  color: colors.pageBackgroundColor,
                  style: {
                    marginLeft: 0,
                  },
                }}
                onPress={() =>
                  NavigationService.navigate('PlayPodcast', {
                    data: props.data,
                    item: props.item,
                  })
                }
              />
            )}
            {/* {
    
    podcastData.filter((it)=>{
        return it._id == props.item._id
    })
} */}
            {!data1 ? (
              <Pressable
                onPress={() => {
                  // setCount(1)
                  addWishList();
                }}>
                <Icon
                  name="playlist-plus"
                  type="MaterialCommunityIcon"
                  style={{
                    marginLeft: 15,
                  }}
                  size={20}
                />
              </Pressable>
            ) : (
              <>
                <Icon
                  name="checksquare"
                  type="AntDesign"
                  style={{
                    marginLeft: 15,
                  }}
                  color="#0ABE75"
                  size={20}
                />
              </>
            )}

            {/* {
                            props.item?.downloads ? */}
            {/* <Icon
                                    name='download-box'
                                    type='MaterialCommunityIcon'
                                    style={{
                                        marginLeft: 15
                                    }}
                                    color='#0ABE75'
                                    size={20}
                                /> */}
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
            {/* <Icon
                            name='dots-three-vertical'
                            type='Entypo'
                            style={{
                                marginLeft: 10
                            }}
                            size={15}
                        /> */}
          </View>
        </View>
      </Pressable>
    </Container>
  );
};

//make this component available to the app
export default NewPodcastCard;
