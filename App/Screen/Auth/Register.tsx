//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions, Pressable, Image } from 'react-native';
import {
  useTheme,
  Container,
  Text,
  AppButton,
  StatusBar,
  AppTextInput,
  Icon,
  CheckBox,
} from 'react-native-basic-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { RegisterData } from '../../Models/AuthModel';
import AuthService from '../../Services/AuthService';
import NavigationService from '../../Services/NavigationService';
import Toast from 'react-native-simple-toast'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackModel } from '../../Models/Navigation/AuthStackModel';
import { moderateScale } from '../../PixelRatio';

const height = Dimensions.get('window').height;

type Props = StackScreenProps<AuthStackModel, 'Register'>;

const Register = (props: Props) => {
  // const [check, setCheck] = useState(false);
  const [email, setEmail] = useState<string>('')
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [referral, setReferral] = useState<string>('')
  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  const [rpasswordShow, setRPasswordShow] = useState<boolean>(false)
  
  const [repassward, setRepassward] = useState<string>('')

  const [mobile, setMobile] = useState<string>('')

  const Fldvalid = (txt: string): number => txt.replace(/\s/g, "").length;


  const colors = useTheme();

  const registerHandeler = () => {
    let pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.][a-z]{2,5}/g;
    let emailresult = pattern.test(email);
    if (
      Fldvalid(password) === 0 ||
      password == '' ||
      Fldvalid(mobile) === 0 ||
      mobile == '' ||
      Fldvalid(email) === 0 ||
      email == '' ||
      // Fldvalid(mobile) === 0 ||
      // mobile == "" ||
      Fldvalid(firstname) === 0 ||
      firstname == '' ||
      Fldvalid(lastname) === 0 ||
      lastname == ''
    ) {
      Toast.show('Please Fill Out All Field', Toast.SHORT);
      return;
    } else if (emailresult !== true) {
      Toast.show('Invalid Email Id', Toast.SHORT);
      return;
    } else if (password.length < 8) {
      Toast.show('Password should be Min. 8 Character', Toast.SHORT);
      return;
    } else if (password != repassward) {
      Toast.show('Password does not match', Toast.SHORT);
      return;
    }
    else if (mobile.length < 10) {
      Toast.show('Mobile number should be min 10 Character', Toast.SHORT);
      return;
    }
    // } else if (!check) {
    //   Toast.show('Please agree to our terms!', Toast.SHORT);
    //   return;
    // }
    let data: RegisterData = {
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
      mobile: mobile,
      under_refer:referral
    }
    AuthService.register(data)
      .then((result) => {
        console.log("regisdata>>>>",result)
        AuthService.setToken(result.data?.token ?? '');
        // NavigationService.navigate('LoginSuccessPage',{})
        props.navigation.navigate('LoginSuccessPage', 
        {token: result.data?.token ?? '',src:false})
      })
      .catch((err) => {
        console.log(err)
         Toast.show('Email already exists!', Toast.SHORT);

      })
  }

  
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.pageBackgroundColor}
        barStyle="light-content"
      />
      <KeyboardAwareScrollView>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/images/logo.png')}
              style={{
                height: 100,
                width: 100
              }}
              resizeMode='center'
            />
            <Text.Heading
              numberOfLines={2}
              title="Register 
              your account get started!"
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 22,
                // marginVertical: 20,
                textAlign: 'center'
              }}
            />
            {/* <Text.SubHeading
              title="Lorem ipsum dolor sit amet"
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}
            /> */}
          </View>

          <View
            style={{
              marginTop: 10,
              paddingVertical: 10,
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
              value={firstname}
              onChangeText={(val) => setFirstname(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>

          <View
            style={
              {
                // marginTop: 30,
                paddingBottom: 10
              }
            }>
            <AppTextInput
              // keyboardType='number-pad'

              //   title="Passward"
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              placeholder="Last Name"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              value={lastname}
              onChangeText={(val) => setLastname(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <View
            style={
              {
                // marginTop: 30,
                // paddingVertical: 15
                paddingBottom: 10

              }
            }>
            <AppTextInput
              // keyboardType='number-pad'

              //   title="Passward"
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              placeholder="Email"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              value={email}
              onChangeText={(val) => setEmail(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <View
            style={
              {
                // marginTop: 30,
                // paddingVertical: 15
                paddingBottom: 10

              }
            }>
            <AppTextInput
              keyboardType='number-pad'

              //   title="Passward"
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              placeholder="Mobile No"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              value={mobile}
              onChangeText={(val) => setMobile(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <View
            style={
              {
                
                paddingBottom: 10,  
             
              }
            }>
            <AppTextInput
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              placeholder="Password"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              value={password}
              onChangeText={(val) => setPassword(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
                // width:350
              }}
              rightAction={
                passwordShow ?
                    <Icon
                        name='eye'
                        type='Ionicon'
                    />
                    :
                    <Icon
                        name='eye-off'
                        type='Ionicon'
                    />
            }
            onRightIconPress={() => setPasswordShow(!passwordShow)}
            secureTextEntry={!passwordShow}
            />
           
          </View>
          <View
            style={
              {
                // marginTop: 30,
                // paddingVertical: 15
                paddingBottom: 10

              }
            }>
            <AppTextInput
              // keyboardType='number-pad'

              //   title="Passward"
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              placeholder="Re Type Password"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              value={repassward}
              onChangeText={(val) => setRepassward(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
              rightAction={
                rpasswordShow ?
                    <Icon
                        name='eye'
                        type='Ionicon'
                    />
                    :
                    <Icon
                        name='eye-off'
                        type='Ionicon'
                    />
            }
            onRightIconPress={() => setRPasswordShow(!rpasswordShow)}
            secureTextEntry={!rpasswordShow}
            />
          </View>
          <View
            style={
              {
                // marginTop: 30,
                // paddingVertical: 15
                paddingBottom: 10

              }
            }>
            <AppTextInput
              // keyboardType='number-pad'

              //   title="Passward"
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              placeholder="referral code (not mandetory)"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              value={referral}
              onChangeText={(val) => setReferral(val)}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>

          <AppButton
            shadow={true}
            title="Register"
            textStyle={{
              color: colors.pageBackgroundColor,
              fontFamily: FONTS.medium,
              fontSize: 20,
            }}
            style={{
              borderRadius: 30,
              marginTop: 25,
              marginHorizontal: 0,
              height: 60,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center'
              // width: 251
            }}
            // onPress={() => NavigationService.navigate('LoginSuccessPage')}
            onPress={() => registerHandeler()}
          />

          {/* <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
              alignItems: 'center',
              paddingVertical: 15,
            }}>
            <View
              style={{
                flex: 1,
                borderTopWidth: 1,
                height: 0,
                borderStyle: 'solid',
                marginLeft: 20,
                borderColor: colors.primaryFontColor,
              }}
            />
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 14,
                fontFamily: FONTS.medium,
                marginHorizontal: 10,
              }}>
              Or continue with
            </Text>
            <View
              style={{
                flex: 1,
                borderTopWidth: 1,
                height: 0,
                borderStyle: 'solid',
                marginRight: 20,
                borderColor: colors.primaryFontColor,
              }}
            />
          </View> */}

          {/* <View
                        style={{
                            marginTop: 10,
                            alignItems: 'center'
                        }}
                    >
                        <AppButton
                            shadow={true}
                            title="Continue with Google"
                            textStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 14,
                                color: colors.pageBackgroundColor
                            }}
                            buttonIcon={{
                                position: 'left',
                                name: 'google',
                                type: 'AntDesign',
                                color: colors.pageBackgroundColor
                            }}
                            style={{
                                borderRadius: 30,
                                width: '90%',
                                alignItems: 'center',
                                backgroundColor: colors.primaryFontColor
                            }}
                            onPress={() => { }}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            alignItems: 'center'
                        }}
                    >
                        <AppButton
                            shadow={true}
                            title="Continue with Apple"
                            textStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 14,
                                color: colors.pageBackgroundColor
                            }}
                            buttonIcon={{
                                position: 'left',
                                name: 'apple1',
                                type: 'AntDesign',
                                color: colors.pageBackgroundColor
                            }}
                            style={{
                                borderRadius: 30,
                                width: '90%',
                                marginTop: 24,
                                alignItems: 'center',
                                backgroundColor: colors.primaryFontColor
                            }}
                            onPress={() => { }}
                        />
                    </View> */}

          <View
            style={{
              flexDirection: 'row',
              // marginHorizontal: 10,
              // // justifyContent: 'center',
              marginTop: height / 19,
              // paddingVertical: 20
              width: '70%',
              alignSelf: 'center',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            {/* <CheckBox
              checked={check}
              onChange={val => setCheck(val)}
              size={20}
              activeColor={colors.primaryFontColor}
              tintColor={colors.pageBackgroundColor}
              containerStyle={{
                backgroundColor: colors.primaryFontColor,
                borderRadius: 5,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginLeft: 15,
              }}>
              Agree to our{' '}
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryThemeColor,
                }}>
                Terms & Conditions{' '}
              </Text>
              Policy
            </Text> */}

            <Text style={{ color: '#fff' }}>
              {' '}
              Already have an Account ?{' '}
            </Text>
            <Pressable
             onPress={() => NavigationService.navigate('SignIn')}
            >
            <Text
              style={{ fontFamily: FONTS.bold, color: COLORS.iconColor, fontSize: 17 }}
              //   onPress={_goRegister}
             
            >
              Login
            </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'flex-end',
    fontSize: moderateScale(13),
    color: COLORS.white,
    paddingTop: moderateScale(11),
    marginRight: moderateScale(10),
    // justifyContent:'center'
  },
});

//make this component available to the app
export default Register;
