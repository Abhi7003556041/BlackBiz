import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable, ScrollView
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import CourseCard from '../../Component/Learning/CourseCard';

interface coursesType {
    name: string,
    selected?: boolean,
    image: ImageSourcePropType,
}

interface cardType {
    img: ImageSourcePropType,
    smallname: string,
    name: string

}

const MostPopularCourses = () => {
    const colors = useTheme()
    const [refress, setRefress] = useState(false);
    const [courses, setCourses] = useState<coursesType[]>([
        {
            name: 'all',
            image: require('../../Assets/images/fire.png'),
        },
        {
            name: '3D Desigine',
            image: require('../../Assets/images/light-bulb.png'),
        },
        {
            name: 'Business',
            image: require('../../Assets/images/money-sack.png'),
        },
        {
            name: 'Programing',
            image: require('../../Assets/images/color-palette.png'),
        },

    ])

    //For Card data 

    const [cardData, setCardData] = useState<cardType[]>([
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
        {
            img: require('../../Assets/images/uiux.png'),
            smallname: 'Ui Ux Desigine',
            name: 'Design Illustration'
        },
        {
            img: require('../../Assets/images/figma.png'),
            smallname: 'figma Desigine',
            name: 'figma Desigine'
        },

        {
            img: require('../../Assets/images/coding.png'),
            smallname: 'Ui Ux Desigine',
            name: 'Design Illustration'
        },
        {
            img: require('../../Assets/images/wordpress.png'),
            smallname: 'figma Desigine',
            name: 'figma Desigine'
        },
    ])
    return (
        <Container>
            <AppBar.Back
                title='Most popular Courses'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    color: colors.primaryFontColor
                }}

                rightActions={[
                    {
                        icon:

                            <Icon
                                name='search1'
                                type='AntDesign'
                                size={18}

                            />
                        ,

                        onPress: () => NavigationService.navigate('LearningSearch')
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

            {/** Tab List */}
            <View style={{
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
                                        marginHorizontal: 25,

                                    }}
                                >{item.name}</Text>
                            </Pressable>
                        )
                    }}

                />
            </View>

            {/** Card list */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cardData}
                renderItem={({ item, index }) => {
                    return (
                        <CourseCard  item={item}/>
                    )
                }}
            />

        </Container>
    )
}

export default MostPopularCourses

const styles = StyleSheet.create({

    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15,
    }
})