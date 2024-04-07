//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Image,
  
} from 'react-native';
import {
  AppTextInput,
  Container,
  Icon,
  useTheme,
} from 'react-native-basic-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import {
  AddCommentData,
  AddLikeData,
  CommentsData,
  LikesData,
  SharePostPointData,
  singlePostData,
  SinglePostData,
} from '../../Models/SocialModel';
import {moderateScale} from '../../PixelRatio';
import {RootState, useAppDispatch} from '../../redux/store';
import SocialService from '../../Services/SocialSevices';
import Toast from 'react-native-simple-toast';
import {
  deletedComment,
  updateComment,
  updateLike,
} from '../../redux/reducer/Social';
import DynamicLinkService from '../../Services/DynamikLinkService';
import Share from 'react-native-share';
type Props = {
  likes: Array<LikesData>;
  comments: Array<CommentsData>;
  id: string;
  show?: boolean;
  selfLike: number;
  addpost?:() => void;
};

// create a component
const LikeCommentShare: React.FC<Props> = props => {
  const color = useTheme();
  const [likeResponse, setLikeResponse] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [comments, onChangeComments] = useState<string>('');
  const {userData} = useSelector((state: RootState) => state.User);
  const [refress, setRefress] = useState(false);
  // const {userData} = useSelector((state:RootState)=>state.User)
  const dispatch = useAppDispatch();
  const addLikes = () => {
    let reduxdata : LikesData  = {
      _id:'',
      created_on:'',
      userData: {
        _id: userData?._id ?? '',
        firstname: userData?.firstname ?? '',
        lastname: userData?.lastname ?? '',
        image: userData?.image ?? '',
        mobile: userData?.mobile ?? '',
        email: userData?.email ?? ''
      },
    };
    dispatch(updateLike({postId: props.id, likeData: reduxdata}));
    let data: AddLikeData = {
      post_id: props.id,
    };
    SocialService.addLike(data)
      .then(res => {
        console.log('likesss>>>>', res);
        props.addpost ? props.addpost() : null
      })
      .catch(err => console.log('err', err));
    setRefress(!refress);
  };

  const commentpost = () => {
    let data: AddCommentData = {
      post_id: props.id,
      comment: comments,
    };
    // let user = [...userData,image:"https://cdn-icons-png.flaticon.com/512/149/149071.png"]
    SocialService.addComment(data)
      .then(res => {
        console.log('commentsvz', res);
        onChangeComments('');
        let data = {
          _id: res.data?._id,
          comment: res.data?.comment,
          created_on: res.data?.created_on,
          userData: userData,
        };
        console.log('data', data);
        dispatch(updateComment({Id: props.id, commentData: data}));
        sharePostPoint();
      })
      .catch(err => console.log('err', err));
  };
 
  const onShare = async () => {
    let link = `https://blackbiz.app/post/${props.id}`;


    let newLink = await DynamicLinkService.buildLink(link);
    // console.log("newLink", newLink.shortLink)
    const Options = {  
      message: 'To see this Post click in the link below :-',
      url: newLink.shortLink,
    };
    Share.open(Options)
      .then(res => {
        console.log(res);
        Toast.showWithGravity("Shared Successfully", Toast.SHORT, Toast.BOTTOM);
        sharePostPoint()
      })
      .catch(err => {
        err && console.log(err);
        Toast.showWithGravity("Failed", Toast.SHORT, Toast.BOTTOM);

      });
  };

  const sharePostPoint = () => {
    let data: SharePostPointData = {
      loyaltyType: 'PostSocialpage',
      points: 25,
    };
    SocialService.sharePostPoint(data).then(res => {
      console.log('pointsocial>>>', res);
      Toast.showWithGravity(
        'Loyalty Point Achieved!',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    });
  };

  const DeleteComment = (val: string) => {
    let data: singlePostData = {
      _id: val,
    };
    SocialService.deleteComment(data).then(res => {
      console.log('deleteRes', res.status);
      Toast.showWithGravity('Deleted Successfully!', Toast.SHORT, Toast.BOTTOM);
      dispatch(deletedComment({Id: props.id, cId: val}));
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          // marginBottom:10,
          marginTop: 1,
          marginBottom: 10,
        }}>
        <Pressable
          style={{
            flexDirection: 'row',
          }}
          onPress={() => {
            addLikes();
          }}>
          <Icon
            name={'heart'}
            type="AntDesign"
            style={{
              fontSize: 20,
              color: props.selfLike == 0 ? 'white' : 'red',
              paddingRight: 5,
            }}
          />
          <Text
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 13,
              textAlign: 'justify',
              fontFamily: FONTS.Bold,
              fontWeight: 'bold',
            }}>
            Like
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
          }}
          disabled={props.show ? true : false}
          onPress={() => {
            setVisible(true);
          }}>
          <Icon
            name={'comment'}
            type="MaterialIcon"
            style={{
              fontSize: 18,
              color: 'white',
              paddingHorizontal: 5,
            }}
          />
          <Text
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontFamily: FONTS.Bold,
              fontWeight: 'bold',
              fontSize: 13,
            }}>
            Comment
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
          }}
          onPress={() => {
            onShare();
          }}>
          <Icon
            name={'sharealt'}
            type="AntDesign"
            style={{
              fontSize: 18,
              color: 'white',
              paddingHorizontal: 5,
            }}
          />
          <Text
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontFamily: FONTS.Bold,
              fontWeight: 'bold',
              fontSize: 13,
            }}>
            Share
          </Text>
        </Pressable>
      </View>

      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}>
        <View
          style={{
            flex: 1,
          }}>
          <Pressable
            style={{
              flex: 1.3,
              backgroundColor: '#000000aa',
            }}
            onPress={() => {
              setVisible(false);
            }}></Pressable>
          <View
            style={{
              flex: 3.7,
              backgroundColor: COLORS.black,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal:10,
                // marginVertical:8,
                backgroundColor: '#eacda3',
                height: 35,
                alignItems: 'center',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                Comments
              </Text>
              <Pressable
                style={{
                  marginRight: 5,
                }}
                onPress={() => {
                  setVisible(false);
                }}>
                <Icon
                  name="squared-cross"
                  type="Entypo"
                  size={23}
                  color="black"
                />
              </Pressable>
            </Pressable>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginBottom: 10,
              }}></View>

            <View>
              <ScrollView>
              <FlatList
                data={props.comments}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:40}}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: 10,
                        // justifyContent:'center',
                        // alignItems:'center'
                      }}>
                      <View
                        style={{
                          marginHorizontal: 13,
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
                            // backgroundColor:COLORS.rgba,
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
                        {item.userData._id == userData?._id ? (
                          <Pressable
                            style={{
                              //  flexDirection:'column',

                              height: 28,
                              width: 28,
                              borderRadius: 15,
                              backgroundColor: COLORS.dark11,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginHorizontal: 10,
                              marginTop: 5,
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
                        ) : null}
                      </View>
                    </View>
                  );
                }}
              />
              </ScrollView>
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                // alignSelf:'center',
                width: '100%',
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
                    width: '80%',
                    height: 40,
                  }}
                  placeholderTextColor={COLORS.white}
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
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#2c3e50',
  // },
  IconStyle: {
    fontSize: moderateScale(27),
    color: COLORS.primaryThemeColor,
  },
  textinput: {
    backgroundColor: COLORS.dark11,
    width: '100%',
    padding: moderateScale(8),
    borderRadius: 0,
    flexDirection: 'row',
    height: 65,
    // marginHorizontal:
    // alignSelf: 'center',
    // justifyContent:'flex-end',
    // flex:1
  },
  graytext: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.bold,
    color: COLORS.primaryFontColor,
    textAlign: 'justify',
    paddingBottom: 3,
    // fontWeight:'600'
  },
  graytextComment: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.Medium,
    color: COLORS.gray11,

    textAlign: 'justify',
    // paddingVertical: 10,
  },
});

//make this component available to the app
export default LikeCommentShare;
