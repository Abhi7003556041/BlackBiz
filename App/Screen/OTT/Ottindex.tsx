import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar as RNStatusbar,
  Image,
  Pressable,
  FlatList,
  ImageSourcePropType,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppBar,
  AppTextInput,
  Container,
  Icon,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';

import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import Toptab from './TopTab';
import {COLORS} from '../../Constants/Colors';

const Ottindex = () => {
  const colors = useTheme();
  const [modal, setModal] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  
  return (
    <Container>
      <AppBar.Back
        title="OTT"
        backgroundColor={'transparent'}
        titlePosition="left"
        titleStyle={{
          fontFamily: FONTS.bold,
          fontSize: 15,
          color: colors.primaryFontColor,
        }}
        rightActions={[
          // {
          //   icon: <Icon name="search1" type="AntDesign" size={20} />,
          // },
          {
            icon: (
              <Icon
                name="video-library"
                type="MaterialIcon"
                size={22}
                style={{
                  marginLeft: 25,
                  marginRight: 10,
                }}
              />
            ),

            onPress: () => {
              console.log('bal');
                NavigationService.navigate('OttWatchList')
            },
          },
        ]}
        style={{
          marginTop: RNStatusbar.currentHeight,
        }}
        onLeftIconPress={() => NavigationService.back()}
      />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />

      <Toptab />
      {/* {show ? (
        <Pressable
          style={{
            height: 100,
            width: 150,
            position: 'absolute',
            backgroundColor: COLORS.darkgra,
            right: 30,
            // zIndex: 10,
            borderRadius: 5,
            elevation: 4,
            top:90
          }}
        //   onPress={()=> setShow(false)}
        >
          <Pressable
            style={{
              position: 'absolute',
              right: 3,
              top: 2,
            }}
            onPress={() => setShow(false)}>
            <Icon
              style={{color: COLORS.white}}
              size={22}
              name="circle-with-cross"
              type="Entypo"
            />
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginTop: 15,
              // padding:5
            }}
            
            >
            <Icon
              style={{color: COLORS.white, marginRight: 5}}
              size={22}
              name="video-library"
              type="MaterialIcon"
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 15,
              }}>
              WatchList
            </Text>
          </Pressable>
        </Pressable>
      ) : null} */}
      {/* <Modal
            transparent={true}
            visible={modal}
            animationType="slide"
            onRequestClose={()=> setModal(false)}
            >

            </Modal> */}
    </Container>
  );
};

export default Ottindex;

const styles = StyleSheet.create({});
