//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import moment from 'moment';
import {FlatList} from 'native-base';
import colors from 'native-base/lib/typescript/theme/v33x-theme/base/colors';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {AppTextInput, Container, Icon} from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Rating } from 'react-native-ratings';
import EshopHeader from '../../Component/Header/EshopHeader';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {
  AddReviewData,
  CancelOrderData,
  OrderDetailsCheckOutData,
  OrderDetailsResponseData,
  OrderHistoryResponseData,
} from '../../Models/E_shopModel';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {moderateScale} from '../../PixelRatio';
import E_shopService from '../../Services/E_shopServices';
import Toast from 'react-native-simple-toast';

type Props = StackScreenProps<AppStackModel, 'OrderDetails'>;
// create a component
const OrderDetails = (props: Props) => {
  const [orderItem, setOrderItem] = useState(props.route.params.data);
  const [orderId, setOrderId] = useState(props.route.params.data.orderID);
  const [productId, setProductId] = useState(props.route.params.data.productId);
  const [allItem, setAllItem] = useState<OrderDetailsCheckOutData>();
  const [singleItem, setSingleItem] = useState<OrderDetailsResponseData>();

  const [initiate, setInitiate] = useState<Boolean>(false);
  const [process, setProcess] = useState<Boolean>(false);
  const [ship, setShip] = useState<Boolean>(false);
  const [deliver, setDeliver] = useState<Boolean>(false);
  const [loader, setLoader] = useState<Boolean>(true);
  const [disable, setDisable] = useState<Boolean>(true);

  const [cancleLoader, setCancelLoader] = useState<Boolean>(false);
  const [refress, setRefress] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const [comments, onChangeComments] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [starRating, setStarRating] = useState<number>(0);

  const Fldvalid = (txt: string): number => txt.replace(/\s/g, '').length;

  // const [loader, setLoader] = useState(true)
  const totalprice = allItem?.productData.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.price) * Number(currentValue.quantity),
    0,
  );
  useEffect(() => {
    getOrderDetails();
  }, []);

  const getOrderDetails = () => {
    E_shopService.orderDetails(orderId).then(res => {
      console.log('orderDetailssss', res.data);
      setAllItem(res.data);
      let data = res.data.productData.find(it => it.productId == productId);
      setSingleItem(res.data.productData.find(it => it.productId == productId));
      setStatus(data?.orderStatus ?? '');
      console.log('orderStatus', data?.orderStatus);
      // fetchStatus()
      setLoader(false);
      fetchStatus(data?.orderStatus);
    });
    // setRefress(!refress)
  };

  const cancelOrder = () => {
    setCancelLoader(true);
    let data: CancelOrderData = {
      orderID: orderId,
      price: Number(Number(singleItem?.price) * Number(singleItem?.quantity)),
    };
    E_shopService.cancelOrder(data, singleItem?._id ?? '')
      .then(res => {
        console.log('firstcancel', res);
        setStatus('cancel');
        getOrderDetails();
        setCancelLoader(false);
      })
      .catch(err => {
        console.log('cancrel', err);
        setCancelLoader(false);
      });
  };

  const ratingCompleted = (val: number) => {
    console.log('Rating is: ' + val);
    setRating(val);
  };

  const addReview = () => {
    if (Fldvalid(comments) === 0 || comments == '' || rating == 0) {
      Toast.show('Please Fill Out All Field', Toast.SHORT);
      return;
    }
    let data: AddReviewData = {
      ProductId: singleItem?._id ?? '',
      rating: rating,
      review: comments,
    };
    E_shopService.addRating(data)
      .then(res => {
        console.log('reviewstatus>>>', res);
        Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        setShow(false);
        setStarRating(rating)
        getOrderDetails()
      })
      .catch(err => console.log('err', err));
  };

  const fetchStatus = (orderstatus: string) => {
    // setStatus(val.orderStatus)
    // setStatus(singleItem?.orderStatus)
    console.log('ertdkddp', orderstatus);
    if (orderstatus == 'Initiated') {
      setInitiate(true);
      setProcess(false);
      setShip(false);
      setDeliver(false);
    } else if (orderstatus == 'Processing') {
      setInitiate(true);
      setProcess(true);
      setShip(false);
      setDeliver(false);
    } else if (orderstatus == 'Shipping') {
      setInitiate(true);
      setProcess(true);
      setShip(true);
      setDeliver(false);
    } else if (orderstatus == 'Delivered') {
      setInitiate(true);
      setProcess(true);
      setShip(true);
      setDeliver(true);
    }
  };
  return (
    <Container>
      <EshopHeader title="Order Details" />
      <Image
        source={require('../../Assets/images/businessLine.png')}
        style={{
          width: '100%',
          marginTop: 5,
        }}
      />

      {loader ? (
        <ActivityIndicator
          color={'#fff'}
          size="large"
          style={{
            marginLeft: 5,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              {/* {console.log('dsfajhiewrwer>>>>', status)} */}
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.Bold,
                  fontSize: moderateScale(13),
                  //   paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                Order No:{' '}
                <Text style={{color: COLORS.primaryThemeColor}}>
                  {singleItem?.orderID}
                </Text>
              </Text>
              <Text
                style={{
                  color: '#ffdde1',
                  fontFamily: FONTS.Bold,
                  fontSize: moderateScale(10),
                  //   paddingHorizontal: 10,
                  paddingVertical: 10,
                  fontWeight: 'bold',
                }}>
                {moment(allItem?.createdOn).format('DD-MM-YYYY')}
              </Text>
            </View>
            {status == 'cancelled' ? null : (
              <>
                <View
                  style={{
                    borderTopLeftRadius: 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 15,
                    marginBottom: 5,
                  }}>
                  <View
                    style={{
                      width: moderateScale(26),
                      height: moderateScale(26),
                      borderRadius: moderateScale(13),
                      // borderWidth:1,
                      borderColor: COLORS.white,
                      backgroundColor: initiate ? 'green' : '#F4F4F4',

                      alignItems: 'center',
                      elevation: 1,
                    }}>
                    <Icon
                      name="check"
                      type="Feather"
                      style={{
                        color: initiate ? 'white' : '#00A912',

                        fontSize: 19,

                        marginTop: moderateScale(4),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      width: moderateScale(66),
                      borderColor: COLORS.gray11,
                      backgroundColor: initiate ? 'green' : COLORS.gray11,

                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}></View>
                  <View
                    style={{
                      width: moderateScale(26),
                      height: moderateScale(26),
                      borderRadius: moderateScale(13),
                      // borderWidth:1,
                      // borderColor:COLORS.IconColor,
                      backgroundColor: process ? 'green' : '#F4F4F4',

                      alignItems: 'center',
                      elevation: 1,
                    }}>
                    <Icon
                      name="check"
                      type="Feather"
                      style={{
                        color: process ? 'white' : '#00A912',

                        marginTop: moderateScale(4),
                        fontSize: 19,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      width: moderateScale(66),
                      borderColor: COLORS.gray11,
                      backgroundColor: process ? 'green' : COLORS.gray11,

                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}></View>
                  <View
                    style={{
                      width: moderateScale(26),
                      height: moderateScale(26),
                      borderRadius: moderateScale(13),
                      // borderWidth:1,
                      // borderColor:COLORS.IconColor,
                      backgroundColor: ship ? 'green' : '#F4F4F4',

                      alignItems: 'center',
                      elevation: 1,
                    }}>
                    <Icon
                      name="check"
                      type="Feather"
                      style={{
                        color: ship ? 'white' : '#00A912',

                        marginTop: moderateScale(4),
                        fontSize: 19,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      width: moderateScale(66),
                      borderColor: COLORS.gray11,
                      backgroundColor: ship ? 'green' : COLORS.gray11,

                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}></View>

                  <View
                    style={{
                      width: moderateScale(26),
                      height: moderateScale(26),
                      borderRadius: moderateScale(13),
                      // borderWidth:1,
                      // borderColor:COLORS.IconColor,
                      backgroundColor: deliver ? 'green' : '#F4F4F4',

                      alignItems: 'center',
                      elevation: 1,
                    }}>
                    <Icon
                      name="check"
                      type="Feather"
                      style={{
                        color: deliver ? 'white' : '#00A912',

                        marginTop: moderateScale(4),
                        fontSize: 19,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      color: '#ffdde1',
                      fontSize: 12,
                    }}>
                    Initiated
                  </Text>
                  <Text
                    style={{
                      color: '#ffdde1',
                      fontSize: 12,
                    }}>
                    Processing
                  </Text>
                  <Text
                    style={{
                      color: '#ffdde1',
                      fontSize: 12,
                    }}>
                    Shipped
                  </Text>
                  <Text
                    style={{
                      color: '#ffdde1',
                      fontSize: 12,
                    }}>
                    Delivered
                  </Text>
                </View>
              </>
            )}
            <Text style={styles.headingText}>Product</Text>

            <View
              style={{
                flexDirection: 'row',
                width: '95%',
                alignSelf: 'center',
                padding: 8,
                backgroundColor: 'grey',
                borderRadius: 5,
                elevation: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                // marginBottom:10
              }}
              // key={index}
            >
              <View
                style={{
                  padding: 10,
                }}>
                <Image
                  source={{uri: singleItem?.productImg[0].preview}}
                  style={{
                    height: moderateScale(90),
                    width: moderateScale(90),
                    borderRadius: 5,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={{paddingHorizontal: 10, paddingVertical: 8}}>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 15,
                    width: moderateScale(220),
                    fontFamily: FONTS.Bold,
                    fontWeight: 'bold',
                  }}
                  numberOfLines={2}>
                  {singleItem?.productName}
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 13,
                    paddingTop: 5,
                    fontWeight: 'bold',

                    // fontFamily: Font.Bold
                  }}>
                  Quantity : {singleItem?.quantity}
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 14,
                    paddingTop: 10,
                    fontFamily: FONTS.Bold,
                    fontWeight: 'bold',
                  }}>
                  $ {Number(singleItem?.price) * Number(singleItem?.quantity)}
                </Text>
                {status == 'Delivered' ? 
                <Pressable
                  style={{
                    flexDirection: 'row',
                    marginTop: 7,
                  }}
                  onPress={()=>{
                    setShow(true)
                  }}
                  disabled={singleItem?.isAttempt ? true : false}
                  >
                 <Rating
                  type="star"
                  ratingTextColor="black"
                  ratingColor="red"
                  imageSize={20}
                  // showRating={true}
                  style={{
                    marginTop: 3,
                    width: '37%',
                    alignSelf: 'center',
                    borderWidth: 0,
                    borderColor:'yellow'
                  }}
                  tintColor="grey"
                  ratingCount={5}
                  startingValue={singleItem?.selfRated ? singleItem.selfRated.rating : 0 }
                  readonly={true}
                  // fractions={true}
                  onFinishRating={(rating: number) => {
                    ratingCompleted(rating);
                  }}
                />
                </Pressable>
                : null
}
              </View>
            </View>
            <Image
              source={require('../../Assets/images/businessLine.png')}
              style={{
                width: '100%',
                marginTop: 15,
              }}
            />

            <Text style={styles.headingText}>Payment Details</Text>

            <View
              style={{
                // height:300,
                width: '95%',
                alignSelf: 'center',
                padding: 8,
                // borderWidth: 1,
                // borderColor: COLORS.boxBorderColor,
                backgroundColor: '#fff',
                elevation: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: 5,
                marginTop: 10,
              }}>
              {/* <View style={styles.textView}>
            <Text style={styles.headingOne}>Items ({orderItems.cartData[0].qty})</Text>
            <Text style={styles.headingTwo}>$ {orderItems.cartData[0].price}</Text>
          </View> */}

              <View style={styles.textView}>
                <View
                  style={{
                    width: '57%',
                  }}>
                  <Text style={styles.headingOne}>
                    Items ({allItem?.productData.length})
                  </Text>
                </View>

                <Text style={styles.headingTwo}>
                  $ {totalprice}
                  {/* {Number(fullData?.total).toFixed(2)} */}
                </Text>
              </View>
              {allItem?.discountPrice ? (
                <View style={styles.textView}>
                  <Text style={styles.headingOne}>Discount</Text>
                  <Text style={{...styles.headingTwo, color: 'red'}}>
                    - $ {allItem?.discountPrice}
                  </Text>
                </View>
              ) : null}
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Shipping</Text>
                <Text style={styles.headingTwo}>
                  {/* ${fullData?.shippingCharges?.charge ?? 0} */} $ 0
                </Text>
              </View>
              {/* <View style={styles.textView}>
            <Text style={styles.headingOne}>Import Charges</Text>
            <Text style={styles.headingTwo}>$0</Text>
          </View> */}
              <View style={styles.textView}>
                <Text style={[styles.headingOne, {fontFamily: FONTS.Bold}]}>
                  Donate to Charity
                </Text>
                <Text style={styles.headingTwo}>
                  $ 0
                  {/* {fullData?.donateToCharity == '' ? 0 : fullData?.donateToCharity} */}
                </Text>
              </View>
              <View
                style={{
                  ...styles.textView,
                  borderTopWidth: 1,
                  borderColor: COLORS.black,
                  borderStyle: 'dashed',
                  marginVertical: 5,
                }}>
                <Text
                  style={{
                    ...styles.headingTotal,
                    fontFamily: FONTS.Bold,
                    color: '#323232',
                    fontWeight: 'bold',
                  }}>
                  Total Price
                </Text>
                <Text
                  style={{
                    ...styles.headingTotal,
                    color: 'orange',
                    fontWeight: 'bold',
                  }}>
                  $ {allItem?.total}
                  {/* {Number(Number(totalprice) + Number(allItem?.donateToCharity ?? 0) + Number(fullData?.shippingCharges?.charge ?? 0) - Number(fullData.discount)).toFixed(2)} */}
                </Text>
              </View>
            </View>
            {allItem?.productData.length > 1 ? (
              <>
                <Image
                  source={require('../../Assets/images/businessLine.png')}
                  style={{
                    width: '100%',
                    marginTop: 15,
                  }}
                />

                <View
                  style={{
                    height: 40,
                    justifyContent: 'center',
                    // marginHorizontal: 10,
                    marginBottom: 10,
                    // borderBottomWidth: 1,
                    borderBottomColor: '#ffc3a0',
                  }}>
                  <Text style={styles.headingText}>
                    Other items in this order
                  </Text>
                </View>
              </>
            ) : null}
            {allItem?.productData
              .filter(it => it.productId != productId)
              .map((item, ind) => {
                return (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        // height: 140,
                        width: '95%',
                        alignSelf: 'center',
                        padding: 8,
                        // borderWidth: 2,
                        // borderColor: COLORS.boxBorderColor,
                        backgroundColor: 'grey',
                        borderRadius: 5,
                        elevation: 4,
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                      // key={index}
                    >
                      <View
                        style={{
                          padding: 10,
                        }}>
                        <Image
                          source={{uri: item.productImg[0].preview}}
                          style={{
                            height: moderateScale(90),
                            width: moderateScale(90),
                            borderRadius: 5,
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <View style={{paddingHorizontal: 10, paddingVertical: 8}}>
                        <Text
                          style={{
                            color: COLORS.black,
                            fontSize: 15,
                            width: moderateScale(220),
                            fontFamily: FONTS.Bold,
                            fontWeight: 'bold',
                          }}
                          numberOfLines={2}>
                          {item.productName}
                        </Text>
                        <Text
                          style={{
                            color: COLORS.black,
                            fontSize: 13,
                            paddingTop: 5,
                            fontWeight: 'bold',

                            // fontFamily: Font.Bold
                          }}>
                          No of products : {item.quantity}
                        </Text>
                        <Text
                          style={{
                            color: COLORS.black,
                            fontSize: 14,
                            paddingTop: 10,
                            fontFamily: FONTS.Bold,
                            fontWeight: 'bold',
                          }}>
                          $ {Number(item.price) * Number(item.quantity)}
                        </Text>
                      
                      </View>
                    </View>
                  </>
                );
              })}
            <Image
              source={require('../../Assets/images/businessLine.png')}
              style={{
                width: '100%',
                marginTop: 15,
              }}
            />
            <Text style={styles.headingText}>Shipping Address</Text>

            <View
              style={{
                width: '95%',
                alignSelf: 'center',
                padding: 8,
                borderWidth: 0,
                borderRightColor: COLORS.white,
                borderLeftColor: COLORS.white,

                backgroundColor: '#fff',
                borderRadius: 5,
                marginTop: 10,
                elevation: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                marginBottom: 5,
              }}>
              {/* {orderItems.shippingDate ?
                <> */}
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Shipping Date</Text>
                <Text style={styles.headingTwo}>
                  {moment(allItem?.createdOn).calendar()}
                </Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Status</Text>
                <Text style={styles.headingTwo}>{singleItem?.orderStatus}</Text>
              </View>
              {/* </> : null
              } */}
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Phone Number</Text>
                <Text style={styles.headingTwo}>{allItem?.mobile}</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.headingOne}>Alternative Number</Text>
                <Text style={styles.headingTwo}>{allItem?.mobile}</Text>
              </View>
              <View style={[styles.textView, {flexDirection: 'row'}]}>
                <Text style={styles.headingOne}>Address</Text>
                <Text style={styles.headingTwo} numberOfLines={3}>
                  {allItem?.address}
                </Text>
              </View>
              {/* <View style={[styles.textView]}>
            <Text style={styles.headingOne}>Landmark</Text>
            <Text style={styles.headingTwo} numberOfLines={3}>
              {orderItems.landmark}
            </Text>
          </View> */}
              <View style={[styles.textView]}>
                <Text style={styles.headingOne}>Pin Code</Text>
                <Text style={styles.headingTwo} numberOfLines={3}>
                  {allItem?.pin}
                </Text>
              </View>
            </View>
          </ScrollView>
          <Image
            source={require('../../Assets/images/businessLine.png')}
            style={{
              width: '100%',
              marginTop: 5,
            }}
          />
          <View
            style={{
              backgroundColor: 'black',
              // flex:1
            }}>
            <View
              style={{
                marginLeft: 16,
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: COLORS.primaryThemeColor,
                  fontFamily: FONTS.Bold,
                }}>
                Need Help?
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                // height:50,
                alignItems: 'center',
              }}>
              {status == 'return' ||
              status == 'Shipping' ||
              status == 'Delivered' ? null : (
                <Pressable
                  style={[
                    styles.buttonstyle,
                    {
                      width:
                        status == 'cancelled'
                          ? '80%'
                          : status == 'Delivered'
                          ? '42%'
                          : '75%',
                      backgroundColor:
                        status == 'cancelled' ? 'red' : COLORS.buttonColor,
                    },
                  ]}
                  disabled={status == 'cancelled'}
                  onPress={() => {
                    cancelOrder();
                  }}>
                  {status == 'cancelled' ? (
                    <Text
                      style={{
                        fontFamily: FONTS.Bold,
                        color: '#fff',
                        fontSize: 20,
                        // fontWeight:'500'
                      }}>
                      Cancelled
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontFamily: FONTS.Bold,
                        color: '#fff',
                        // fontWeight:'500'
                      }}>
                      Cancel Order
                    </Text>
                  )}
                  {cancleLoader ? (
                    <ActivityIndicator
                      color={'#fff'}
                      style={{
                        marginLeft: 5,
                      }}
                    />
                  ) : null}
                </Pressable>
              )}
            </View>
          </View>
        </>
      )}
      <Modal
        transparent={true}
        visible={show}
        animationType="slide"
        onRequestClose={() => setShow(false)}>
        <View
          style={{
            flex: 1,
          }}>
          <Pressable
            style={{
              flex: 2.6,
              backgroundColor: '#000000ab',
            }}
            onPress={() => {
              setShow(false);
              onChangeComments('');
            }}></Pressable>
          <Pressable
            style={{
              flex: 1.4,
              backgroundColor: 'black',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal:10,
                // marginVertical:5,
                backgroundColor: '#eacda3',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'black',
                  marginVertical: 5,
                  marginHorizontal: 5,
                }}>
                Review
              </Text>
              <Pressable
                style={{
                  marginTop: 5,
                  marginHorizontal: 5,
                }}
                onPress={() => {
                  setShow(false);
                  onChangeComments('');
                }}>
                <Icon
                  name="squared-cross"
                  type="Entypo"
                  size={25}
                  color="black"
                />
              </Pressable>
            </Pressable>
            <KeyboardAwareScrollView>
              <View>
                <Rating
                  type="star"
                  ratingTextColor="white"
                  // ratingColor="red"
                  imageSize={50}
                  showRating={true}
                  style={{
                    marginTop: 5,
                    width: '80%',
                    alignSelf: 'center',
                    borderWidth: 0,
                  }}
                  tintColor="#000"
                  ratingCount={5}
                  startingValue={0}
                  // fractions={true}
                  onFinishRating={(rating: number) => {
                    ratingCompleted(rating);
                  }}
                />

                <View
                  style={{
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}>
                  <AppTextInput
                    placeholder="Give your review ..."
                    value={comments}
                    onChangeText={(value: string) => onChangeComments(value)}
                    style={{
                      color: COLORS.white,
                      marginLeft: moderateScale(10),
                      padding: moderateScale(2),
                      width: '90%',
                      height: 65,
                    }}
                    // maxLength={10}
                    placeholderTextColor={COLORS.gray11}
                    numberOfLines={3}
                  />
                </View>

                <Pressable
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: '#ffb88c',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    borderRadius: 10,
                    elevation: 4,
                    shadowColor: 'white',
                  }}
                  onPress={() => {
                    addReview();
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontFamily: FONTS.georgia,
                      fontWeight: '700',
                      textShadowColor: 'white',
                    }}>
                    Submit
                  </Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
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
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  headingTotal: {
    fontFamily: FONTS.Bold,
    fontSize: 15,
    color: COLORS.black,
  },
  headingTwo: {
    fontSize: 13,
    color: '#525252',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  headingText: {
    color: COLORS.primaryThemeColor,
    fontFamily: FONTS.Bold,
    fontSize: 18,
    // textDecorationLine: 'underline',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  buttonstyle: {
    height: moderateScale(40),
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.buttonColor,
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  buttonstyleR: {
    height: moderateScale(40),
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#7b4397',
    marginVertical: 10,
  },
});

//make this component available to the app
export default OrderDetails;
