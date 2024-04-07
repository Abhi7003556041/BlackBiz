//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  Image,
} from 'react-native';
import {
  AppButton,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import EshopHeader from '../../Component/Header/EshopHeader';
import FeedData from '../../Component/Social/FeedData';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {PostResponseData} from '../../Models/SocialModel';
import {moderateScale, verticalScale} from '../../PixelRatio';
import { initSocial } from '../../redux/reducer/Social';
import { RootState, useAppDispatch } from '../../redux/store';
import NavigationService from '../../Services/NavigationService';
import SocialService from '../../Services/SocialSevices';

// type SocialDataType = {
//   date: string,
//   about: string,
//   small: string,
//   img: ImageSourcePropType,
//   time: string,
//   handlerClick?: () => void,
//   expand?: boolean
// }

type Props = StackScreenProps<AppStackModel, 'Social_Index'>;
// create a component
const Social_Index = (props: Props) => {
  const colors = useTheme();
  //   const [allData,setAllData] = useState<SocialDataType[]>([
  //     {
  //         date: 'Fryday, 17 June 2022',
  //         about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id at at curabitur. Elementum est eget eget arcu sed.',
  //         small: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque lectus semper neque risus nibh etiam duis purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, amet vitae consectetur interdum metus tincidunt. In suspendisse eu aliquet pellentesque consectetur quis diam quis. Massa nam quam amet, dui non. Vitae proin ut vel auctor. Urna vel sit tempus odio tristique eget elementum pellentesque. Sit consectetur ultrices et, faucibus in vivamus. Non vestibulum pellentesque in porttitor maecenas elit, ac. Enim eget maecenas purus nunc lacus, sodales amet. Volutpat facilisi viverra sem in. Volutpat congue pellentesque quam egestas. At urna, cursus nec sem tincidunt vitae donec. Et massa maecenas placerat scelerisque nunc, egestas pellentesque. Volutpat fermentum nisl massa ullamcorper sit ac in interdum. Pulvinar et lorem quis cras porta ipsum. Mauris neque urna lorem pellentesque adipiscing netus. Adipiscing risus non habitant mauris tortor eu tortor. Pharetra at mattis orci montes, eu libero maecenas elementum. Lorem elit amet ut nunc massa purus nulla etiam sem. Urna, aliquet varius nibh mauris. Enim lectus aenean feugiat pretium, fringilla nunc,  ',
  //         img: require('../../Assets/images/news.png'),
  //         time: '11:20 am',
  //         // handlerClick: () => { NavigationService.navigate('Fullnews') }
  //     },

  // ])

  const [allData, setAllData] = useState<Array<PostResponseData>>([]);
  const {userData} = useSelector((state:RootState)=> state.User)

  const {socialdata} = useSelector((state:RootState)=> state.Social)

  useEffect(() => {
    getAllPost();
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      getAllPost()
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);
  const dispatch = useAppDispatch();

  const getAllPost = () => {
    SocialService.getAllPost()
      .then(res => {
        console.log('allpost', res.data);
        setAllData(res.data);
        dispatch(initSocial(res.data))
      })
      .catch(err => console.log('ererr', err));
  };

  return (
    <Container>
      <EshopHeader title="Social" />
      <View>
        <LinearGradient colors={['black', 'black']} style={styles.postView}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              borderColor: 'white',
              flexDirection: 'row',
            }}>
            <Image
              source={{uri:userData?.image}}
              style={styles.commentImage}
            />
            <Pressable
              onPress={() => props.navigation.navigate('CreatePost',{userimg:userData?.image ?? '',fname:userData?.firstname ?? '',lname:userData?.lastname ?? ''})}
              // onPress={() => setModal(true)}

              style={styles.textinput}>
              <Text
                style={{
                  marginLeft: moderateScale(8),
                  color: '#000',
                  padding: moderateScale(2),
                  width: '85%',
                  fontFamily: 'Lato-Bold',
                }}>
                Post something ...
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
        <View
          style={{
            width: '100%',
            backgroundColor: 'grey',
            height: 1,
            // marginHorizontal:5,
            marginBottom: 10,
            // marginHorizontal:10
          }}></View>
      </View>
      <FlatList
        data={socialdata}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <FeedData 
            item={item} 
            onCardPress={() => props.navigation.navigate('SinglePost', {_id:item._id,data:item})}  
          />;
        }}
      />
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  postView: {
    // position: 'absolute',
    // bottom: 0,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // width: width,
    // height: 50,
    // paddingHorizontal: 10,
    // padding: moderateScale(20),
    borderTopWidth: 0.5,
    alignItems: 'center',
    height: verticalScale(70),
    borderColor: 'grey',
    // alignItems:'center',
    backgroundColor: 'white',
    width: '100%',
    // <marginHorizontal:10></marginHorizontal:10>
    // borderWidth:1
  },
  
  commentImage: {
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: moderateScale(35),
    resizeMode: 'cover',
    backgroundColor: 'grey',
    // paddingLeft: moderateScale(10),
    // marginHorizontal:moderateScale(15)
  },
  textinput: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: '80%',
    padding: moderateScale(10),

    borderWidth: 1,
    borderRadius: 40,
    flexDirection: 'row',
    borderColor: 'white',
    // alignSelf: 'center',
    // marginHorizontal:moderateScale(25),
  },
  iconStyle: {
    fontSize: moderateScale(70),
    color: 'black',
    marginBottom: moderateScale(6),
  },
});

//make this component available to the app
export default Social_Index;
