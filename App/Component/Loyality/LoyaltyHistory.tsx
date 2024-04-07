//import liraries
import moment from 'moment';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'react-native-basic-elements';
// import { Icon } from 'react-native-vector-icons/Icon';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import { LoyaltyHistoryResponseData } from '../../Models/LoyaltyModal';
import {moderateScale} from '../../PixelRatio';

type Props = {
  item:LoyaltyHistoryResponseData
}

// create a component
const LoyaltyHistory: React.FC<Props> = (props:Props) => {
  
  return ( 
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: moderateScale(15),
          borderWidth: 0.2,
          borderColor: COLORS.darkgra,
          margin: moderateScale(7),
          padding: moderateScale(10),
          backgroundColor: COLORS.gray11,
          borderRadius: 8,
          marginVertical: moderateScale(4),
          width: '93%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#50C878',
                opacity: 0.8,
                borderWidth: 1,
                borderColor: 'grey',
                height: moderateScale(38),
                width: moderateScale(38),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="swap"
                type="AntDesign"
                style={{
                  fontSize: moderateScale(20),
                  color: COLORS.white,
                }}
              />
            </View>

            <View style={{marginLeft: moderateScale(15)}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(12),
                  color: COLORS.black,
                  fontFamily: FONTS.Bold,
                }}>
                {props.item.loyaltyType}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(8),
                  marginTop: moderateScale(5),
                  color: COLORS.black,
                  fontFamily: 'Lato-Light',
                }}>
                {moment(props.item.createdOn).format('DD-MM-YYYY hh:mm A')}
              </Text>
            </View>
            </View>
          
         
            <Text
              style={{
                fontSize: moderateScale(15),
                textAlign: 'center',
                color: props.item.operation == "add" ? '#50C878' : 'red' ,
                fontFamily: FONTS.Bold,
                fontWeight: 'bold',
                alignSelf:'center'
              }}>
              {props.item.operation == "add" ? '+' : '-'}
              {props.item.points}
            </Text>
          
        </View>
      </View>
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
});

//make this component available to the app
export default LoyaltyHistory;
