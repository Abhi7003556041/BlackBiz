//import liraries
import moment from 'moment';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar as RNStatusbar,
  Image,
  Pressable,
  ImageBackground,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {AppBar, Container, Icon, StatusBar} from 'react-native-basic-elements';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale} from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import ScratchView from 'react-native-scratch';
import SwitchSelector from 'react-native-switch-selector';
import Toast from 'react-native-simple-toast';
import LoyaltyService from '../../Services/LoyaltyServices';
import {
  LoyaltyPointResponseData,
  RewardResponseData,
  ScratchCardResponseData,
  ScratchDoneData,
} from '../../Models/LoyaltyModal';

// create a component
const MyRewards = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showhide, setShowHide] = useState<number>(1);

  const explore = [
    {
      image: require('../../Assets/images/scratch.jpeg'),
      name: 'E- Shop',
      color: '#3b668baa',
    },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'Event',
      color: '#6ba066aa',
    },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'Podcast',
      color: '#3e424daa',
    },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'OTT',
      color: '#7b4c4caa',
    },
    // {
    //   image: require('../../Assets/images/health.png'),
    //   name: 'Health',
    //   color: '#625e98aa',
    // },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'Learning',
      color: '#5f8eb8aa',
    },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'Learning',
      color: '#5f8eb8aa',
    },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'Learning',
      color: '#5f8eb8aa',
    },
    {
      image: require('../../Assets/images/scratch.jpeg'),

      name: 'Learning',
      color: '#5f8eb8aa',
    },
  ];
  const [data, setData] = useState<ScratchCardResponseData>();
  const [loader, setLoader] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true);
  const [loyaltyPoint, setLoyaltyPont] = useState<LoyaltyPointResponseData>();
  const [allScratch, setAllScratch] = useState<Array<ScratchCardResponseData>>(
    [],
  );
  const [allRewards, setAllRewards] = useState<Array<RewardResponseData>>([]);

  useEffect(() => {
    getLoyaltyPoint();
    getAllScratch();
    getAllRewards();
  }, []);
  const getLoyaltyPoint = () => {
    LoyaltyService.getLoyaltyPoint().then(res => {
      console.log('point', res.data.points);
      setLoyaltyPont(res.data);
    });
  };

  const getAllScratch = () => {
    LoyaltyService.getAllScratchCard().then(res => {
      console.log('alllscratch', res.data);
      setAllScratch(res.data);
    });
  };

  const getAllRewards = () => {
    LoyaltyService.getRewards().then(res => {
      console.log('allRewards>>>>>', res.data);
      setAllRewards(res.data);
    });
  };

  const scratchComplete = () => {
    let data1: ScratchDoneData = {
      scrachCardId: data?._id ?? '',
      points: Number(data?.loyaltyPoint),
    };
    LoyaltyService.onScratchCmplt(data1).then(res => {
      console.log('complete', res);
      getLoyaltyPoint();
    });
  };
  const onScratchDone = () => {
    setLoader(true);
    setTimeout(() => {
      setVisible(false);
      scratchComplete();

      LoaderFunc();
    }, 2000);
  };
  const LoaderFunc = () => {
    setLoader(false);
    setLoad(true);
  };

  return (
    <Container>
      {/* <AppBar.Back
       title="Wallet"
       titleStyle={{
         fontFamily: FONTS.semibold,
         fontSize: 18,
       }}
       backgroundColor={'transparent'}
       titlePosition="left"
       onLeftIconPress={() => NavigationService.back()}
       style={{
         marginTop: RNStatusbar.currentHeight,
       }}
     /> */}
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor:'red',
            //    alignItems:'center',
            //    marginHorizontal:10
          }}>
          {/* <Text
           style={{
               color:'#F88379',
               fontSize:18,
               fontWeight:'600',
               marginTop:10
           }}
           >
               Your Balance :
           </Text>
           <Text
           style={{
               color:COLORS.primaryThemeColor,
               fontSize:25,
               fontWeight:'bold',
               marginTop:15,
               fontFamily: 'Lato-Light',
               // alignSelf:'center'
           }}
           >
               $ 8250.00 
           </Text> */}
          <Image
            source={require('../../Assets/images/rewardsGpay.jpg')}
            style={{
              // height: 252,
              borderRadius: 10,
              width: '100%',
            }}
            resizeMode="contain"
          />
          <View
            style={{
              position: 'absolute',
              top: 40,
              left: 5,
            }}>
            <Icon
              name="arrow-back"
              type="Ionicon"
              // size={250}
              style={{
                fontSize: moderateScale(23),
                color: COLORS.white,
              }}
            />
          </View>
          {/* <View
            style={{
                position:'absolute',
                top: '13%',
                left:33
                // alignSelf:'center',

            }}
            >
            <Text
           style={{
               color:'#fff',
               fontSize:20,
               fontWeight:'600',
               marginTop:10
           }}
           >
               Rewards 
           </Text>
            </View> */}

          <View
            style={{
              position: 'absolute',
              top: '25%',
              right: '44%',
              // alignItems:'center'
              alignSelf: 'center',
            }}>
            {loyaltyPoint?.points ? (
              <Text
                style={{
                  color: COLORS.primaryThemeColor,
                  fontSize: 48,
                  fontWeight: '600',
                  marginTop: 10,
                  alignSelf: 'center',
                }}>
                {loyaltyPoint?.points}
              </Text>
            ) : (
              <>
                <Text
                  style={[
                    styles.boldtext,
                    {
                      fontSize: moderateScale(50),
                      color: COLORS.primaryThemeColor,

                      // marginTop:5
                    },
                  ]}>
                  0
                </Text>
              </>
            )}
          </View>

          <View
            style={{
              position: 'absolute',
              top: '60%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#F2D2BD',
                fontSize: 17,
                fontWeight: '600',
                // marginTop: 10,
              }}>
              Total Loyalty Point
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.dark11,
            // alignItems:'center',
            // justifyContent:'center',
            flex: 2.6,
            marginHorizontal: 10,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}>
          <View
            style={{
              width: '95%',
              height: 39,
              backgroundColor: COLORS.rgba,
              alignSelf: 'center',
              marginVertical: 10,
              borderRadius: 8,
              // alignItems:'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderWidth: 0.5,
              borderColor: 'grey',
            }}>
            <Text
              style={{
                color: '#FFF5EE',
                fontSize: 14,
                //   fontWeight: '600',
                //    marginTop:15,
                marginHorizontal: 13,
                alignSelf: 'center',
              }}>
              Upcoming rewards on your path
            </Text>

            <Icon
              name="navigate-next"
              type="MaterialIcon"
              style={{
                fontSize: moderateScale(20),
                color: COLORS.white,
                alignSelf: 'center',
                marginRight: 5,
              }}
            />
          </View>
          <View
            style={
              {
                // width:'95%',
                // marginHorizontal:10
              }
            }>
            <SwitchSelector
              initial={0}
              onPress={(value: React.SetStateAction<number>) =>
                setShowHide(value)
              }
              textColor={'#616161'}
              //selectedColor={colors.primaryThemeColor}
              buttonColor={'transparent'}
              backgroundColor={'transparent'}
              textStyle={{
                fontFamily: FONTS.medium,
              }}
              selectedTextStyle={{
                borderBottomWidth: 3,
                borderBottomColor: COLORS.primaryThemeColor,
                color: COLORS.primaryThemeColor,
                width: 170,
                paddingBottom: 8,
                fontFamily: FONTS.medium,
              }}
              textContainerStyle={{
                borderBottomWidth: 3,
                borderColor: '#35383F',
                paddingBottom: 8,
                marginHorizontal: 1,
                // width: 105,
                // paddingHorizontal: 10,
              }}
              borderColor={'transparent'}
              fontSize={14}
              height={45}
              valuePadding={10}
              // hasPadding
              options={[
                {label: 'All Rewards', value: 1},
                {label: 'My Rewards', value: 2},
                // {label: 'Reviews', value: 3},
              ]}
            />
          </View>
          {showhide == 1 ? (
            <ScrollView>
              <Pressable
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                  // marginHorizontal:10,
                  // alignItems:'center'
                }}>
                {allScratch.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => {
                        if (loyaltyPoint?.points >= Number(item.loyaltyPoint)) {
                          setVisible(true);
                          setData(item);
                        } else {
                          Toast.showWithGravity(
                            'Do not have enough Point !!!',
                            Toast.SHORT,
                            Toast.BOTTOM,
                          );
                        }
                      }}
                      style={{
                        marginTop: 10,
                        marginHorizontal: 10,
                        borderWidth: 1,
                        borderColor: 'skyblue',
                        height: 180,
                        borderRadius: 11,
                        padding: 2,
                        // backgroundColor:'red'
                        //   alignSelf:'center'
                      }}>
                      <ImageBackground
                        source={require('../../Assets/images/scratch.jpeg')}
                        style={{
                          height: 150,
                          width: 160,
                        }}
                        imageStyle={{
                          height: 150,
                          width: '100%',
                          borderRadius: 10,
                          resizeMode: 'contain',
                        }}></ImageBackground>
                      <View
                        style={{
                          position: 'absolute',
                          top: '70%',
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '600',
                            // marginTop: 10,
                          }}>
                          Expires on -{' '}
                          {moment(item.expiryDate).format('DD-MM-YY')}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: COLORS.primaryThemeColor,
                          fontSize: 14,
                          fontWeight: '600',
                          //   marginTop: 10,
                          marginHorizontal: 13,
                          marginVertical: 3,
                          alignSelf: 'center',
                          // fontFamily:'Brush Script MT'
                        }}>
                        Point : {item.loyaltyPoint}
                      </Text>
                    </Pressable>
                  );
                })}
              </Pressable>
            </ScrollView>
          ) : showhide == 2 ? (
            allRewards.length ? (
              <ScrollView>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '100%',
                    // marginHorizontal:10,
                    // alignItems:'center'
                  }}>
                  {allRewards.map((item, index) => {
                    return (
                      <Pressable
                        key={index}
                        // onPress={() => {
                        //   if (loyaltyPoint?.points >= Number(item.loyaltyPoint)) {
                        //     setVisible(true);
                        //     setData(item);
                        //   } else {
                        //     Toast.showWithGravity(
                        //       'Do not have enough Point !!!',
                        //       Toast.SHORT,
                        //       Toast.BOTTOM,
                        //     );
                        //   }
                        // }}
                        style={{
                          marginTop: 10,
                          marginHorizontal: 10,
                          borderWidth: 1,
                          borderColor: 'skyblue',
                          // height: 200,
                          borderRadius: 11,
                          padding: 2.5,
                          // backgroundColor:'red'
                          //   alignSelf:'center'
                        }}>
                        <Image
                          source={{
                            uri:'https://grohit.com/scratchcard/images/winning-card.jpg',
                          }}
                          style={{
                            width: moderateScale(140),
                            height: moderateScale(140),
                            borderRadius: moderateScale(10),
                          }}
                        />
                         <Text
                        style={{
                          color: COLORS.primaryThemeColor,
                          fontSize: 14,
                          fontWeight: '600',
                          //   marginTop: 10,
                          marginHorizontal: 13,
                          marginVertical: 3,
                          textAlign:'center',
                          width:120
                          // alignSelf: 'center',
                          // fontFamily:'Brush Script MT'
                        }}
                        numberOfLines={2}
                        >
                          Name : {item.scratchCardData.giftName}
                      </Text>
                      </Pressable>
                    );
                  })}
                </Pressable>
              </ScrollView>
            ) : (
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
                  No rewards found
                </Text>
              </View>
            )
          ) : null}
        </View>
      </View>
      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={() => {
          setVisible(false);
          setLoad(true);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000aa',
          }}>
          <View
            style={{
              height: 250,
              width: 250,
              borderRadius: 60,
              // zIndex: 9847,
            }}>
            <View
              style={{
                width: moderateScale(220),
                height: moderateScale(220),
                borderRadius: moderateScale(20),
                position: 'absolute',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://grohit.com/scratchcard/images/winning-card.jpg',
                }}
                style={{
                  width: moderateScale(150),
                  height: moderateScale(150),
                  borderRadius: moderateScale(20),
                }}
              />
              <Text
                style={{
                  color: COLORS.primaryFontColor,
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: 10,
                  marginHorizontal: 13,
                  marginBottom: 10,
                  // fontFamily:'Brush Script MT'
                }}>
                {data?.giftName}
              </Text>
            </View>

            {load ? (
              <View
                style={{
                  height: 250,
                  width: 250,
                  // borderRadius: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff',
                  zIndex: 9847,
                  position: 'absolute',
                  alignSelf: 'center',
                }}>
                <ActivityIndicator />
              </View>
            ) : null}
            <ScratchView
              id={2}
              brushSize={30}
              threshold={70}
              fadeOut={true}
              placeholderColor="pink"
              // onLoadEnd={()=> setLoader(false)}
              imageUrl="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
              resourceName="My Image"
              resizeMode="cover|contain|stretch"
              onImageLoadFinished={() => setLoad(false)} // Event to indicate that the image has done loading
              // onTouchStateChanged={onTouchStateChangedMethod} // Touch event (to stop a containing FlatList for example)
              // onScratchProgressChanged={onScratchProgressChanged} // Scratch progress event while scratching
              onScratchDone={onScratchDone} // Scratch is done event
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  boldtext: {
    fontSize: moderateScale(13),
    fontFamily: FONTS.Bold,
    color: COLORS.white,
    // textAlign: 'center'
  },
});

//make this component available to the app
export default MyRewards;
