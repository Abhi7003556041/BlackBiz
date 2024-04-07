import {
    StyleSheet, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, FlatList, Pressable, ScrollView,
    ImageBackground, Dimensions

} from 'react-native'
import React, { useEffect, useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card, Text
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import { Rating, AirbnbRating } from 'react-native-ratings';
import EshopHeader from '../../Component/Header/EshopHeader';
import E_shopService from '../../Services/E_shopServices';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import { CategoryResponseData, PopularProductResponseData } from '../../Models/E_shopModel';
type Props = StackScreenProps<AppStackModel, 'Eshop_Index'>
const { height, width } = Dimensions.get('window')
const Eshop_Index = (props : Props) => {
    const [categoryItem,setCatagoryItem] = useState<Array<CategoryResponseData>>()

    const [popularProduct,setPopularProduct] = useState<Array<PopularProductResponseData>>()

    const popularData = [
        {
            image: require('../../Assets/images/Product89.png'),
            name: 'Vintage Backpack',
            amount: '$78',
            // onPress: () => NavigationService.navigate('ViewProduct'),
        },
        {
            image: require('../../Assets/images/Product.png'),
            name: 'Kimono Clogs',
            amount: '$65',
            // onPress: () => NavigationService.navigate('ViewProduct'),
        }
    ]

    useEffect(()=>{
        getCategory()
        getPopularProduct()
    },[])

    const getCategory =() =>{
        E_shopService.getCategories()
            .then((res )=>{
                console.log(res.data)
                setCatagoryItem(res.data ?? [])
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const getPopularProduct = () => {
        E_shopService.getPopularProduct()
            .then((res)=>{
                console.log('allPopularProducycy',res.data)
                setPopularProduct(res.data)
            })
    }

    const renderCatagoryItem = ({ item }: { item: any }) => {
        return (
            <View style={{
                width: 68,
                alignItems: 'center',
                marginHorizontal:5
            }}>
                <Pressable style={{
                    height: 90,
                    width: 70,
                    // backgroundColor: colors.primaryFontColor,
                    borderRadius: 10, alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 19
                }}
                onPress={()=>{
                    props.navigation.navigate('SubCategory',{ CatId: item._id, 'name': item.name })
                }}
                >

                    <Image source={{uri:item.img}}
                    style={{
                        height:80,
                        width:70,
                        resizeMode:'cover',
                        borderRadius:10,
                        // marginRight:10
                    }}
                    />

                </Pressable>

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 12, fontFamily: FONTS.bold,
                        marginTop: 8
                    }}>{item.name}</Text>
            </View>
        )
    }

    const colors = useTheme()
    return (
        <Container>
            <EshopHeader title='Eshop' />

            <ScrollView>
                <Text
                    style={{
                        color: colors.primaryFontColor, fontSize: 18,
                        fontFamily: FONTS.medium,
                        marginLeft: 10, marginVertical: 15
                    }}
                >Categories</Text>

                <View style={{
                    marginHorizontal: 10,

                }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={categoryItem}
                        renderItem={renderCatagoryItem}
                        horizontal={true}
                    />
                </View>


                {/* <View style={{
                    width: '85%',
                    height: 75,
                    alignSelf: 'center',
                    backgroundColor: colors.primaryThemeColor,
                    flexDirection: 'row', alignItems: 'center',
                    borderRadius: 10,
                    paddingLeft: 25,
                    marginTop: 20,
                    paddingRight: 20
                 

                }}>

                    <Image
                        source={require('../../Assets/IconImage/Wallet.png')}
                    />
                    <Text style={{
                        color: '#000',
                        fontSize: 14, fontFamily: FONTS.bold,
                        marginLeft: 10,
                        marginRight: 35
                    }}>$1.500</Text>

                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between',
                          
                            flex: 1
                        }}
                    >
                        <View>
                          

                            <Image source={require('../../Assets/IconImage/PayIcon.png')}
                                resizeMode='contain'
                            />


                            <Text style={{
                                color: '#000',
                                fontSize: 13, fontFamily: FONTS.bold,
                                paddingTop: 6

                            }}>Pay</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            

                            <Image source={require('../../Assets/IconImage/TopupIcon.png')} />


                            <Text style={{
                                color: '#000',
                                fontSize: 13, fontFamily: FONTS.bold,
                                paddingTop: 6
                            }}>Top Up</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>

                            <Image source={require('../../Assets/IconImage/MoreIcon.png')} />

                            <Text style={{
                                color: '#000',
                                fontSize: 13, fontFamily: FONTS.bold,
                                paddingTop: 6
                            }}>More</Text>
                        </View>

                    </View>

                </View> */}

{/* 
                <Text
                    style={{
                        color: colors.primaryFontColor, fontSize: 18,
                        fontFamily: FONTS.medium,
                        marginLeft: 10, marginVertical: 15
                    }}
                >Sale Discount</Text> */}

                {/* <View style={{
                    flexDirection: 'row',
                    //lignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>

                    {discountCard.map((item) => {
                        return (
                            <Pressable style={{
                                width: width / 3.3,
                            }}>
                                <ImageBackground
                                    imageStyle={{
                                        borderRadius: 6,

                                    }}
                                    source={item.img}
                                    style={{
                                        width: width / 3.5,
                                        height: width / 3.5,


                                    }}
                                    resizeMode='contain'
                                >
                                    <ImageBackground
                                        source={require('../../Assets/IconImage/Tag.png')}
                                        style={{
                                            position: 'absolute',
                                            width: width / 10,
                                            height: 45,
                                            right: 10,
                                        }} >

                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 10,
                                             fontFamily: FONTS.medium,
                                        }}>Disc</Text>

                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 10, 
                                            fontFamily: FONTS.semibold,
                                        }}>40%</Text>
                                    </ImageBackground>

                                </ImageBackground>

                                <View style={{

                                }}>
                                    <Text 
                                    numberOfLines={1}
                                    style={{
                                        fontSize: 12, 
                                        fontFamily: FONTS.medium,
                                        lineHeight: 23
                                    }}>{item.name}</Text>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        // backgroundColor: 'green',
                                        justifyContent: 'space-between',
                                        //paddingLeft: 6,
                                        width: width / 3.5

                                    }}>
                                        <View
                                            style={{
                                                flexDirection: 'row', alignItems: 'center',
                                                flex: 1,

                                            }}>
                                            <Text 
                                            allowFontScaling={false}
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 14,
                                                 fontFamily: FONTS.medium,
                                                color: colors.primaryThemeColor
                                            }}>{item.discount}</Text>

                                            <Text style={{
                                                textAlign: 'center',
                                                fontSize: 10, fontFamily: FONTS.medium,
                                                textDecorationLine: 'line-through',
                                                marginLeft: 5

                                            }}>{item.price}</Text>
                                        </View>
                                        <Icon
                                            name='hearto'
                                            type='AntDesign'
                                            size={15}

                                        />
                                    </View>
                                </View>
                            </Pressable>
                        )
                    })
                    }

                </View> */}

                <Text
                    style={{
                        color: colors.primaryFontColor, fontSize: 18,
                        fontFamily: FONTS.medium,
                        marginLeft: 10, marginVertical: 15
                    }}
                >Popular</Text>

                <FlatList
                    data={popularProduct}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                style={{
                                    // flexDirection: 'row',
                                    marginHorizontal: 10,
                                    paddingBottom: 30,
                                }}
                                // onPress={item.onPress}
                                onPress={()=>{
                                    props.navigation.navigate('ViewProduct',{ProductId:item._id})
                                }}
                            >
                                <View
                                    style={{
                                        height: 102,
                                        backgroundColor: colors.primaryFontColor,
                                        width: '100%',
                                        borderRadius: 20,
                                        flexDirection: 'row',
                                        marginTop: 20
                                    }}
                                >
                                   <View
                                   style={{
                                    // backgroundColor:'red',
                                    alignItems:'center',
                                    justifyContent:'center'
                                   }}
                                   >
                                        <Image
                                            source={{uri:item.productData.img[0].preview}}
                                            resizeMode='cover'
                                            style={{
                                                // position:'absolute',
                                               height:130,
                                               width:100,
                                               borderRadius:10
                                            //    marginTop:20
                                                
                                            }}
                                        />
                                   </View>
                                    <View
                                        style={{
                                            width: '70%',
                                            marginTop: 10,
                                            paddingHorizontal: 20
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',

                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: FONTS.medium,
                                                    color: colors.pageBackgroundColor,
                                                    fontSize: 14
                                                }}
                                            >{item.productData.name}</Text>

                                        </View>

                                        <Text
                                            style={{
                                                fontFamily: FONTS.medium,
                                                color: colors.pageBackgroundColor,
                                                paddingVertical: 5,
                                                fontSize: 16
                                            }}
                                        >{item.productData.sell_price}</Text>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Rating
                                                    ratingTextColor='#fff'
                                                    imageSize={14}
                                                    showRating={false}
                                                    ratingCount={5}
                                                    readonly={true}
                                                    startingValue={item.avgRat}
                                                />
                                                <Text
                                                    style={{
                                                        fontFamily: FONTS.medium,
                                                        color: colors.pageBackgroundColor,
                                                        fontSize: 12,
                                                        marginLeft: 10
                                                    }}
                                                >{item.avgRat.toFixed(1)}</Text>
                                            </View>

                                            <View
                                                style={{
                                                    height: 24,
                                                    width: 51,
                                                    backgroundColor: colors.pageBackgroundColor,
                                                    borderRadius: 12,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'

                                                }}
                                            >
                                                <Icon
                                                    name='shopping-cart'
                                                    type='Feather'
                                                    size={15}
                                                />

                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </Pressable>
                        )
                    }}
                />


            </ScrollView>
        </Container>
    )
}

export default Eshop_Index

const styles = StyleSheet.create({

    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 82
    }
})