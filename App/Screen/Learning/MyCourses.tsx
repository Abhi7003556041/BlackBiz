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
import SwitchSelector from "react-native-switch-selector";
import * as Progress from 'react-native-progress';
import LearningServices from '../../Services/LearningServices';
import { BookedCourseResponse, BookedCourseResponseData } from '../../Models/LearningModal';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';

type Props = StackScreenProps<AppStackModel,'MyCourses'>

const MyCourses = (props:Props) => {
    const colors = useTheme()
    const [showhide, setShowHide] = useState<number>(1);
    
    useEffect(()=>{
        getBookedCourses()
    },[])
    const getBookedCourses = () => {
        LearningServices.getBookedCourses()
            .then((res)=>{
                console.log('AllBookedCourses>>>>',res.data)
                setCardData(res.data)
                
            })
    }
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          // The screen is focused
          // Call any action
          getBookedCourses()
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [props.navigation]);
    //For Card data 

    const [cardData, setCardData] = useState<Array<BookedCourseResponse>>([])
    const [courseData, setCourseData] = useState<string>('')


    const [cardCompleted, setCardCompleted] = useState([
        {
            img: require('../../Assets/images/coding.png'),

            name: 'Codding',
            handlerClick: () => { NavigationService.navigate('CompletedCourses') }
        },
        {
            img: require('../../Assets/images/digital.png'),
            name: 'Degital Markating'
        },
        {
            img: require('../../Assets/images/wordpress.png'),
            name: 'Wordpress',

        },
        {
            img: require('../../Assets/images/wordpress.png'),
            name: 'Wordpress',

        },
        {
            img: require('../../Assets/images/wordpress.png'),
            name: 'Wordpress',

        },

    ])
    return (
        <Container>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 45,
                width: '90%',
                alignSelf: 'center',
            }}>
                <Image source={require('../../Assets/images/portron.png')} />
                <Text style={{
                    color: '#fff', fontSize: 18,
                    fontFamily: FONTS.bold,
                    marginLeft: 15,
                    flex: 1
                }}>My Courses</Text>

                <Text
                    onPress={() => NavigationService.back()}
                    style={{
                        color: colors.primaryFontColor, fontSize: 14,
                        fontFamily: FONTS.bold,
                        marginLeft: 9
                    }}>Back</Text>
            </View>

            <View style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: 20,

            }}>
                <SwitchSelector
                    initial={0}
                    onPress={(value: React.SetStateAction<number>) => setShowHide(value)}
                    textColor={'#616161'}
                    //selectedColor={colors.primaryThemeColor}
                    buttonColor={'transparent'}
                    backgroundColor={'transparent'}
                    textStyle={{
                        fontFamily: FONTS.medium
                    }}
                    selectedTextStyle={{
                        borderBottomWidth: 3,
                        borderBottomColor: colors.primaryThemeColor,
                        color: colors.primaryThemeColor,
                        width: 165,
                        paddingBottom: 8,
                        fontFamily: FONTS.medium,

                    }}
                    textContainerStyle={{
                        borderBottomWidth: 3,
                        borderColor: '#35383F',
                        paddingBottom: 8,
                        marginHorizontal: 1,
                    }}
                    borderColor={'transparent'}

                    fontSize={14}
                    height={45}
                    valuePadding={0}


                    options={[
                        { label: "Ongoing", value: 1, },
                        // { label: "Completed", value: 2, },
                    ]}
                />
            </View>

            <View style={{ height: 30 }} />
            {showhide == 1 ?
                cardData.length > 0 ?
                <View
                    style={{ flex: 1 }}
                >
                    {/** Card */}


                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cardData}
                        renderItem={({ item, index }) => {
                            return (
                                <Card style={{
                                    ...styles.card,
                                    borderColor: colors.primaryFontColor
                                }}
                                onPress={()=>{
                                    props.navigation.navigate('OngoingCourses',{courseID:item.courseID})
                                    console.log('bal')
                                }
                                }
                                >
                                    <Pressable 
                                    // onPress={()=>{
                                    //     props.navigation.navigate('OngoingCourses',{courseID:item.courseID})
                                    // }}                                 
                                    >
                                        <Image source={{uri:item.coursdata.thumbline}}
                                            style={{
                                                width: 120, height: 140,
                                                resizeMode: 'contain',
                                                //marginVertical: 10,
                                                marginLeft: 5
                                            }} />
                                    </Pressable>
                                    <View style={{
                                        //backgroundColor: 'green',
                                        flex: 1,
                                        marginLeft: 15,
                                        marginTop:5
                                    }}>
                                        <Text
                                            allowFontScaling={false}
                                            style={{
                                                color: colors.primaryFontColor, fontSize: 16,
                                                fontFamily: FONTS.bold,
                                                marginVertical: 6
                                            }}>
                                                {item.coursdata.courseName}
                                            </Text>
                                        <Text style={{
                                            color: colors.primaryFontColor, fontSize: 12,
                                            fontFamily: FONTS.bold,
                                        }}>2 hrs 25 mins</Text>

                                        <View style={{
                                            flexDirection: 'row', alignItems: 'center',
                                            marginTop: 24
                                        }}>
                                            <Progress.Bar progress={Number(Number(item.watchLesson)/Number(item.totalLesson))} width={105}
                                                color={colors.primaryThemeColor}
                                            />
                                            
                                            <Text style={{
                                                color: colors.primaryFontColor, fontSize: 10,
                                                fontFamily: FONTS.bold, marginLeft: 10
                                            }}>{item.watchLesson} / {item.totalLesson}</Text>
                                        </View>

                                    </View>
                                </Card>
                            )
                        }}
                    />
                </View>: 
                <View
                style={{
                    flex:1,
                    alignItems:'center',
                    // justifyContent:'center'
                }}
                >
                    <Icon
                    name='search-off'
                    type='MaterialIcon'
                    size={80}
                    style={{
                        marginTop:200
                    }}
                    />
                    <Text
                    style={{
                        color:'white',
                        fontSize:15,
                        fontFamily:FONTS.Bold,
                        fontWeight:'bold'
                    }}
                    >No Course Found</Text>
                </View>
                 :
                <View style={{ flex: 1 }} >


                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cardCompleted}
                        renderItem={({ item, index }) => {
                            return (
                                <Card style={{
                                    ...styles.card,
                                    borderColor: colors.primaryFontColor
                                }}>
                                    <Pressable onPress={item.handlerClick}>
                                        <Image source={item.img}
                                            style={{
                                                width: 120, height: 140,
                                                resizeMode: 'contain',
                                                //marginVertical: 10,
                                                //marginLeft: 10
                                            }} />
                                    </Pressable>
                                    <View style={{
                                        // backgroundColor: 'green',
                                        flex: 1,
                                        marginLeft: 10
                                    }}>



                                        <Text
                                            allowFontScaling={false}
                                            style={{
                                                color: colors.primaryFontColor, fontSize: 16,
                                                fontFamily: FONTS.bold,
                                                marginVertical: 6
                                            }}>{item.name}</Text>


                                        <Text style={{
                                            color: colors.primaryFontColor, fontSize: 12,
                                            fontFamily: FONTS.bold,
                                        }}>2 hrs 25 mins</Text>

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 24,

                                        }}>
                                            <Progress.Bar progress={10}
                                                width={105}
                                                color={colors.primaryThemeColor}
                                            />

                                            <Text style={{
                                                color: colors.primaryFontColor, fontSize: 10,
                                                fontFamily: FONTS.bold, marginLeft: 10
                                            }}>178 / 178</Text>
                                        </View>

                                    </View>
                                </Card>
                            )
                        }}
                    />

                </View>
            }


        </Container>
    )
}

export default MyCourses

const styles = StyleSheet.create({

    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15,
        backgroundColor:'black'
    },
})