//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar as RNStatusbar, Image, ScrollView, ImageSourcePropType, FlatList } from 'react-native';
import { AppBar, AppButton, Card, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import SwitchSelector from 'react-native-switch-selector';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';



interface cardType {
    img: ImageSourcePropType,
    smallname: string,
    name: string

}

// create a component
const MentorProfile = () => {
    const colors = useTheme()
    const [showhide, setShowHide] = useState<number>(1);

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

    const studentsData = [
        {
            image: require('../../Assets/images/BennySpanbauer.png'),
            name: 'Benny Spanbauer',
            type: 'Student'
        },
        {
            image: require('../../Assets/images/TannerStafford.png'),
            name: 'Tanner Stafford',
            type: 'Junior Designer'
        },
        {
            image: require('../../Assets/images/FreidaVarnes.png'),
            name: 'Freida Varnes',
            type: 'Student'
        },
        {
            image: require('../../Assets/images/FranceneVandyne.png'),
            name: 'Francene Vandyne',
            type: 'Freelancer'
        }
    ]
    const reviewData = [
        {
            image: require('../../Assets/images/Francene.png'),
            name: 'Francene Vandyne',
            comments: 'The course is very good, the explanation of the mentor is very clear and easy to understand! 😎😎'
        },
        {
            image: require('../../Assets/images/RochelFoose.png'),
            name: 'Francene Vandyne',
            comments: 'Awesome! this is what i was looking for, i recommend to everyone 😄😄😄'
        }
    ]
    return (
        <Container>
            <AppBar.Back
                rightActions={[
                    {
                        icon:
                            <Pressable
                            // onPress={() => NavigationService.navigate('Scan')}
                            >
                                <Icon
                                    name='dots-horizontal-circle-outline'
                                    type='MaterialCommunityIcon'
                                    size={25}
                                />
                            </Pressable>
                    },
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
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/Ellipse.png')}
                            style={{
                                height: 120,
                                width: 120,
                                borderRadius: 60,

                            }}
                        />
                    </View>

                    <Text
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 20,
                            color: colors.primaryFontColor,
                            textAlign: 'center',
                            marginTop: 10
                        }}
                    >Jonathan Williams</Text>

                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            color: colors.secondaryFontColor,
                            textAlign: 'center',
                            marginTop: 10
                        }}
                    >Senior UI/UX Designer at Google</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                            marginHorizontal: 20
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 20,
                                    color: colors.primaryFontColor,
                                    textAlign: 'center',
                                    marginTop: 10
                                }}
                            >25</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    color: colors.secondaryFontColor,
                                    textAlign: 'center',
                                    marginTop: 10
                                }}
                            >Courses</Text>


                        </View>

                        <View
                            style={{
                                height: 60,
                                width: 1,
                                backgroundColor: colors.primaryFontColor,
                                marginHorizontal: 30
                            }}
                        />


                        <View>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 20,
                                    color: colors.primaryFontColor,
                                    textAlign: 'center',
                                    marginTop: 10
                                }}
                            >22,379</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    color: colors.secondaryFontColor,
                                    textAlign: 'center',
                                    marginTop: 10
                                }}
                            >Students</Text>


                        </View>

                        <View
                            style={{
                                height: 60,
                                width: 1,
                                backgroundColor: colors.primaryFontColor,
                                marginHorizontal: 30
                            }}
                        />



                        <View>
                            <Text
                                style={{
                                    fontFamily: FONTS.semibold,
                                    fontSize: 20,
                                    color: colors.primaryFontColor,
                                    textAlign: 'center',
                                    marginTop: 10
                                }}
                            >9,287</Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    color: colors.secondaryFontColor,
                                    textAlign: 'center',
                                    marginTop: 10
                                }}
                            >Reviews</Text>


                        </View>



                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 20,
                            // backgroundColor: 'yellow',
                        }}
                    >
                        <AppButton
                            title='Message'
                            textStyle={{
                                fontFamily: FONTS.semibold,
                                fontSize: 16,
                                color: colors.pageBackgroundColor
                            }}
                            style={{
                                backgroundColor: '#FFE699',
                                borderRadius: 30,
                                width: '50%',
                                marginTop: 20,
                                // marginHorizontal: 0
                            }}
                            buttonIcon={{
                                position: 'left',
                                name: 'comment-dots',
                                type: 'FontAwesome5',
                                color: colors.pageBackgroundColor
                            }}

                        />

                        <AppButton
                            title='Website'
                            textStyle={{
                                fontFamily: FONTS.semibold,
                                fontSize: 16,
                                color: colors.primaryFontColor
                            }}
                            style={{
                                backgroundColor: 'transparent',
                                borderRadius: 30,
                                width: '50%',
                                marginTop: 20,
                                borderWidth: 1,
                                borderColor: '#FFE699',
                                marginHorizontal: 0
                            }}
                            buttonIcon={{
                                position: 'left',
                                name: 'compass',
                                type: 'Ionicon',
                                color: colors.primaryFontColor
                            }}
                        />

                    </View>

                    <View
                        style={{
                            height: 0.3,
                            width: '100%',
                            backgroundColor: colors.secondaryFontColor,
                            marginTop: 20
                        }}
                    />


                    <View style={{
                        width: '95%', alignSelf: 'center',
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
                                width: 105,
                                paddingBottom: 8,
                                fontFamily: FONTS.medium,

                            }}
                            textContainerStyle={{
                                borderBottomWidth: 3,
                                borderColor: '#35383F',
                                paddingBottom: 8,
                                marginHorizontal: 1
                            }}
                            borderColor={'transparent'}

                            fontSize={14}
                            height={45}
                            valuePadding={0}

                            hasPadding
                            options={[
                                { label: "Courses", value: 1, },
                                { label: "Students", value: 2, },
                                { label: 'Reviews', value: 3 }

                            ]}

                        />
                    </View>



                    {showhide == 1 ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={cardData}
                            renderItem={({ item, index }) => {
                                return (
                                    <Pressable style={{
                                        ...styles.card,
                                        borderColor: colors.primaryFontColor
                                    }}
                                        onPress={() => NavigationService.navigate('EnrolPage')}
                                    >

                                        <Image source={item.img}
                                            style={{
                                                width: 120,
                                                height: 120,
                                                resizeMode: 'contain',

                                            }} />

                                        <View style={{
                                            flex: 1,
                                            marginLeft: 10
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                // marginTop: 8
                                            }}>

                                                <View style={{
                                                    //width: 66, 
                                                    height: 24,
                                                    backgroundColor: colors.secondaryThemeColor,
                                                    borderRadius: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }}>
                                                    <Text style={{
                                                        fontSize: 10,
                                                        paddingHorizontal: 10,
                                                        color: '#000', fontFamily: FONTS.medium
                                                    }}>{item.smallname}</Text>

                                                </View>
                                                <Icon
                                                    name='bookmark-minus'
                                                    type='MaterialCommunityIcon'
                                                    size={20}
                                                    color={colors.primaryThemeColor}
                                                    style={{ alignSelf: 'flex-end' }}
                                                />
                                            </View>

                                            <Text
                                                allowFontScaling={false}
                                                style={{
                                                    color: colors.primaryFontColor, fontSize: 16,
                                                    fontFamily: FONTS.bold,
                                                    marginVertical: 2
                                                }}>{item.name}</Text>

                                            <View style={{
                                                flexDirection: 'row', alignItems: 'center'
                                            }}>

                                                <Text style={{
                                                    color: colors.primaryThemeColor, fontSize: 16,
                                                    fontFamily: FONTS.bold
                                                }}>$48</Text>

                                                <Text style={{
                                                    color: colors.primaryFontColor, fontSize: 12,
                                                    fontFamily: FONTS.bold,
                                                    textDecorationLine: 'line-through',
                                                    textDecorationStyle: 'solid',
                                                    marginLeft: 10
                                                }}>$80</Text>
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                // marginTop: 5
                                            }}>
                                                <Icon
                                                    name='star'
                                                    type='AntDesign'
                                                    color={colors.primaryThemeColor}
                                                    size={15}
                                                />
                                                <Text style={{
                                                    color: colors.primaryFontColor, fontSize: 12,
                                                    fontFamily: FONTS.bold,
                                                    marginLeft: 10
                                                }}>4.8</Text>

                                                <Icon
                                                    name='remove-outline'
                                                    type='Ionicon'
                                                    color={colors.primaryFontColor}
                                                    size={23}
                                                    style={{
                                                        transform: [{ rotate: '90deg' }],
                                                        marginTop: 4
                                                    }}
                                                />
                                                <Text style={{
                                                    color: colors.primaryFontColor,
                                                    fontSize: 12,
                                                    fontFamily: FONTS.bold,
                                                }}>8,289 students</Text>

                                            </View>
                                        </View>
                                    </Pressable>
                                )
                            }}
                        />
                        :
                        showhide == 2 ?

                            <View
                                style={{
                                    marginTop: 20
                                }}
                            >
                                <FlatList
                                    data={studentsData}
                                    renderItem={({ item }) => {
                                        return (


                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10
                                                }}
                                            >

                                                <View>
                                                    <Image
                                                        source={item.image}
                                                        resizeMode={'contain'}
                                                        style={{
                                                            height: 60,
                                                            width: 60,
                                                            borderRadius: 30
                                                        }}
                                                    />
                                                </View>

                                                <View
                                                    style={{
                                                        marginHorizontal: 20
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: colors.primaryFontColor,
                                                            fontFamily: FONTS.semibold,
                                                            fontSize: 16
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: colors.secondaryFontColor,
                                                            fontFamily: FONTS.medium,
                                                            fontSize: 12,
                                                            marginVertical: 10
                                                        }}
                                                    >
                                                        {item.type}
                                                    </Text>
                                                </View>

                                            </View>
                                        )
                                    }}
                                />


                            </View>

                            :
                            <View
                                style={{
                                    marginTop: 10,
                                }}
                            >
                                <FlatList
                                    data={reviewData}
                                    renderItem={({ item }) => {
                                        return (
                                            <View>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                       marginVertical: 20
                                                    }}
                                                >
                                                    <Image
                                                        source={item.image}
                                                        resizeMode='contain'
                                                        style={{
                                                            height: 48,
                                                            width: 48,
                                                            borderRadius: 24
                                                        }}
                                                    />

                                                    <Text
                                                        style={{
                                                            color: colors.primaryFontColor,
                                                            fontFamily: FONTS.semibold,
                                                            fontSize: 14,
                                                            marginLeft: 20
                                                        }}
                                                    >{item.name}</Text>

                                                    <View
                                                        style={{
                                                            borderWidth: 1,
                                                            borderColor: colors.primaryFontColor,
                                                            width: 50,
                                                            height: 25,
                                                            borderRadius: 25,
                                                            marginLeft: 10,
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            paddingHorizontal: 10
                                                        }}
                                                    >
                                                        <Icon
                                                            name='star'
                                                            type='AntDesign'
                                                            size={15}
                                                        />

                                                        <Text
                                                            style={{
                                                                color: colors.primaryFontColor,
                                                                fontFamily: FONTS.medium,
                                                                fontSize: 12,
                                                                marginLeft: 5
                                                            }}
                                                        >5</Text>



                                                    </View>

                                                    <Icon
                                                        name='dots-horizontal-circle-outline'
                                                        type='MaterialCommunityIcon'
                                                        size={25}
                                                    />

                                                </View>

                                                <Text
                                                    style={{
                                                        fontFamily: FONTS.semibold,
                                                        color: colors.primaryFontColor,
                                                        marginHorizontal: 20,
                                                        // marginVertical: 10
                                                    }}
                                                >{item.comments}</Text>

                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        marginHorizontal: 20,
                                                        alignItems: 'center',
                                                        marginVertical: 10
                                                    }}
                                                >
                                                    <Icon
                                                        name='hearto'
                                                        type='AntDesign'
                                                    />

                                                    <Text
                                                        style={{
                                                            color: colors.primaryFontColor,
                                                            fontFamily: FONTS.medium,
                                                            fontSize: 12,
                                                            marginLeft: 10
                                                        }}
                                                    >369</Text>

                                                    <Text
                                                        style={{
                                                            color: colors.secondaryFontColor,
                                                            fontFamily: FONTS.medium,
                                                            fontSize: 12,
                                                            marginLeft: 20
                                                        }}
                                                    >2 weeks ago</Text>

                                                </View>
                                            </View>
                                        )
                                    }}
                                />

                            </View>
                    }



                </View>
            </ScrollView>


        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10

    }
});

//make this component available to the app
export default MentorProfile;
