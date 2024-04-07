//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import {
  AppButton,
  AppTextInput,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import EshopHeader from '../../Component/Header/EshopHeader';
import {FONTS} from '../../Constants/Fonts';
import Modal from 'react-native-modal';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../../Services/NavigationService';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {CheckOutData} from '../../Models/E_shopModel';
import E_shopService from '../../Services/E_shopServices';
import { clearCart } from '../../redux/reducer/Cart';
import Toast from 'react-native-simple-toast';

const {height, width} = Dimensions.get('window');
type Props = StackScreenProps<AppStackModel, 'Payment'>;
// create a component
const Payment = (props: Props) => {
  const {cartData} = useSelector((state: RootState) => state.Cart);
  const colors = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalForSuccess, setModalForSuccess] = useState(false);
  const {addressData, total,discount,coupon} = props.route.params;

  const dispatch = useAppDispatch()

  // const toggleSuccessModal = () => {
  //     setModalForSuccess(!modalForSuccess)
  // }

  // const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  // };

  // const CartData = {productId:cartData.}
  const BuyNow = () => {
    if(discount && coupon){
      let data: CheckOutData = {
        name: addressData.name,
        mobile: addressData.mobile,
        altmobile: addressData.altmobile,
        address: addressData.address,
        landmark: addressData.landmark,
        pin: addressData.pin,
        orderNote: 'Order Successfull',
        total: total,
        couponId:coupon,
        discountPrice:discount,
        paymentType: 'Cash On Delivery',
        cartData: cartData.map((res)=>{
          return{...res,cartId:res._id}
        })
      };
      E_shopService.checkOut(data)
          .then((res)=>{
              console.log('responsesgdfhdh>>>',res)
            Toast.showWithGravity('Order Placed...', Toast.SHORT, Toast.BOTTOM);
              dispatch(clearCart({}))
              props.navigation.replace('OrderSuccessFull')
          })
    }else{
      let data: CheckOutData = {
        name: addressData.name,
        mobile: addressData.mobile,
        altmobile: addressData.altmobile,
        address: addressData.address,
        landmark: addressData.landmark,
        pin: addressData.pin,
        orderNote: 'Order Successfull',
        total: total,
        paymentType: 'Cash On Delivery',
        cartData: cartData.map((res)=>{
          return{...res,cartId:res._id}
        })
      };
      E_shopService.checkOut(data)
          .then((res)=>{
              console.log('responsesgdfhdh>>>',res)
            Toast.showWithGravity('Order Placed...', Toast.SHORT, Toast.BOTTOM);
              dispatch(clearCart({}))
              props.navigation.replace('OrderSuccessFull')
          })
    }
   
  };

  return (
    <Container>
      <EshopHeader title="Payment" />
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.regular,
                fontSize: 12,
              }}>
              Shipping Address
            </Text>

            {/* <Text
                            style={{
                                color: colors.primaryFontColor,
                                fontFamily: FONTS.regular,
                                fontSize: 12
                            }}
                        >Edit</Text> */}
          </View>

          <Image
            source={require('../../Assets/images/businessLine.png')}
            style={{
              width: '100%',
              marginTop: 15,
            }}
          />

          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                color: colors.primaryFontColor,
                fontSize: 16,
              }}>
              {addressData.name}
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                color: colors.primaryFontColor,
                fontSize: 12,
                marginTop: 10,
              }}>
              {addressData.address}
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                color: colors.primaryFontColor,
                fontSize: 12,
                marginTop: 5,
              }}>
              {addressData.landmark}
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                color: colors.primaryFontColor,
                fontSize: 12,
                marginTop: 5,
              }}>
              {addressData.pin}
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                color: colors.primaryFontColor,
                fontSize: 12,
                marginTop: 5,
              }}>
              {addressData.mobile}
            </Text>
          </View>

          <Image
            source={require('../../Assets/images/businessLine.png')}
            style={{
              width: '100%',
              marginTop: 15,
            }}
          />

          {cartData.map(item => {
            return (
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {item.productImg.map(res => {
                  console.log('.>>>>>>>>......', res);
                  return (
                    <View
                      style={{
                        width: '20%',
                      }}>
                      <Image
                        source={{uri: res.preview}}
                        style={{
                          height: 57,
                          width: 57,
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  );
                })}

                <View
                  style={{
                    // marginLeft: 10,
                    paddingHorizontal: 10,
                    width: '80%',
                  }}>
                  <Text
                    style={{
                      color: colors.primaryFontColor,
                      fontFamily: FONTS.medium,
                      fontSize: 14,
                    }}>
                    {item.productName}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                        marginRight: 10,
                      }}>
                      Color : {item.color}
                    </Text>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                        marginRight: 10,
                      }}>
                      |
                    </Text>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                      }}>
                      Size : {item.size}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 14,
                      }}>
                      ${item.sellPrice}
                    </Text>

                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontFamily: FONTS.regular,
                        fontSize: 14,
                      }}>
                      x{item.qty}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}

          <Image
            source={require('../../Assets/images/businessLine.png')}
            style={{
              width: '100%',
              marginTop: 15,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}>
              Delivery Service
            </Text>

            {/* <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}>
              Edit
            </Text> */}
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}>
              Express Delivery
            </Text>

            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}>
              $2
            </Text>
          </View> */}

          {/* <View
            style={{
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}>
              Add Description
            </Text>

            <AppTextInput
              multiline={true}
              style={{
                height: 84,
                fontFamily: FONTS.medium,
              }}
              mainContainerStyle={{
                marginTop: 10,
              }}
            />
          </View> */}

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}>
              Payment Method
            </Text>

            <View
              style={{
                flex: 1,
              }}
            />

            <Icon
              name="wallet"
              type="AntDesign"
              style={{
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              Cash On Delivery
            </Text>

            {/* <Icon
              name="rightcircle"
              type="AntDesign"
              color={colors.primaryFontColor}
              style={{
                marginRight: 10,
              }}
            /> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              Subtotals for products
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              ${total}
            </Text>
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              Subtotals for shipping
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              $2
            </Text>
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              Total Payment
            </Text>

            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              ${total}
            </Text>
          </View>
          <Image
            source={require('../../Assets/images/businessLine.png')}
            style={{
              width: '100%',
              marginTop: 15,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 15,
            }}>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 18,
                color: colors.primaryFontColor,
                // marginRight: 10
              }}>
              Total
            </Text>

            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 18,
                color: colors.primaryFontColor,
                // marginRight: 10
              }}>
              ${total}
            </Text>
          </View>

          <AppButton
            title="Buy Now"
            textStyle={{
              color: colors.pageBackgroundColor,
              fontSize: 15,
              fontFamily: FONTS.semibold,
            }}
            style={{
              borderRadius: 30,
              marginHorizontal: 0,
              marginVertical: 20,
              flexDirection:'row',
            alignItems:'center',
            justifyContent:"center"
            }}
            onPress={() => BuyNow()}
          />

          <View
            style={{
              height: 30,
            }}
          />
        </View>
      </ScrollView>

      {/* ************Otp modal***************** */}
      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(!isModalVisible)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.view}
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        onBackButtonPress={() => setModalVisible(!isModalVisible)}>
        <View
          style={{
            height: height / 2.5,
            backgroundColor: colors.pageBackgroundColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: 15,
              color: colors.primaryFontColor,
              textAlign: 'center',
              marginTop: 15,
            }}>
            Enter the My Pay pin
          </Text>

          <View
            style={{
              marginHorizontal: 20,
            }}>
            <KeyboardAwareScrollView>
              <OTPInputView
                style={{
                  width: '100%',
                  height: 100,
                }}
                pinCount={4}
                secureTextEntry={true}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            </KeyboardAwareScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginRight: 10,
              }}>
              Forget pin?
            </Text>
          </View>

          <View
            style={{
              flex: 1,
            }}
          />

          <AppButton
            title="Pay Now"
            textStyle={{
              color: colors.pageBackgroundColor,
              fontSize: 15,
              fontFamily: FONTS.semibold,
            }}
            style={{
              borderRadius: 30,
              marginHorizontal: 0,
              marginBottom: 30,
            }}

            // onPress={toggleSuccessModal}
          />
        </View>
      </Modal>

      {/* ******************successmsg*********************** */}
      <Modal
        testID={'modal'}
        isVisible={modalForSuccess}
        onSwipeComplete={() => setModalForSuccess(!modalForSuccess)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.view}
        onBackdropPress={() => setModalForSuccess(!modalForSuccess)}
        onBackButtonPress={() => setModalForSuccess(!modalForSuccess)}>
        <View
          style={{
            height: height / 2.5,
            backgroundColor: colors.pageBackgroundColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../../Assets/images/success.png')}
              resizeMode="contain"
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
              }}
            />

            <Text
              style={{
                color: colors.secondaryFontColor,
                fontSize: 18,
                fontFamily: FONTS.medium,
                paddingVertical: 10,
              }}>
              SUCCESS
            </Text>

            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 12,
                fontFamily: FONTS.regular,
                paddingVertical: 10,
                textAlign: 'center',
                marginHorizontal: 20,
              }}>
              Thank you for purchasing. Your order will be shipped 2 - 4 working
              days.
            </Text>
          </View>

          <AppButton
            title="Continue Shopping"
            textStyle={{
              color: colors.pageBackgroundColor,
              fontSize: 15,
              fontFamily: FONTS.semibold,
            }}
            style={{
              borderRadius: 30,
              marginHorizontal: 20,
              marginBottom: 30,
              marginTop: 10,
            }}
            onPress={() => NavigationService.navigate('Eshop_Index')}
          />
        </View>
      </Modal>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

//make this component available to the app
export default Payment;
