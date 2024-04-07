import { View, Text, ScrollView, StatusBar as RNStatusbar, Image } from 'react-native'
import React from 'react'
import { AppBar, Container, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'

const Notification = () => {
  const colors = useTheme()

  const walletData = [
    {
      image: <Image
        source={require('../../Assets/images/walletnotification.png')}
        resizeMode='contain'
        style={{
          height: 20,
          width: 20
        }}
      />,
      title: 'Wallet Balance',

    },
    {
      image: <Image
        source={require('../../Assets/images/walletnotification.png')}
        resizeMode='contain'
        style={{
          height: 20,
          width: 20
        }}
      />,
      title: 'Wallet Balance',

    },
    {
      image: <Image
        source={require('../../Assets/images/like.png')}
        resizeMode='contain'
        style={{
          height: 20,
          width: 20
        }}
      />,
      title: 'Feedback Surveys',

    },
  ]
  return (
    <Container>
      <AppBar.Back
        title="Notification"
        backgroundColor={'transparent'}
        titlePosition='left'
        titleStyle={{
          fontFamily: FONTS.bold,
          fontSize: 15,
          //   textAlign: 'center'
        }}
        rightActions={[
          {
            icon: <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 12
              }}
            >Help</Text>,
            onPress: () => console.log("bal")
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
      <ScrollView
      >
        {walletData.map((item, index) => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10
                }}
              >
                <View
                  style={{

                    width: '20%',
                    // backgroundColor: 'pink'
                  }}
                >
                  <View
                    style={{
                      height: 57,
                      width: 57,
                      borderRadius: 28,
                      backgroundColor: colors.primaryFontColor,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.image}
                  </View>

                </View>

                <View
                  style={{

                    width: '80%',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: FONTS.semibold,
                        fontSize: 15
                      }}
                    >{item.title}</Text>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: FONTS.medium,
                        fontSize: 10
                      }}
                    >Today</Text>

                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      // marginHorizontal: 10
                    }}
                  >
                    <View
                      style={{
                        width: '80%'
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          color: colors.secondaryFontColor,
                          fontSize: 10
                        }}
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales eu, in semper sed vel pulvinar sed.</Text>

                    </View>

                    <View
                      style={{
                        width: '20%',
                        alignItems: 'center'
                      }}
                    >
                      <View
                        style={{
                          height: 25,
                          width: 25,
                          borderRadius: 12,
                          backgroundColor: '#28B473',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            color: colors.pageBackgroundColor,
                            fontSize: 10
                          }}
                        >1</Text>
                      </View>
                    </View>
                  </View>
                </View>

              </View>

              <Image
                source={require('../../Assets/images/line.png')}
                resizeMode='contain'
                style={{
                  height: 10,
                  width: '100%',
                  marginTop: 10
                }}
              />
            </>

          )
        })}

        {[1, 2, 3, 4].map((item, index) => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    width: '20%'
                  }}
                >
                  <View
                    style={{
                      height: 57,
                      width: 57,
                      borderRadius: 28,
                      marginTop: 10,
                      backgroundColor: 'rgba(77, 60, 2, 0.31)',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Image
                      source={require('../../Assets/images/notificationUser.png')}
                      style={{
                        height: 48,
                        width: 48
                      }}
                    />

                  </View>

                </View>

                <View
                  style={{
                    width: '80%'
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.semibold,
                        color: colors.primaryFontColor,
                        fontSize: 15
                      }}
                    >Jhone Andreas</Text>

                    <Text
                      style={{
                        fontFamily: FONTS.semibold,
                        color: colors.primaryFontColor,
                        fontSize: 10
                      }}
                    >01/05/2022</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      // justifyContent: 'space-between'
                    }}
                  >
                    <Image
                      source={require('../../Assets/images/Dsign.png')}
                      style={{
                        height: 15,
                        width: 15
                      }}
                    />
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        marginLeft: 10,
                        fontFamily: FONTS.medium,
                        fontSize: 10
                      }}
                    >Received $30</Text>
                    <View
                      style={{
                        flex: 1
                      }}
                    />

                    <View
                      style={{
                        height: 17,
                        width: 17,
                        borderRadius: 8,
                        backgroundColor: '#28B473',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.semibold,
                          fontSize: 8
                        }}
                      >1</Text>

                    </View>

                  </View>
                </View>


              </View>
              <Image
                source={require('../../Assets/images/line.png')}
                resizeMode='contain'
                style={{
                  height: 10,
                  width: '100%',
                  marginTop: 2,

                }}
              />

            </>

          )
        })}

        <View
          style={{
            height: 10
          }}
        />



      </ScrollView>
    </Container>
  )
}

export default Notification