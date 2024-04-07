import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable, ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import LearningServices from '../../Services/LearningServices';
import { GetAllMentorsData } from '../../Models/LearningModal';

interface mentorType {
    image: ImageSourcePropType,
    name: string,
    job: string,
}

const Topmentor = () => {
    const colors = useTheme()
    const [refress, setRefress] = useState(false);

    useEffect(()=>{
        getAllMentors()
    },[])

    const getAllMentors = () => {
        LearningServices.getAllMentors()
            .then((res)=>{
                console.log('allMentors>>>>>',res.data)
                setMentor(res.data)
            })
    }

    const [mentor, setMentor] = useState<Array<GetAllMentorsData>>([])

    return (
        <Container>
            <AppBar.Back
                title='Top Mentors'
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

                        onPress: () => console.log("bal")
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

            {/** Mentor list */}
            <View style={{
                width: '95%', alignSelf: 'center',
                marginBottom: 24
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={mentor}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    marginLeft: 10,
                                    marginTop: 24,
                                    alignItems: 'center',
                                    flexDirection: 'row',

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

                                <View style={{ marginLeft: 20 }}>

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
                                    >{item.about}</Text>
                                </View>

                            </View>
                        )
                    }}

                />
            </View>
        </Container>
    )
}

export default Topmentor

const styles = StyleSheet.create({})