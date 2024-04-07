//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar as RNStatusbar,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import {
  AppBar,
  Container,
  StatusBar,
  useTheme,
} from 'react-native-basic-elements';
import {useSelector} from 'react-redux';
import ProfileList from '../../Component/ProfileComp/ProfileList';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale, verticalScale} from '../../PixelRatio';
import {RootState} from '../../redux/store';
import NavigationService from '../../Services/NavigationService';

const profileData = [
  {
    key: '1',
    icon: {
      name: 'shopping',
      type: 'MaterialCommunityIcon',
    },
    title: 'Order History',
    screen: 'OrderHistory',
  },

  {
    key: '2',
    icon: {
      name: 'log-out-sharp',
      type: 'Ionicon',
    },
    title: 'Logout',
    border: true,
    screen: 'logout',
  },
];
// create a component
const Profile = () => {
  const colors = useTheme();
  const {userData} = useSelector((state: RootState) => state.User);

  const listHeaderComponent = () => {
    return (
      <View style={styles.profileImg}>
        <Pressable style={styles.imagePlace}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            style={styles.viewImg}
          />
        </Pressable>
        <Text style={styles.proNameText}>
          {userData?.firstname} {userData?.lastname}
        </Text>
        {/* <View style={styles.cameraView}>
                <Image source={require('../../Assets/MoreScreen/camera.png')} />
            </View> */}
      </View>
    );
  };
  return (
    <Container>
      <AppBar.Back
        title="Profile"
        backgroundColor={'transparent'}
        titlePosition="left"
        titleStyle={{
          fontFamily: FONTS.bold,
          fontSize: 15,
          color: colors.primaryFontColor,
        }}
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
      
      <FlatList
        data={profileData}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeaderComponent}
        renderItem={({item,index}) => {
          return (
            <>
             {/* <Image
                source={require('../../Assets/images/businessLine.png')}
                style={{
                  width: '100%',
                  marginTop: 10,
                }}
              /> */}
              <ProfileList item={item} />
              {/* {index != (profileData.length-1) && */}
              <Image
                source={require('../../Assets/images/businessLine.png')}
                style={{
                  width: '100%',
                //   marginTop: 15,
                }}
              />
            </>
          );
        }}
      />
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewImg: {
    height: moderateScale(110),
    width: moderateScale(110),
    borderRadius: moderateScale(110),
    resizeMode: 'cover',
  },

  cameraView: {
    backgroundColor: COLORS.themecolor,
    width: moderateScale(26),
    height: moderateScale(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(13),
    position: 'absolute',
    top: moderateScale(90),
    left: moderateScale(180),
  },
  imagePlace: {
    borderWidth: 2,
    borderColor: COLORS.themecolor,
    height: moderateScale(118),
    width: moderateScale(118),
    borderRadius: moderateScale(59),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(10),
    alignSelf: 'center',
  },

  proNameText: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    fontFamily: FONTS.Bold,
    color: COLORS.white,
    fontWeight: 'bold',
  },

  IconStyle: {
    fontSize: 25,
    color: COLORS.black,
    // marginLeft: 15
  },

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(3),
  },

  editImg: {
    width: moderateScale(13),
    height: moderateScale(15),
    resizeMode: 'contain',
    marginRight: moderateScale(20),
  },

  listView: {
    marginBottom: moderateScale(50),
  },

  profileImg: {
    marginBottom: moderateScale(10),
  },

  arrowPlace: {
    flex: 1,
  },

  settings: {
    height: verticalScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
  },
  imageStyle: {
    height: verticalScale(40),
    width: moderateScale(70),
    resizeMode: 'contain',
  },
});

//make this component available to the app
export default Profile;
