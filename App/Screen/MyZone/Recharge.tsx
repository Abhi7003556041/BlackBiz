//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar as RNStatusbar, ScrollView, Image, Pressable } from 'react-native';
import { AppBar, Text, Container, StatusBar, useTheme, Icon } from 'react-native-basic-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';

// create a component
const Recharge = () => {
  const colors = useTheme()

  const data = [
    {
      image: <Image
        source={require('../../Assets/images/bi_phone.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Mobile Recharge',
      onpress: () => NavigationService.navigate('MobileRecharge')

    },
    {
      image: <Image
        source={require('../../Assets/images/CableTv.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Cable TV & DTH',
      onpress: () => NavigationService.navigate('CableTv')


    },

    {
      image: <Image
        source={require('../../Assets/images/cil_education.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Education Fees',
      onpress: () => NavigationService.navigate('EducationFeesPayUsingCrad')
    },

    {
      image: <Image
        source={require('../../Assets/images/bi_credit-card.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Credit Card',
      onpress: () => NavigationService.navigate('CreditCardPayment')
    },

    {
      image: <Image
        source={require('../../Assets/images/carbon_wifi-controller.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Brodbrand & Wifi Bills',
      onpress: () => NavigationService.navigate('PayBroadBandBills')
    },


    {
      image: <Image
        source={require('../../Assets/images/electricityBill.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Electricity Bills',
    },


    {
      image: <Image
        source={require('../../Assets/images/logos_google-play-icon.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Google Play Recharge',
    },


    {
      image: <Image
        source={require('../../Assets/images/carbon_train-profile.png')}
        style={{
          height: 25,
          width: 25,
          marginVertical: 10
        }}
        resizeMode='contain'
      />,
      label: 'Metro Recharge',
    },

  ]
  return (
    <Container>
      <AppBar.Back
        title="My Recharge  & Bills"
        backgroundColor={'transparent'}
        titlePosition='left'
        titleStyle={{
          fontFamily: FONTS.bold,
          fontSize: 15,
          textAlign: 'center'
        }}
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginTop: 20,
            // marginVertical: 10,
            height: 200
          }}
        >
          <Image
            source={require('../../Assets/images/rechargeBanner.png')}
            style={{
              height: 130,
              width: 320,
              // borderRadius: 10
            }}
            resizeMode='contain'
          />

          <Image
            source={require('../../Assets/images/rechargeBanner2.png')}
            style={{
              height: 130,
              width: 320,
              // marginHorizontal: 5
            }}
            resizeMode='contain'
          />
        </View>

      </ScrollView>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10
            // backgroundColor: 'orange',
          }}
        >
          {data.map((item, index) => {
            return (
              <Pressable
                style={{
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: colors.secondaryFontColor,
                  borderRadius: 10,
                }}
                onPress={item.onpress}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    
                  }}
                >
                  <View
                    style={{
                      height: 46,
                      width: 46,
                      borderRadius: 23,
                      backgroundColor: colors.primaryFontColor,
                      alignItems: 'center',
                      marginVertical: 5,
                      marginHorizontal: 10,
                    }}
                  >
                    {item.image}
                  </View>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: 12,
                    }}
                  >{item.label}</Text>
                  <View
                    style={{
                      flex: 1
                    }}
                  />
                  <Icon
                    name='arrow-forward-ios'
                    type='MaterialIcon'
                    color={colors.secondaryFontColor}
                    style={{
                      paddingHorizontal: 10
                    }}
                  />
                </View>
              </Pressable>
            )
          })}
          <View 
          style={{
            height: 10
          }}
          />

        </View>
      </ScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Recharge;
