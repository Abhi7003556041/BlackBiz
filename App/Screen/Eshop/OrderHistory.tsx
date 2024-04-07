//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import moment from 'moment';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import {Container, Icon} from 'react-native-basic-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import EshopHeader from '../../Component/Header/EshopHeader';
import { COLORS } from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {
  CartHistoryData,
  OrderHistoryResponseData,
} from '../../Models/E_shopModel';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {moderateScale} from '../../PixelRatio';
import E_shopService from '../../Services/E_shopServices';

type Props = StackScreenProps<AppStackModel, 'OrderHistory'>;
// create a component
const OrderHistory = (props: Props) => {
  const [orderHistory, setOrderHistory] = useState<Array<OrderHistoryResponseData>>();
  const [cartHistory, setCartHistory] = useState<Array<CartHistoryData>>([]);
  const [refress, setRefress] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(true);

  //   const [allDetails,setAllDetails] = useState<Array<object>>([])
  console.log('13232424', orderHistory);

  useEffect(() => {
    getOrderHistory()
    setTimeout(()=>{
      setIsPlayerReady(false)
      

    },2000)
  },[]);

 const getOrderHistory = () => {
  E_shopService.orderHistory()
    .then((res)=>{
      console.log('orderHistory>>>',res.data)
      setOrderHistory(res.data)
    })
    setRefress(!refress)
 }
 if (isPlayerReady) {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
    </SafeAreaView>
  );
}else{
  null
}
  return (
    <Container>
      <EshopHeader title="Eshop" />
    <ScrollView>
      {orderHistory?.length  ?
      <View>
        <FlatList
          data={orderHistory}
          renderItem={({item}) => {
            return (
              <Pressable
              onPress={()=>props.navigation.navigate('OrderDetails',{data:item})}
              >
                    <View style={styles.content}>
                      <Image
                        source={{uri: item.productImg[0].preview}}
                        style={{
                          height: 100,
                          width: 100,
                          borderRadius: 5,
                          resizeMode: 'cover',
                        }}
                      />

                      <View style={{paddingHorizontal: 10}}>
                      <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            width: 250,
                            fontFamily: FONTS.Bold,
                            fontWeight:'800'
                            // maxWidth:'80%'
                          }}
                          numberOfLines={2}>
                          OrderId: {item.orderID}
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            width: 200,
                            fontFamily: FONTS.Bold,
                            fontWeight:'800'

                            // maxWidth:'80%'
                          }}
                          numberOfLines={2}>
                          Name: {item.productName}
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            // paddingTop: 5,
                            fontFamily: FONTS.Bold,
                            fontWeight:'800'

                          }}>
                          Quantity : {item.quantity}
                        </Text>

                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            // paddingTop: 5,
                            fontFamily: FONTS.Bold,
                            fontWeight:'800'

                          }}>
                          Price - $ {item.price * Number(item.quantity)}
                        </Text>
                        <Text
                          style={{
                            color: 'black',
                            maxWidth: 200,
                            // paddingTop: 5,
                            fontFamily: FONTS.Bold,
                            fontSize: 12,
                            fontWeight:'800'

                          }}>
                          Date : {moment(item.createdOn).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                      <Pressable
                        style={{...styles.ButtonStyleView,backgroundColor: item.orderStatus == 'cancelled' ? 'red' : 'green'}}
                        // onPress={()=>Navigation.navigate('OrderDetails')}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.Bold,
                            fontSize: moderateScale(10),
                            color: '#f4f4f4',
                            textTransform: 'uppercase',
                          }}>
                          {item.orderStatus}
                        </Text>
                      </Pressable>
                    </View>
              </Pressable>
            );
          }}
        />
      </View>
      : 
      <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(250),
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
              No Order history
            </Text>
          </View>
}
      </ScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  countView: {
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 40,
  },
  content: {
    flexDirection: 'row',
    // height: 128,
    width: '95%',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 8,
    // borderColor: 'white',
    backgroundColor: 'grey',
  },
  ButtonStyleView: {
    width:90,
    height: 27,
    backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    right: 6,
    bottom: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
});

//make this component available to the app
export default OrderHistory;
