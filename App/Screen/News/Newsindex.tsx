import {
    StyleSheet, Text, View, ScrollView,
    StatusBar as RNStatusbar, Image, Pressable, FlatList,
    ImageSourcePropType
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import IconY from 'react-native-vector-icons/MaterialCommunityIcons';


interface NewsDataType {
    date: string,
    about: string,
    small: string,
    img: ImageSourcePropType,
    time: string,
    handlerClick?: () => void,
    expand?: boolean
}

type SixNameType = {
    name: string,
    selected?: boolean
}

const Newsindex = () => {
    const [refress, setRefress] = useState(false);
    const [expand, setExpand] = useState(false);

    const colors = useTheme()
    const [sixName, setSixName] = useState<SixNameType[]>([
        {
            name: 'Political'
        },
        {
            name: 'Sports'
        },
        {
            name: 'Current affairs'
        },
        {
            name: 'Social'
        },
        {
            name: 'National'
        },
        {
            name: 'International'
        },


    ])

    const [newsData, setNewsData] = useState<NewsDataType[]>([
        {
            date: 'Fryday, 17 June 2022',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
            small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, amet vitae consectetur interdum metus tincidunt. In suspendisse eu aliquet pellentesque consectetur quis diam quis. Massa nam quam amet, dui non. Vitae proin ut vel auctor. Urna vel sit tempus odio tristique eget elementum pellentesque. Sit consectetur ultrices et, faucibus in vivamus. Non vestibulum pellentesque in porttitor maecenas elit, ac. Enim eget maecenas purus nunc lacus, sodales amet. Volutpat facilisi viverra sem in. Volutpat congue pellentesque quam egestas. At urna, cursus nec sem tincidunt vitae donec. Et massa maecenas placerat scelerisque nunc, egestas pellentesque. Volutpat fermentum nisl massa ullamcorper sit ac in interdum. Pulvinar et lorem quis cras porta ipsum. Mauris neque urna lorem pellentesque adipiscing netus. Adipiscing risus non habitant mauris tortor eu tortor. Pharetra at mattis orci montes, eu libero maecenas elementum. Lorem elit amet ut nunc massa purus nulla etiam sem. Urna, aliquet varius nibh mauris. Enim lectus aenean feugiat pretium, fringilla nunc,  ',
            img: require('../../Assets/images/news.png'),
            time: '11:20 am',
            handlerClick: () => { NavigationService.navigate('Fullnews') }
        },
        {
            date: 'Fryday, 17 June 2022',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
            small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, amet vitae consectetur interdum metus tincidunt. In suspendisse eu aliquet pellentesque consectetur quis diam quis. Massa nam quam amet, dui non. Vitae proin ut vel auctor. Urna vel sit tempus odio tristique eget elementum pellentesque. Sit consectetur ultrices et, faucibus in vivamus. Non vestibulum pellentesque in porttitor maecenas elit, ac. Enim eget maecenas purus nunc lacus, sodales amet. Volutpat facilisi viverra sem in. Volutpat congue pellentesque quam egestas. At urna, cursus nec sem tincidunt vitae donec. Et massa maecenas placerat scelerisque nunc, egestas pellentesque. Volutpat fermentum nisl massa ullamcorper sit ac in interdum. Pulvinar et lorem quis cras porta ipsum. Mauris neque urna lorem pellentesque adipiscing netus. Adipiscing risus non habitant mauris tortor eu tortor. Pharetra at mattis orci montes, eu libero maecenas elementum. Lorem elit amet ut nunc massa purus nulla etiam sem. Urna, aliquet varius nibh mauris. Enim lectus aenean feugiat pretium, fringilla nunc,  ',
            img: require('../../Assets/images/news1.png'),
            time: '11:20 am',
            handlerClick: () => { NavigationService.navigate('Fullnews') }
        },
        {
            date: 'Fryday, 17 June 2022',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
            small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus',
            img: require('../../Assets/images/news2.png'),
            time: '11:20 am'
        },
        {
            date: 'Fryday, 17 June 2022',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
            small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus',
            img: require('../../Assets/images/news3.png'),
            time: '1:20 am'
        },
        {
            date: 'Fryday, 17 June 2022',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
            small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus',
            img: require('../../Assets/images/news4.png'),
            time: '12:20 am'
        },
        {
            date: 'Fryday, 17 June 2022',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
            small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus',
            img: require('../../Assets/images/news5.png'),
            time: '8:20 am'
        },
    ])

    const toggleButton = () => {
        setExpand(prevState => !prevState)
    }

    const renderItem = ({ item }: { item: NewsDataType }) => {
        return (
            <View style={{
                flexDirection: 'row',
                //height: 130,
                paddingVertical: 10,
                width: '92%',
                alignSelf: 'center',

                marginTop: 10,
                //backgroundColor: 'red',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flex: 1,
                    // width: 282,
                    marginRight: 5,
                    //backgroundColor: 'green'
                }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{
                            height: 26, width: 26,
                            borderRadius: 5, backgroundColor: '#fff',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            {/* <Flower style={{ marginLeft: 4 }} /> */}
                            <Image source={require('../../Assets/images/flower.png')}
                                style={{
                                    marginLeft: 3,
                                    resizeMode: 'contain'
                                }}
                            />
                        </View>
                        <Text style={{
                            color: '#fff', fontSize: 12,
                            fontFamily: FONTS.bold,
                            marginLeft: 9
                        }}>{item.date}</Text>
                    </View>
                    <Text style={{
                        color: '#fff', fontSize: 10,
                        fontFamily: FONTS.medium,
                        lineHeight: 14,
                        marginTop: 5

                    }}>{item.about}</Text>

                    <Text
                        // onPress={toggleButton}
                        style={{
                            color: colors.primaryFontColor,
                            fontSize: 8,
                            fontFamily: FONTS.medium,
                            lineHeight: 14,
                            marginTop: 5,
                            //maxWidth: '90%'

                        }}
                        numberOfLines={item.expand ? undefined : 2}
                    >
                        {item.small}


                    </Text>
                    <Text
                        onPress={() => {
                            item.expand = !item.expand
                            setRefress(!refress)
                        }}
                        style={{
                            color: colors.primaryThemeColor,
                            fontSize: 8,
                            fontFamily: FONTS.medium,
                            lineHeight: 14,
                            marginTop: 5,
                            textAlign: 'right',
                            marginRight: 10
                            //maxWidth: '90%'
                        }}
                    >{item.expand ? '..Read Less' : '..Read More'}</Text>


                </View>
                <Pressable
                    onPress={item.handlerClick}
                    style={{
                        //marginBottom: 8
                        marginRight: 5
                    }}>
                    <Text style={{
                        fontSize: 10,
                        color: '#fff', fontFamily: FONTS.bold,
                        textAlign: 'right',
                        marginBottom: 4
                    }}>{item.time}</Text>

                    <Image source={item.img}
                        style={{
                            width: 107,
                            height: 95, resizeMode: 'cover',
                            borderRadius: 5,
                        }} />
                </Pressable>

            </View >
        )
    }

    return (
        <Container>
            <AppBar.Back
                title='News'
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
                            name='bookmark-check-outline'
                            type='MaterialCommunityIcon'
                            size={20}
                        />
                    },
                    {
                        icon: <Icon
                            name='dots-three-vertical'
                            type='Entypo'
                            size={17}
                            style={{
                                marginLeft: 28,
                                marginRight: 20
                            }}
                        />,

                        onPress: () => console.log("bal")
                    }
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
                placeholder="Search Topicks"
                inputStyle={{ fontFamily: FONTS.medium }}
            />

            <View style={styles.mainBox}>
                {sixName.map((item, index) => {
                    return (

                        <Pressable
                            onPress={() => {
                                let oldIndex = sixName.findIndex(it => it.selected);
                                if (oldIndex >= 0) {
                                    sixName[oldIndex].selected = false;
                                }
                                sixName[index].selected = !sixName[index].selected;
                                setSixName(sixName);
                                setRefress(!refress)
                            }}

                            style={{
                                ...styles.tab,
                                backgroundColor: item.selected ?
                                    colors.secondaryThemeColor : 'transparent'
                            }}>
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: item.selected ? '#000' : '#fff',
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,

                                }}>{item.name}</Text>
                        </Pressable>
                    )
                })}

            </View>

            <FlatList
                data={newsData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    )
}

export default Newsindex

const styles = StyleSheet.create({

    mainBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: "100%",
        paddingHorizontal: 10

    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 42,
        width: '30%',
        marginTop: 18,
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 10
    }
})