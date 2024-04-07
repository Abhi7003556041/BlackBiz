//import liraries

import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Container, Icon, useTheme} from 'react-native-basic-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Rating} from 'react-native-ratings';

import EshopHeader from '../../Component/Header/EshopHeader';
import {FONTS} from '../../Constants/Fonts';
import {
  SubCategoryProductData,
  SubCategoryProductResponse,
  SubProData,
} from '../../Models/E_shopModel';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import E_shopService from '../../Services/E_shopServices';

type Props = StackScreenProps<AppStackModel, 'SubCategoryProduct'>;
// create a component
const SubCategoryProduct = (props: Props) => {
  const [catId, setCatId] = useState(props.route.params.CatId);
  const [subCatId, setSubCatId] = useState(props.route.params.SubCatId);
  const [popularData, setPopulardata] = useState<Array<SubProData>>([]);
  const [refress, setRefress] = useState(false);

  const colors = useTheme();  

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    let data: SubCategoryProductData = {
      cat_id: catId,
      sub_cat_id: subCatId,
    };
    E_shopService.getSubCategoryProduct(data)
    .then(res => {
      console.log('subcatPro>>>>>', res.data);
      setPopulardata(res.data ?? []);
    });
    setRefress(!refress)
  };

  return (
    <Container>
      <EshopHeader title="Eshop" />
      

      <View>
        <FlatList
          data={popularData}
          contentContainerStyle={{
            paddingBottom:80
          }}
          renderItem={({item}) => {
           console.log('afafafa',item._id)
            return (
              <Pressable
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  paddingBottom: 30,
                }}
                onPress={()=>{
                    props.navigation.navigate('ViewProduct',{ProductId:item._id})
                }}
                
              >
                
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'white',
                    width: '100%',
                    borderRadius: 20,
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                    
                  {item.img.map(res => {
                    console.log('.>>>>>>>>......',res)
                    return (
                      <View
                        style={{
                          width: '30%',
                        }}>
                        <Image
                          source={{uri: res.preview}}
                          resizeMode="cover"
                          style={{
                            position: 'absolute',
                            left: -5,
                            top: -5,
                            width:100,
                            height:110,
                            borderRadius:10
                          }}
                        />
                      </View>
                    );
                  })}

                  <View
                    style={{
                      width: '70%',
                      marginTop: 10,
                      paddingHorizontal: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          color: colors.pageBackgroundColor,
                          fontSize: 14,
                        }}>
                        {item.name}
                      </Text>

                      <Icon
                        name=  "heart"
                        type= {item?.wishlistCount == 1 ? "AntDesign" : "EvilIcon"}
                        size={item?.wishlistCount == 1 ? 13.5 : 20}
                        style={{
                          color: 'red' 
                        }}    
                      />
                    </View>

                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        color: colors.pageBackgroundColor,
                        paddingVertical: 5,
                        fontSize: 16,
                      }}>
                      {item.sell_price}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Rating
                          ratingTextColor="#fff"
                          imageSize={14}
                          showRating={false}
                          readonly={true}
                          startingValue={item.avgRating}

                        />
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            color: colors.pageBackgroundColor,
                            fontSize: 12,
                            marginLeft: 10,
                          }}>
                          {item.avgRating.toFixed(1)}
                        </Text>
                      </View>

                      <View
                        style={{
                          height: 24,
                          width: 51,
                          backgroundColor: colors.pageBackgroundColor,
                          borderRadius: 12,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon name="shopping-cart" type="Feather" size={15} />
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
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
export default SubCategoryProduct;
