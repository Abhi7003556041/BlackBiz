//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {Container, Icon, useTheme} from 'react-native-basic-elements';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import NavigationService from '../../Services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackModel } from '../../Models/Navigation/AppStackModel';
import { WatchLessonData } from '../../Models/LearningModal';
import LearningServices from '../../Services/LearningServices';


type Props = StackScreenProps<AppStackModel,'VideoPlayer'>
// create a component
const VideoPlayer = (props:Props) => {
  const colors = useTheme();

  useEffect(()=>{
    Orientation.lockToLandscape();
    BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  },[])
  
  const backAction = () => {
    Orientation.lockToPortrait();
    NavigationService.back();
    return true;
  };

  const watchLessons = () => {
    let data:WatchLessonData = {
      courseId:props.route.params.courseId ?? '',
      lessionId:props.route.params.lessionId ?? ''
    }
    LearningServices.getWatchedVideo(data)
      .then((res)=>{
        console.log('watched>>>>>',res)
      })
  }

  const Completed = () => {
    backAction()
    watchLessons()
  }

  return (
    <Container>
      <View
        style={{
          width: '100%',
          //backgroundColor: 'green',
          height: '100%',
          // marginTop: '10%',
        }}>
        <Video
          source={{uri:props.route.params.videourl}} // Can be a URL or a local file.
          paused={false}
          controls={true} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          onEnd={()=>{
            props.route.params.src ? Completed() : null
          }}
        />
        <TouchableOpacity onPress={() => backAction()}
          style={{
            height:30,
            width:30,
            marginVertical:25,
            marginHorizontal:10
          }}
          >
            <Icon
              name="arrowleft"
              type="AntDesign"
              size={24}
              color={colors.primaryFontColor}
            />
          </TouchableOpacity>
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

//make this component available to the app
export default VideoPlayer;
