import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, SectionList, Pressable, ScrollView,
    ImageBackground
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card, AppButton
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import SwitchSelector from "react-native-switch-selector";


const CompletedCourses = () => {
    const colors = useTheme()
    const [showhide, setShowHide] = useState<number>(1);

    // const data = [
    //     {
    //         title1: 'Section 1 - Introduction',
    //         title2: '17 mins',
    //         data: [
    //             {
    //                 name: 'Introduction To Java',
    //                 time: '10 mins',
    //                 number: 1
    //             },
    //             {

    //                 name: 'Installation of  Java',
    //                 time: '10 mins',
    //                 number: 2
    //             }
    //         ]

    //     },
    //     ,

    //     {
    //         title1: 'Section  - Introduction of DSA',
    //         title2: '37 mins',
    //         data: [
    //             {
    //                 name: 'Hash Map',
    //                 time: '10 mins',
    //                 number: 3
    //             },
    //             {

    //                 name: 'Binary Tree',
    //                 time: '10 mins',
    //                 number: 4
    //             },

    //             {

    //                 name: 'Linear Search',
    //                 time: '10 mins',
    //                 number: 5
    //             },
    //             {

    //                 name: 'Big O notation',
    //                 time: '10 mins',
    //                 number: 6
    //             },

    //         ]

    //     },


    // ]

    const section1Data = [{
        title: "Section 1 - Introduction",
        titleA: " 17 mins",
        data: [
            {
                name: 'Introduction To Java',
                time: '10 mins',
                number: 1
            },
            {

                name: 'Installation of  Java',
                time: '10 mins',
                number: 2
            }
        ]
    }];

    const section2Data = [{

        title: 'Section  - Introduction of DSA',
        titleA: '37 mins',
        data: [
            {
                name: 'Hash Map',
                time: '10 mins',
                number: 3
            },
            {

                name: 'Binary Tree',
                time: '10 mins',
                number: 4
            },

            {

                name: 'Linear Search',
                time: '10 mins',
                number: 5
            },
            {

                name: 'Big O notation',
                time: '10 mins',
                number: 6
            },

            {

                name: 'Linear Search',
                time: '10 mins',
                number: 5
            },
            {

                name: 'Big O notation',
                time: '10 mins',
                number: 6
            },

        ]
    }]

    const Item = ({ title1 }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    {/** main Jsx */ }
    return (
        <Container>
            <AppBar.Back
                title='Codding with Java'
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
                            <View style={{
                                borderColor: colors.primaryFontColor,
                                borderWidth: 1,
                                height: 20, width: 20, borderRadius: 15,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Icon
                                    name='dots-horizontal'
                                    type='MaterialCommunityIcon'
                                    size={13}

                                />
                            </View>

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

            <View style={{
                width: '90%', alignSelf: 'center',
                marginTop: 20,

            }}>
                <SwitchSelector
                    initial={0}
                    onPress={(value: React.SetStateAction<number | undefined>) => setShowHide(value)}
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
                        { label: "Lessons", value: 1, },
                        { label: "Certificates", value: 2, },
                    ]}

                />
            </View>


            {showhide == 1 ?
                <ScrollView>
                    <SectionList
                        sections={[...section1Data, ...section2Data]}
                        //keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <Card style={{
                                ...styles.card,
                                borderColor: colors.primaryFontColor
                            }}>

                                <View style={{
                                    width: 35, height: 35, borderRadius: 20,
                                    alignItems: "center", justifyContent: "center",
                                    backgroundColor: '#FFC100',
                                    // opacity: 0.3
                                }}>
                                    <Text style={{
                                        color: colors.primaryFontColor, fontSize: 15,
                                        fontFamily: FONTS.bold
                                    }}>0{item.number}</Text>
                                </View>
                                <View style={{ marginLeft: 20, flex: 1 }}>
                                    <Text style={{
                                        color: colors.primaryFontColor, fontSize: 12,
                                        fontFamily: FONTS.bold,
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        color: colors.primaryFontColor, fontSize: 12,
                                        fontFamily: FONTS.bold,
                                        lineHeight: 20
                                    }}>{item.time}</Text>
                                </View>

                                <Icon
                                    name='play'
                                    type='AntDesign'
                                    color={colors.primaryFontColor}
                                    size={25}
                                    style={{ marginTop: 5 }}
                                />
                            </Card>

                        )}
                        renderSectionHeader={({ section }) => (

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
                                }}>{section.title}</Text>

                                <Text style={{
                                    color: colors.primaryThemeColor, fontSize: 14,
                                    fontFamily: FONTS.bold,
                                    marginLeft: 9
                                }}>{section.titleA}</Text>
                            </View>

                        )}
                        stickySectionHeadersEnabled
                    />
                </ScrollView>
                :

                <ScrollView>
                    <View style={{
                        width: '92%', alignSelf: 'center',
                        marginTop: 24
                    }}>

                        <ImageBackground
                            imageStyle={{}}
                            source={require('../../Assets/images/Vertical.png')}
                            style={styles.Certificates}>

                            <Image source={require('../../Assets/images/certiLogo.png')}
                                style={{
                                    alignSelf: 'center',
                                    resizeMode: 'contain',
                                    marginTop: 30
                                }}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 18,
                                    fontFamily: FONTS.bold, textAlign: 'center',
                                    color: colors.primaryFontColor, marginVertical: 20
                                }}>Certificate of Completion</Text>
                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 12,
                                    fontFamily: FONTS.regular, textAlign: 'center',
                                    color: colors.primaryFontColor,
                                }}>Presented to</Text>

                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 18,
                                    fontFamily: FONTS.bold, textAlign: 'center',
                                    color: colors.primaryThemeColor, marginVertical: 20
                                }}>Andrew Ainsley</Text>
                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 12,
                                    fontFamily: FONTS.regular, textAlign: 'center',
                                    color: colors.primaryFontColor, marginVertical: 20
                                }}>For the successful completion of</Text>

                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 18,
                                    fontFamily: FONTS.bold, textAlign: 'center',
                                    color: colors.primaryFontColor,
                                }}>3D Design Illustration Course</Text>

                            <Text
                                allowFontScaling={false}
                                style={{
                                    fontSize: 12,
                                    fontFamily: FONTS.regular, textAlign: 'center',
                                    color: colors.primaryFontColor, marginVertical: 20
                                }}>Issued on December 20, 2024</Text>
                            <Text allowFontScaling={false}
                                style={{
                                    fontSize: 12,
                                    fontFamily: FONTS.regular, textAlign: 'center',
                                    color: colors.primaryFontColor,
                                }}>ID: SK123456789</Text>

                            <View style={{
                                borderBottomColor: '#000', borderBottomWidth: 1,
                                alignItems: 'center',
                                alignSelf: 'center',
                                width: '60%', marginTop: 10
                            }}>

                                <Image source={require('../../Assets/images/signature.png')} />
                                <Text allowFontScaling={false}
                                    style={{
                                        fontSize: 14,
                                        fontFamily: FONTS.bold, textAlign: 'center',
                                        color: colors.primaryFontColor,
                                        marginTop: 20,
                                        marginBottom: 5
                                    }}>James Anderson Lawren</Text>
                            </View>
                            <Text style={{
                                fontSize: 10,
                                fontFamily: FONTS.regular, textAlign: 'center',
                                color: colors.primaryFontColor,
                                marginTop: 9
                            }}>Elera Courses Manager</Text>

                        </ImageBackground>
                    </View>
                </ScrollView>
            }

            <View style={{ flex: 1 }} />

            <View style={{
                width: '100%',
                borderTopWidth: 0.6,
                borderRightWidth: 0.6,
                borderLeftWidth: 0.6,

                borderColor: colors.primaryFontColor,

                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                justifyContent: 'flex-end',
                marginTop: 20,


            }}>
                {showhide == 1 ?
                    <AppButton

                        title="Start Course Again"
                        textStyle={{
                            color: colors.pageBackgroundColor,
                            fontFamily: FONTS.bold,
                            fontSize: 16
                        }}
                        style={{
                            backgroundColor: colors.primaryThemeColor,
                            borderRadius: 30,
                            marginVertical: 20,
                            width: '80%', alignSelf: 'center',



                        }}
                       // onPress={() => NavigationService.navigate('SelectPayment')}
                    /> :
                    <AppButton

                        title="Download Certificate"
                        textStyle={{
                            color: colors.pageBackgroundColor,
                            fontFamily: FONTS.bold,
                            fontSize: 16
                        }}
                        style={{
                            backgroundColor: colors.primaryThemeColor,
                            borderRadius: 30,
                            marginVertical: 20,
                            width: '80%', alignSelf: 'center',



                        }}
                       // onPress={() => NavigationService.navigate('SelectPayment')}
                    />


                }

            </View>

        </Container>
    )
}

export default CompletedCourses

const styles = StyleSheet.create({
    card: {
        width: '90%',

        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 25,
        maginBottom: 30
    },
    Certificates: {
        // width: '95%',
        //flex: 1,
        height: 565,
    }
})