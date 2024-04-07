import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {FONTS} from '../../Constants/Fonts';
import {
  AppBar,
  AppTextInput,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';

interface tabBarOptions {
  type: undefined;
}

//screen
import Featured from './Featured';
import WebSerise from './Web_Series';
import Movies from './Movies';
import KidsZone from './Kids_Zone';
import OttServices from '../../Services/OttServices';
import {GetAllCategoryData} from '../../Models/OttModel';
import { COLORS } from '../../Constants/Colors';

const TopTab = () => {
  const colors = useTheme();
  const [allCategory, setAllCategory] = useState<Array<GetAllCategoryData>>([]);

  useEffect(() => {
    getAllCategory();
  }, []);
  const getAllCategory = () => {
    OttServices.getAllCategories().then(res => {
      console.log('categoryASlll>>>', res.data);
      setAllCategory(res.data);
    });
  };
  return (
    <Tab.Navigator
      initialRouteName="Featured"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryThemeColor,
        // tabBarInactiveTintColor:'#fff',
        tabBarLabelStyle: {
          fontSize: 10,
          textTransform: 'none',
          fontFamily: FONTS.medium,
        },
        tabBarStyle: {backgroundColor: 'transparent', marginVertical: 5},
      }}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: colors.primaryFontColor,
        },
      }}>
      <Tab.Screen
        name="Featured"
        component={Featured}
        //options={{ tabBarLabel: 'Pepole' }}
        // initialParams={}
      />
      {allCategory.map(val => {
        return (
          <Tab.Screen
            name={val.name}
            component={WebSerise}
            //options={{ tabBarLabel: 'Skill' }}
            initialParams={{_id: val._id, name: val.name}}
          />
        );
      })}

    </Tab.Navigator>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
