import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar as RNStatusbar,
  Image,
  Pressable,
  FlatList,
  ImageSourcePropType,
  SectionList,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {
  AppBar,
  AppTextInput,
  Container,
  Icon,
  StatusBar,
  useTheme,
  Text,
} from 'react-native-basic-elements';
import Video from 'react-native-video';

import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import Toast from 'react-native-simple-toast';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import { CategoryWiseVideoResponseData, ReviewData, ReviewResponseData, WatchListData } from '../../Models/OttModel';
import OttServices from '../../Services/OttServices';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../PixelRatio';
import { get } from 'immer/dist/internal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import ReviewComp from '../../Component/Ott/ReviewComp';

type Props = StackScreenProps<AppStackModel, 'VedioPlay'>;
const {height, width} = Dimensions.get('window');
interface cardDataType {
  img: ImageSourcePropType;
}

const VideoPlay = (props: Props) => {
  const colors = useTheme();
  const data1 = props.route.params.data;
  const catId = props.route.params.catId
  const [show, setShow] = useState<boolean>(false);
  const [comments, onChangeComments] = useState<string>('');
  const [reviewData,setReviewData] = useState<Array<ReviewResponseData>>([])

  const Fldvalid = (txt: string): number => txt.replace(/\s/g, "").length;

  console.log('>>>>djdjdjd>>>>',data1._id)
  const [allSuggestions,setAllSuggestions] = useState<Array<CategoryWiseVideoResponseData>>([])
  const [like,setLike] = useState<boolean>(false)
  const [rating,setRating] = useState<number>(0)
  const [rate,setRate] = useState<number>(0.0)
  useEffect(()=>{
    getSuggestion()
    getAllReview()
  },[])
  const addWatchList = () => {
    let data:WatchListData = {
      videoId: data1._id
    }
    OttServices.addWatchList(data)
      .then((res)=>{
        console.log('watchres',res)   
        if(res.message == "Video watchlisted successfuly "){
          Toast.showWithGravity('Added to WatchList Successfully...', Toast.SHORT, Toast.BOTTOM);            
        } 
        else{
          Toast.showWithGravity('Removed Successfully...', Toast.SHORT, Toast.BOTTOM);            
        } 
      })
      .catch((err)=>{
        Toast.showWithGravity('Already added to WatchList...', Toast.SHORT, Toast.BOTTOM);            
      })
  }

  const addLike = () => {
    let data:WatchListData = {
      videoId:data1._id
    }
    OttServices.addLike(data)
      .then((res)=>{
        console.log('likeresfsf>>>>>>',res)
        if(res.message == "Liked successfuly "){
          setLike(true)
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);            
        }
        else{
          setLike(false)
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);            
        }
      })
  }

  const ratingCompleted = (val:number) => {
    console.log("Rating is: " + val)
    setRating(val)
  }

const getSuggestion = () => {
  OttServices.CategoryWiseVideo(catId)
    .then((res)=>{
      console.log('allSuggestions>>>>',res.data)
      let data = res.data.filter((it)=>it._id != data1._id)
      console.log('hdfidmd,sdfljkj',data)
      setAllSuggestions(data)     
    })
}

  const getAllReview = () => {
    OttServices.getAllReview(data1._id)
      .then((res)=>{
        console.log('allReview>>>>>>',res.data)
        setReviewData(res.data.userReview)
        setRate(res.data.avgRating)
      })
  }

  const addReview = () => {
    if(
      Fldvalid(comments) === 0 ||
      comments == '' || 
      rating == 0
      ){
        Toast.show('Please Fill Out All Field', Toast.SHORT);
        return;
      }
  let data:ReviewData = {
    videoId:data1._id,
    rating:rating,
    review:comments
  }   
  OttServices.addReview(data)
    .then((res)=>{
      console.log('reviewstatus>>>',res)
      getAllReview()
      Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM); 
      setShow(false)           
    })
    .catch((err)=>console.log('err',err))

  }

  // const [cardData, setCardData] = useState<any>([
  //   {
  //     review: 'wonderful,it taught me many lessons of life...fajhsd dfjhdsf dofjdfj djadvojad pakvksvpoj',
  //   },
  //   {
  //     review: 'the video is totally fabolous...',
  //   },
  //   {
  //     review: 'awesome video..',
  //   },
  //   {
  //     review: 'wonderful,it taught me many lessons of life...fajhsd dfjhdsf dofjdfj djadvojad pakvksvpoj',
  //   },
  //   {
  //     // img: require('../../Assets/images/movie7.png'),
  //     review: 'the video is totally fabolous...',
  //   },
  //   {
  //     // img: require('../../Assets/images/movie8.png'),
  //     review: 'wonderful,it taught me many lessons of life...',
  //   },
  // ]);
  const [textShown, setTextShown] = useState<boolean>(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState<boolean>(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(
    (e: {nativeEvent: {lines: string | any[]}}) => {
      setLengthMore(e.nativeEvent.lines.length >= 2 ? true : false); //to check the text is more than 4 lines or not
      // console.log(e.nativeEvent);
    },
    [],
  );

  const moviCard = ({item}: {item: CategoryWiseVideoResponseData}) => {
    return (
      <Pressable 
      style={{marginBottom: 10}}
      onPress={() => {
        props.navigation.replace('VedioPlay',{data:item,catId:catId})
      }}
      >
        <Image
          source={{uri:item.thumbline}}
          style={{ width: width / 3.37, height: 180, borderRadius:10,marginLeft:10}}
          resizeMode="contain"
        />
      </Pressable>
    );
  };

  return (
    <Container>
      <StatusBar
      backgroundColor={'transparent'}
      barStyle="light-content"
      translucent={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            //backgroundColor: 'green',
            height: 250,
            marginTop: '10%',
          }}>
          <Image
            source={{uri: data1.thumbline}}
            style={{
              width: '100%',
              alignSelf: 'center',
              height: 240,
            }}
            resizeMode="contain"
          />

          <TouchableOpacity
            onPress={() => NavigationService.back()}
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
            }}>
            <Icon
              name="arrowleft"
              type="AntDesign"
              size={24}
              color={colors.primaryFontColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '45%',
              right: '45%',

              // left:10
            }}
            onPress={() => {
              props.navigation.navigate('VideoPlayer', {
                videourl: data1.uploadVideo,
              });
            }}
            >
            <Icon
              name="play"
              type="AntDesign"
              size={40}
              color={colors.primaryFontColor}
            />
          </TouchableOpacity>
        </View>
        {/** Vedio section End */}

        <View style={styles.TopBox}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 15,
                fontFamily: FONTS.bold,
              }}>
              {data1.name}
            </Text>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 12,
                fontFamily: FONTS.medium,
              }}>
                Rating :- {rate > 0 ?
               rate.toFixed(1)
              :
              (0)
              }/5
            </Text>
            <Rating
              ratingTextColor="#fff"
              imageSize={20}
              // showRating={false}
              style={{
                marginTop:5,
                width: 100,
              }}
              startingValue={rate}
              tintColor="#000"
              readonly={true}
            />
          </View>

          <Pressable
          style={{
            marginRight:22,
            alignItems: 'center'
          }}
          >
           <Pressable
              onPress={() => {
                props.navigation.navigate('VideoPlayer', {
                  videourl: data1.uploadTrailer,
                });
              }}
              >
              <Icon
                name="movie-open-play"
                type="MaterialCommunityIcon"
                size={22}
                color={colors.primaryFontColor}
              />
            </Pressable>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 10,
                fontFamily: FONTS.medium,
                marginTop:1
              }}>
              Trailer
            </Text>
          </Pressable>
          <Pressable 
          style={{alignItems: 'center'}}
          onPress={()=>{
            addLike()
          }}
          >
            <Icon 
            name={like ? "heart" : "hearto"} 
            type="AntDesign" 
            size={22}
            color={like? 'red' : 'white'}
            />
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 10,
                fontFamily: FONTS.medium,
                marginTop:1
              }}>
              Like
            </Text>
          </Pressable>

          <Pressable
            style={{
              alignItems: 'center',
              marginLeft: 18,
              marginRight: 7,
            }}
            onPress={()=>{
              addWatchList()
            }}
            >
            <Icon 
            name="play-list" 
            type="Fontisto" 
            size={16}
            />
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 10,
                fontFamily: FONTS.medium,
                marginTop: 5,
              }}>
              Watch list
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginTop: 20,
              fontFamily: FONTS.medium,
              color: colors.primaryThemeColor,
            }}>
            Story line
          </Text>
        </Pressable>
        <View>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 2}
            style={{
              color: colors.primaryFontColor,
              fontSize: 11,
              fontFamily: FONTS.medium,
              maxWidth: '95%',
              marginLeft: 10,
              lineHeight: 18,
            }}>
            {data1.description}
          </Text>

          {/* <Text
            onPress={toggleNumberOfLines}
            style={{
              color: colors.primaryThemeColor,
              fontSize: 10,
              fontFamily: FONTS.medium,
              textAlign: 'right',
              marginRight: '10%',
            }}>
            {lengthMore ? '..Read less' : '..Read more'}
          </Text> */}
        </View>

        <Text
          style={{
            color: colors.primaryFontColor,
            fontSize: 20,
            fontFamily: FONTS.medium,
            marginVertical: 24,
            marginLeft: 10,
          }}>
          Movies Suggestions
        </Text>

        <View style={{flex: 1}}>
          <FlatList
            // columnWrapperStyle={{justifyContent: 'space-evenly'}}
            numColumns={3}
            data={allSuggestions}
            renderItem={moviCard}
          />
        </View>
        <Pressable
        style={{
          marginBottom:20
        }}
        >
        <View
        style={{
          flexDirection:'row',
          marginBottom:5
        }}
        >
        <Text
          style={{
            color: colors.primaryThemeColor,
            fontSize: 20,
            fontFamily: FONTS.bold,
            marginTop: 20,
            marginLeft: 10,
            // marginBottom
          }}>
          Rate your Video
        </Text>
        <Pressable
              onPress={() => {
               setShow(true)
              }}
              style={{
                marginTop: 25,
                marginLeft: 10,
                flex:1
              }}
              >
              <Icon
                name="pluscircleo"
                type="AntDesign"
                size={22}
                color={'#f4e2d8'}
              />
            </Pressable>
        <Pressable>
        {/* <Text
          style={{
            color: '#f3a183',
            fontSize: 18,
            fontFamily: FONTS.bold,
            marginTop: 20,
            marginHorizontal: 10,
            // marginBottom
          }}>
          See all
        </Text> */}
        </Pressable>
        </View>
        <View
            style={{
              width:'95%',
              height:0.5,
              backgroundColor:COLORS.gray11,
              marginTop:10,
              alignSelf:'center',
              marginBottom:5
              // marginHorizontal:10
            }}
            />
        <View>
          <FlatList
          data={reviewData}
          onEndReachedThreshold={0.01}
          onEndReached={()=>{
            console.log('bal1')
          }}
          renderItem={({item, index}) => {
            return <ReviewComp 
              item={item} 
            />
          }}
          />
        </View>
        </Pressable>
      </ScrollView>
      <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={()=> setShow(false)}
      >
        <View
        style={{
          flex:1
        }}
        >
          <Pressable
          style={{
            flex:2.4,
            backgroundColor:'#000000ab'
          }}
          onPress={()=>{
            setShow(false) 
            onChangeComments('')           
          }}
          >

          </Pressable>
          <Pressable
          style={{
            flex:1.6,
            backgroundColor:'black',
            borderTopRightRadius:10,
            borderTopLeftRadius:10
          }}
          >
             <Pressable
              style={{
                flexDirection:'row',
                justifyContent:'space-between',
                // marginHorizontal:10,
                // marginVertical:5,
                backgroundColor:'#eacda3'
              }}
              >
                <Text
                style={{
                  fontSize:21,
                  fontWeight:'600',
                  color:'black',
                  marginVertical:5,
                  marginHorizontal:5
                }}
                >Review</Text>
                <Pressable
                style={{
                  marginTop:5,
                  marginHorizontal:5
                }}
                onPress={()=>{
                  setShow(false)
                  onChangeComments('')           
                }}
                >
                <Icon
                  name='squared-cross'
                  type='Entypo'
                  size={25}
                  color='black'
                  
                />
                </Pressable>
              </Pressable>
              <KeyboardAwareScrollView>
              <View>
              <Rating
              type='star'
              ratingTextColor="white"
              // ratingColor="red"
              imageSize={55}
              showRating={true}
              style={{
                marginTop:10,
                width: '80%',
                alignSelf:'center',
                borderWidth:0
              }}  
              tintColor='#000'  
              ratingCount={5}
              startingValue={0}
              // fractions={true}
              onFinishRating={(rating:number)=>{
                ratingCompleted(rating)
              }}    
            />
            
            <View
            style={{
              marginHorizontal:10,
              marginTop:25
            }}
            >
            <AppTextInput
                      placeholder="Give your review ..."
                      value={comments}
                      onChangeText={(value:string) => onChangeComments(value)}
                      style={{
                        color: COLORS.white,
                        marginLeft: moderateScale(10),
                        padding: moderateScale(2),
                        width: '90%',
                        height:80
                      }}
                      // maxLength={10}
                      placeholderTextColor={COLORS.gray11}
                      numberOfLines={3}
                    />
              </View>
              
            <Pressable
            style={{
              width:100,
              height:45,
              backgroundColor:'#ffb88c',
              alignSelf:'center',
              alignItems:'center',
              justifyContent:'center',
              marginTop:15,
              borderRadius:10,
              elevation:4,
              shadowColor:'white',
            }}
            onPress={()=>{
              addReview()
            }}
            >
              <Text
              style={{
                color:'black',
                fontSize:17,
                fontFamily:FONTS.georgia,
                fontWeight:'700',
                textShadowColor:'white'
              }}
              >Submit</Text>
            </Pressable>
              </View>
            </KeyboardAwareScrollView>
          </Pressable>
        </View>
      </Modal>
    </Container>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  TopBox: {
    width: '94%',
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
