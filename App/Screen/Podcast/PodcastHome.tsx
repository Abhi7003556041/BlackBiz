//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View,  StyleSheet, Pressable, StatusBar as RNStatusbar, Image, ScrollView, FlatList } from 'react-native';
import { AppBar, Text, AppButton, AppTextInput, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AddWishList, AllEpisode, GetALLPodcastData } from '../../Models/PodcastModel';
import NewPodcastCard from '../../Component/Podcast/NewPodcastCard';
import { FONTS } from '../../Constants/Fonts';
import { initPodcast } from '../../redux/reducer/Podcast';
import { RootState, useAppDispatch } from '../../redux/store';
import NavigationService from '../../Services/NavigationService';
import PodcastServices from '../../Services/PodcastServices';


// create a component
const PodcastHome = () => {
    const colors = useTheme();
    const dispatch = useAppDispatch()
    const {podcastData} = useSelector((state:RootState)=>state.Podcast)
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(true);

  useEffect(()=>{
    setTimeout(()=>{
        setIsPlayerReady(false)
    })
  },[])
  const [popular,setPopular] = useState<Array<GetALLPodcastData>>([])
    const trending = [
        {
            image: <Image
                source={require('../../Assets/images/Jordan.png')}
                style={{
                    height: 100,
                    width: 100
                }}
                resizeMode='contain'
            />,
        },
        {
            image: <Image
                source={require('../../Assets/images/Pod.png')}
                style={{
                    height: 100,
                    width: 100,
                    // marginLeft: 5
                }}
                resizeMode='contain'
            />,
        },
        {
            image: <Image
                source={require('../../Assets/images/WhatADay.png')}
                style={{
                    height: 100,
                    width: 100
                }}
                resizeMode='contain'
            />,
        },
        {
            image: <Image
                source={require('../../Assets/images/invest.png')}
                style={{
                    height: 100,
                    width: 100
                }}
                resizeMode='contain'
            />,
        },
    ]


    useEffect(()=>{
        getAllPodcast()
        getPopularPodcast()
    },[])
    const [allPodcast,setAllPodcast] = useState<Array<object>>([])

    const getAllPodcast = () =>{
        PodcastServices.getAllPodcast()
            .then((res)=>{
                console.log('ALLPodcast',res)
                setAllPodcast(res.data)
                dispatch(initPodcast(res.data))
            })
            .catch((err)=>console.log('err',err))
    }

    const getPopularPodcast = () => {
        PodcastServices.getPopularPodcast()
            .then((res)=>{
                console.log('popularPodcast',res.data)
                setPopular(res.data)
            })
    }

    
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                titlePosition='left'
                title='Podcast'
                rightActions={[
                    {
                        icon:
                            <Pressable
                                onPress={() => NavigationService.navigate('WishlistSocial')}
                            >
                                <Icon 
                                     name='playlist-music-outline'
                                     type='MaterialCommunityIcon'
                                     size={25}
                                     />
                            </Pressable>

                    },
                    // {
                    //     icon:
                    //         <Pressable
                    //             onPress={() => NavigationService.navigate('MyLibrary')}
                    //         >
                    //             <Icon
                    //                 name='document-text-outline'
                    //                 type='Ionicon'
                    //                 style={{
                    //                     marginLeft: 10
                    //                 }}
                    //             />
                    //         </Pressable>

                    // },
                    // {
                    //     icon:
                    //         <Pressable
                    //             onPress={() => NavigationService.navigate('Discover')}
                    //         >
                    //             <Icon
                    //                 name='compass'
                    //                 type='Entypo'
                    //                 style={{
                    //                     marginLeft: 10
                    //                 }}
                    //             />

                    //         </Pressable>

                    // },

                ]}
                onLeftIconPress={() => NavigationService.back()}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            <ScrollView>
                {/* <View
                    style={{
                        marginHorizontal: 10
                    }}
                >
                    <Pressable
                    onPress={() => NavigationService.navigate('SearchPodcast')}
                    style={{
                        height: 47,
                        width: '100%',
                        borderWidth: 1,
                        borderColor: colors.primaryFontColor,
                        borderRadius: 10,
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                        paddingHorizontal: 10

                    }}
                    >
                        <Icon 
                        name='search'
                        type='EvilIcon'
                        />

                        <Text
                        style={{
                            fontFamily: FONTS.medium,
                            color:  colors.primaryFontColor,
                            marginLeft: 10
                        }}
                        >Search</Text>
                    
                    </Pressable>
                   
                </View> */}

                <View
                    style={{
                        marginTop: 10,
                        height: 200,
                        width: '100%'
                    }}
                >
                    <Image
                        source={require('../../Assets/images/podcastBanner.png')}
                        style={{
                            height: 210,
                            width: '100%',
                            paddingTop:5,
                            // marginTop:5
                        }}
                    />
                </View>
 {isPlayerReady ?
            <ActivityIndicator size='small' color="#bbb" />  
                     :
                <View
                    style={{
                        marginHorizontal: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 18
                            }}
                        >
                            Trending
                        </Text>
                        <Pressable
                         onPress={() => NavigationService.navigate('NewUpdates',{data:popular})}
                        >
                        <Text
                          
                            style={{
                                color: colors.primaryThemeColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 14
                            }}
                        >
                            See All
                        </Text>
                        </Pressable>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={popular}
                        renderItem={({ item }) => {
                            return (
                                <Pressable
                                    style={{
                                        marginVertical: 15,
                                        marginRight: 20
                                        // justifyContent: 'space-evenly',
                                        // flexWrap: 'wrap'
                                    }}
                                    onPress={() =>NavigationService.navigate('Episode', {
                                        data: popular,
                                        item: item,
                                      })}
                                >
                                    <Image
                                    source={{uri:item.thumbline}}
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius:10
                                    }}
                                    resizeMode='contain'
                                    />
                                </Pressable>
                            )
                        }}
                    >

                    </FlatList>


                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 18
                            }}
                        >
                            New  Updates
                        </Text>

                        <Text
                         onPress={() => NavigationService.navigate('NewUpdates',{data:podcastData})}
                            style={{
                                color: colors.primaryThemeColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 14
                            }}
                        >
                            See All
                        </Text>
                    </View>
                    
                    <FlatList
                        data={podcastData}
                        renderItem={({ item }) => {
                            console.log('item123', item);

                            return (
                                <NewPodcastCard item={item} 
                                    data={podcastData}
                                 />
                            )
                        }}
                    />


                </View>
             
            }
            </ScrollView>



        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default PodcastHome;
