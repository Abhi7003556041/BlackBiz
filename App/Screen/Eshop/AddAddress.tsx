//import liraries

import { StackScreenProps } from '@react-navigation/stack';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {
    AppButton,
  AppTextInput,
  Card,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';

import EshopHeader from '../../Component/Header/EshopHeader';
import {FONTS} from '../../Constants/Fonts';
import { CartAddResponseData, PaymentModel } from '../../Models/E_shopModel';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import {moderateScale} from '../../PixelRatio';
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('window').width;
import Toast from 'react-native-simple-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


type Props = StackScreenProps<AppStackModel,'AddAddress'>
// create a component
const AddAddress = (props:Props) => {
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [altmobile, setAltMobile] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [landmark, setLandmark] = useState<string>('');
  const [pin, setPin] = useState<string>('');
  const {data, total, discount,coupon} = props.route.params

  const Fldvalid = (txt: string): number => txt.replace(/\s/g, "").length;
  
  const colors = useTheme();

  const filedHandler = () =>{
    if (
      
      Fldvalid(name) === 0 ||
      name == '' ||
      Fldvalid(mobile) === 0 ||
      mobile == '' ||
      Fldvalid(altmobile) === 0 ||
      altmobile == '' ||
      Fldvalid(address) === 0 ||
      address == '' ||
      Fldvalid(landmark) === 0 ||
      landmark == '' ||
      Fldvalid(pin) === 0 ||
      pin == ''
    ) {
      Toast.show('Please Fill Out All Field', Toast.SHORT);
      return;
    } 
    let data: PaymentModel = {
      name:name,
      mobile:mobile,
      altmobile:altmobile,
      address:address,
      landmark:landmark,
      pin:pin,
     
    }
    props.navigation.replace('Payment', {addressData: data, total:total, discount:discount,coupon:coupon})
    Toast.show('Saved...', Toast.SHORT);

  }

  // else if (emailresult !== true) {
  //   Toast.show('Invalid Email Id', Toast.SHORT);
  //   return;
  // } else if (password.length < 8) {
  //   Toast.show('Password should be Min. 8 Character', Toast.SHORT);
  //   return;
  // } else if (password != repassward) {
  //   Toast.show('Password does not match', Toast.SHORT);
  //   return;
  // }
  return (
    <Container>
      <KeyboardAwareScrollView>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <EshopHeader title="Address" />
      <View>

        <View
        style={{
            marginHorizontal:moderateScale(10),
            marginVertical:moderateScale(15)

        }}
        >
        <Text style={{
            color: 'white',
            fontSize:25
            
            }}
            numberOfLines={2}
            >
            Give your {'\n'}details here....</Text></View>
        <View
          style={{
            marginTop: 10,
            marginVertical: 5,
          }}>
          <AppTextInput
            // keyboardType='number-pad'

            //   title="Personal details "
            titleStyle={{
              color: colors.primaryFontColor,
              fontFamily: FONTS.medium,
              fontSize: 15,
              marginHorizontal: 15,
            }}
            placeholder="First Name"
            inputStyle={{
              fontFamily: FONTS.regular,
              fontSize: 15,
            }}
            value={name}
            onChangeText={val => setName(val)}
            inputContainerStyle={{
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginVertical: 10,
          }}>
          <AppTextInput
            keyboardType='number-pad'

            //   title="Personal details "
            titleStyle={{
              color: colors.primaryFontColor,
              fontFamily: FONTS.medium,
              fontSize: 15,
              marginHorizontal: 15,
            }}
            placeholder="Mobile Number"
            inputStyle={{
              fontFamily: FONTS.regular,
              fontSize: 15,
            }}
            value={mobile}
            onChangeText={val => setMobile(val)}
            inputContainerStyle={{
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginVertical: 10,
          }}>
          <AppTextInput
            keyboardType='number-pad'

            //   title="Personal details "
            titleStyle={{
              color: colors.primaryFontColor,
              fontFamily: FONTS.medium,
              fontSize: 15,
              marginHorizontal: 15,
            }}
            placeholder="Alternative Number"
            inputStyle={{
              fontFamily: FONTS.regular,
              fontSize: 15,
            }}
            value={altmobile}
            onChangeText={val => setAltMobile(val)}
            inputContainerStyle={{
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginVertical: 10,
          }}>
          <AppTextInput
            // keyboardType='number-pad'

            //   title="Personal details "
            titleStyle={{
              color: colors.primaryFontColor,
              fontFamily: FONTS.medium,
              fontSize: 15,
              marginHorizontal: 15,
            }}
            placeholder="Address"
            inputStyle={{
              fontFamily: FONTS.regular,
              fontSize: 15,
            }}
            value={address}
            onChangeText={val => setAddress(val)}
            inputContainerStyle={{
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginVertical: 10,
          }}>
          <AppTextInput
            // keyboardType='number-pad'

            //   title="Personal details "
            titleStyle={{
              color: colors.primaryFontColor,
              fontFamily: FONTS.medium,
              fontSize: 15,
              marginHorizontal: 15,
            }}
            placeholder="Land Mark"
            inputStyle={{
              fontFamily: FONTS.regular,
              fontSize: 15,
            }}
            value={landmark}
            onChangeText={val => setLandmark(val)}
            inputContainerStyle={{
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            marginVertical: 10,
          }}>
          <AppTextInput
            keyboardType='number-pad'

            //   title="Personal details "
            titleStyle={{
              color: colors.primaryFontColor,
              fontFamily: FONTS.medium,
              fontSize: 15,
              marginHorizontal: 15,
            }}
            placeholder="Pin Code"
            inputStyle={{
              fontFamily: FONTS.regular,
              fontSize: 15,
            }}
            value={pin}
            onChangeText={val => setPin(val)}
            inputContainerStyle={{
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          />
        </View>
      </View>

      <AppButton
            shadow={true}
            title="Save"
            textStyle={{
              color: colors.pageBackgroundColor,
              fontFamily: FONTS.medium,
              fontSize: 20,
            }}
            style={{
              borderRadius: 30,
              marginTop: 40,
              marginHorizontal: 0,
              width: 250,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              alignSelf:'center'
            }}
            onPress={() =>filedHandler()}
            // onPress={loginHandeler}
          />
          </KeyboardAwareScrollView>
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
    // marginVertical:10,
    borderRadius: 8,
    justifyContent: 'center',
    // alignItems:'center',
    backgroundColor: 'white',
    width: Width / 2 - 20,
    // height: moderateScale(220),
    marginVertical: moderateScale(10),
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default AddAddress;
