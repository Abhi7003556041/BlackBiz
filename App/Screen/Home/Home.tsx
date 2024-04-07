//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar as RNStatusbar,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  AppBar,
  Text,
  Card,
  Container,
  Icon,
  StatusBar,
  useTheme,
  AppButton,
} from 'react-native-basic-elements';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {initCart} from '../../redux/reducer/Cart';
import {RootState, useAppDispatch} from '../../redux/store';
import E_shopService from '../../Services/E_shopServices';
import Toast from 'react-native-simple-toast';
import { Canvas, Fill,  BackdropBlur, ColorMatrix, useImage, Circle, Group, RoundedRect } from "@shopify/react-native-skia";
import WalletService from '../../Services/WalletServices';

type Props = StackScreenProps<AppStackModel, 'Home'>;
// create a component
const Home = (props: Props) => {
  const colors = useTheme();
  const dispatch = useAppDispatch();
  const {userData} = useSelector((state: RootState) => state.User);
  const [myWallet,setMyWallet] = useState<number>(0)

  useEffect(() => {
    iniCartData();
    getCashBack();
  }, []);

  const getCashBack = () =>{
    WalletService.getWallet()
      .then((res)=>{
        console.log("cashback>>>>",res.data)
        setMyWallet(res.data.wallet)
      })
  }

  const iniCartData = () => {
    E_shopService.getAllCart().then(res => {
      console.log('allCart>>>>>>', res.data);
      dispatch(initCart(res.data));
    });
  };

  const upiTransfer = [
    {
      image: (
        <Image
          source={require('../../Assets/images/scan.png')}
          style={{
            height: 20,
            width: 20,
          }}
          resizeMode="contain"
        />
      ),
      name: 'Scan & Pay',
      onPress: () => props.navigation.navigate('Scan'),
    },
    {
      image: (
        <Image
          source={require('../../Assets/images/ToMob.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'To Mobile',
      onPress: () => props.navigation.navigate('ToMobileTransfer'),
    },
    {
      image: (
        <Image
          source={require('../../Assets/images/ToSelf.png')}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
          }}
        />
      ),
      name: 'To Self',
    },
    {
      image: (
        <Image
          source={require('../../Assets/images/bank.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Bank',
      onPress: () => props.navigation.navigate('TransferToBank'),
    },
  ];

  const myZone = [
    {
      image: (
        <Image
          source={require('../../Assets/images/Passbook.png')}
          style={{
            height: 20,
            width: 20,
          }}
          resizeMode="contain"
        />
      ),
      name: 'Passbook',
      onPress: () => props.navigation.navigate('Passbook'),
    },
    {
      image: (
        <Image
          source={require('../../Assets/images/Wallet.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Wallet',
      onPress: () => props.navigation.navigate('Wallet'),
    },
    {
      image: (
        <Image
          source={require('../../Assets/images/money.png')}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
          }}
        />
      ),
      name: 'Send Money',
    },
    {
      image: (
        <Image
          source={require('../../Assets/images/recharge.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Recharge',
      onPress: () => props.navigation.navigate('Recharge'),
    },
  ];

  const explore = [
    {
      image: require('../../Assets/images/estore.png'),
      name: 'E- Shop',
      color: '#3b668baa',
      handlerClick: () => {
        props.navigation.navigate('Eshop_Index');
      },
    },
    {
      image: require('../../Assets/images/events.png'),
      name: 'Event',
      color: '#6ba066aa',
      handlerClick: () => {
        Toast.showWithGravity('Coming soon...', Toast.SHORT, Toast.BOTTOM);
      },
    },
    {
      image: require('../../Assets/images/podcast.png'),
      name: 'Podcast',
      color: '#3e424daa',
      handlerClick: () => {
        props.navigation.navigate('PodcastHome');
      },
    },
    {
      image: require('../../Assets/images/ott.png'),
      name: 'OTT',
      color: '#7b4c4caa',
      handlerClick: () => {
        props.navigation.navigate('Ottindex');
      },
    },
    // {
    //   image: require('../../Assets/images/health.png'),
    //   name: 'Health',
    //   color: '#625e98aa',
    // },
    {
      image: require('../../Assets/images/learning.png'),
      name: 'Learning',
      color: '#5f8eb8aa',
      handlerClick: () => {
        props.navigation.navigate('LearningIndex');
      },
    },
    // {
    //   image: require('../../Assets/images/sports.png'),
    //   name: 'Sports',
    //   color: '#bc894caa',
    // },
    {
      image: require('../../Assets/images/news.png'),
      name: 'Social',
      color: '#92313caa',
      handlerClick: () => {
        props.navigation.navigate('Social_Index');
      },
    },
    {
      image: require('../../Assets/images/business.png'),
      name: 'Loyalty',
      color: '#4a7e75aa',
      handlerClick: () => {
        props.navigation.navigate('LoyalityHome');
      },
    },
    {
      image: require('../../Assets/images/walletU.jpeg'),
      name: 'Wallet',
      color: '#3e424daa',
      handlerClick: () => {
        props.navigation.navigate('WalletIndex');
      },
    },
    {
      image: require('../../Assets/images/estore.png'),
      name: 'Rewards',
      color: '#3b668baa',
      handlerClick: () => {
        props.navigation.navigate('MyRewards');
      },
    },
  ];

  const travel = [
    {
      image: (
        <Image
          source={require('../../Assets/images/FlightTicket.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Flight Ticket',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/carbon_train-ticket.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Train Ticket',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/carbon_train-profile.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Metro Ticket',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/cil_bus-alt.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Bus Ticket',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/hotel.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Hotel',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/bx_movie-play.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Movie Ticket',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/eventTickets.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'Events Ticket',
    },

    {
      image: (
        <Image
          source={require('../../Assets/images/more.png')}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      ),
      name: 'More',
    },
  ];
  return (
    <Container>
      <ImageBackground source={require('../../Assets/images/Background.png')}>
        <AppBar
          title={`Hi, ${userData?.firstname} ${userData?.lastname}`}
          backgroundColor={'transparent'}
          titlePosition="left"
          titleStyle={{
            fontFamily: FONTS.semibold,
            fontSize: 15,
          }}
          style={{
            marginTop: RNStatusbar.currentHeight,
            alignItems: 'center',
          }}
          // leftImage={{
          //   uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
          // }}
          // leftComponent={
          //   <I
          //   }
          rightActions={[
            {
              icon: (
                <Pressable onPress={() => props.navigation.navigate('Search')}>
                  <Icon
                    name="search1"
                    type="AntDesign"
                    style={{
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  />
                </Pressable>
              ),
            },
            {
              icon: (
                <Pressable
                  onPress={() => props.navigation.navigate('Notification')}>
                  <Icon
                    name="notifications-outline"
                    type="Ionicon"
                    style={{
                      marginLeft: 10,
                      marginTop: 2,
                    }}
                  />
                </Pressable>
              ),
            },
            {
              icon: (
                <Pressable onPress={() => props.navigation.navigate('Profile')}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
                    }}
                    style={{
                      height: 32,
                      width: 32,
                      marginLeft: 15,
                      borderRadius: 17,
                      marginRight: 5,
                    }}
                  />
                </Pressable>
              ),
            },
          ]}
        />
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent={true}
        />
        <ImageBackground source={require('../../Assets/images/Background.png')}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 20,
            }}>
           
            <Canvas style={{width: 295, height: 170,marginTop:15,borderWidth:0,borderColor:'grey',borderRadius:0}}>         
              <BackdropBlur
                // transform={[{translateX: touchX}, {translateY: touchY}, {scale: 5}]}
                blur={50}                        
                clip={{x: 0, y: 0, width: 296, height: 170,rx:10,ry:10}}
                
                >
                <Fill color="rgba(150, 150, 150, 0.2)" />
              </BackdropBlur>
            </Canvas>
            <Pressable
            style={{
              position:'absolute',
              top:24,
              alignSelf:'flex-start',
              marginLeft:70
            }}
            onPress={()=>{
              props.navigation.navigate('WalletIndex');
            }}
            >
              <View 
              style={{
              flexDirection:'row',
              flex:1,
              justifyContent:'space-between'
              
            }}>
            <View>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: FONTS.medium,
                fontSize:12
                // marginTop: 10,
              }}>
              Name
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: FONTS.bold,
                marginTop: 5,
                fontSize: 16
              }}>
              {userData?.firstname} {userData?.lastname}
            </Text>
            </View>
            <View
            style={{
              marginRight:15,
              flexDirection:'row',
              alignItems:'center'
              
            }}
            >
           <View
           style={{
            height:25,
            width:25,
            borderRadius:15,
            backgroundColor:'red',
            opacity:0.8
           }}
           >

           </View>
           <View
           style={{
            height:25,
            width:25,
            borderRadius:15,
            backgroundColor:'yellow',
            opacity:0.8,
            position:'absolute',
            marginLeft:15
           }}
           >

           </View>
           </View>
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: FONTS.medium,
                marginTop: 10,
                fontSize:16
              }}>
              •••• {' '} •••• {' '} •••• {' '} ••••
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: FONTS.medium,
                marginTop: 10,
                fontSize:16
              }}>
             Balance
            </Text>
            <View
            style={{
              flexDirection:'row',
              flex:1,
              justifyContent:'space-between'
            }}
            >
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: FONTS.bold,
                marginTop: 5,
                fontSize:23
              }}>
             $ {myWallet.toFixed(2)}
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: FONTS.medium,
                marginTop: 10,
                fontSize:16,
                marginLeft:90,
                textAlign:'center',
                alignSelf:'center'
              }}>
                00/00
            </Text>
            </View>
            </Pressable>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                marginTop: 10,
              }}>
              Up to 3% Cashback everytime
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{
            // marginTop: 20,
            marginHorizontal: 10,
          }}>
          {/* <Card
            style={{
              borderWidth: 1,
              borderColor: colors.secondaryFontColor,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}>
            <Text.Heading
              title="Upi Money Transfer"
              style={{
                fontFamily: FONTS.semibold,
                color: COLORS.primaryFontColor,
                fontSize: 15,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {upiTransfer.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    style={{
                      marginTop: 15,
                      paddingHorizontal: 10,
                      alignItems: 'center',

                      // flexDirection: 'row'
                    }}
                    onPress={item.onPress}>
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        backgroundColor: colors.secondaryThemeColor,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {item.image}
                    </View>

                    <View
                      style={{
                        marginTop: 10,
                        // marginHorizontal: 10
                      }}>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: 10,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </Card>

          <View
            style={{
              marginTop: 20,
              // paddingHorizontal: 10
            }}>
            <Image
              source={require('../../Assets/images/banner.png')}
              style={{
                height: 55,
                borderRadius: 10,
                width: '100%',
              }}
              resizeMode="cover"
            />
          </View> */}

          {/* <View
            style={{
              marginTop: 20,
            }}>
            <Card
              style={{
                borderWidth: 1,
                borderColor: colors.secondaryFontColor,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text.Heading
                  title="My Zone"
                  style={{
                    fontFamily: FONTS.semibold,
                    color: COLORS.primaryFontColor,
                    fontSize: 15,
                  }}
                />

                <AppButton
                  title="UPI Id: 12456@Guy pay"
                  textStyle={{
                    fontFamily: FONTS.regular,
                    fontSize: 10,
                    color: colors.pageBackgroundColor,
                  }}
                  style={{
                    backgroundColor: colors.secondaryThemeColor,
                    borderRadius: 30,
                    height: 22,
                    width: 137,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {myZone.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={item.onPress}
                      style={{
                        marginTop: 15,
                        paddingHorizontal: 10,
                        alignItems: 'center',

                        // flexDirection: 'row'
                      }}>
                      <View
                        style={{
                          height: 50,
                          width: 50,
                          backgroundColor: colors.secondaryThemeColor,
                          borderRadius: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {item.image}
                      </View>

                      <View
                        style={{
                          marginTop: 10,
                          // marginHorizontal: 10
                        }}>
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            fontSize: 10,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </Card>
          </View> */}

          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 18,
              }}>
              Explore
            </Text>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              {explore.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={item.handlerClick}
                    style={{
                      marginTop: 5,
                    }}>
                    <ImageBackground
                      source={item.image}
                      style={{
                        height: 70,
                        width: 105,
                      }}
                      imageStyle={{
                        height: 70,
                        width: '100%',
                        borderRadius: 8,
                        resizeMode: 'contain',
                      }}>
                      <View
                        style={{
                          backgroundColor: item.color,
                          flex: 1,
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                            color: colors.primaryFontColor,
                            position: 'absolute',
                            bottom: 5,
                            right: 5,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </ImageBackground>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Image
              source={require('../../Assets/images/Banner2.png')}
              style={{
                height: 122,
                borderRadius: 10,
                width: '100%',
              }}
              resizeMode="cover"
            />
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Card
              style={{
                borderWidth: 1,
                borderColor: colors.secondaryFontColor,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}>
              <Text.Heading
                title="Travel & Ticket Booking"
                style={{
                  fontFamily: FONTS.semibold,
                  color: COLORS.primaryFontColor,
                  fontSize: 15,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                {travel.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginTop: 15,
                        paddingHorizontal: 5,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          height: 50,
                          width: 50,
                          backgroundColor: colors.secondaryThemeColor,
                          borderRadius: 25,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {item.image}
                      </View>

                      <View
                        style={{
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            fontSize: 10,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </Card>
          </View>

          <View
            style={{
              height: 20,
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  Blur: {
    height: 100,
    width: 300,
    backgroundColor: '#ffffff',
    opacity: 0.1,
  },
});

//make this component available to the app
export default Home;
