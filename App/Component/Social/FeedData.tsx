//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Container, useTheme} from 'react-native-basic-elements';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {PostResponseData} from '../../Models/SocialModel';
import {moderateScale} from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import FeedVideo from './FeedVideo';
import LikeCommentShare from './LikeCommentShare';
import PostedByWhom from './PostedByWhom';

type Props = {
  item: PostResponseData;
  onCardPress?: () => void;
};

const FeedData: React.FC<Props> = ({item, onCardPress}) => {
  const color = useTheme();
  console.log('likesoca', item.likes);
  return (
    <Container>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.dark11,
          marginHorizontal: 5,
          marginVertical: 10,
          borderRadius: 10,
          paddingHorizontal: 5,
        }}>
        <Pressable
          style={{
            // marginHorizontal:5,
            marginVertical: 10,

            // borderColor:'grey',
            // borderWidth:1,
            padding: 5,
          }}
          onPress={() => (onCardPress ? onCardPress() : null)}>
          <PostedByWhom
            img={item.image}
            fname={item.userData.firstname}
            lname={item.userData.lastname}
            time={item.created_on}
            id={item._id}
            userimg={item.userData.image}
            title={item.title}
            userId={item.userData._id}
          />
          <Text style={styles.graytext1}>{item.title}</Text>

          <FeedVideo image={item.image ? item.image : null} />
        </Pressable>
        <View
          style={{
            width: '100%',
            backgroundColor: 'grey',
            height: 1,
            // marginHorizontal:5,
            marginBottom: 10,
            // marginHorizontal:10
          }}></View>
        <LikeCommentShare
          likes={item.likes}
          comments={item.comments}
          id={item._id}
          selfLike={item.selfLike}
        />
        {item.likes.length > 0 ? (
          <Text style={styles.graytext}>
            Liked by ({item.likes.length}) People
          </Text>
        ) : null}
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
  graytext: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'justify',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  graytext1: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.bold,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'justify',
    paddingVertical: 10,
  },
});

//make this component available to the app
export default FeedData;
