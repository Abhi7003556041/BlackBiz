//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  TextInput,
  Modal,
} from 'react-native';
import {
  AppButton,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import EshopHeader from '../../Component/Header/EshopHeader';
import {CheckBox} from 'react-native-basic-elements';
import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import E_shopService from '../../Services/E_shopServices';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import Toast from 'react-native-simple-toast';
import {deletedCart, updateQty} from '../../redux/reducer/Cart';
import {moderateScale} from '../../PixelRatio';
import {COLORS} from '../../Constants/Colors';
import {AllCouponResponseData} from '../../Models/E_shopModel';
import colors from 'native-base/lib/typescript/theme/v33x-theme/base/colors';


const {height, width} = Dimensions.get('window');

type Props = StackScreenProps<AppStackModel, 'MyCart'>;
// create a component
const MyCart = (props: Props) => {
  const {cartData} = useSelector((state: RootState) => state.Cart);
  console.log('datacart', cartData);
  const [couponcode, setCouponcode] = useState<string>('');
  const [addCoupon, setAddCoupon] = useState<boolean>(false);
  const [allCoupon, setAllCoupon] = useState<Array<AllCouponResponseData>>([]);
  const [discount,setDiscount] = useState<number>(0)
  const totalprice = cartData.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.sellPrice) * Number(currentValue.qty),
    0,
  );

  const reducedPrice = Number(Number(totalprice) - Number(totalprice * (discount / 100))).toFixed(2)
  //   console.log( totalprice);
  const discountPrice = Number(totalprice * (discount / 100)).toFixed(2)
  const colors = useTheme();
  const [check, setCheck] = useState(false);
  const dispatch = useAppDispatch();
  //    useEffect(()=>{
  //     console.log('fhrkrk',cartData[0]._id)
  //    },[])

  useEffect(() => {
    getAllCoupon();
  }, []);

  const getAllCoupon = () => {
    E_shopService.getAllCoupon().then(res => {
      console.log('allCoupone>>>>', res.data);
      setAllCoupon(res.data);
    });
  };

  const addCouponCode = (val:string) => {
    E_shopService.addCoupon(val)
      .then((res)=>{
        console.log('coupon added ',res.data)
        Toast.showWithGravity('Coupon applied', Toast.SHORT, Toast.BOTTOM);
        setDiscount(res.data.percentageDiscount)
        setAddCoupon(false)
      })
      .catch((err)=>console.log('errrbal',err))
  }

  const deleteCart = (val: string) => {
    dispatch(deletedCart(val));
    E_shopService.deleteCart(val).then(res => {
      console.log('delelel', res);
      Toast.show('Deleted Succesfully...', Toast.SHORT);
    })
    .catch((err) => {
      console.log("err", err)
    });
  };

  return (
    <Container>
      <EshopHeader title="My Cart" />
      <ScrollView>
        {cartData.length ? (
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 10,
              // flex:1
            }}>
            <FlatList
              data={cartData}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      paddingBottom: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                
                        <Image
                          source={{uri: item.productImg[0].preview}}
                          style={{
                            height: 114,
                            width: 114,
                            borderRadius: 10,
                            marginHorizontal: 10,
                          }}
                        />
                      </View>

                      <View
                        style={{
                          flex: 1,
                          height: 114,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              color: colors.primaryFontColor,
                              fontFamily: FONTS.medium,
                              fontSize: 14,
                            }}>
                            {item.productName}
                          </Text>
                         
                          <Pressable
                            onPress={() => {
                              deleteCart(item._id);
                            }}>
                            <Icon name="delete" type="AntDesign" />
                          </Pressable>
                        </View>

                        <View>
                          <Text
                            style={{
                              color: colors.primaryFontColor,
                              fontFamily: FONTS.regular,
                              fontSize: 12,
                              // paddingTop: 5
                            }}>
                            Color : {item.color}
                          </Text>

                          <Text
                            style={{
                              color: colors.primaryFontColor,
                              fontFamily: FONTS.regular,
                              fontSize: 10,
                            }}>
                            Size : {item.size}
                          </Text>

                          <Text
                            style={{
                              color: colors.primaryFontColor,
                              fontFamily: FONTS.regular,
                              fontSize: 16,
                            }}>
                            {item.sellPrice}
                          </Text>

                          <View
                            style={{
                              flexDirection: 'row',
                              paddingTop: 5,
                            }}>
                            <Pressable
                              style={{
                                borderWidth: 1,
                                borderColor: colors.primaryFontColor,
                                width: 25,
                                height: 22,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                              }}
                              onPress={() =>
                                Number(item.qty) > 1
                                  ? dispatch(
                                      updateQty({
                                        catId: item._id,
                                        qty: Number(item.qty) - 1,
                                      }),
                                    )
                                  : null
                              }>
                              <Icon name="minus" type="AntDesign" />
                            </Pressable>

                            <View
                              style={{
                                borderWidth: 1,
                                borderColor: colors.primaryFontColor,
                                width: 50,
                                height: 22,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  color: colors.primaryFontColor,
                                  fontFamily: FONTS.semibold,
                                  fontSize: 12,
                                }}>
                                {item.qty}
                              </Text>
                            </View>

                            <Pressable
                              style={{
                                borderWidth: 1,
                                borderColor: colors.primaryFontColor,
                                width: 25,
                                height: 22,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                              }}
                              onPress={() =>
                                dispatch(
                                  updateQty({
                                    catId: item._id,
                                    qty: Number(item.qty) + 1,
                                  }),
                                )
                              }>
                              <Icon name="plus" type="AntDesign" size={15} />
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </View>

                    <Image
                      source={require('../../Assets/images/businessLine.png')}
                      style={{
                        marginTop: 10,
                        width: '100%',
                      }}
                    />

                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: '50%',
                        }}
                      />
                      <Text
                        style={{
                          color: colors.primaryFontColor,
                          fontFamily: FONTS.semibold,
                          fontSize: 12,
                        }}>
                        Sub Total :
                      </Text>

                      <Text
                        style={{
                          color: colors.primaryFontColor,
                          fontFamily: FONTS.semibold,
                          fontSize: 12,
                        }}>
                        ${Number(item.sellPrice) * Number(item.qty)}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
             <Pressable
          style={{
            width: '95%',
            alignSelf: 'center',
            borderRadius: 8,
            borderColor: 'white',
            flexDirection: 'row',
            height: 45,
            elevation: 5,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            backgroundColor: COLORS.black,
            marginBottom: 16,
            marginTop: 5,
            borderWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            // justifyContent:'flex-end',
            // flex:1
          }}
          onPress={() => {
            setAddCoupon(true);
          }}>
          <Text
            style={{
              color: colors.primaryThemeColor,
              fontSize: 16,
            }}>
            Use Coupon
          </Text>
        </Pressable>
        <View style={{
              // height:300,
              width: '95%',
              alignSelf: 'center',
              padding: moderateScale(17),
              alignItems: 'center',
              borderRadius: 6,
              backgroundColor: COLORS.dark11,
              elevation: 5,
              marginTop:10
            }}>
              {
                cartData.map((val, ind) => {
                  return (
                    <View style={styles.textView}>
                      <View
                        style={{
                          width: '57%'
                        }}
                      >
                        <Text
                          style={styles.headingOne}>
                            {val.productName} 
                            </Text>
                      </View>

                      <Text style={styles.headingTwo}>
                        $ {Number(Number(val.sellPrice)*Number(val.qty)).toFixed(2)}
                      </Text>
                    </View>

                  )
                })
              }
              {discount > 0 ?
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Discount</Text>
                <Text style={{...styles.headingTwo,color:'orange'}}>
                  - $ {Number(totalprice * (discount / 100)).toFixed(2)}
                  </Text>
              </View>
              :null
              }

              <View style={styles.textView}>
                <Text style={styles.headingOne}>Shipping</Text>
                <Text style={styles.headingTwo}>$ 0</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Import Charges</Text>
                <Text style={styles.headingTwo}>$ 0</Text>
              </View>
              <View style={styles.textView}>
                <Text style={[styles.headingDonate, { fontFamily: FONTS.Bold }]}>Donate to Charity</Text>
                <Text style={styles.headingTwo}>$ 0</Text>
              </View>

              <View style={{
                ...styles.textView,
                borderTopWidth: 1,
                // padding:10,
                marginTop: moderateScale(8),
                marginVertical: moderateScale(8),
                borderStyle: 'dashed',
                borderColor: COLORS.primaryFontColor
              }}>
                <Text style={{
                  ...styles.headingTotal,
                  fontFamily: FONTS.Bold,
                  color: COLORS.black
                }}></Text>
                <Text style={{ ...styles.headingTotal }}>
                  $ {Number(Number(totalprice) - Number(totalprice * (discount / 100))).toFixed(2)}</Text>
              </View>
            </View>
          </View>
          
        ) : (
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(250),
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
              Your Cart Is Empty
            </Text>
          </View>
        )}
       
      </ScrollView>
      {cartData.length ? (
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: colors.pageBackgroundColor,
            height: height / 7,
            width: width,
            borderColor: colors.primaryFontColor,
            borderWidth: 0.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.semibold,
                fontSize: 12,
              }}>
              Sub Total :
            </Text>

            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.semibold,
                fontSize: 12,
              }}>
              $ {reducedPrice}
            </Text>
          </View>

          <AppButton
            title="Check Out"
            textStyle={{
              fontFamily: FONTS.medium,
              fontSize: 14,
              color: colors.primaryFontColor,
            }}
            style={{
              marginHorizontal: 20,
              borderRadius: 30,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: colors.primaryFontColor,
              height: 40,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() =>
              props.navigation.navigate('AddAddress', {
                data: cartData,
                total: Number(reducedPrice),
                discount: discountPrice,
                coupon: couponcode
              })
            }
          />
        </View>
      ) : null}
      <Modal
        transparent={true}
        visible={addCoupon}
        animationType="slide"
        onRequestClose={() => setAddCoupon(false)}>
        <View
          style={{
            flex: 1,
          }}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: '#000000ab',
            }}
            onPress={() => {
              setAddCoupon(false);
              // onChangeComments('');
            }}></Pressable>
          <Pressable
            style={{
              flex: 3,
              backgroundColor: 'black',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#eacda4',
                height: 35,
                alignItems: 'center',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                Coupons
              </Text>
              <Pressable
                style={{
                  marginRight: 5,
                }}
                onPress={() => {
                  setAddCoupon(false);
                }}>
                <Icon
                  name="squared-cross"
                  type="Entypo"
                  size={23}
                  color="black"
                />
              </Pressable>
            </Pressable>
            <FlatList
              data={allCoupon}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <Pressable
                    style={{
                      height: 50,
                      // width:70,
                      backgroundColor: COLORS.dark11,
                      marginHorizontal: 15,
                      marginVertical: 15,
                      borderRadius: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      // marginTop:20
                    }}>
                    <View
                      style={{
                        marginLeft: 25,
                      }}>
                      <Text
                        style={{
                          color: '#eacda3',
                          fontFamily: FONTS.bold,
                        }}>
                        {item.couponCode}
                      </Text>
                    </View>
                    <AppButton
                      title="Apply"
                      textStyle={{
                        fontFamily: FONTS.bold,
                        fontSize: 12,
                        color: colors.primaryFontColor,
                      }}
                      style={{
                        borderRadius: 10,
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: colors.primaryThemeColor,
                        height: 30,
                        marginTop: 0,
                        flexDirection: 'row',
                        // alignItems:'center',
                        justifyContent: 'center',
                        width: 50,
                        paddingTop: 2.5,
                      }}
                      onPress={()=>{
                        addCouponCode(item.couponCode)
                        setCouponcode(item._id)
                      }}
                    />
                  </Pressable>
                );
              }}
            />
          </Pressable>
        </View>
      </Modal>

    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  headingOne: {
    // fontFamily: 'ElMessiri-Bold',
    fontSize: moderateScale(13),
    color: 'white',
    marginBottom: moderateScale(5),
    fontWeight:'bold'
  },
  headingthree: {
    // fontFamily: 'ElMessiri-Bold',
    fontSize: moderateScale(13),
    color: COLORS.white,
    flex: 1,



  },
  headingDonate: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(12),
    color: 'white',
    marginVertical: moderateScale(4),
    fontWeight:'bold'
  },
  headingTotal: {
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(15),
    color: COLORS.primaryThemeColor,
    marginTop: moderateScale(10),
    fontWeight:'bold'

  },
  headingTwo: {
    fontFamily: FONTS.Medium,
    fontSize: moderateScale(13),
    color: 'white',

  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // flexWrap:'wrap'

  }
});

//make this component available to the app
export default MyCart;
