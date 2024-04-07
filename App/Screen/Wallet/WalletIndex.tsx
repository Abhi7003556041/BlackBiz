//import liraries
import moment from 'moment';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar as RNStatusbar,FlatList } from 'react-native';
import { AppBar, Container, Icon, StatusBar } from 'react-native-basic-elements';
import { ScrollView } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-vector-icons/Icon';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { CashBackHistoryResponse } from '../../Models/LoyaltyModal';
import { moderateScale } from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import WalletService from '../../Services/WalletServices';

// create a component
const WalletIndex = () => {

const [myWallet,setMyWallet] = useState<number>(0)
  const [walletHis,setWalletHis] = useState<Array<CashBackHistoryResponse>>([])

  useEffect(()=>{
    getCashBack()
    getCashBackHistory()
  },[])
  const getCashBack = () =>{
    WalletService.getWallet()
      .then((res)=>{
        console.log("cashback>>>>",res.data)
        setMyWallet(res.data.wallet)
      })
  }

  const getCashBackHistory = () => {
    WalletService.getWalletHistory()
      .then((res)=>{
        console.log("cashbackHoistiry",res.data)
        setWalletHis(res.data)
      })
  }
    return (
      <Container>
         <AppBar.Back
        title="Wallet"
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
      <View
      style={{
        flex:1
      }}
      >
        <View
        style={{
           flex:1,
            // backgroundColor:'red',
            alignItems:'center',
            marginHorizontal:10
        }}
        >
            <Text
            style={{
                color:'#F88379',
                fontSize:18,
                fontWeight:'600',
                marginTop:10
            }}
            >
                Your Balance :
            </Text>
            <Text
            style={{
                color:COLORS.primaryThemeColor,
                fontSize:30,
                fontWeight:'bold',
                marginTop:15,
                fontFamily: 'Lato-Light',
                marginRight:10
            }}
            >
                $ {myWallet}
            </Text>
        </View>
        <View
        style={{
            backgroundColor:COLORS.dark11,
            // alignItems:'center',
            // justifyContent:'center',
            flex:4,
            marginHorizontal:10,
            borderTopRightRadius:15,
            borderTopLeftRadius:15
        }}
        >
         
         <Text
            style={{
                color:'#FFF5EE',
                fontSize:18,
                fontWeight:'600',
                marginTop:15,
                marginHorizontal:10,
                // fontFamily:'Brush Script MT'
            }}
            >
                Transactions :
            </Text>  
            {walletHis.length ? 
            <ScrollView>
            <FlatList
            data={walletHis}
            showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return(
                  <View
                  style={{
                      flexDirection:'row',
                      marginTop:20,
                      marginVertical:10,
                      marginHorizontal:10,
                      borderWidth:0.5,
                      borderColor:'grey',
                      padding:10,
                      borderRadius:10,
                      // shadowColor:'black',
                      // elevation:4,
                      // backgroundColor:COLORS.dark11
                  }}
                  >
                  <View
                    style={{
                      backgroundColor: '#50C878',
                      opacity: 0.8,
                      borderWidth: 1,
                      borderColor: 'grey',
                      height: moderateScale(38),
                      width: moderateScale(38),
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="shopping-cart"
                      type="Feather"
                      style={{
                        fontSize: moderateScale(20),
                        color: COLORS.white,
                      }}
                    />
                  </View>
                  <View style={{marginLeft: moderateScale(15),
                  // backgroundColor:'red',
                  flex:1
                  }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: moderateScale(12),
                        color: '#F2D2BD',
                        fontFamily: FONTS.Bold,
                        fontWeight:'bold'
      
                      }}>
                      {item.productsData.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(8),
                        marginTop: moderateScale(5),
                        color: COLORS.white,
                        fontFamily: 'Lato-Light',
                      }}>
                      {moment(item.createdOn).format('DD-MM-YYYY hh:mm A')}
                    </Text>
                  </View>
                  <View
                  style={{
                      alignItems:'center'
                  }}
                  >
                  <Text
                      numberOfLines={1}
                      style={{
                        fontSize: moderateScale(12),
                        color: COLORS.primaryThemeColor,
                        fontFamily: FONTS.Bold,
                        alignSelf:'flex-end'
                      }}>
                      {item.wallet}
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(8),
                        marginTop: moderateScale(5),
                        color: COLORS.white,
                        fontFamily: 'Lato-Light',
                      }}>
                      {item.productsData.categoriesData.name}
                    </Text>
                  </View>
                  </View>
                )
              }
            }
            />
          
            
            </ScrollView>:
            <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: moderateScale(250),
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
              No transaction found
            </Text>
          </View>
}
        </View>
      </View>
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
});

//make this component available to the app
export default WalletIndex;
