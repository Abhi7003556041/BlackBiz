//import liraries
import moment from 'moment';
import React, { Component, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Container } from 'react-native-basic-elements';
import { Rating } from 'react-native-ratings';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { ReviewResponseData } from '../../Models/OttModel';

type Props = {
    item:ReviewResponseData
}
// create a component
const ReviewComp: React.FC<Props> = ({item}) => {
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

    return (
        <Container>
            <Pressable
              style={{
                marginHorizontal:10
              }}
              >
                <Rating
              ratingTextColor="#fff"
              imageSize={20}
              // showRating={false}
              style={{
                marginTop:7,
                width: 100,
              }}        
              tintColor="#000"
              jumpValue={0.5}
              fractions={true}           
              startingValue={item.rating}
              readonly={true}
            />
            <Text
            style={{
              color: '#f4e2d8',
              fontSize: 12,
              fontFamily: FONTS.medium,
              marginVertical: 10,
              // marginLeft: 10,
            }}
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? 4 : 1}
            >{item.review}
            </Text>
            {/* {lengthMore ? */}
            <Text
            onPress={toggleNumberOfLines}
            style={{
              color: COLORS.primaryThemeColor,
              fontSize: 10,
              fontFamily: FONTS.medium,
              textAlign: 'right',
              marginRight: '10%',
              marginBottom:3
            }}>
            {textShown ? '..Read Less' : '..Read More'}
          </Text>
          {/* : null
          } */}
            <Pressable
            style={{
              flexDirection:'row',
              justifyContent:'space-between'
            }}
            >
              <Text
              style={{
                color: COLORS.gray11,
                fontSize: 14,
                fontFamily: FONTS.bold,
                // marginVertical: 10,
                // marginLeft: 10,
              }}
              >{item.userdata.firstname} {item.userdata.lastname}</Text>
              <Text
               style={{
                color: COLORS.rgba,
                fontSize: 14,
                fontFamily: FONTS.medium,
                // marginVertical: 10,
                // marginLeft: 10,
              }}
              >Created on : {moment(item.createdOn).format('DD-MM-YYYY')}
              </Text>

            </Pressable>
            <View
            style={{
              width:'100%',
              height:0.5,
              backgroundColor:COLORS.gray11,
              marginTop:10,
            }}
            />
              </Pressable>
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
export default ReviewComp;
