import {
    StyleSheet, Text, View, StatusBar as RNStatusbar,
    ImageSourcePropType, Image, SectionList, Pressable, ScrollView,
    ImageBackground, Dimensions
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme, Card, AppButton
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import Video from 'react-native-video';
const height = Dimensions.get('window').height

const VideoPlayer = () => {
    const colors = useTheme()
    return (
        <Container>
            <AppBar.Back
                // title='Codding with Java'
                backgroundColor={'transparent'}
                titlePosition='left'
                titleStyle={{
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    color: colors.primaryFontColor
                }}


                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
                onLeftIconPress={() => NavigationService.back()}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />


            <View style={{
                width: '100%',
                //backgroundColor: 'green',
                height: 250,
                marginTop: height / 4
            }}>

                <Video source={require('../../Assets/images/test.mp4')}   // Can be a URL or a local file.
                    // ref={(ref) => {
                    //     this.player = ref
                    // }}                                      // Store reference
                    // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    // onError={this.videoError} 
                    //paused={!isPlaying}
                    paused={true}
                    controls={true}            // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />





            </View>

        </Container>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
})