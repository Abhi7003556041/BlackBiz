import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable, ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import Swiper from 'react-native-swiper';
import CourseCard from '../../Component/Learning/CourseCard';
import LearningServices from '../../Services/LearningServices';
import { CategoryWiseVideoResponseData, GetAllBannerResponseData, GetAllCategoriesData, GetAllMentorsData } from '../../Models/LearningModal';
import { CategoryResponseData } from '../../Models/E_shopModel';
import { ActivityIndicator } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';

type Props = StackScreenProps<AppStackModel,'LearningIndex'>

interface mentorType {
    image: ImageSourcePropType,
    name: string,
}

const LearningIndex = (props:Props) => {
    const colors = useTheme()
    const [refress, setRefress] = useState(false);
    // const [slide, setSlide] = useState<slideType[]>([
    //     {
    //         img: require('../../Assets/images/Frame.png')
    //     },
    //     {
    //         img: require('../../Assets/images/Frame.png')
    //     },
    //     {
    //         img: require('../../Assets/images/Frame.png')
    //     },
    // ])
    const [slide,setSlide] = useState<Array<GetAllBannerResponseData>>([])
    const [allCategory,setAllCategory] = useState<Array<GetAllCategoriesData>>([])
    const [select,setSelect] = useState<string>('98745643210abcde')
    const [status,setStatus] = useState<boolean>(false)
    const [mentor, setMentor] = useState<Array<GetAllMentorsData>>([])

    const [courses, setCourses] = useState<Array<CategoryWiseVideoResponseData>>([])
    
    useEffect(()=>{
        getAllBanner()
        getAllCategories()
        getAllMentors()
        allVideo()
    },[])

    const getAllBanner = () => {
        LearningServices.getAllBanner()
            .then((res)=>{
                console.log('bannerlearning',res.data)
                setSlide(res.data)
            })
    }

    const getAllCategories = () => {
        LearningServices.getAllCategories()
            .then((res)=>{
                console.log('categoriewslearniog',res.data)
                setAllCategory([all,...res.data])
            })
    }

    const getAllMentors = () => {
        LearningServices.getAllMentors()
            .then((res)=>{
                console.log('allMentors>>>>>',res.data)
                setMentor(res.data)
            })
    }

    const categoryWiseVideo = (val:string) => {
        LearningServices.CategoryWiseVideo(val)
            .then((res)=>{
                console.log('categoryWise>>>>',res.data)
                setCourses(res.data)
                setStatus(true)
            })
    }

    const allVideo = () => {
        LearningServices.allVideo()
            .then((res)=>{
                console.log('allVideo>>>>',res.data)
                setCourses(res.data)
                setStatus(true)
            })
    }

    

    //For Card data 

    const [cardData, setCardData] = useState([
        {
            img: require('../../Assets/images/digital.png'),
            smallname: 'Entrepeneurship',
            name: '3D Design Illustration'
        },
        {
            img: require('../../Assets/images/desigine.png'),
            smallname: '3D Desigine',
            name: '3D Design Illustration'
        },


    ])

    const [all,setAll] = useState({
        _id:"98745643210abcde",
        name: "all",
        description:"All Videos",
        image: "https://backbizod.s3.us-east-1.amazonaws.com/admin/profile/62b96e450918f791ec119071/7ec51bc0-8cf0-11ed-b044-bbc7b68848a2.png",
    })
    return (
        <Container>
            <AppBar.Back
                title='Learning'
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
                            name='file-document-outline'
                            type='MaterialCommunityIcon'
                            size={20}
                            style={{
                                //marginLeft: 28,
                                marginRight: 20
                            }}
                        />,

                        onPress: () => NavigationService.navigate('MyCourses')
                    },
                    {
                        icon: <Icon
                            name='bookmark-minus-outline'
                            type='MaterialCommunityIcon'
                            size={22}
                            style={{
                                //marginLeft: 28,
                                marginRight: 15
                            }}
                        />,
                        onPress: () => NavigationService.navigate('Bookmark')
                    },

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

            {/* <Pressable
                style={styles.search}>

                <Icon
                    name='search'
                    type='Feather'
                    color={colors.primaryFontColor}
                    size={16}
                />
                <Text style={{
                    color: colors.primaryFontColor,
                    opacity: 0.6, flex: 1,
                    fontSize: 13, fontFamily: FONTS.medium,
                    marginLeft: 15
                }}>Search</Text>
                <Icon
                    name='sliders'
                    type='FontAwesome'
                    color={colors.primaryThemeColor}
                    style={{ marginRight: 20 }}
                />
            </Pressable> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/** add swiper */}
                <View style={{
                    width: '92%',
                    height: 188,
                    alignSelf: 'center',
                    //backgroundColor: 'red',
                    marginTop: 25
                }}>
{slide.length > 0 ?
                    <Swiper
                        dotStyle={{
                            backgroundColor: '#D1D8DD',
                            height: 6,
                            width: 6,
                            borderRadius: 3,
                            marginHorizontal: 3,
                        }}
                        activeDotStyle={{
                            backgroundColor: '#031783',
                            height: 6,
                            width: 15,
                            borderRadius: 3,
                            marginHorizontal: 2,
                        }}
                        showsPagination={true}
                        loop={true}
                        removeClippedSubviews={false}
                        autoplay={true}
                        autoplayTimeout={3}
                        paginationStyle={{ marginBottom: 7 }}>
                        {slide.map((item, index) => {
                            return (
                                <View>
                                    <Image source={{uri:item.image}}

                                        style={{
                                            width: '95%',
                                            height: 184,
                                            resizeMode: 'contain',
                                            borderRadius: 20,
                                            alignSelf:'center'
                                        }} />
                                </View>
                            )
                        })}

                    </Swiper>
                    :null
}

                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    width: '94%',
                    alignSelf: 'center',
                }}>

                    <Text style={{
                        color: '#fff', fontSize: 18,
                        fontFamily: FONTS.bold,
                        marginLeft: 9,
                        flex: 1
                    }}>Top Mentors</Text>

                    <Text
                        onPress={() => NavigationService.navigate('Topmentor')}
                        style={{
                            color: colors.primaryThemeColor, fontSize: 14,
                            fontFamily: FONTS.bold,
                            marginLeft: 9
                        }}>See All</Text>
                </View>
                <View style={{
                    width: '90%', alignSelf: 'center',
                    marginTop: 24
                }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={mentor}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        alignItems: 'center',
                                        // justifyContent: 'space-evenly'
                                    }}
                                >
                                    <Image
                                        source={{uri:item.profilePicture}}
                                        style={{
                                            height: 46,
                                            width: 46,
                                            borderRadius: 23
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: colors.primaryFontColor,
                                            marginTop: 5,
                                            fontFamily: FONTS.medium,
                                            fontSize: 12
                                        }}
                                    >{item.name.split(' ',1)}</Text>
                                </View>
                            )
                        }}

                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 24,
                    width: '94%',
                    alignSelf: 'center',
                }}>

                    <Text style={{
                        color: '#fff', fontSize: 18,
                        fontFamily: FONTS.bold,
                        marginLeft: 9,
                        flex: 1
                    }}>Most Popular Courses</Text>

                    {/* <Text
                        onPress={() => NavigationService.navigate('MostPopularCourses')}
                        style={{
                            color: colors.primaryThemeColor, fontSize: 14,
                            fontFamily: FONTS.bold,
                            marginLeft: 9
                        }}>See All</Text> */}

                </View>
                {/** Tab List */}
                <View style={{
                    width: '95%', alignSelf: 'center',
                    marginTop: 24,
                    marginBottom: 20,
                }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={allCategory}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable

                                    onPress={() => {
                                        // let oldIndex = allCategory.findIndex(it => it.selected);
                                        // if (oldIndex >= 0) {
                                        //     courses[oldIndex].selected = false;
                                        // }
                                        // courses[index].selected = !courses[index].selected;
                                        // setCourses(courses);
                                        // setRefress(!refress)
                                        setSelect(item._id)
                                        if(item._id == '98745643210abcde'){
                                            allVideo()
                                        }else{
                                            categoryWiseVideo(item._id)
                                        }
                                    }}
                                    style={{

                                        height: 40,
                                        borderWidth: 1,
                                        borderColor: colors.primaryFontColor,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 15,
                                        backgroundColor: select == item._id ?
                                            colors.secondaryThemeColor : 'transparent',
                                            flexDirection: 'row',
                                            paddingHorizontal: 10

                                    }}
                                >
                                    {/* {console.log('hiii>>>',item._id)} */}
                                    <Image 
                                    source={{uri:item.image}}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                    />

                                    <Text
                                        style={{

                                            color: select == item._id ? '#000' : colors.primaryFontColor,
                                            fontFamily: FONTS.medium,
                                            fontSize: 12,
                                            textAlign: 'center',
                                            paddingHorizontal: 5
                                            // marginHorizontal: 25,

                                        }}
                                    >{item.name}</Text>
                                </Pressable>
                            )
                        }}

                    />
                </View>

                {/** Card */}

{status ?
               ( <FlatList
                    data={courses}
                    renderItem={({ item, index }) => {
                        return (
                            <CourseCard  item={item}
                            onCardPress={() => props.navigation.navigate('EnrolPage', {_id:item._id})}   
                                              
                            />
                        )
                    }}
                />)
                :
                <ActivityIndicator/>

    }

            </ScrollView>
        </Container>
    )
}

export default LearningIndex

const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15
    },
    search: {
        borderColor: '#FFFFFF',
        paddingLeft: 10,
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 0.7,
        opacity: 0.6,
        flexDirection: 'row',
        alignItems: 'center'

    }

})