//import liraries
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  StatusBar as RNStatusbar,
  Image,
  SafeAreaView,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native';
import {
  AppBar,
  Container,
  Text,
  Icon,
  StatusBar,
  useTheme,
  AppButton,
} from 'react-native-basic-elements';
import {FONTS} from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import Slider from '@react-native-community/slider';
import Timer from '../../Assets/images/Timer.svg';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {moderateScale, verticalScale} from '../../PixelRatio';
import {COLORS} from '../../Constants/Colors';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackModel} from '../../Models/Navigation/AppStackModel';
const {height, width} = Dimensions.get('window');

type Props = StackScreenProps<AppStackModel, 'PlayPodcast'>;

// create a component
const PlayPodcast = (props: Props) => {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(true);
  const [truefalse, setTruefalse] = useState<boolean>(false);
  const [playingLoader, setPlayingLoader] = useState<boolean>(true);
  const [AudioArr, setAudioArr] = useState(props.route.params.data);
  const scrollX = useRef(new Animated.Value(0)).current;
  const spinValue = new Animated.Value(0);
  const songsSlider = useRef<any>(null);
  const [songIndex, setSongIndex] = useState(0);


  
  const progress = useProgress();

  const playbackState = usePlaybackState();

  const colors = useTheme();
  
  const skipToNext = () => {
    songsSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
    // TrackPlayer.skipToNext()
  };
  const skipToPrevious = () => {
    songsSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
    // TrackPlayer.skipToPrevious()
  };

  // let data=AudioArr.forEach(res=>res.audio)
  // console.log('index>>>>>>>>>>>>>>',data )
  const songsfunc = async () => {
    let ind = AudioArr.findIndex(it=>it._id == props.route.params.item._id)
    
    let allSongs :any = [];
    AudioArr.forEach(async (element, index) => {
      let data = {
        id: element._id,
        url: element.audio ,
        title: element.name,
        artist: element.director
      };
     
      allSongs.push(data);
     
      if (index == (AudioArr.length - 1)) {
      TrackPlayer.setupPlayer()
      .then(() => {
        TrackPlayer.add(allSongs).then(() => {
          TrackPlayer.play().then(() => {
            songsSlider.current.scrollToOffset({
              offset: (ind) * width,
            });
            setPlayingLoader(false);
          })
        })
      })
      .catch(() => {
        TrackPlayer.add(allSongs).then(() => {
          TrackPlayer.play().then(() => {
            songsSlider.current.scrollToOffset({
              offset: (ind) * width,
            });
            setPlayingLoader(false);
          })
        })
      })
     
  }
  console.log('sobngurl>',data.url)
    }
    );
  };

  const togglePlayback = async (playbackState:any) => {
    let currentTrack = await TrackPlayer.getCurrentTrack();
    // console.log('object>>>>>>>>>>>', playbackState);
    if (currentTrack != null) {
      if (playbackState == State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const skipTo = async (trackId:any)=> {
    await TrackPlayer.skip(trackId);
    await TrackPlayer.play();
    console.log('track>>>>>>',trackId)
  };

  var mind = progress.position % (60 * 60);
  var minutes = Math.floor(mind / 60);
  var seconds = progress.position - minutes * 60;

  var mindT = progress.duration % (60 * 60)
  var minutesT = Math.floor(mindT/60);
  var secondsT = progress.duration - minutesT * 60;
  console.log('truer', progress);
  useEffect(() => {
   
    // setIsPlayerReady(false)
    setTimeout(()=>{
      setIsPlayerReady(false)
      songsfunc();
    },2000)
    console.log('scrollx>>>>>>>>>>>>>>>>>',songsfunc())
    
    scrollX.addListener(({ value }) => {
      console.log('scrollx', scrollX)
      const index = Math.round(value / width);
      skipTo(index);
      setSongIndex(index);
    });   
    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.reset();
    };
   
   
  }, []);

  useEffect(() => {
    return () => {
    TrackPlayer.pause();
    TrackPlayer.reset();
    };
  }, []);
  if (isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }
  // return false
  return (
    <Container>
      <AppBar.Back
        title={props.route.params.item.name}
        titleStyle={{
          fontFamily: FONTS.semibold,
          fontSize: 15,
        }}
        backgroundColor={'transparent'}
        titlePosition="left"
        rightActions={[
          // {
          //   icon: (
          //     <Pressable onPress={() => NavigationService.navigate('Search')}>
          //       <Icon
          //         name="dots-horizontal-circle-outline"
          //         type="MaterialCommunityIcon"
          //         style={{
          //           marginLeft: 20,
          //         }}
          //         size={25}
          //       />
          //     </Pressable>
          //   ),
          // },
        ]}
        onLeftIconPress={() => NavigationService.back()}
        style={{
          marginTop: RNStatusbar.currentHeight,
        }}
      />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <ScrollView>
        <View>
          <View
          style={{
            flex:1,
          }}
          >
          <Animated.FlatList
            ref={songsSlider}
            data={AudioArr}
            keyExtractor={item => item._id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            renderItem={({item}) => {
              // console.log('item', item);
              return (
                <Animated.View
                  style={{...styles.content ,width:width}}>
                  <Image
                    source={{
                      uri: item.thumbline,
                    }}
                    style={styles.EpImg}
                    resizeMode={'cover'}
                  />
                </Animated.View>
              );
            }}
          />
          </View>
          <View
          style={{
            marginHorizontal:10
          }}
          >
          <Text.Heading
            title={AudioArr[songIndex].name}
            style={{
              fontFamily: FONTS.semibold,
              fontSize: 16,
              textAlign: 'center',
            }}
          />
          <Text.SubHeading
            title={AudioArr[songIndex].presnter}
            style={{
              fontFamily: FONTS.semibold,
              fontSize: 12,
              textAlign: 'center',
              color: colors.primaryFontColor,
              paddingVertical: 5,
            }}
          />

          <View
            style={{
              height: 0.5,
              opacity: 0.5,
              backgroundColor: colors.primaryFontColor,
              marginTop: 30,
            }}
          />

          <Slider
            style={{
              width: '100%',
              height: 40,
              marginTop: moderateScale(40),
              marginBottom:5
            }}
            step={0.5}
            // buffered={progress.buffered}
            maximumValue={progress.duration}
            value={progress.position}
            //  onValueChange={onslide}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
            thumbTintColor={colors.primaryThemeColor}
            minimumTrackTintColor={colors.primaryThemeColor}
            maximumTrackTintColor={colors.secondaryFontColor}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 10,
              }}>
               {minutesT}:{secondsT.toFixed(0)}
            </Text>
            <Text
              style={{
                color: colors.primaryFontColor,
                fontFamily: FONTS.medium,
                fontSize: 10,
              }}>
              {minutes}:{seconds.toFixed(0)}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: moderateScale(50),
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => {
                skipToPrevious()
              }}>
              <Icon name="stepbackward" type="AntDesign" />
            </Pressable>
            <Pressable
              onPress={() => {
                let value = progress.position - 10;
                TrackPlayer.seekTo(value);
              }}>
              <Image
                source={require('../../Assets/images/reverse.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Pressable>

          
            <Pressable
              style={styles.playIconPlace}
              onPress={() => {
                if (!playingLoader) {
                  togglePlayback(playbackState);
                }
               
              }}
              > 
              {playingLoader ? (
                <ActivityIndicator color={'#fff'} size="small" />
              ) : (
                <Icon
                  name={playbackState == State.Playing ? 'pausecircle' : 'caretright'}
                  type="AntDesign"
                  style={{fontSize: 20, color: '#000'}}
                />
              )}

            
            </Pressable>
            <Pressable
              onPress={() => {
                let value = progress.position + 10;
                TrackPlayer.seekTo(value);
              }}>
              <Image
                source={require('../../Assets/images/forward.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                skipToNext()
              }}>
              <Icon name="stepforward" type="AntDesign" />
            </Pressable>
          </View>
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 30,
              alignItems: 'center',
              // paddingBottom: 10,
            }}>
            <Timer />

            <Icon name="timer" type="MaterialIcon" size={20} />

            <Icon name="cast" type="Feather" size={20} />

            <Icon name="dots-three-vertical" type="Entypo" size={20} />
          </View> */}
        </View>
      </ScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  playIconPlace: {
    height: moderateScale(46),
    width: moderateScale(46),
    borderRadius: moderateScale(23),
    backgroundColor: COLORS.primaryThemeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    
    marginVertical:40,
    alignItems:'center',
    justifyContent:'center',
    
    borderColor:'white',
  
   
  },
  soundImg: {
    height: verticalScale(200),
    width: '90%',
    resizeMode: 'contain',
    // backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },

  backHeaderView: {
    marginBottom: moderateScale(70),
  },

  EpImg: {
    height: moderateScale(290),
    width: moderateScale(290),
    resizeMode: 'cover',
    borderRadius: moderateScale(10),
    // position: 'absolute',
    // alignSelf: 'center',
    borderWidth: 5,
  //  alignSelf:'center',
   
    // borderColor: COLORS.white,
  },

  nameText: {
    marginTop: moderateScale(15),
    textAlign: 'center',
    fontSize: moderateScale(16),
    fontFamily: FONTS.Bold,
    color: COLORS.dark11,
  },

  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: moderateScale(20),
    paddingHorizontal: moderateScale(25),
  },

  progressBar: {
    alignSelf: 'center',
    marginBottom: moderateScale(5),
  },

  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: moderateScale(15),
    width: '90%',
    marginBottom: moderateScale(30),
    alignSelf: 'center',
  },

  timeText: {
    fontSize: moderateScale(10),
    fontFamily: FONTS.Light,
    color: COLORS.dark11,
  },

  songIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: COLORS.white,
    elevation: 8,
  },

  iconStyle: {
    height: verticalScale(22),
    width: moderateScale(22),
    resizeMode: 'contain',
  },
  progressContainer: {
    width: '90%',
    height: verticalScale(30),
    marginTop: moderateScale(20),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ButtonIconView: {
    width: '20%',
    height: '6%',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  BackIconCircle: {
    width: moderateScale(38),
    height: moderateScale(38),
    // backgroundColor: 'transparent',
    borderRadius: moderateScale(19),
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    // borderWidth:'#D8D8D8',
    // position: 'absolute',
    // left: hp('2.5%'),
    // zIndex: 9999,
    // elevation: 5,
  },
  header: {
    backgroundColor: COLORS.dark11,
    height: verticalScale(40),
    // alignItems:'center'
    justifyContent: 'center',
    paddingHorizontal: moderateScale(17),
  },
});

//make this component available to the app
export default PlayPodcast;
