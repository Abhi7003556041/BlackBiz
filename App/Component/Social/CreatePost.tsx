//import liraries
import { StackScreenProps } from '@react-navigation/stack';
import {  Radio } from 'native-base';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  Modal,
} from 'react-native';
import {
  AppTextInput,
  Container,
  Icon,
  RadioButton,
  StatusBar,
} from 'react-native-basic-elements';
import ImageCropPicker from 'react-native-image-crop-picker';
import Toast from 'react-native-simple-toast';
import {COLORS} from '../../Constants/Colors';
import {FONTS} from '../../Constants/Fonts';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import { CreatePostData, SharePostPointData } from '../../Models/SocialModel';
import {moderateScale, verticalScale} from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import SocialService from '../../Services/SocialSevices';
import Video from 'react-native-video';


const Width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

type Props = StackScreenProps<AppStackModel,'CreatePost'>
// create a component
const CreatePost = (props:Props) => {
    const [visibility,setVisibilty] = useState<boolean>(false)
    // const [selection,setSelection] = useState<boolean>(false)
    // const [selection1,setSelection1] = useState<boolean>(false)

    const [postType,setPostType] = useState<string>('Public')
    const [title,setTitle] = useState<string>('')

    const [path,setPath] = useState<string>('')
    const [file,setFile] = useState<string>('')
    const [type,setType] = useState<string>('Photo')


  const addPost = () => {
    let data:CreatePostData = {
      title: title,
      image:file ? file : null,
      isPublish: postType == 'Public' ? true : false
    }
    SocialService.addPost(data)
      .then((res)=>{
        console.log('postRes',res)
        Toast.showWithGravity('Post Submitted Successfully!', Toast.SHORT, Toast.BOTTOM);
        sharePostPoint()
        props.navigation.navigate('Social_Index')
      })
  }

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

  const imageHandler = (type:string) => {
    ImageCropPicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        mediaType:'photo'
      }).then((image) => {
        console.log(image);
        // this.setState({
        //     path : image.path,
        //     uploading:true,
        // })
        setPath(image.path)
        // setFile("https://backbizod.s3.us-east-1.amazonaws.com/User/post/63a97ad81eedd8230c2a10f0/ddd2a150-85ca-11ed-8e97-ddf8dabd4e82.jpg")
  SocialService.uploadFile(image)
  .then((result)=>{
    console.log('uplodsfj',result)
    setType('Photo')
    setFile(result.url)
  })
  .catch((err)=>console.log('errrr',err))
        // .then((res)=>{
        //   console.log('uplodhsd',res)
        //   setFile(res.url)
        //   setTitle(res.type)
        // })
        
        
      });   
}

const videoHandler = (type:any) => {
  ImageCropPicker.openPicker({
    title: 'Select video',
    mediaType: 'video',
    path:'video',
    quality: 1,
    width: 300,
    height: 400,
    }).then((video) => {
      console.log(video);
     
      setPath(video.path)
      // setFile("https://backbizod.s3.us-east-1.amazonaws.com/User/post/63a97ad81eedd8230c2a10f0/ddd2a150-85ca-11ed-8e97-ddf8dabd4e82.jpg")
SocialService.uploadFile(video)
.then((result)=>{
  console.log('uplodsfj',result)
  setType('Video')
  setFile(result.url)
})
.catch((err)=>console.log('errrr',err))
    });   
}

const mediaHandler = (type:string) => {
  ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      mediaType:'photo'
    }).then((image) => {
      console.log(image);
      
      setPath(image.path)
      // setFile("https://backbizod.s3.us-east-1.amazonaws.com/User/post/63a97ad81eedd8230c2a10f0/ddd2a150-85ca-11ed-8e97-ddf8dabd4e82.jpg")
SocialService.uploadFile(image)
.then((result)=>{
  console.log('uplodsfj',result)
  setFile(result.url)
})
.catch((err)=>console.log('errrr',err))
    });   
}
   
  return (
    <Container>
      <StatusBar
        backgroundColor={COLORS.black}
        barStyle="light-content"
        hidden={false}
      />
      <View>
        <View style={styles.headerView}>
          <View style={{width: '75%', flexDirection: 'row'}}>
            <Pressable
              onPress={()=> {
                NavigationService.back()
              }}
            >
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
              Create Post
            </Text>
          </View>
          <View style={{width: '25%'}}>
            <Pressable
              style={{
                ...styles.button,
                borderColor: 'grey',
              }}
              //   disabled={disable}
              onPress={()=>{
                addPost()
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Bold,
                  color: 'grey',
                  textTransform: 'uppercase',
                }}>
                Post
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: moderateScale(10),
          }}>
          <Image
            source={{uri:props.route.params.userimg}}
            style={{
              height: moderateScale(50),
              width: moderateScale(50),
              borderRadius: moderateScale(25),
            }}
            resizeMode="cover"
            // borderRadius={50}
          />
          <View
            style={{
              marginLeft: moderateScale(10),
            }}>
            <Text
              style={{
                fontFamily: FONTS.Bold,
                color: COLORS.white,
              }}>
              {props.route.params.fname} {props.route.params.lname}
              
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                  onPress={()=> setVisibilty(true)}
                style={styles.postType}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: moderateScale(10),
                    fontFamily: FONTS.Bold,
                  }}>
                  <Icon
                    name={'globe'}
                    type={'Entypo'}
                    style={{
                      color: 'grey',
                      fontSize: moderateScale(10),
                    }}
                  />{' '}
                  {postType ? postType : 'Public'} {''}
                  <Icon
                    name="caretdown"
                    type="AntDesign"
                    style={{
                      color: 'grey',
                      fontSize: moderateScale(10),
                    }}
                  />
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <AppTextInput
          style={{
            fontFamily: FONTS.Bold,
            fontSize: moderateScale(17),
            // marginLeft: moderateScale(10),
            marginHorizontal: moderateScale(10),
            color: COLORS.white,
            maxHeight: moderateScale(200),
            
            // borderWidth:
            // borderColor:'black'
          }}
          inputContainerStyle={{
            borderWidth:0,
            
            // height:40
          }}
          placeholderTextColor={COLORS.white}
          placeholder="What's On Your Mind ?"
          
            value={title}
            onChangeText={(val)=> setTitle(val)}
          multiline={true}
          autoFocus={false}
          // ref={this.inputRef}
        />
        <Text
          style={{
            color: COLORS.white,
            opacity: 0.7,
            paddingHorizontal: 15,
            fontSize: 10,
            paddingBottom:15
          }}>
          Sexual or violent content is strictly prohibited. All violators will
          be banned. Do not expose your personal info such as phone or location.
        </Text>
  {type=='Photo'?
  <View>
        <Image
          resizeMode="cover"
          style={{
            width: '90%',
            height: '60%',
            borderRadius: 15,
            alignSelf: 'center',
          }}
          source={{uri:file}}
        />
        </View>
        :
        <View>
        <Video
         source={{uri:file}}   // Can be a URL or a local file.

         paused={false}
         controls={true}            // Callback when video cannot be loaded
         style={{
          width: '90%',
          height: '60%',
          borderRadius: 15,
          alignSelf: 'center',
        }}
         resizeMode='cover'
        />
        </View>
      }
      </View>
         <View style={styles.bottomRow}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.footerText}>Add To your Post</Text>
                {/* <Icon onPress={this.showVisibilityView} style={{color:'#8a8a8a'}} name="ios-eye"/> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: moderateScale(100),
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                  <Pressable
                  onPress={()=> imageHandler('image')}
                  >
                <Icon
                  style={{color: '#8a8a8a'}}
                  name="ios-camera"
                  size={25}
                />
                </Pressable>
                {/* <Pressable
                  onPress={()=> videoHandler('video')}
                  >
                <Icon
                  style={{color: '#8a8a8a'}}
                  name="ios-videocam"
                //   onPress={() => this.permissionsMediaHandler('video')}
                />
                </Pressable> */}
                <Pressable
                  onPress={()=> mediaHandler('image')}
                  >
                <Icon
                  style={{color: '#8a8a8a', fontSize: moderateScale(22)}}
                  name="md-images"
                //   onPress={() =>  this.permissionsMediaHandler('photo')}
                />
                </Pressable>
              </View>
            </View>
        <Modal
        transparent={true}
        visible={visibility}
        onRequestClose={()=> setVisibilty(false)}
        >
           <View
           style={{
            flex:1
           }}
           >
            <Pressable            
            style={{
                flex:3.2
            }}
            onPress={()=> setVisibilty(false)}
            >
            </Pressable>
            <View
            style={{
                flex:1,
                backgroundColor:COLORS.dark11
            }}
            >
                <Pressable
                style={styles.CloseBar}
                onPress={()=> setVisibilty(false)}
                >
                </Pressable>
                <Pressable
                style={{
                    margin:10
                }}
                >
                    <Text style={styles.HeadingTitle}>Who can see this post?</Text>
                    <Text style={styles.HeadingSubTitle}>
                     Manage who can see your post.
                    </Text>
                    <View
                    style={{
                        marginTop:15,
                        marginBottom:5,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginRight:10
                    }}
                    >
                   <View
                   style={{
                    flexDirection:'row',
                    // marginHorizontal:10
                   }}
                   >
                    <Icon style={{color:COLORS.primaryThemeColor,padding:5}} name="users" type="FontAwesome5" size={25}/>
                    <View
                    style={{
                        marginHorizontal:15
                    }}
                    >
                    <Text style={styles.VisibilityName}>Public</Text>
                    <Text style={styles.VisibilityText}>Your post will be visible to everyone</Text>
                    </View>
                    </View>
                    <RadioButton
                    activeColor={'white'}
                    selected={postType == 'Public'}
                    onChange={(val)=>{
                      
                      setPostType('Public')
                    }}
                    />
                    
                    </View>


                    <View
                    style={{
                        marginTop:15,
                        marginBottom:0,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginRight:10

                    }}
                    >
                   <View
                   style={{
                    flexDirection:'row',
                    // marginHorizontal:10
                   }}
                   >
                    <Icon style={{color:COLORS.primaryThemeColor,padding:5}} name="user-lock" type="FontAwesome5" size={23}/>
                    <View
                    style={{
                        marginHorizontal:15
                    }}
                    >
                    <Text style={styles.VisibilityName}>Only me</Text>
                    <Text style={styles.VisibilityText}>Your post only visiable to you</Text>
                    </View>
                    </View>
                    <RadioButton
                    activeColor={'white'}
                    selected={postType == 'Only me'}
                    onChange={(val)=>{
                      
                      setPostType('Only me')
                    }}
                    />
                    
                    </View>
               
                </Pressable>
                </View>
           </View>
        </Modal>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerView: {
    height: verticalScale(60),
    width: Width,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    // marginTop: moderateScale(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
  },
  button: {
    height: verticalScale(35),
    width: moderateScale(80),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.primaryThemeColor,
    // elevation:8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    // alignSelf: 'center',
  },
  bottomRow: {
    position: 'absolute',
    bottom: moderateScale(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Width,
    height: verticalScale(50),
    paddingHorizontal: moderateScale(10),
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: COLORS.dark11,
    // top:moderateScale(700)
  },
  footerText: {
    // fontFamily: 'Roboto-SemiBold',
    fontSize: moderateScale(13),
    letterSpacing: 0.07,
    color: '#95969f',
  },
  postType: {
    padding: moderateScale(5),
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  CloseBar: {
    alignSelf: 'center',
    height: 5,
    borderBottomWidth: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: 100,
    backgroundColor: '#eee',
    marginTop: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
},
HeadingList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#fff'
},
HeadingTitle: {
    fontFamily: FONTS.Bold,
    marginBottom: 3,
    color: '#fff'
},
HeadingSubTitle: {
    fontSize: 10,
    fontFamily: FONTS.Regular,
    color: '#fff'

},
VisibilityName: {
    fontFamily: FONTS.Bold,
    color: '#fff',
},
VisibilityBody: {
    borderColor: 'transparent',
},
VisListRight: {
    borderColor: 'transparent',
    marginRight: 10
},
VisibilityText: {
    fontSize: 10,
    color: '#fff',
    letterSpacing: .5
},
});

//make this component available to the app
export default CreatePost;
