//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container } from 'react-native-basic-elements';
import { moderateScale, verticalScale } from '../../PixelRatio';

type Props = {
    image:Array<string> | null
}

// create a component
const FeedVideo: React.FC<Props>= (props) => {
    return (
       <Container>
            <View
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                // marginHorizontal:5
            }}
            >
                {props.image ?
                <Image
                    source={{uri:props.image[0]}}
                    style={{
                        height:300,
                        width:'100%',
                        borderRadius:10
                       
                        // marginHorizontal:20
                    }}                 
                />
                :null
}
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
});

//make this component available to the app
export default FeedVideo;
