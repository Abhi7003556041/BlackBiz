//import liraries

import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable,Alert, Image} from 'react-native';
import {Container, Icon} from 'react-native-basic-elements';
import Toast from 'react-native-simple-toast';

import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {ProfileResponseData} from '../../Models/AuthModel';
import {moderateScale, verticalScale} from '../../PixelRatio';
import { logOut } from '../../redux/reducer/User';
import { useAppDispatch } from '../../redux/store';
import AuthService from '../../Services/AuthService';
import NavigationService from '../../Services/NavigationService';

type Props = {
  item: any;
};
// create a component
const ProfileList: React.FC<Props> = ({item}) => {
    const dispatch = useAppDispatch()
    const logout = () => {
        
        Alert.alert(
            "Logout Alert",
            "Are you sure?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                console.log("OK Pressed")
                AuthService.setAccount(null);
                dispatch(logOut());
                Toast.show('Logged Out Successfull', Toast.LONG);
            } }
            ]
          );
        
      };

    const gonext = () => {
        if (item.screen == 'logout') {
          logout();
        }
        else {
          NavigationService.navigate(item.screen);
        }
      };  
  return (
    
      <Pressable style={styles.container} onPress={() => gonext()}>
        <View style={styles.roundView}>
           <Icon
              name={item.icon.name}
              type={item.icon.type}
              style={styles.IconStyle}
            />
        </View>
        <Text style={styles.titleText}>{item.title}</Text>
        <Icon name="chevron-right" type="Feather" style={styles.righIcon} />
      </Pressable>
    
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black,

    paddingVertical: moderateScale(13),
    // borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray11,
    marginHorizontal:10
  },
  titleText: {
    flex: 1,
    fontSize: moderateScale(13),
    fontFamily: FONTS.Regular,
    color: COLORS.white,
  },

  lisImg: {
    resizeMode: 'contain',
  },

  righIcon: {
    fontSize: moderateScale(20),
    color: COLORS.gray11,
    resizeMode: 'contain',
  },

  roundView: {
    height: moderateScale(36),
    width: moderateScale(36),
    borderRadius: moderateScale(18),
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(18),
  },

  IconStyle: {
    fontSize: 25,
    color: COLORS.themecolor,
    // marginLeft: 15
  },
  imageStyle: {
    height: verticalScale(10),
    width: moderateScale(30),
    resizeMode: 'contain',
  },
});

//make this component available to the app
export default ProfileList;
