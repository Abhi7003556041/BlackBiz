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
import { CreatePostData, UpdatePostData } from '../../Models/SocialModel';
import {moderateScale, verticalScale} from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import SocialService from '../../Services/SocialSevices';


const Width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

type Props = {
  title: string,
  modalfunc:()=> void,
  id:string,
  fname:string,
  lname:string,
  userimg: string,
}
// create a component
const EditPost: React.FC<Props> = (props) => {
    const [visibility,setVisibilty] = useState<boolean>(true)
    // const [selection,setSelection] = useState<boolean>(false)
    // const [selection1,setSelection1] = useState<boolean>(false)

    const [postType,setPostType] = useState<string>('Public')
    const [title,setTitle] = useState(props.title)

    const [path,setPath] = useState<string>('')
    const [file,setFile] = useState<string>('')
    const [type,setType] = useState<string>('')


  const postUpdate = () => {
    let data:UpdatePostData = {
      title: title,
      isPublish: postType == 'Public' ? true : false
    }
    SocialService.updatePost(data,props.id)
      .then((res)=>{
        console.log('postRes',res)
        Toast.showWithGravity('Post Updated Successfully!', Toast.SHORT, Toast.BOTTOM);
        // NavigationService.navigate('Home')
        props.modalfunc ? props.modalfunc() : NavigationService.back()
      })
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
                props.modalfunc ? props.modalfunc() : NavigationService.back()
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
              Edit Post
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
                postUpdate()
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Bold,
                  color: 'black',
                  textTransform: 'uppercase',
                }}>
                Update
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
            source={{uri:props.userimg}}
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
              {props.fname} {props.lname}
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
          placeholder="Whats On Your Mind ?"
          
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
        {/* <Image
          resizeMode="cover"
          style={{
            width: '90%',
            height: '40%',
            borderRadius: 15,
            alignSelf: 'center',
          }}
          source={{uri:file}}
        /> */}
      </View>
         <View style={styles.bottomRow}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.footerText}>Edit your Post</Text>
                {/* <Icon onPress={this.showVisibilityView} style={{color:'#8a8a8a'}} name="ios-eye"/> */}
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
                flex:3.5
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
                    <Text style={styles.VisibilityText}>Your post will be visiable to everyone</Text>
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
    // flexDirection: 'row',
    justifyContent: 'center',
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
    fontSize: moderateScale(15),
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
export default EditPost;
