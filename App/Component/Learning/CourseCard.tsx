//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageSourcePropType } from 'react-native';
import { Card, Container, Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { CategoryWiseVideoResponseData } from '../../Models/LearningModal';
import NavigationService from '../../Services/NavigationService';


interface cardType {
    img: ImageSourcePropType,
    smallname: string,
    name: string

}
type Props = {
    item:CategoryWiseVideoResponseData
    onCardPress?: () => void
}
// create a component
const CourseCard:React.FC<Props>= ({item, onCardPress}) => {
    const colors = useTheme()
    
    return (
        <Container>
             <Card style={{
                            ...styles.card,
                            borderColor: colors.primaryFontColor
                        }}
                            onPress={() => (onCardPress ? onCardPress() : null)                        
                            }
                        >

                            <Image source={{uri:item.thumbline}}
                                style={{
                                    width: 120, height: 140,
                                    resizeMode: 'contain',

                                }} />
 
                            <View style={{
                                //backgroundColor: 'green',
                                flex: 1,
                                marginLeft: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginTop: 8
                                }}>

                                    <View style={{
                                        //width: 66, 
                                        height: 24,
                                        backgroundColor: colors.secondaryThemeColor,
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}>
                                        <Text style={{
                                            fontSize: 10,
                                            paddingHorizontal: 10,
                                            color: '#000', fontFamily: FONTS.medium
                                        }}>{item.courseName}</Text>

                                    </View>
                                    {/* {console.log('nal',item.bookmarks)} */}
                                    <Icon
                                        name={item.bookmarks == 0 ?  "bookmark-minus-outline" : 'bookmark-minus'}
                                        type='MaterialCommunityIcon'
                                        size={20}
                                        color={colors.primaryThemeColor}
                                        style={{ alignSelf: 'flex-end' }}
                                    />
                                </View>

                                <Text
                                    allowFontScaling={false}
                                    style={{
                                        color: colors.primaryFontColor, fontSize: 16,
                                        fontFamily: FONTS.bold,
                                        marginVertical: 6
                                    }}>{item.description}</Text>

                                <View style={{
                                    flexDirection: 'row', alignItems: 'center'
                                }}>

                                    <Text style={{
                                        color: colors.primaryThemeColor, fontSize: 18,
                                        fontFamily: FONTS.bold
                                    }}>$ {item.price}</Text>

                                    {/* <Text style={{
                                        color: colors.primaryFontColor, fontSize: 12,
                                        fontFamily: FONTS.bold,
                                        textDecorationLine: 'line-through',
                                        textDecorationStyle: 'solid',
                                        marginLeft: 10
                                    }}>$80</Text> */}
                                </View>

                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    marginTop: 5
                                }}>
                                    <Icon
                                        name='star'
                                        type='AntDesign'
                                        color={colors.primaryThemeColor}
                                        size={15}
                                    />
                                    <Text style={{
                                        color: colors.primaryFontColor, fontSize: 12,
                                        fontFamily: FONTS.bold,
                                        marginLeft: 9
                                    }}>{item.avgrating ?  item.avgrating.toFixed(1) : 0}</Text>

                                    <Icon
                                        name='remove-outline'
                                        type='Ionicon'
                                        color={colors.primaryFontColor}
                                        size={23}
                                        style={{
                                            transform: [{ rotate: '90deg' }],
                                            marginTop: 4
                                        }}
                                    />
                                    <Text style={{
                                        color: colors.primaryFontColor, fontSize: 12,
                                        fontFamily: FONTS.bold,
                                    }}>{ item.totalBuyCount } {item.totalBuyCount > 1 ? "students" : "student"}</Text>

                                </View>
                            </View>
                        </Card>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        opacity: 0.7,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 15,
    }
});

//make this component available to the app
export default CourseCard;
