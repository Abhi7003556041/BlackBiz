//import liraries
import {StackScreenProps} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {AppTextInput, Card, Container, Icon} from 'react-native-basic-elements';
import {FlatList} from 'react-native-gesture-handler';
import EshopHeader from '../../Component/Header/EshopHeader';
import FeedVideo from '../../Component/Social/FeedVideo';
import LikeCommentShare from '../../Component/Social/LikeCommentShare';
import PostedByWhom from '../../Component/Social/PostedByWhom';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import {
  AddCommentData,
  PostResponseData,
  SharePostPointData,
  singlePostData,
  SinglePostData,
} from '../../Models/SocialModel';
import {moderateScale, verticalScale} from '../../PixelRatio';
import SocialService from '../../Services/SocialSevices';
import Toast from 'react-native-simple-toast';
import NavigationService from '../../Services/NavigationService';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { deletedComment, updateComment } from '../../redux/reducer/Social';

const Width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

type Props = StackScreenProps<AppStackModel, 'SinglePost'>;

// create a component
const SinglePost = (props: Props) => {
  const [id, setId] = useState(props.route.params._id);
  const [singleData, setSingleData] = useState<PostResponseData>();
  const [comments, onChangeComments] = useState<string>('');
  const {userData} = useSelector((state:RootState)=>state.User)
  const {socialdata} = useSelector((state:RootState)=> state.Social)
  const [refress,setRefress] = useState(false)
    const dispatch = useAppDispatch();
  console.log('id', id);
  useEffect(() => {
    // let data = socialdata.filter((it)=>{
    //   return it._id == props.route.params._id
    // })
    // console.log('hiiiiiiiii>>>>',JSON.stringify(data))
    // setSingleData(data[0])
    getSinglePost();
    
  }, []);

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     let data = socialdata.filter((it)=>{
  //       return it._id == props.route.params._id
  //     })
  //     console.log('hiiiiiiiii>>>>',JSON.stringify(data))
  //     setSingleData(data[0])
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [props.navigation]);

  const getSinglePost = () => {
    let data: singlePostData = {
      _id: id,
    };
    SocialService.getSinglePost(data)
      .then(res => {
        console.log('single>>>>>>posr', JSON.stringify(res));
        setSingleData(res.data)
      })
      .catch(error => {
        console.log('error', error);
      });
     
  };
  const commentpost = () => {
    let data: AddCommentData = {
      post_id: id,
      comment: comments,
    };
    SocialService.addComment(data)
      .then(res => {
        console.log('comments', res);
        onChangeComments('');
        Toast.showWithGravity(
          'Comment Sent Successfully!',
          Toast.SHORT,
          Toast.BOTTOM,
        );
        sharePostPoint()
        let data = {
          _id:res.data?._id,
          comment:res.data?.comment,
          created_on:res.data?.created_on,
          userData: userData
        }
        console.log("data", data)
        // dispatch(updateComment({Id:id,commentData:data}))
        // let datac = socialdata.filter((it)=>{
        //   return it._id == id
        // })
        // console.log('hiiiiiiiii>>>>',JSON.stringify(data))
        // setSingleData(datac[0])
        getSinglePost()
        
      })
      .catch(err => console.log('err', err));
      setRefress(!refress)
  };

  const sharePostPoint = () => {
    let data : SharePostPointData = {
      loyaltyType:"PostSocialpage",
      points:25
    }
    SocialService.sharePostPoint(data)
      .then((res)=>{
        console.log('pointsocial>>>',res)
        Toast.showWithGravity('Loyalty Point Achieved!', Toast.SHORT, Toast.BOTTOM);
      })
  }

  const DeleteComment = (val:string) =>{
    let data: singlePostData = {
      _id: val
    }
    SocialService.deleteComment(data)
      .then((res)=>{
        console.log('deleteRes',res.status)
        Toast.showWithGravity('Deleted Successfully!', Toast.SHORT, Toast.BOTTOM);
        // dispatch(deletedComment({Id:id,cId:val}))
        getSinglePost()
      })

      setRefress(!refress)
  }

  console.log('likes>>>', singleData?.likes);

  console.log('id>>>>>', id);
  return (
    <Container>
      {/* <EshopHeader title="Social" /> */}
      <View style={styles.headerView}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              NavigationService.back();
            }}>
            <Icon
              name="arrow-back"
              type="Ionicon"
              style={{fontSize: moderateScale(20), color: COLORS.white}}
            />
          </Pressable>
          <Text
            style={{
              fontFamily: FONTS.Bold,
              fontSize: moderateScale(17),
              color: COLORS.white,
              marginLeft: moderateScale(5),
            }}>
            {' '}
            SinglePost
          </Text>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}>
        <Card style={styles.content}>
          <PostedByWhom
            img={singleData?.image ?? []}
            fname={singleData?.userData.firstname ?? ''}
            lname={singleData?.userData.lastname ?? ''}
            time={singleData?.created_on ?? ''}
            id={singleData?._id ?? ''}
            userimg={singleData?.userData.image ?? ''}
            title={singleData?.title}
            show={true}
          />

          {/* {

                    postdata.image[0].image != '' ?
                            <FeedVideo
                                url={postdata.image}
                                postData={postdata}
                                // scrollY={scrollY}
                                // dataIndex={dataIndex}
                            />
                            : null
                    } */}
          <View
            style={{
              marginVertical: moderateScale(10),
            }}>
            <Text style={{...styles.graytext, color: COLORS.white}}>
              {singleData?.title}
            </Text>
          </View>
          <FeedVideo image={singleData?.image ?? null} />
          <View
            style={{
              width: '100%',
              backgroundColor: 'grey',
              height: 1,
              // marginHorizontal:5,
              marginBottom: 10,
              marginVertical: 10,
              // marginHorizontal:10
            }}></View>

          <LikeCommentShare
            likes={singleData?.likes ?? []}
            comments={singleData?.comments ?? []}
            id={id}
            show={true}
            selfLike={singleData?.selfLike ?? 0}
            addpost={()=>getSinglePost()}
           
          />
          <View
            style={{
              // marginHorizontal: moderateScale(5),
              marginVertical: moderateScale(5),
            }}>
            {/* <Text style={{...styles.graytext,color:COLORS.white}}>
              Liked by ({singleData?.likes.length }) People
            </Text> */}
          </View>
          {/* */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#eacda3',
            }}>
            Comments :
          </Text>
          <View
            style={{
              // flex:1,
              backgroundColor: COLORS.dark11,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <FlatList
              data={singleData?.comments}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:20}}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      // marginVertical:13,
                      marginTop: 15,
                      // flex:1
                      // justifyContent:'center',
                      // alignItems:'center'
                    }}>
                    <View
                      style={{
                        marginRight: 15,
                        // marginVertical:5
                      }}>
                      <Image
                        source={{uri: item.userData.image}}
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 20,

                          // marginHorizontal:20
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                      }}>
                      <View
                        style={{
                          // width:100,
                          // height:40,
                          backgroundColor: COLORS.rgba,
                          padding: 5,
                          borderRadius: 10,
                          maxWidth: 260,
                        }}>
                        <Text style={styles.graytext}>
                          {item.userData.firstname} {item.userData.lastname}
                        </Text>
                        <Text style={styles.graytextComment}>
                          {item.comment}
                        </Text>
                      </View>
                      {item.userData._id == userData?._id ?
                      <Pressable
                        style={{
                          //  flexDirection:'column',

                          height: 25,
                          width: 25,
                          borderRadius: 15,
                          backgroundColor: COLORS.rgba,
                          alignItems: 'center',
                          justifyContent: 'center',
                          // marginHorizontal:10
                        }}
                        onPress={() => {
                          DeleteComment(item._id);
                        }}>
                        <Icon
                          name="delete"
                          type="AntDesign"
                          color="white"
                          size={17}
                        />
                      </Pressable>
                      :null
              }
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </Card>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          // alignSelf:'center',
          width: '100%',
          borderTopWidth: 1,
          borderColor: 'lightgrey',
          // alignItems:'center'
        }}>
        <View style={styles.textinput}>
          <AppTextInput
            placeholder="Post your comment"
            value={comments}
            onChangeText={(value: string) => onChangeComments(value)}
            style={{
              color: COLORS.white,
              marginLeft: moderateScale(10),
              padding: moderateScale(2),
              width: '83%',
              height: 40,
              // borderColor:'black'
            }}
            placeholderTextColor={COLORS.white}
            cursorColor="dark"
          />
          <View
            style={{
              alignSelf: 'center',
            }}>
            {/* {comtLoad ? (
                        <ActivityIndicator color={COLORS.primaryGreen} />
                      ) : ( */}
            <Pressable
              onPress={() => commentpost()}
              style={{
                marginLeft: 20,
              }}>
              <Icon
                name="md-send-sharp"
                type="Ionicon"
                style={styles.IconStyle}
                // size={35}
              />
            </Pressable>
            {/* )} */}
          </View>
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
  content: {
    backgroundColor: COLORS.dark11,
    paddingVertical: moderateScale(10),
    width: '100%',
    paddingHorizontal: moderateScale(12),
    alignSelf: 'center',
    // height:'100%'
    // flex:1
    // borderWidth:2
  },
  graytext: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'justify',
    paddingBottom: 3,
    paddingHorizontal: 5,

    // fontWeight:'600'
  },
  graytextComment: {
    fontSize: moderateScale(11),
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'justify',
    paddingHorizontal: 5,
  },
  IconStyle: {
    fontSize: moderateScale(27),
    color: COLORS.primaryThemeColor,
  },
  textinput: {
    backgroundColor: COLORS.black,
    width: '100%',
    padding: moderateScale(8),
    borderRadius: 0,
    flexDirection: 'row',
    height: 65,
    paddingHorizontal: 18,
    // marginHorizontal:8
    // alignSelf: 'center',
    // justifyContent:'flex-end',
    // flex:1
  },
  headerView: {
    height: verticalScale(60),
    width: Width,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    // marginTop: moderateScale(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(7),
    marginTop: 17,
  },
});

//make this component available to the app
export default SinglePost;
