import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable, ScrollView, SectionList, Dimensions, TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card, AppButton
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import LearningServices from '../../Services/LearningServices';
import { AllLessons } from '../../Models/LearningModal';

interface cardDataType {
    name: string,
    time: string,
    number: number
}

type Props = StackScreenProps<AppStackModel,'OngoingCourses'>

const { height, width } = Dimensions.get('window')
const OngoingCourses = (props:Props) => {
    const colors = useTheme()
    const CourseId = props.route.params.courseID
    const [lessons,setLessons] = useState<AllLessons>()
    const [courseName,setCourseName] = useState<string>('')
    useEffect(() => {
        getSingleCourse();
      }, []);
    
      const getSingleCourse = () => {
        LearningServices.getSingleCourse(CourseId).then(res => {
          console.log('singleData>>>>', res.data.courseName);
          setLessons(res.data.allLessons)
          setCourseName(res.data.courseName)
        });
      };

    const section1Data = [{
        title: "Section 1 - Introduction",
        titleA: " 17 mins",
        data: [
            {
                name: 'Why Using Figma',
                time: '10 mins',
                number: 1,
                onpress: () => NavigationService.navigate('Vedio')
            },
            {

                name: 'Set up Your Figma Account',
                time: '10 mins',
                number: 2,
                onpress: () => NavigationService.navigate('Vedio')
            }
        ]
    }];

   
    return (
        <Container>
            <AppBar.Back
                title={courseName}
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    color: colors.primaryFontColor
                }}

                // rightActions={[
                //     {
                //         icon:
                //             <View style={{
                //                 borderColor: colors.primaryFontColor,
                //                 borderWidth: 1,
                //                 height: 20, width: 20, borderRadius: 15,
                //                 justifyContent: 'center', alignItems: 'center'
                //             }}>
                //                 <Icon
                //                     name='dots-horizontal'
                //                     type='MaterialCommunityIcon'
                //                     size={13}

                //                 />
                //             </View>

                //         ,

                //     },


                // ]}
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

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <FlatList
                    data={lessons?.lessonInfo}
                    //keyExtractor={(item, index) => item + index}
                    renderItem={({ item,index }) => (
                        <View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            width: '90%', alignSelf: 'center',
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: '#fff', fontSize: 16,
                                fontFamily: FONTS.bold,
                                marginLeft: 9,
                                flex: 1
                            }}>{item.lessonName}</Text>

                            {/* <Text style={{
                                color: colors.primaryThemeColor, fontSize: 14,
                                fontFamily: FONTS.bold,
                                marginLeft: 9
                            }}>{section.titleA}</Text> */}
                        </View>
                        <Card style={{
                            ...styles.card,
                            borderColor: colors.primaryFontColor
                        }}
                        // onPress={item.onpress}
                        >

                            <View style={{
                                width: 35, height: 35, borderRadius: 20,
                                alignItems: "center", justifyContent: "center",
                                backgroundColor: '#FFC100',
                                // opacity: 0.3
                            }}>
                                <Text style={{
                                    color: colors.primaryFontColor, fontSize: 15,
                                    fontFamily: FONTS.bold
                                }}>0{index+1}</Text>
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={{
                                    color: colors.primaryFontColor, fontSize: 12,
                                    fontFamily: FONTS.bold,
                                }}>{item.lessonDescription}</Text>
                                <Text style={{
                                    color: colors.primaryFontColor, fontSize: 12,
                                    fontFamily: FONTS.bold,
                                    lineHeight: 20
                                }}>{item.lessonTime}</Text>
                            </View>

                                <TouchableOpacity
                                onPress={()=>{
                                    props.navigation.navigate('VideoPlayer', {
                                        videourl: item.uploadVideo,
                                        src:'learning',
                                        courseId:props.route.params.courseID,
                                        lessionId:item._id
                                      });
                                  }}
                                >
                                    <Icon
                                        name='play'
                                        type='AntDesign'
                                        color={colors.primaryFontColor}
                                        size={25}
                                        style={{ marginTop: 5 }}
                                    />
                            </TouchableOpacity>
                        </Card>
                        </View>
                    )}
                    // renderSectionHeader={({ section }) => (

                    //     <View style={{
                    //         flexDirection: 'row', alignItems: 'center',
                    //         width: '90%', alignSelf: 'center',
                    //         marginTop: 10
                    //     }}>
                    //         <Text style={{
                    //             color: '#fff', fontSize: 16,
                    //             fontFamily: FONTS.bold,
                    //             marginLeft: 9,
                    //             flex: 1
                    //         }}>{section.title}</Text>

                    //         <Text style={{
                    //             color: colors.primaryThemeColor, fontSize: 14,
                    //             fontFamily: FONTS.bold,
                    //             marginLeft: 9
                    //         }}>{section.titleA}</Text>
                    //     </View>

                    // )}
                    // stickySectionHeadersEnabled
                />
                <View 
                style={{
                    height: 40
                }}
                />
            </ScrollView>


            {/* <View
                style={{
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: colors.pageBackgroundColor,
                    height: (height / 8),
                    width: width,
                    borderColor: colors.primaryFontColor,
                    // borderWidth: 0.5
                    borderRightWidth: 0.5,
                    borderLeftWidth: 0.5,
                    borderTopWidth: 0.5

                }}
            >


                <AppButton

                    title="Continue Course"
                    textStyle={{
                        color: colors.pageBackgroundColor,
                        fontFamily: FONTS.bold,
                        fontSize: 16
                    }}
                    style={{
                        backgroundColor: colors.primaryThemeColor,
                        borderRadius: 30,
                        marginVertical: 20,
                        width: '80%',
                        alignSelf: 'center',
                    }}
                    onPress={() => NavigationService.navigate('Vedio')}
                />

            </View> */}
        </Container>
    )
}

export default OngoingCourses

const styles = StyleSheet.create({
    card: {
        width: '90%',

        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 15,
        maginBottom: 30
    }
})