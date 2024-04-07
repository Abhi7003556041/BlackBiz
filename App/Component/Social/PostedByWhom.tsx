//import liraries

import moment from 'moment';
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Modal, Dimensions} from 'react-native';
import {AppTextInput, Container, Icon, RadioButton, useTheme} from 'react-native-basic-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { ReportPostData } from '../../Models/SocialModel';
import { moderateScale, verticalScale } from '../../PixelRatio';
import { RootState } from '../../redux/store';
import NavigationService from '../../Services/NavigationService';
import SocialService from '../../Services/SocialSevices';
import ConfirmationModal from './ConfirmationModal';
import EditPost from './EditPost';

const Width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


type Props = {
  img:Array<string>,
  fname:string,
  lname:string,
  time:string,
  id:string,
  userimg: string,
  title?: string,
  show?:boolean,
  userId?:string
}

// create a component
const PostedByWhom: React.FC<Props> = (props) => {
  const colors= useTheme()
  const [show, setshow] = useState<boolean>(false);
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const {userData} = useSelector((state:RootState)=>state.User)


  const [visibility,setVisibilty] = useState<boolean>(false)
  const [title,setTitle] = useState<string>('')

  const postReport = () =>{
    let data:ReportPostData = {
      post_id:props.id,
      report:title
    }
    SocialService.postReport(data)
      .then((res)=>{
        console.log('reportstatus',res)
        setTitle('')
        setReportModal(false)
      })
      .catch((err)=>console.log(err))
  }

  const falseModal = () =>{
    setDeleteModal(false)
  }
  const falseEditModal = () =>{
    setEditModal(false)
  }

  return (
    <View>
      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-between",
        // marginHorizontal:10
      }}
      >
      <View style={styles.rowview}>
        <TouchableOpacity
        //   onPress={() =>
        //     Navigation.navigate('DigiCardDetails', {uid: data?.id})
        //   }
          >
            {/* {props.img.map((res)=>{
                return( */}
                  <Image
              source={{uri:props.userimg}}
              style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              resizeMode: 'cover',
              backgroundColor: 'white',
            }}
          />
                {/* )
              }
            )} */}
          
        </TouchableOpacity>
        <View style={{marginHorizontal: moderateScale(10)}}>
          <Text style={styles.boldtext}>
            {props.fname} {props.lname}
          </Text>
          <View style={styles.rowview}>
            {/* <Text style={styles.graytext}>
                Kolkata
                </Text>
            <Pressable>
            <Icon
              name="dot-single"
              type="Entypo"
              style={{
                ...styles.icon,
                color: 'grey',
                fontSize: moderateScale(20),
              }}
            />
            </Pressable> */}
            <Text style={{...styles.graytext,marginLeft:2,marginTop:2}}>
                {moment(props.time).format('DD-MM-YYYY')}
                {/* {props.time.slice(0,10)} */}
                </Text>
          </View>
        </View>
      </View>
      {props.show ? null :
      // props.userId == userData?._id ? 
      <Pressable
                style={{
                    height:moderateScale(25),
                    width:moderateScale(25),
                    borderRadius:moderateScale(25),
                    justifyContent:'center',
                    alignItems:'center'
                }}
                onPress={() => setshow(true)}
            >
                <Icon 
                name="dots-three-vertical"
                type="Entypo"
                style={styles.icon}
                />
            </Pressable>
            // : null
}
{show ?  
        (<Pressable
        style={{
          height:props.userId == userData?._id ? 100 : 50,
          width:130,
          position:'absolute',
          backgroundColor:COLORS.black,
          right:35,
          zIndex:100000,
          borderRadius:5,
          // elevation:4
          // top:20
        }}
        // onPress={()=> setshow(false)}
        >
          <Pressable
          style={{
            position:'absolute',
            right:3,
            top:2
          }}
          onPress={()=> setshow(false)}
          >
          <Icon style={{color:COLORS.white}} 
            size={22}
            name="circle-with-cross" 
            type="Entypo"/>
            </Pressable>
          <Pressable
          style={{
            flexDirection:'row',
            marginHorizontal:10,
            marginTop:18
            // padding:5
          }}
          onPress={()=> setReportModal(true)}
          >
          <Icon style={{color:COLORS.white,marginRight:5}} 
            size={20}
            name="report" 
            type="MaterialIcon"/>
          <Text
          style={{
            color:COLORS.white,
            fontSize:14
          }}
          >
            Report
          </Text>
          </Pressable>
          {props.userId == userData?._id ?
          <Pressable>
          <Pressable
          style={{
            flexDirection:'row',
            marginHorizontal:10,
            marginTop:6
            // padding:5
          }}
          onPress={()=>{
            setEditModal(true)
          }}
          // disabled={props.id == userData?._id ? false : true}
          >
          <Icon style={{color:COLORS.white,marginRight:5}} 
            size={19}
            name="edit" 
            type="AntDesign"/>
          <Text
          style={{
            color:COLORS.white,
            fontSize:14
          }}
          >
            Edit Post
          </Text>
          </Pressable>
          <Pressable
          style={{
            flexDirection:'row',
            margin:10,
            
          }}
          onPress={()=>{
            setDeleteModal(true)
          }}
          >
          <Icon style={{color:COLORS.white,marginRight:5}} 
            size={17}
            name="delete" 
            type="AntDesign"/>
          <Text
          style={{
            color:COLORS.white,
            fontSize:14,
            marginLeft:1.8
          }}
          >
            Delete
          </Text>
          </Pressable>
          </Pressable>
          : null
}

        </Pressable>)
        :null
}
            </View>
      <Modal
      transparent={true}
      visible={reportModal}
      animationType="slide"
      onRequestClose={()=> setReportModal(false)}
      >
        <View
           style={{
            flex:1
           }}
           >
            <Pressable            
            style={{
                flex:2.5,
                backgroundColor:'#000000aa'
            }}
            onPress={()=> setReportModal(false)}
            >
            </Pressable>
            <View
            style={{
                flex:1,
                backgroundColor:'#404040'
            }}
            >
                <Pressable
                style={styles.CloseBar}
                onPress={()=> setReportModal(false)}
                >
                </Pressable>
                <Pressable
                style={{
                    margin:10
                }}
                >
                    <Text style={styles.HeadingTitle}>Please submit your report here...</Text>
                    
                    <View
                    style={{
                      marginTop:5
                    }}
                    >
                      <AppTextInput
                        style={{
                          fontFamily: FONTS.Bold,
                          fontSize: moderateScale(15),
                          // marginLeft: moderateScale(10),
                          marginHorizontal: moderateScale(10),
                          color: COLORS.white,
                          maxHeight: moderateScale(150),
                          
                        }}
                        numberOfLines={4}
                        inputContainerStyle={{
                          borderWidth:1,
                          borderColor:COLORS.dark11,
                          // height:60,
                          
                        }}
                        
                        placeholderTextColor={COLORS.white}
                        placeholder="description..."
                        // inputStyle={{
                        //   textAlignVertical:'top'
                        // }}
                        value={title}
                        onChangeText={(val)=> setTitle(val)}
                        multiline={true}
                        autoFocus={false}
                        
                      />
                    </View>
                    <Pressable
                    style={{
                      width:100,
                      height:40,
                      backgroundColor:COLORS.primaryThemeColor,
                      alignItems:'center',
                      justifyContent:'center',
                      alignSelf:'center',
                      marginVertical:10,
                      borderRadius:10
                    }}

                    onPress={()=> postReport()}
                    >
                      <Text style={styles.HeadingTitle}>Submit</Text>
                    </Pressable>
               
                </Pressable>
                </View>
           </View>
      </Modal>
      <Modal
      transparent={true}
      visible={deleteModal}
      animationType="slide"
      onRequestClose={()=> setDeleteModal(false)}
      
      >
        <ConfirmationModal
          modalfunc={()=>falseModal()}
          id={props.id}
        />
      </Modal>
      <Modal
      transparent={true}
      visible={editModal}
      animationType="slide"
      onRequestClose={()=> setDeleteModal(false)}
      
      >
        <EditPost
        title={props.title ?? ''}
        modalfunc={()=>falseEditModal()}
        id={props.id}
        fname={props.fname}
        lname={props.lname}
        userimg={props.userimg}
        
        />
      </Modal>
    </View>
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
  rowview:{
    flexDirection:'row',
    alignItems:'center' ,
    // justifyContent:'space-between'
},
icon:{
    fontSize:moderateScale(15),
    color:'white'
},
boldtext :{
    fontSize:moderateScale(14),
    fontWeight:'600',
    color:'white'
},
graytext:{
    fontSize:moderateScale(11),
    fontFamily:FONTS.Medium,
    color:'rgba(255,255,255,0.7)' 
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
  color: '#fff',
  fontSize:15,
  fontWeight:'bold'
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
export default PostedByWhom;
