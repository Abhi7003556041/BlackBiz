import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable,
    ScrollView, TouchableOpacity
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, AppButton, Card
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import BackHeader from '../../Component/Header/BackHeader';
import CourseCard from '../../Component/Learning/CourseCard';

interface tabNameType {
    name: string,
    selected?: boolean
}

interface cardType {
    img: ImageSourcePropType,
    smallname: string,
    name: string

}

interface mentorType {
    image: ImageSourcePropType,
    name: string,
    job: string,
}

const LearningSearch = () => {
    const colors = useTheme()
    const [refress, setRefress] = useState(false);
    const [Value, setValue] = useState(false)

    const [tabName, setTabName] = useState<tabNameType[]>([
        {
            name: 'Courses',

        },
        {
            name: 'Mentors'
        }
    ])
    const [selectedTab, setSelectedTab] = useState<string>('Courses')

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

    //For Mentor data

    const [mentor, setMentor] = useState<mentorType[]>([

        {
            image: { uri: 'https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png' },
            name: 'Nicklaus',
            job: 'Marketing Analyst'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD0XLEaT5CtjF-wjpktGBOGZ3zcNZuyVVj5osLcVXyra9HytvgxyiLclfJpQDDcZQbaQ&usqp=CAU' },
            name: 'Michale',
            job: 'VP of Sales'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU' },
            name: 'Marrie',
            job: 'UX Designer'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lg9hHD1UFxGf6Ecqn7mnWhIngmabFH4q9CQkhIEmKKyFMUHJC67W2gaMbnaatRaq-rc&usqp=CAU' },
            name: 'eleven',
            job: 'Manager, Solution Engineering'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGNOdbeaGTYnc3fUN2gAi_H6g4Mx4OtHWu9hvAIQeZ3sA0SeRfDMvgaD79qH0gyZOtRA&usqp=CAU' },
            name: 'Henna',
            job: 'EVP and GM, Sales Cloud '
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqk7VPVs2EvLY7BL6PEi7Sd1W35__yl2IHfUfb21RTNXNzjPzFxTflG_Y8-3Ml2St9Lk&usqp=CAU' },
            name: 'sera',
            job: 'Senior Product Manager'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD0XLEaT5CtjF-wjpktGBOGZ3zcNZuyVVj5osLcVXyra9HytvgxyiLclfJpQDDcZQbaQ&usqp=CAU' },
            name: 'Michale',
            job: 'VP of Sales'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU' },
            name: 'Marrie',
            job: 'UX Designer'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lg9hHD1UFxGf6Ecqn7mnWhIngmabFH4q9CQkhIEmKKyFMUHJC67W2gaMbnaatRaq-rc&usqp=CAU' },
            name: 'eleven',
            job: 'Manager, Solution Engineering'
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGNOdbeaGTYnc3fUN2gAi_H6g4Mx4OtHWu9hvAIQeZ3sA0SeRfDMvgaD79qH0gyZOtRA&usqp=CAU' },
            name: 'Henna',
            job: 'EVP and GM, Sales Cloud '
        },
        {
            image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqk7VPVs2EvLY7BL6PEi7Sd1W35__yl2IHfUfb21RTNXNzjPzFxTflG_Y8-3Ml2St9Lk&usqp=CAU' },
            name: 'sera',
            job: 'Senior Product Manager'
        },

    ])

    return (
        <Container>
            <BackHeader />

            <AppTextInput
                leftIcon={{
                    name: 'search',
                    type: 'Feather',
                    size: 16
                }}
                inputContainerStyle={{
                    borderColor: '#FFFFFF',
                    paddingLeft: 10,
                    borderRadius: 10,
                    width: '90%',
                    alignSelf: 'center',
                    height: 40,
                    borderWidth: 0.7,
                    opacity: 0.6
                }}
                placeholder="Search "
                inputStyle={{ fontFamily: FONTS.medium }}
                rightAction={<Icon
                    name='sliders'
                    type='FontAwesome'
                    color={colors.primaryThemeColor}
                    style={{ marginRight: 20 }}
                />}
            />

            {/** Tab Button */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%', alignSelf: 'center',
                marginTop: 25,
                justifyContent: 'space-between'
            }}>
                {tabName.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                let oldIndex = tabName.findIndex(it => it.selected);
                                if (oldIndex >= 0) {
                                    tabName[oldIndex].selected = false;
                                }
                                tabName[index].selected = !tabName[index].selected;
                                setTabName(tabName);
                                setRefress(!refress)
                                setSelectedTab(tabName[index].name);
                            }}
                            style={{
                                // width: 160, 
                                height: 40,
                                borderRadius: 30,
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: colors.primaryFontColor,
                                backgroundColor: item.selected ? colors.secondaryThemeColor : 'transparent'
                            }}>
                            <Text style={{
                                color: item.selected ? '#000' : colors.primaryFontColor,
                                fontSize: 14,
                                marginHorizontal: 42,
                                fontFamily: FONTS.bold
                            }}>{item.name}</Text>

                        </TouchableOpacity>
                    )
                })}
            </View>

            {/** For Course */}
            <View style={{
                // width: '90%', alignSelf: 'center',
                marginBottom: 80
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 24,
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: 20
                }}>

                    <Text style={{
                        color: '#fff', fontSize: 16,
                        fontFamily: FONTS.bold,

                        flex: 1
                    }}>Results for
                        {
                            selectedTab == 'Courses' ?
                                <Text style={{
                                    color: colors.primaryThemeColor, fontSize: 16,
                                    fontFamily: FONTS.bold,
                                }}>  3D Design</Text> : <Text style={{
                                    color: colors.primaryThemeColor, fontSize: 16,
                                    fontFamily: FONTS.bold,
                                }}>  All</Text>
                        }
                    </Text>

                    <Text
                        // onPress={() => NavigationService.navigate('Topmentor')}
                        style={{
                            color: colors.primaryThemeColor, fontSize: 13,
                            fontFamily: FONTS.bold,
                            marginLeft: 9
                        }}>2.839 founds</Text>

                </View>

                {/** Card list */}
                {selectedTab == 'Courses' ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cardData}
                        renderItem={({ item, index }) => {
                            return (

                                <CourseCard  item={item}/>

                            )
                        }}
                    />

                    :
                    //Mentor List
                    <View style={{
                        width: '90%', alignSelf: 'center',
                        marginTop: 24
                    }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={mentor}
                            renderItem={({ item }) => {
                                return (
                                    <View
                                        style={{
                                            marginLeft: 10,
                                            marginBottom: 27,
                                            alignItems: 'center',
                                            flexDirection: 'row',

                                        }}
                                    >

                                        <Image
                                            source={item.image}
                                            style={{
                                                height: 46,
                                                width: 46,
                                                borderRadius: 23
                                            }}
                                        />

                                        <View style={{ marginLeft: 20, flex: 1 }}>

                                            <Text
                                                style={{
                                                    color: colors.primaryFontColor,
                                                    fontFamily: FONTS.medium,
                                                    fontSize: 16
                                                }}
                                            >{item.name}</Text>
                                            <Text
                                                style={{
                                                    color: colors.primaryFontColor,
                                                    opacity: 0.6,
                                                    marginTop: 5,
                                                    fontFamily: FONTS.medium,
                                                    fontSize: 12
                                                }}
                                            >{item.job}</Text>
                                        </View>

                                        <Icon
                                            name='message1'
                                            type='AntDesign'
                                            size={18}
                                            color={colors.primaryFontColor}
                                            style={{}}
                                        />

                                    </View>
                                )
                            }}

                        />
                    </View>

                }

            </View>


        </Container >
    )
}

export default LearningSearch

const styles = StyleSheet.create({

    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15
    }
})