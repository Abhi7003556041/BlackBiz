//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import moment from 'moment';
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, ScrollView, StatusBar as RNStatusbar, Image, FlatList } from 'react-native';
import { AppBar, Text, Container, Icon, StatusBar, useTheme, AppButton } from 'react-native-basic-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FONTS } from '../../Constants/Fonts';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import { AddWishList, AllEpisode, GetALLPodcastData } from '../../Models/PodcastModel';
import { updateWishlist } from '../../redux/reducer/Podcast';
import { useAppDispatch } from '../../redux/store';
import NavigationService from '../../Services/NavigationService';
import PodcastServices from '../../Services/PodcastServices';
import Toast from 'react-native-simple-toast';

type Props = StackScreenProps<AppStackModel,'Episode'>

// create a component
const Episode = (props:Props) => {
    const colors = useTheme();
    const [podcastId] = useState(props.route.params.item)
    const [allData,setAll] = useState<GetALLPodcastData>()
    const dispatch = useAppDispatch()
    const addWishList = () => {
        dispatch(updateWishlist({
            Id:props.route.params.item._id,
        }))
        let data:AddWishList = {
            ProductId:props.route.params.item._id
        }
        PodcastServices.addWishList(data)
            .then((res)=>{
                console.log('wishlistsocial',res) 
                 Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);

            })
            .catch((err)=>{
             Toast.showWithGravity(err.message, Toast.SHORT, Toast.BOTTOM);

            })
    }
    // const date = new Date(allData?.date)
    const discussion = [
        {
            text: 'Prime bank guarantee fraud: what is it and how does it work?'
        },
        {
            text: 'Why is the US a “Garden of Eden” for bad guys in general?'
        },
        {
            text: 'How Steve TV show Nowhere to Hide came to be.'
        },
        {
            text: "Why Steve's business doubled within two years following a bogus arrest."
        },
        {
            text: 'Are there scam lists, and are you on one?'
        },
        {
            text: 'And much more...'
        },

    ]

    useEffect(()=>{
        getSingleEpisode()
    },[])

    const getSingleEpisode = () => {
        
        PodcastServices.getSinglePodcast(podcastId._id)
            .then((res)=>{
                console.log('singlepodacs',res.data)
                setAll(res.data)
            })
    }
    return (
        <Container>
            <AppBar.Back
                title='Episode 685'
                titleStyle={{
                    fontFamily: FONTS.semibold,
                    fontSize: 18
                }}
                backgroundColor={'transparent'}
                titlePosition='left'
                rightActions={[

                    // {
                    //     icon:
                    //         <Pressable
                    //             onPress={() => NavigationService.navigate('Search')}
                    //         >
                    //             <Icon
                    //                 name='dots-horizontal-circle-outline'
                    //                 type='MaterialCommunityIcon'
                    //                 style={{
                    //                     marginLeft: 20
                    //                 }}
                    //                 size={25}
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
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 10
                    }}
                >
                    {console.log('wishlistCount',props.route.params.item.wishlistCount)}
                    <View
                        style={{
                            flexDirection: 'row',

                        }}
                    >
                        <View
                            style={{
                                width: '30%'
                            }}
                        >
                            <Image
                                source={{uri:allData?.thumbline}}
                                resizeMode='contain'
                                style={{
                                    height: 100,
                                    width: 100
                                }}

                            />
                        </View>

                        <View
                            style={{
                                marginLeft: 10,
                                width: '70%'
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.semibold,
                                    fontSize: 15
                                }}
                            >{allData?.name}</Text>

                            <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.regular,
                                    fontSize: 12,
                                    paddingVertical: 10
                                }}
                            >
                                {allData?.presnter}
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Icon
                                    name='globe-outline'
                                    type='Ionicon'
                                    style={{
                                        marginTop: 5
                                    }}
                                    size={20}
                                />

                                <Icon
                                    name='sharealt'
                                    type='AntDesign'
                                    style={{
                                        marginTop: 5,
                                        marginLeft: 20
                                    }}
                                    size={20}
                                />
                            </View>




                        </View>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: 15
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12
                            }}
                        >{moment(allData?.date).format("DD-MM-YYYY")}</Text>

                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12,
                                marginLeft: 10
                            }}
                        >|</Text>

                        <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12,
                                marginLeft: 10
                            }}
                        >{allData?.duration} </Text>
                    </View>


                    <View
                        style={{
                            marginTop: 10
                        }}
                    >
                        <Text.Heading
                            title={allData?.name}
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 16,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10
                            }}
                        >
                            <AppButton
                                // title='Play'
                                textStyle={{
                                    fontFamily: FONTS.semibold,
                                    color: colors.pageBackgroundColor,
                                    fontSize: 12,
                                    // marginRight: 10
                                }}
                                style={{
                                    height: 30,
                                    borderRadius: 20,
                                    marginHorizontal:5,
                                    alignItems: 'center',
                                    width: 30,
                                    justifyContent:'center',
                 
                                }}

                                buttonIcon={{
                                    position: 'left',
                                    name: 'controller-play',
                                    type: 'Entypo',
                                    color: colors.pageBackgroundColor,
                                    style: {
                                        // marginLeft: 10
                                    }
                                }}

                                // onPress={() => NavigationService.navigate('PlayPodcast')}
                                 onPress={() => NavigationService.navigate('PlayPodcast',{data:props.route.params.data,item:props.route.params.item})}

                            />
{
                            props.route.params.item.wishlistCount == 0 ?
                            <Pressable
                            onPress={()=>{
                                // setCount(1)
                                addWishList()
                                
                            }}
                            >
                                <Icon
                                    name='playlist-plus'
                                    type='MaterialCommunityIcon'
                                    style={{
                                        marginLeft: 15
                                    }}
                                    size={20}
                                />
                                </Pressable>
                                 :
                                 <>
                                <Icon
                                    name='checksquare'
                                    type='AntDesign'
                                    style={{
                                        marginLeft: 15
                                    }}
                                    color='#0ABE75'
                                    size={20}
                                /> 
                                </>
}
{/* 
                            <Icon
                                name='download-outline'
                                type='Ionicon'
                                style={{
                                    marginLeft: 15
                                }}
                                size={20}
                            /> */}
                            <View
                                style={{
                                    flex: 1
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

                    <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.semibold,
                            marginTop: 16
                        }}
                    >Description : {'\n'}
                    {allData?.description}</Text>

                    {/* <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.semibold,
                            marginTop: 16
                        }}
                    >What We Discuss with Steve Rambam:</Text> */}

                    {/* <FlatList
                        data={discussion}
                        renderItem={({ item }) => {
                            return (

                                <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                >
                                    <Icon
                                        name='dot-single'
                                        type='Entypo'
                                    />
                                    <Text
                                        style={{
                                            color: colors.primaryFontColor,
                                            fontFamily: FONTS.semibold,
                                            marginTop: 14,
                                            paddingLeft: 10
                                        }}
                                    >{item.text}</Text>
                                </View>

                            )
                        }}
                    /> */}
                    {/* <Text
                        style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.semibold,
                            paddingTop: 10,
                            marginBottom: 10,
                            fontSize: 15
                        }}
                    >Full show notes and resources can be found here: exampledomain.com/685
                        Like this show? Please leave us a review here --</Text> */}

                </View>
            </ScrollView>
        </Container>
    );
};


//make this component available to the app
export default Episode;
