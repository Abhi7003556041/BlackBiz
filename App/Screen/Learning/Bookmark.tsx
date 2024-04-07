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
import LearningServices from '../../Services/LearningServices';
import CourseCard from '../../Component/Learning/CourseCard';
import { CategoryWiseVideoResponseData } from '../../Models/LearningModal';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';

interface coursesType {
    name: string,
    selected?: boolean,
    image: ImageSourcePropType
}

interface cardType {
    img: ImageSourcePropType,
    smallname: string,
    name: string

}

type Props = StackScreenProps<AppStackModel,'Bookmark'>
const Bookmark = (props:Props) => {
    const colors = useTheme()
    const [refress, setRefress] = useState(false);
    

    //For Card data 

    useEffect(()=>{
        getAllBookMark()
    },[])

    const [cardData, setCardData] = useState<Array<CategoryWiseVideoResponseData>>([])

    const getAllBookMark = () => {
        LearningServices.getAllBookMark()
            .then((res)=>{
                console.log('allBookmarkData>>>>',res.data)
                setCardData(res.data)
            })
    }

    return (
        <Container>
            <AppBar.Back
                title='My Bookmark'
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

                //         onPress: () => console.log("bal")
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

            {/** Tab List */}
            {/* <View style={{
                width: '95%', alignSelf: 'center',
                marginTop: 24, marginBottom: 20
            }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={courses}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable

                                onPress={() => {
                                    let oldIndex = courses.findIndex(it => it.selected);
                                    if (oldIndex >= 0) {
                                        courses[oldIndex].selected = false;
                                    }
                                    courses[index].selected = !courses[index].selected;
                                    setCourses(courses);
                                    setRefress(!refress)
                                }}
                                style={{
                                    height: 40,
                                    borderWidth: 1,
                                    borderColor: colors.primaryFontColor,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 15,
                                    backgroundColor: item.selected ?
                                        colors.secondaryThemeColor : 'transparent',
                                    flexDirection: 'row',
                                    paddingHorizontal: 10
                                }}
                            >

                                <Image
                                    source={item.image}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text
                                    style={{
                                        color: item.selected ? '#000' : colors.primaryFontColor,
                                        fontFamily: FONTS.medium,
                                        fontSize: 12,
                                        textAlign: 'center',
                                        marginHorizontal: 20,
                                    }}
                                >{item.name}</Text>
                            </Pressable>
                        )
                    }}

                />
            </View> */}

            <FlatList
                showsVerticalScrollIndicator={false}
                data={cardData}
                renderItem={({ item, index }) => {
                    return (
                        // <Card style={{
                        //     ...styles.card,
                        //     borderColor: colors.primaryFontColor
                        // }}>

                        //     <Image source={item.img}
                        //         style={{
                        //             width: 120, height: 140,
                        //             resizeMode: 'contain',

                        //         }} />

                        //     <View style={{
                        //         //backgroundColor: 'green',
                        //         flex: 1,
                        //         marginLeft: 10
                        //     }}>
                        //         <View style={{
                        //             flexDirection: 'row',
                        //             alignItems: 'center',
                        //             justifyContent: 'space-between',
                        //             marginTop: 8
                        //         }}>

                        //             <View style={{
                        //                 //width: 66, 
                        //                 height: 24,
                        //                 backgroundColor: colors.secondaryThemeColor,
                        //                 borderRadius: 5,
                        //                 alignItems: 'center',
                        //                 justifyContent: 'center',

                        //             }}>
                        //                 <Text style={{
                        //                     fontSize: 10,
                        //                     paddingHorizontal: 10,
                        //                     color: '#000', fontFamily: FONTS.medium
                        //                 }}>{item.smallname}</Text>

                        //             </View>
                        //             <Icon
                        //                 name='bookmark-minus'
                        //                 type='MaterialCommunityIcon'
                        //                 size={20}
                        //                 color={colors.primaryThemeColor}
                        //                 style={{ alignSelf: 'flex-end' }}
                        //             />
                        //         </View>

                        //         <View>
                        //             <Text
                        //                 allowFontScaling={false}
                        //                 style={{
                        //                     color: colors.primaryFontColor, fontSize: 16,
                        //                     fontFamily: FONTS.bold,
                        //                     marginVertical: 6
                        //                 }}>{item.name}</Text>

                        //             <View style={{
                        //                 flexDirection: 'row', alignItems: 'center'
                        //             }}>

                        //                 <Text style={{
                        //                     color: colors.primaryThemeColor, fontSize: 18,
                        //                     fontFamily: FONTS.bold
                        //                 }}>$48</Text>

                        //                 <Text style={{
                        //                     color: colors.primaryFontColor, fontSize: 12,
                        //                     fontFamily: FONTS.bold,
                        //                     textDecorationLine: 'line-through',
                        //                     textDecorationStyle: 'solid',
                        //                     marginLeft: 10
                        //                 }}>$80</Text>
                        //             </View>

                        //             <View style={{
                        //                 flexDirection: 'row', alignItems: 'center',
                        //                 marginTop: 5
                        //             }}>
                        //                 <Icon
                        //                     name='star'
                        //                     type='AntDesign'
                        //                     color={colors.primaryThemeColor}
                        //                     size={15}
                        //                 />
                        //                 <Text style={{
                        //                     color: colors.primaryFontColor, fontSize: 12,
                        //                     fontFamily: FONTS.bold,
                        //                     marginLeft: 9
                        //                 }}>4.8</Text>

                        //                 <Icon
                        //                     name='remove-outline'
                        //                     type='Ionicon'
                        //                     color={colors.primaryFontColor}
                        //                     size={23}
                        //                     style={{
                        //                         transform: [{ rotate: '90deg' }],
                        //                         marginTop: 4
                        //                     }}
                        //                 />
                        //                 <Text style={{
                        //                     color: colors.primaryFontColor, fontSize: 12,
                        //                     fontFamily: FONTS.bold,
                        //                 }}>8,289 students</Text>

                        //             </View>
                        //         </View>
                        //     </View>
                        // </Card>
                        <CourseCard
                        item={item}
                        onCardPress={() => props.navigation.navigate('EnrolPage', {_id:item._id})}
                        />
                    )
                }}
            />
            <View style={{ height: 20 }} />
        </Container>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15,
        marginTop:15
    }
})