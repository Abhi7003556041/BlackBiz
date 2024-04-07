//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  StatusBar as RNStatusbar,
} from 'react-native';
import {AppBar, Icon, StatusBar} from 'react-native-basic-elements';
import { useSelector } from 'react-redux';
import { COLORS } from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import { moderateScale } from '../../PixelRatio';
import { RootState } from '../../redux/store';
import NavigationService from '../../Services/NavigationService';

type Props = StackScreenProps<AppStackModel, 'Wishlist'>;

// create a component
const EshopHeader = (props: {title: any}) => {
  const {cartData} = useSelector((state:RootState)=> state.Cart)
  const allIcon = [
    // {
    //   icon: (
    //     <Icon
    //       name="search1"
    //       type="AntDesign"
    //       size={17}
    //       style={{
    //         //marginLeft: 28,
    //         marginRight: 20,
    //       }}
    //     />
    //   ),

    //   // onPress: () => NavigationService.navigate('MyCourses')
    // },
    {
      icon: (
        <Pressable
        onPress={()=> NavigationService.navigate('MyCart')}
        >
          {cartData.length ? 
          <View
          style={styles.Countcontainer}
          >
          <Text style={styles.count}>
                {cartData.length}
            </Text>
          </View>
          :null
    }
        <Icon
          name="shoppingcart"
          type="AntDesign"
          size={20}
          style={{
            //marginLeft: 28,
            marginRight: 20,
          }}
        />
        </Pressable>
      ),
      
    },
    {
      icon: <Icon name="favorite-border"
       type="MaterialIcon"
        size={20} />,
      onPress: () => NavigationService.navigate('Wishlist'),
    },
  ];
  return (
    <View>
      <AppBar.Back
        title={props.title ? props.title : 'Business'}
        titleStyle={{
          fontFamily: FONTS.semibold,
          fontSize: 18,
        }}
        backgroundColor={'transparent'}
        titlePosition="left"
        // {props.title == 'Payment' ? null :}
        rightActions={props.title == 'Social' ? [] : allIcon}
        onLeftIconPress={() => NavigationService.back()}
        style={{
          marginTop: RNStatusbar.currentHeight,
          marginHorizontal: 5,
        }}
      />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  Countcontainer : {
    position:'absolute',
    top:-6,
    right:12,
    backgroundColor:COLORS.button,
    width: moderateScale(12),
    height:moderateScale(12),
    borderRadius:moderateScale(6),
    justifyContent:'center',
    alignItems:'center',
    elevation:4
    // backgroundColor:COLORS.primaryGreen
},
count : {
    // fontFamily:Font.Bold,
    color:COLORS.white,
    alignSelf:'center',
    fontFamily:FONTS.Medium,
    fontSize:moderateScale(8),
    marginBottom:1.5
}
});

//make this component available to the app
export default EshopHeader;
