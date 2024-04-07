//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Pressable, Image} from 'react-native';
import {Container, Text, useTheme} from 'react-native-basic-elements';

import EshopHeader from '../../Component/Header/EshopHeader';
import {FONTS} from '../../Constants/Fonts';
import {SubCategoryData, SubCategoryResponseData} from '../../Models/E_shopModel';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import E_shopService from '../../Services/E_shopServices';

type Props = StackScreenProps<AppStackModel, 'SubCategory'>;
// create a component
const SubCategory = (props: Props) => {
  const [catId, setCatId] = useState(props.route.params.CatId);
  const [name, setCatname] = useState(props.route.params.name);
  const [categoryData, setCategoryData] = useState <Array<SubCategoryResponseData>>([]);

  useEffect(() => {
    getSubCategory();
  }, []);

  const getSubCategory = () => {
    let data: SubCategoryData = {
      cat_id: catId,
    };
    console.log('data>>>>>>', data);
    E_shopService.getSubCategory(data)
      .then((res) => {
      console.log('adjgajdg>>', res.data);
      setCategoryData(res.data ?? []);
     
    });
  };

  const colors = useTheme;

  const renderCatagoryItem = ({item}: {item: any}) => {
    return (
      <View
        style={{
          // width: '30%',
          alignItems: 'center',
          marginHorizontal: 5,
        }}>
        <Pressable
          style={{
            height: 180,
            width: 150,
            // backgroundColor: 'red',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 15,
          }}
          onPress={() => {
            props.navigation.navigate('SubCategoryProduct',{ CatId:catId, SubCatId:item._id });
          }}
          >
          <Image
            source={{uri: item.img}}
            style={{
              height: 140,
              width: 130,
            borderRadius: 10,
              resizeMode: 'contain',
            }}
          />
        </Pressable>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontFamily: FONTS.bold,
            // marginTop: 8,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <Container style={styles.container}>
      <EshopHeader title="Subcategories" />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoryData}
          horizontal={true}
          renderItem={renderCatagoryItem}
        />
      </View>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,

    backgroundColor: '#000',
  },
});

//make this component available to the app
export default SubCategory;
