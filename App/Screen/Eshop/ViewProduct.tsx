//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import {
  AppButton,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import {Rating} from 'react-native-ratings';
import EshopHeader from '../../Component/Header/EshopHeader';
import {FONTS} from '../../Constants/Fonts';
import {CartData, SingleProData, WishListData} from '../../Models/E_shopModel';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {addCart} from '../../redux/reducer/Cart';
import {RootState, useAppDispatch} from '../../redux/store';
import E_shopService from '../../Services/E_shopServices';
import NavigationService from '../../Services/NavigationService';
import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Constants/Colors';
import DynamicLinkService from '../../Services/DynamikLinkService';
import Share from 'react-native-share';

type Props = StackScreenProps<AppStackModel, 'ViewProduct'>;
const {height, width} = Dimensions.get('window');
// create a component
const ViewProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const {ProductId, remoteUserId} = props.route.params;
  const [proDetails, setProDetails] = useState<SingleProData | null>(null);
  const {cartData} = useSelector((state: RootState) => state.Cart);
  const {userData} = useSelector((state: RootState) => state.User);
  const colors = useTheme();
  const [sizeData, setSizeData] = useState<string>('M');
  const [wishList, setWish] = useState<boolean>(false);

  const [chooseColor, setColor] = useState<string>('red');
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    getSingleProductDetails();
    // console.log('avc', props.route.params.ProductId);
  }, []);

  const getSingleProductDetails = () => {
    E_shopService.getSingleProduct(ProductId)
      .then(res => {
        console.log('singlePro>>>', res.data);
        setProDetails(res.data);
      })
      .catch(err => console.log('err', err));
  };

  let data = cartData.find(it => it.productId == ProductId);

  // console.log('cartDataaaa', cartData, ProductId);
  const addToCart = () => {
    if(remoteUserId && userData?._id != remoteUserId){
    let data: CartData = {
      product_id: ProductId,
      qty: String(counter),
      color: chooseColor,
      size: sizeData,
      referUserId:remoteUserId
    };
    E_shopService.addToCart(data).then(res => {
      console.log('cart>>>>', res);
      dispatch(addCart(res.data));
      Toast.show('Added Succesfully...', Toast.SHORT);
      // NavigationService.back()
    });
  }else{
    let data: CartData = {
      product_id: ProductId,
      qty: String(counter),
      color: chooseColor,
      size: sizeData,
    };
    E_shopService.addToCart(data).then(res => {
      console.log('cart>>>>', res);
      dispatch(addCart(res.data));
      Toast.show('Added Succesfully...', Toast.SHORT);
      // NavigationService.back()
    });
  }
  };

  const addToWishList = () => {
    let data: WishListData = {
      ProductId: ProductId,
    };
    E_shopService.addToWishList(data).then(res => {
      console.log('WishLisjsdjk', res);
      setWish(res.status);
      Toast.show('Added To Wishlist', Toast.SHORT);
    });
  };

  const onShare = async () => {
    let link = `https://blackbiz.app/product/${ProductId}/${userData?._id}`;

    let newLink = await DynamicLinkService.buildLink(link);
    // console.log("newLink", newLink.shortLink)
    const Options = {
      message: 'To order this product click in the link below :-',
      url: newLink.shortLink,
    };
    Share.open(Options)
      .then(res => {
        console.log(res);
        Toast.showWithGravity('Shared Successfully', Toast.SHORT, Toast.BOTTOM);
      })
      .catch(err => {
        err && console.log(err);
        Toast.showWithGravity('Failed', Toast.SHORT, Toast.BOTTOM);
      });
  };

  return (
    <Container>
      <EshopHeader title="View Product" />

      {/* <ScrollView> */}

      <View
        style={{
          flex: 1,
        }}>
        {proDetails?.img.map(item => {
          return (
            <View>
              <Image
                source={{uri: item.preview}}
                resizeMode="cover"
                style={{
                  height: height / 2 + 50,
                }}
              />
              
              <Pressable
                style={{
                  position: 'absolute',
                  //  alignSelf:'center',
                  top: 20,
                  right: 15,
                  backgroundColor: '#000',
                  height: 35,
                  width: 35,
                  justifyContent: 'center',
                  borderRadius: 19,
                }}
                onPress={() => {
                  onShare();
                }}>
                <Icon
                  name={'sharealt'}
                  type="AntDesign"
                  style={{
                    fontSize: 21,
                    color: 'white',
                    paddingHorizontal: 5,
                    alignSelf: 'center',
                  }}
                />
              </Pressable>
            </View>
          );
        })}

        {/* <ScrollView
                contentContainerStyle={false}
                > */}
        <View style={styles.main}>
          <ScrollView>
            <View
              style={{
                marginTop: 20,
                marginHorizontal: 20,
              }}>
                {
                  console.log("trtrtrtrrtrt",remoteUserId)
                }
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.primaryFontColor,
                    fontFamily: FONTS.medium,
                    fontSize: 18,
                  }}>
                  {proDetails?.name}
                </Text>
                <Pressable
                  onPress={() => addToWishList()}
                  disabled={
                    proDetails?.wishlistCount == 1 || wishList ? true : false
                  }>
                  <Icon
                    name="heart"
                    type="AntDesign"
                    size={25}
                    style={{
                      color:
                        proDetails?.wishlistCount == 1 || wishList
                          ? 'red'
                          : 'white',
                    }}
                  />
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Rating
                      showRating={false}
                      ratingTextColor="#fff"
                      imageSize={22}
                      // showRating={false}
                      tintColor="#000"
                      readonly={true}
                      startingValue={proDetails?.avgRating}
                    />
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        color: colors.primaryFontColor,
                        fontSize: 14,
                        marginLeft: 15,
                      }}>
                      {proDetails?.avgRating.toFixed(1)}
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: colors.primaryFontColor,
                    fontFamily: FONTS.medium,
                    fontSize: 25,
                  }}>
                  {proDetails?.sell_price}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                      }}>
                      Size :
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    {proDetails?.size.map((item, index) => {
                      return (
                        <Pressable onPress={() => setSizeData(item)}>
                          <View
                            key={index}
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: 12,
                              backgroundColor:
                                item == sizeData
                                  ? colors.primaryThemeColor
                                  : '#F6F6F7',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexDirection: 'row',
                              marginRight: 5,
                            }}>
                            <Text
                              style={{
                                color: colors.pageBackgroundColor,
                                fontFamily: FONTS.semibold,
                                fontSize: 10,
                              }}>
                              {item}
                            </Text>
                          </View>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                      }}>
                      Choose a color :
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    {proDetails?.color.map((item, index) => {
                      console.log('>>>>asfa..', item);
                      return (
                        <Pressable
                          key={index}
                          style={{
                            height: 30,
                            width: 30,
                            borderWidth: item == chooseColor ? 2 : 0,
                            borderColor: 'white',
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 5,
                          }}
                          onPress={() => setColor(item)}>
                          <View
                            style={{
                              height: 27,
                              width: 27,
                              borderRadius: 15,
                              backgroundColor: item,
                            }}
                          />
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                      }}>
                      Select Quantity :
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Pressable
                      style={{
                        backgroundColor: '#F6F6F7',
                        height: 30,
                        width: 30,
                        borderRadius: 13,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 5,
                      }}
                      onPress={() =>
                        counter > 1 ? setCounter(s => s - 1) : null
                      }>
                      <Icon
                        name="minus"
                        type="Entypo"
                        color={colors.pageBackgroundColor}
                      />
                    </Pressable>

                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: '#F6F6F7',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 5,
                      }}>
                      <Text
                        style={{
                          color: colors.pageBackgroundColor,
                          fontFamily: FONTS.medium,
                          fontSize: 12,
                        }}>
                        {counter}
                      </Text>
                    </View>

                    <Pressable
                      style={{
                        backgroundColor: '#F6F6F7',
                        height: 30,
                        width: 30,
                        borderRadius: 13,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      }}
                      onPress={() => setCounter(s => s + 1)}>
                      <Icon
                        name="plus"
                        type="Entypo"
                        color={colors.pageBackgroundColor}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    color: colors.primaryFontColor,
                    fontFamily: FONTS.regular,
                    fontSize: 12,
                  }}>
                  Description :
                </Text>

                <Text
                  style={{
                    color: colors.primaryFontColor,
                    fontFamily: FONTS.regular,
                    fontSize: 12,
                  }}>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer maximus accumsan erat id facilisis. Duis aute irure
                  dolor in reprehenderit in voluptate velit. */}
                  {proDetails?.desc}
                </Text>
              </View>

              {/* <AppButton
                title="Buy Now"
                textStyle={{
                  fontFamily: FONTS.medium,
                  fontSize: 15,
                  color: colors.pageBackgroundColor,
                }}
                style={{
                  marginHorizontal: 0,
                  marginVertical: 10,
                  borderRadius: 30,
                }}
                onPress={() => NavigationService.navigate('Payment')}
              /> */}
              {/* {proDetails?.cartCount ==1 ? null : */}
              <AppButton
                title={data?._id ? 'Go to cart' : 'Add to Cart'}
                textStyle={{
                  fontFamily: FONTS.bold,
                  fontSize: 15,
                  color: data?._id ? 'black' : colors.primaryFontColor,
                  // textAlign:'center'
                }}
                style={{
                  marginHorizontal: 0,
                  marginVertical: 10,
                  borderRadius: 30,
                  backgroundColor: data?._id
                    ? COLORS.primaryThemeColor
                    : 'transparent',
                  borderWidth: 1,
                  borderColor: colors.primaryFontColor,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                // disabled={data?._id ? true : false}
                onPress={() => {
                  data?._id ? props.navigation.navigate('MyCart') : addToCart();
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  main: {
    // marginTop: 10,
    // marginHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#0E0702',
    height: height / 2,
    width: width,
  },
});

//make this component available to the app
export default ViewProduct;
