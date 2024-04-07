//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar as RNStatusbar,
  Image,
  ActivityIndicator,
} from 'react-native';
import {AppBar, Container, Icon, StatusBar} from 'react-native-basic-elements';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale, verticalScale} from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import SwitchSelector from 'react-native-switch-selector';
import Reedem from '../../Component/Loyality/Reedem';
import LoyaltyHistory from '../../Component/Loyality/LoyaltyHistory';
import LoyaltyService from '../../Services/LoyaltyServices';
import { LoyaltyHistoryResponseData, LoyaltyPointResponseData } from '../../Models/LoyaltyModal';
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const LoyalityHome = () => {
  const [showhide, setShowHide] = useState<number>(1);
  const [scratchCardLength,setScratchCard] = useState<number>(2)
  const [loyaltyHistory,setLoyaltyHistory] = useState<Array<LoyaltyHistoryResponseData>>([])
  const [loyaltyPoint,setLoyaltyPont] = useState<LoyaltyPointResponseData>()
  useEffect(()=>{
    getLoyaltyHistory()
    getLoyaltyPoint()
  },[])
  const getLoyaltyHistory = () => {
    LoyaltyService.getLoyaltyHistory()
      .then((res)=>{
        console.log('loyaltyHistory',res.data)
        setLoyaltyHistory(res.data)
      })
  }

  const getLoyaltyPoint = () => {
    LoyaltyService.getLoyaltyPoint()
      .then((res)=>{
        console.log('point',res.data.points)
        setLoyaltyPont(res.data)
      })
  }
  return (
    <Container>
      <AppBar.Back
        title="Loyalty"
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
      />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.3, y: 1.8}}
        colors={['blue', COLORS.white]}
        style={styles.pointView}>
        <Text
          style={[
            styles.boldtext,
            {
              fontSize: moderateScale(15),
            },
          ]}>
          Available Points
        </Text>

        <View style={styles.logoView}>
          <View>
            <Text
              style={[
                styles.boldtext,
                {
                  fontSize: moderateScale(50),
                },
              ]}>
              {loyaltyPoint?.points ?
              loyaltyPoint?.points :
              <>
              <Text
              style={[
                styles.boldtext,
                {
                  fontSize: moderateScale(50),
                  // marginTop:5
                },
              ]}>
              0
            </Text></>
              }
            </Text>
            <Text
              style={[
                styles.boldtext,
                {
                  fontSize: moderateScale(11),
                  marginTop:5
                },
              ]}>
              You have earned coins which you can redeem below
            </Text>
          </View>
          <Image
            source={require('../../Assets/images/logo.png')}
            style={styles.logoImg}
          />
        </View>
      </LinearGradient>

      <View
        style={{
          width: '99%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        
         <Text
            style={{
              color: COLORS.primaryThemeColor,
              fontSize: 17,
              fontWeight: '600',
            //   marginTop: 10,
              marginHorizontal: 13,
              marginBottom: 10,
              // fontFamily:'Brush Script MT'
            }}>
           Loyalty History :
          </Text>
      </View>
      <ScrollView>
      {loyaltyHistory.length  ?
      loyaltyHistory.map((res)=>{
        return(
          <LoyaltyHistory
          item={res}
          />
        )
      })
      :
      (
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: moderateScale(150),
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
            No History Found
          </Text>
        </View>
      )
    }
    </ScrollView>
      
          
       
        {/* <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="notifications-off-outline"
            type="Ionicon"
            style={styles.iconStle}
          />
          <Text style={styles.text}>No Data Found</Text>
        </View> */}
     
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
  image1: {
    // height: height / 3,
    // paddingVertical: moderateScale(15),
    // resizeMode: 'contain',
    backgroundColor: COLORS.white,
    elevation: 8,
    marginBottom: moderateScale(15),
  },

  tabview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(35),
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
    paddingBottom: moderateScale(15),
  },
  boldtext: {
    fontSize: moderateScale(13),
    fontFamily: FONTS.Bold,
    color: COLORS.white,
    // textAlign: 'center'
  },
  text: {
    fontSize: moderateScale(12),
    color: COLORS.primaryFontColor,
    textAlign: 'center',
    fontFamily: FONTS.Bold,
    marginBottom: moderateScale(4),
  },
  backView: {
    height: '80%',
    width: '80%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  middleView: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ab',
  },
  pointView: {
    height: verticalScale(170),
    width: '95%',
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    borderRadius: 15,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(24),
  },
  logoImg: {
    height: 80,
    width: 90,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },

  tabStyle: {
    borderBottomColor: COLORS.themecolor,
    // backgroundColor:'red'
    // borderBottomWidth: 2,
  },
  iconStle: {
    fontSize: 40,
    marginVertical: 15,
  },
});

//make this component available to the app
export default LoyalityHome;
