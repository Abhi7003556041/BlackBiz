//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {LoginData} from '../../Models/AuthModel';
import {setUser} from '../../redux/reducer/User';
import Toast from 'react-native-simple-toast';

import {useAppDispatch} from '../../redux/store';
import AuthService from '../../Services/AuthService';
import NavigationService from '../../Services/NavigationService';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackModel} from '../../Models/Navigation/AuthStackModel';
const height = Dimensions.get('window').height;

type Props = StackScreenProps<AuthStackModel, 'SignIn'>;

const SignIn = (props: Props) => {
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState<boolean>(false);
  const [loader, setLoader] = React.useState(false);
  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [passward, setPassward] = useState<string>('');
  const colors = useTheme();

  const Fldvalid = (txt: string) => txt && txt.replace(/\s/g, '').length;

  const loginHandeler = () => {
    if (
      Fldvalid(passward) === 0 ||
      passward == '' ||
      Fldvalid(email) === 0 ||
      email == ''
    ) {
      Toast.show('Please Fill Out All Field', Toast.SHORT);
      return;
    } else if (email == '') {
      Toast.show('Invalid Email Id', Toast.SHORT);
      return;
    } else if (passward.length < 8) {
      Toast.show('Password should be Min. 8 Character', Toast.SHORT);
      return;
    }
    // setLoader(true)

    let data: LoginData = {
      email: email,
      password: passward,
    };
    AuthService.login(data)
      .then(result => {
        console.log('loginData>>>>',result.data);
        setEmail('');
        setPassward('');
        // setLoader(false)
        // dispatch(setUser(result.data))
        AuthService.setToken(result.data?.token ?? '');

        // NavigationService.navigate('LoginSuccessPage')
        props.navigation.navigate('LoginSuccessPage', {
          token: result.data?.token ?? '',src:true
        });
      })
      .catch(err => {
        console.log(err);
        setEmail('');
        setPassward('');
        Toast.show(err.message, Toast.SHORT);

        console.log('errrrrrrrrrrrrrrrrr', err.message);
        // setLoader(false)
      });
  };
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
                width: 100,
              }}
              resizeMode="center"
            />
            <Text.Heading
              title="Hi, Welcome Back!"
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 22,
                marginVertical: 20,
              }}
            />
            <Text.SubHeading
              title="Lorem ipsum dolor sit amet"
              style={{
                fontFamily: FONTS.regular,
                fontSize: 12,
                color: colors.primaryFontColor,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 30,
              paddingVertical: 15,
            }}>
            <AppTextInput
              title="Email Id "
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              value={email}
              onChangeText={val => setEmail(val)}
              placeholder="Enter Your email address"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
            />
          </View>

          <View
            style={{
              // marginTop: 30,
              paddingVertical: 15,
            }}>
            <AppTextInput
              // keyboardType='number-pad'

              title="Password"
              titleStyle={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 15,
                marginHorizontal: 15,
              }}
              value={passward}
              onChangeText={val => setPassward(val)}
              placeholder="Enter Your password"
              inputStyle={{
                fontFamily: FONTS.regular,
                fontSize: 15,
              }}
              inputContainerStyle={{
                borderRadius: 20,
                paddingHorizontal: 10,
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
          {/* {loader ?
            <ActivityIndicator color={'white'} size='large'/>
            : */}
          <AppButton
            shadow={true}
            title="Sign In"
            textStyle={{
              color: colors.pageBackgroundColor,
              fontFamily: FONTS.medium,
              fontSize: 20,
            }}
            style={{
              borderRadius: 30,
              marginTop: 40,
              marginHorizontal: 0,
              justifyContent: 'center',
              flexDirection:'row',
              alignItems:'center'
              // width: 251
            }}
            // onPress={() => NavigationService.navigate('LoginSuccessPage')}
            onPress={loginHandeler}
          />
          {/* } */}
          {/* <Pressable
            style={{
              alignSelf: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: COLORS.iconColor,
                fontSize: 15,
                alignSelf: 'flex-end',
                marginTop: 12,
                fontFamily: FONTS.Bold,
              }}>
              Forgot Password?
            </Text>
          </Pressable> */}
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
              marginTop: height / 5.5,
              // paddingVertical: 20
              width: '70%',
              alignSelf: 'center',
              marginBottom: 30,
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

            <Text style={{color: '#fff'}}> Don't have an Account ? </Text>
            <Text
              style={{
                fontFamily: FONTS.bold,
                color: COLORS.iconColor,
                fontSize: 17,
              }}
              onPress={() => NavigationService.navigate('Register')}>
              Register
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SignIn;
