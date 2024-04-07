import {
  StyleSheet,
  Text,
  View,
  StatusBar as RNStatusbar,
  ImageSourcePropType,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {
  AppBar,
  AppTextInput,
  Container,
  Icon,
  StatusBar,
  useTheme,
  Card,
  AppButton,
} from 'react-native-basic-elements';

import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import Video from 'react-native-video';
import SwitchSelector from 'react-native-switch-selector';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
import LearningServices from '../../Services/LearningServices';
import {
  AllLessonsInfo,
  BookCourseData,
  BookMarkData,
  GetSingleCourseData,
  RatingData,
  ReviewResponseData,
} from '../../Models/LearningModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Rating} from 'react-native-ratings';
import {COLORS} from '../../Constants/Colors';
import {moderateScale} from '../../PixelRatio';
import Toast from 'react-native-simple-toast';

const {height, width} = Dimensions.get('window');

interface rattingType {
  value: number;
  selected?: boolean;
}

type Props = StackScreenProps<AppStackModel, 'EnrolPage'>;

const EnrolPage = (props: Props) => {
  const colors = useTheme();
  const [refress, setRefress] = useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showhide, setShowHide] = useState<number>(1);
  const Id = props.route.params._id;
  const [singleData, setSingleData] = useState<GetSingleCourseData>();
  const [lessons, setLessons] = useState<Array<AllLessonsInfo>>([]);
  const [show, setShow] = useState<boolean>(false);
  const [bookMark, setBookMark] = useState<boolean>(false);
  const [enrollLoader,setEnrollLoader] = useState<boolean>(false);
  const [comments, onChangeComments] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [allRating, setAllRating] = useState<number>(0);
  const [selfBuy, setSelfBuy] = useState<number>(0);
  const [reviews, setReview] = useState<Array<ReviewResponseData>>([]);
  const [disable, setDisable] = useState<boolean>(true); //To show ur remaining Text
  const [textShown, setTextShown] = useState<boolean>(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState<boolean>(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const Fldvalid = (txt: string): number => txt.replace(/\s/g, '').length;

  const onTextLayout = useCallback(
    (e: {nativeEvent: {lines: string | any[]}}) => {
      setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
      // console.log(e.nativeEvent);
    },
    [],
  );

  const [ratting, setRatting] = useState<rattingType[]>([
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 4},
    {value: 6},
  ]);

  useEffect(() => {
    getSingleCourse();
  }, []);

  const getSingleCourse = () => {
    LearningServices.getSingleCourse(Id).then(res => {
      console.log('singleData>>>>', res.data);
      setSingleData(res.data);
      setAllRating(res.data.avgrating);
      setSelfBuy(res.data.selfBuyCount);
      getAllReview(res.data._id);
    });
  };

  const ratingCompleted = (val: number) => {
    console.log('Rating is: ' + val);
    setRating(val);
  };

  const bookCourse = () => {
    setEnrollLoader(true)
    let data: BookCourseData = {
      courseID: Id,
    };
    LearningServices.bookCourse(data).then(res => {
      console.log('bookcourse..>>', res);
      Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
      setEnrollLoader(false)
      setDisable(false);
      getSingleCourse()
    });
  };

  const addReview = () => {
    if (Fldvalid(comments) === 0 || comments == '' || rating == 0) {
      Toast.show('Please Fill Out All Field', Toast.SHORT);
      return;
    }
    let data: RatingData = {
      courseID: Id,
      rating: rating,
      review: comments,
    };
    LearningServices.addRating(data)
      .then(res => {
        console.log('reviewstatus>>>', res);
        //   getAllReview()
        Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        setShow(false);
        getSingleCourse();
      })
      .catch(err => console.log('err', err));
  };

  const getAllReview = (val: string) => {
    LearningServices.getReview(val).then(res => {
      console.log('allReview>>>>', res.data);
      setReview(res.data);
    });
  };

  const addBookMark = () => {
    let data: BookMarkData = {
      courseId: Id,
    };
    LearningServices.addBookMark(data).then(res => {
      console.log('BokkmarkAdd>>>', res);
      Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
      setBookMark(true);
      getSingleCourse();
    });
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle="light-content"
            translucent={true}
          />
          <View
            style={{
              width: '100%',
              // backgroundColor: 'green',
              height: height / 3,
              marginTop: 30,
            }}>
            {/* <Video 
                        source={require('../../Assets/images/test.mp4')}   // Can be a URL or a local file.

                        paused={true}
                        controls={true}            // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                        resizeMode='cover'
                    /> */}
            <Image
              source={{uri: singleData?.thumbline}}
              style={{
                width: '100%',
                alignSelf: 'center',
                height: 270,
              }}
              resizeMode="contain"
            />

            <Pressable
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: colors.pageBackgroundColor,
                position: 'absolute',
                top: 20,
                left: 10,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}
              onPress={() => NavigationService.back()}>
              <Icon
                name="arrowleft"
                type="AntDesign"
                size={22}
                color={colors.primaryFontColor}
              />
            </Pressable>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: '43%',
                right: '45.5%',
              }}
              onPress={() => {
                props.navigation.navigate('VideoPlayer', {
                  videourl: singleData?.uplodVideo ?? '',
                });
              }}>
              <Icon
                name="play"
                type="AntDesign"
                size={40}
                color={colors.primaryFontColor}
              />
            </TouchableOpacity>
          </View>
          {/** Vedio section End */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              width: '94%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 23,
                fontFamily: FONTS.bold,
                marginLeft: 10,
                flex: 1,
              }}>
              {singleData?.courseName}
            </Text>
            <TouchableOpacity
              onPress={() => {
                addBookMark();
              }}>
              {/* {console.log('najajk',singleData?.bookmarks)} */}
              <Icon
                name={
                  singleData?.bookmarks == 0
                    ? 'bookmark-minus-outline'
                    : 'bookmark-minus'
                }
                type="MaterialCommunityIcon"
                size={28}
                color={colors.primaryThemeColor}
                style={{marginTop: 5}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
            }}>
            <View
              style={{
                marginRight: 20,
                height: 24,
                backgroundColor: colors.secondaryThemeColor,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  paddingHorizontal: 10,

                  color: '#000',
                  fontFamily: FONTS.medium,
                }}>
                {singleData?.interest}
              </Text>
            </View>

            <Icon
              name="star"
              type="AntDesign"
              color={colors.primaryThemeColor}
              size={15}
            />
            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 12,
                fontFamily: FONTS.bold,
                marginLeft: 9,
              }}>
              {allRating > 0 ? allRating.toFixed(1) : 0}
            </Text>

            <Text
              style={{
                color: colors.primaryFontColor,
                fontSize: 12,
                fontFamily: FONTS.bold,
                marginLeft: 5,
              }}>
              ( {singleData?.ratingCount ? singleData?.ratingCount : 0} Reviews
              )
            </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.primaryThemeColor,
                fontSize: 20,
                fontFamily: FONTS.bold,
              }}>
              $ {singleData?.price}
            </Text>

            {/* <Text
            style={{
              color: colors.primaryFontColor,
              fontSize: 12,
              fontFamily: FONTS.bold,
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              marginLeft: 10,
            }}>
            $80
          </Text> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              marginBottom: 20,
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="users"
                type="FontAwesome"
                size={15}
                color={colors.primaryThemeColor}
              />
              <Text
                allowFontScaling={false}
                style={{
                  color: colors.primaryFontColor,
                  fontSize: 13,
                  fontFamily: FONTS.bold,
                  marginLeft: 5,
                }}>
                {singleData?.totalBuyCount} students
              </Text>
            </View>

            {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="clockcircle"
              type="AntDesign"
              size={12}
              color={colors.primaryThemeColor}
            />
            <Text
              allowFontScaling={false}
              style={{
                color: colors.primaryFontColor,
                fontSize: 10,
                fontFamily: FONTS.bold,
                marginLeft: 5,
              }}>
              9,839 Students
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="text-box"
              type="MaterialCommunityIcon"
              size={12}
              color={colors.primaryThemeColor}
            />
            <Text
              allowFontScaling={false}
              style={{
                color: colors.primaryFontColor,
                fontSize: 10,
                fontFamily: FONTS.bold,
                marginLeft: 5,
              }}>
              9,839 Students
            </Text>
          </View> */}
          </View>
          {/*** */}
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              borderBottomWidth: 1,
              borderBottomColor: colors.primaryFontColor,
              opacity: 0.6,
            }}
          />

          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <SwitchSelector
              initial={0}
              onPress={(value: React.SetStateAction<number>) =>
                setShowHide(value)
              }
              textColor={'#616161'}
              //selectedColor={colors.primaryThemeColor}
              buttonColor={'transparent'}
              backgroundColor={'transparent'}
              textStyle={{
                fontFamily: FONTS.medium,
              }}
              selectedTextStyle={{
                borderBottomWidth: 3,
                borderBottomColor: colors.primaryThemeColor,
                color: colors.primaryThemeColor,
                width: 105,
                paddingBottom: 8,
                fontFamily: FONTS.medium,
              }}
              textContainerStyle={{
                borderBottomWidth: 3,
                borderColor: '#35383F',
                paddingBottom: 8,
                marginHorizontal: 1,
              }}
              borderColor={'transparent'}
              fontSize={14}
              height={45}
              valuePadding={0}
              hasPadding
              options={[
                {label: 'About', value: 1},
                {label: 'Lessons', value: 2},
                {label: 'Reviews', value: 3},
              ]}
            />
          </View>

          {showhide == 1 ? (
            <ScrollView>
              {singleData?.lecturer.map(res => {
                return (
                  <View>
                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontSize: 16,
                        fontFamily: FONTS.bold,
                        marginLeft: 20,
                        marginTop: 10,
                      }}>
                      Mentor
                    </Text>

                    <View
                      style={{
                        //marginLeft: 10,
                        marginTop: 24,
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '90%',
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={{uri: res.profilePicture}}
                        style={{
                          height: 46,
                          width: 46,
                          borderRadius: 23,
                        }}
                      />

                      <Pressable
                        style={{
                          marginLeft: 20,
                          flex: 1,
                        }}
                        //   onPress={() => NavigationService.navigate('MentorProfile')}
                      >
                        <Text
                          allowFontScaling={false}
                          style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.medium,
                            fontSize: 16,
                          }}>
                          {res.name}
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={{
                            color: colors.primaryFontColor,
                            //opacity: 0.6,
                            marginTop: 5,
                            fontFamily: FONTS.medium,
                            fontSize: 11,
                          }}>
                          {res.about}
                        </Text>
                      </Pressable>

                      {/* <Icon
                  name="message1"
                  type="AntDesign"
                  size={18}
                  color={colors.primaryFontColor}
                  style={{}}
                /> */}
                    </View>

                    <Text
                      style={{
                        color: colors.primaryFontColor,
                        fontSize: 16,
                        fontFamily: FONTS.bold,
                        marginLeft: 20,
                        marginTop: 20,
                      }}>
                      About Courses
                    </Text>

                    <View
                      style={{
                        width: '90%',
                        alignSelf: 'center',
                      }}>
                      <Text
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 2}
                        style={{
                          color: colors.primaryFontColor,
                          fontSize: 11,
                          fontFamily: FONTS.medium,

                          marginTop: 20,
                        }}>
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  lectus semper neque risus nibh etiam duis purus.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Eros, amet vitae
                  consectetur interdum metus tincidunt. In suspendisse eu
                  aliquet pellentesque consectetur quis diam quis. Massa nam
                  quam amet, dui non. Vitae proin ut vel auctor Enim lectus
                  aenean feugiat pretium, fringilla nunc, */}
                        {singleData.description}
                      </Text>

                      <Text
                        onPress={toggleNumberOfLines}
                        style={{
                          color: colors.primaryThemeColor,
                          fontSize: 11,
                          fontFamily: FONTS.medium,
                          lineHeight: 14,
                          marginTop: 5,
                          textAlign: 'right',
                          marginRight: 10,
                          //maxWidth: '90%'
                        }}>
                        {lengthMore ? '..Read More' : '..Read Less'}
                      </Text>

                      {/* <View
                  style={{
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 16,
                      color: colors.primaryFontColor,
                    }}>
                    Tools
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../Assets/images/figma.png')}
                      resizeMode="contain"
                      style={{
                        height: 20,
                        width: 20,
                        marginTop: 10,
                      }}
                    />

                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: 12,
                        color: colors.primaryFontColor,
                        marginLeft: 10,
                      }}>
                      Figma
                    </Text>
                  </View>
                </View> */}
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          ) : showhide == 2 ? (
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 24,
                  width: '94%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontFamily: FONTS.bold,
                    marginLeft: 9,
                    flex: 1,
                  }}>
                  {singleData?.allLessons.lessonInfo.length} Lessons
                </Text>

                {/* <Text
                onPress={() => NavigationService.navigate('MostPopularCourses')}
                style={{
                  color: colors.primaryThemeColor,
                  fontSize: 14,
                  fontFamily: FONTS.bold,
                  marginRight: 10,
                }}>
                See All
              </Text> */}
              </View>
              {singleData?.allLessons.lessonInfo.map((datat, index) => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 24,
                        width: '94%',
                        alignSelf: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 14,
                          fontFamily: FONTS.bold,
                          marginLeft: 9,
                          flex: 1,
                        }}>
                        Section {index + 1} - {datat.lessonName}
                      </Text>

                      <Text
                        onPress={() =>
                          NavigationService.navigate('MostPopularCourses')
                        }
                        style={{
                          color: colors.primaryThemeColor,
                          fontSize: 12,
                          fontFamily: FONTS.bold,
                          marginRight: 10,
                        }}>
                        {datat.lessonTime} mins
                      </Text>
                    </View>

                    <Card
                      style={{
                        ...styles.card,
                        borderColor: colors.primaryFontColor,
                      }}>
                      <View
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#FFC100',
                          // opacity: 0.3
                        }}>
                        <Text
                          style={{
                            color: colors.primaryThemeColor,
                            fontSize: 15,
                            fontFamily: FONTS.bold,
                          }}>
                          0{index + 1}
                        </Text>
                      </View>

                      <View style={{marginLeft: 20, flex: 1}}>
                        <Text
                          style={{
                            color: colors.primaryFontColor,
                            fontSize: 12,
                            fontFamily: FONTS.bold,
                          }}>
                          {datat.lessonDescription}
                        </Text>
                        <Text
                          style={{
                            color: colors.primaryFontColor,
                            fontSize: 12,
                            fontFamily: FONTS.bold,
                            lineHeight: 20,
                          }}>
                          {datat.lessonTime} mins
                        </Text>
                      </View>
                      {selfBuy > 0 ? (
                        <TouchableOpacity
                          onPress={() => {
                            props.navigation.navigate('VideoPlayer', {
                              videourl: datat.uploadVideo,
                            });
                          }}>
                          <Icon
                            name="play"
                            type="AntDesign"
                            color={colors.primaryFontColor}
                            size={30}
                            style={{marginTop: 5}}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            // props.navigation.navigate('VideoPlayer', {
                            //     videourl: datat.uploadVideo,
                            //   });
                            Toast.showWithGravity(
                              'Please enroll first',
                              Toast.SHORT,
                              Toast.BOTTOM,
                            );
                          }}>
                          <Icon
                            name="lock1"
                            type="AntDesign"
                            color={colors.primaryFontColor}
                            size={30}
                            style={{marginTop: 5}}
                          />
                        </TouchableOpacity>
                      )}
                    </Card>
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  marginLeft: 20,
                  marginBottom: 24,
                }}>
                <Icon
                  name="star"
                  type="AntDesign"
                  color={colors.primaryThemeColor}
                  size={15}
                />
                <Text
                  style={{
                    color: colors.primaryFontColor,
                    fontSize: 12,
                    fontFamily: FONTS.bold,
                    marginLeft: 9,
                  }}>
                  {singleData?.avgrating.toFixed(1)}
                </Text>

                <Text
                  style={{
                    color: colors.primaryFontColor,
                    fontSize: 12,
                    fontFamily: FONTS.bold,
                    marginLeft: 5,
                    flex: 1,
                  }}>
                  ({singleData?.ratingCount ? singleData?.ratingCount : 0} Reviews )
                </Text>

                {/* <Text
                onPress={() => NavigationService.navigate('MostPopularCourses')}
                style={{
                  color: colors.primaryThemeColor,
                  fontSize: 12,
                  fontFamily: FONTS.bold,
                  marginRight: 10,
                }}>
                See All
              </Text> */}
              </View>

              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  //marginTop: 20
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    //   marginBottom:5
                  }}>
                  <Text
                    style={{
                      color: colors.primaryThemeColor,
                      fontSize: 20,
                      fontFamily: FONTS.bold,
                    }}>
                    Rate your Video
                  </Text>
                  {selfBuy > 0 || disable == false ? (
                    <Pressable
                      onPress={() => {
                        setShow(true);
                      }}
                      // disabled={disable}
                      style={{
                        marginTop: 5,
                        marginLeft: 10,
                      }}>
                      <Icon
                        name="pluscircleo"
                        type="AntDesign"
                        size={22}
                        color={'#f4e2d8'}
                      />
                    </Pressable>
                  ) : null}
                </View>
              </View>
              {reviews.map(res => {
                return (
                  <View>
                    <View
                      style={{
                        //marginLeft: 10,
                        marginTop: 15,
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '90%',
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={{uri: res.userData.image}}
                        style={{
                          height: 42,
                          width: 42,
                          borderRadius: 23,
                        }}
                      />

                      <View style={{marginLeft: 20, flex: 1}}>
                        <Text
                          allowFontScaling={false}
                          style={{
                            color: colors.primaryFontColor,
                            fontFamily: FONTS.bold,
                            fontSize: 16,
                          }}>
                          {res.userData.firstname} {res.userData.lastname}
                        </Text>
                      </View>

                      <View
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          alignItems: 'center',
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: colors.primaryFontColor,
                          height: 30,
                          width: 60,
                          borderRadius: 20,
                          justifyContent: 'center',
                        }}>
                        <Icon
                          name="star"
                          type="AntDesign"
                          color={colors.primaryFontColor}
                          size={12}
                        />
                        <Text
                          style={{
                            color: colors.primaryFontColor,
                            marginLeft: 5,
                            fontFamily: FONTS.medium,
                            fontSize: 12,
                          }}>
                          {res.rating}
                        </Text>
                      </View>

                      {/* <View
                style={{
                  borderColor: colors.primaryFontColor,
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="dots-horizontal"
                  type="MaterialCommunityIcon"
                  size={13}
                />
              </View> */}
                    </View>
                    <Text
                      onTextLayout={onTextLayout}
                      numberOfLines={textShown ? undefined : 1}
                      style={{
                        color: colors.primaryFontColor,
                        fontSize: 11,
                        fontFamily: FONTS.medium,
                        marginTop: 10,
                        marginHorizontal: 20,
                      }}>
                      {/* The course is very good, the explanation of the mentor is very
              clear and easy to understand! 😍😍 */}
                      {res.review}
                    </Text>
                    <Text
                      onPress={toggleNumberOfLines}
                      style={{
                        color: colors.primaryThemeColor,
                        fontSize: 11,
                        fontFamily: FONTS.medium,
                        lineHeight: 14,
                        marginTop: 5,
                        textAlign: 'right',
                        marginRight: 10,
                        //maxWidth: '90%'
                      }}>
                      {lengthMore ? '..Read More' : '..Read Less'}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </View>
      </ScrollView>
      <View style={{flex: 1}} />
      <Pressable
        style={{
          width: '100%',
          borderTopWidth: 0.6,
          borderRightWidth: 0.6,
          borderLeftWidth: 0.6,

          borderColor: colors.primaryFontColor,

          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          justifyContent: 'flex-end',
          marginTop: 20,
          backgroundColor:'black'
        }}
        disabled={selfBuy > 0 ? true : false}>
        {enrollLoader ?
         <ActivityIndicator
         color={'#fff'}
         size={30}
         style={{
           marginLeft: 5,
           margin:25
         }}
       />:
        <AppButton
          title={selfBuy > 0 || disable == false ? 'Enrolled' : 'Enroll Course'}
          textStyle={{
            color: colors.pageBackgroundColor,
            fontFamily: FONTS.bold,
            fontSize: 16,
          }}
          style={{
            backgroundColor: colors.primaryThemeColor,
            borderRadius: 30,
            marginVertical: 20,
            width: '80%',
            height: height / 17,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            paddingVertical: 10,
            // alignItems:'center'
          }}
          onPress={() => {
            {
              disable ? bookCourse() : null;
            }
          }}
        />
}
      </Pressable>
      <Modal
        transparent={true}
        visible={show}
        animationType="slide"
        onRequestClose={() => setShow(false)}>
        <View
          style={{
            flex: 1,
          }}>
          <Pressable
            style={{
              flex: 2.6,
              backgroundColor: '#000000ab',
            }}
            onPress={() => {
              setShow(false);
              onChangeComments('');
            }}></Pressable>
          <Pressable
            style={{
              flex: 1.4,
              backgroundColor: 'black',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal:10,
                // marginVertical:5,
                backgroundColor: '#eacda3',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'black',
                  marginVertical: 5,
                  marginHorizontal: 5,
                }}>
                Review
              </Text>
              <Pressable
                style={{
                  marginTop: 5,
                  marginHorizontal: 5,
                }}
                onPress={() => {
                  setShow(false);
                  onChangeComments('');
                }}>
                <Icon
                  name="squared-cross"
                  type="Entypo"
                  size={25}
                  color="black"
                />
              </Pressable>
            </Pressable>
            <KeyboardAwareScrollView>
              <View>
                <Rating
                  type="star"
                  ratingTextColor="white"
                  // ratingColor="red"
                  imageSize={50}
                  showRating={true}
                  style={{
                    marginTop: 5,
                    width: '80%',
                    alignSelf: 'center',
                    borderWidth: 0,
                  }}
                  tintColor="#000"
                  ratingCount={5}
                  startingValue={0}
                  // fractions={true}
                  onFinishRating={(rating: number) => {
                    ratingCompleted(rating);
                  }}
                />

                <View
                  style={{
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}>
                  <AppTextInput
                    placeholder="Give your review ..."
                    value={comments}
                    onChangeText={(value: string) => onChangeComments(value)}
                    style={{
                      color: COLORS.white,
                      marginLeft: moderateScale(10),
                      padding: moderateScale(2),
                      width: '90%',
                      height: 65,
                    }}
                    // maxLength={10}
                    placeholderTextColor={COLORS.gray11}
                    numberOfLines={3}
                  />
                </View>

                <Pressable
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: '#ffb88c',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    borderRadius: 10,
                    elevation: 4,
                    shadowColor: 'white',
                  }}
                  onPress={() => {
                    addReview();
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontFamily: FONTS.georgia,
                      fontWeight: '700',
                      textShadowColor: 'white',
                    }}>
                    Submit
                  </Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
          </Pressable>
        </View>
      </Modal>
    </Container>
  );
};

export default EnrolPage;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.5,
    opacity: 0.7,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 15,
    maginBottom: 30,
  },
});
