//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions,Image, Pressable } from 'react-native';
import { Card, Container, Icon, StatusBar, useTheme } from 'react-native-basic-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Rating } from 'react-native-ratings';
import Toast from 'react-native-simple-toast';

import EshopHeader from '../../Component/Header/EshopHeader';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { WishListResponseData } from '../../Models/E_shopModel';
import { moderateScale } from '../../PixelRatio';
import E_shopService from '../../Services/E_shopServices';
import NavigationService from '../../Services/NavigationService';
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('window').width;
// create a component
const Wishlist = () => {
  const colors = useTheme();
  const [allWishList,setAllWishList] = useState<Array<WishListResponseData>>([])
  console.log('alllll',allWishList)

  useEffect(()=>{
    getAllWishList()
  },[])
  
  const getAllWishList = () =>{
    E_shopService.getAllWishList()
        .then((res)=>{
            console.log('wishafna',res.data)
            setAllWishList(res.data ?? [])
        })
  }

  const deleteWishList = (val:string) =>{
    E_shopService.deleteWishList(val)
        .then((res)=>{
            console.log('deleteeewiss',res)
           getAllWishList()
           Toast.show('Deleted Succesfully...', Toast.SHORT);

        })
  }

    return (
        <Container>
            <StatusBar
                 backgroundColor={'transparent'}
                 barStyle='light-content'
                 translucent={true}
            />
            <EshopHeader title='Wishlist'/>
            {/* <View>
                <Card
                style={styles.newmorph}
                >
                    <Image source={require('../../Assets/IconImage/TopupIcon.png')}
                    style={{
                        height: moderateScale(120),
                        width: '94%',
                        alignSelf: 'center',
                        marginVertical: moderateScale(2),
                        marginBottom: 5,
                        // marginTop:moderateScale(5),
                        borderRadius: 8,
                        resizeMode: 'cover'
                    }}
                    
                />
                <Text
                style={{
                    fontSize: 14,
                    color: 'black',
                    // marginTop: 5,
                    fontFamily:FONTS.Regular,
                    paddingLeft: moderateScale(8),
                    padding: moderateScale(4)
                    // textAlign:'left'
                }}
                    numberOfLines={2}
                >wew</Text>
                <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                }}>
                                <View style={{ alignItems: 'flex-start', width: '50%', borderColor: '#f4f4f4' }}>
                                    <Text style={{
                                        fontFamily: FONTS.Regular,
                                        // marginTop: 5,
                                        color:'black',
                                        fontSize: moderateScale(12),
                                        paddingLeft: moderateScale(8),
                                        marginBottom: moderateScale(8),

                                    }}>$ 100</Text>
                                </View>
                                <Pressable
                                  
                                    style={{ alignItems: 'flex-end', width: '50%', borderColor: '#f4f4f4' }}>
                                    <Icon name="delete-outline" type="MaterialIcon"
                                        style={{ color: 'grey', fontSize: moderateScale(20) }} />
                                </Pressable>
                            </View>
                </Card>
                
            </View> */}
        {allWishList.length ?          
        <FlatList
          data={allWishList}
          renderItem={({item}) => {
           
            return (
              <Pressable
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  paddingBottom: 30,
                }}
                // onPress={()=>{
                //     props.navigation.navigate('ViewProduct',{ProductId:item._id})
                // }}
                
              >
             
                
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'white',
                    width: '100%',
                    borderRadius: 20,
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                    {item.images.map((res)=>{
                        return(
                            <View
                        style={{
                          width: '30%',
                        }}>
                        <Image
                          source={{uri:res.preview}}
                          resizeMode="cover"
                          style={{
                            position: 'absolute',
                            left: -5,
                            top: -5,
                            width:100,
                            height:110,
                            borderRadius:10
                          }}
                        />
                      </View>
                        )
                    })}
                    
                    
                 

                  <View
                    style={{
                      width: '70%',
                      marginTop: 10,
                      paddingHorizontal: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          color: colors.pageBackgroundColor,
                          fontSize: 14,
                        }}>
                        {item.productName}
                      </Text>

                      {/* <Icon
                        name="heart"
                        type="EvilIcon"
                        color={colors.pageBackgroundColor}
                      /> */}
                    </View>

                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        color: colors.pageBackgroundColor,
                        paddingVertical: 5,
                        fontSize: 16,
                      }}>
                      {item.sellPrice}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Rating
                          ratingTextColor="#fff"
                          imageSize={14}
                          showRating={false}
                        />
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            color: colors.pageBackgroundColor,
                            fontSize: 12,
                            marginLeft: 10,
                          }}>
                          4.9
                        </Text>
                      </View>

                      <Pressable
                        style={{
                          height:30,
                          width: 30,
                          backgroundColor: colors.pageBackgroundColor,
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={()=>{
                            deleteWishList(item._id)
                        }}
                        >
                        <Icon 
                        name="delete" 
                        type="AntDesign" 
                        size={15} />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
     
      :
      (
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: moderateScale(250),
          }}>
          <Icon
            name="search-off"
            type="MaterialIcon"
            size={80}
            //   style={{
            //     //marginLeft: 28,
            //     marginRight: 20,
            //   }}
          />
          <Text
            style={{
              color: COLORS.primaryThemeColor,
            }}>
            Your Wishlist Is Empty
          </Text>
        </View>
      )
}
    </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#2c3e50',
    // },
    newmorph: {
        shadowRadius: moderateScale(9),
        padding: moderateScale(10),
        paddingHorizontal: moderateScale(8),
        // paddingVertical:10,
        borderRadius: 8,
        justifyContent: 'center',
        // alignItems:'center',
        backgroundColor: 'brown',
        width: (Width / 2) - 20,
        // height: moderateScale(220),
        marginVertical: moderateScale(10),
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal:10
    },
});

//make this component available to the app
export default Wishlist;
