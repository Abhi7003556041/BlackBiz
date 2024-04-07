import {
    StyleSheet, Text, View, ScrollView,
    StatusBar as RNStatusbar, Image, Pressable, FlatList,
    ImageBackground
} from 'react-native'
import React, { useState } from 'react';
import {
    AppBar, AppTextInput, Container,
    Icon, StatusBar, useTheme
} from 'react-native-basic-elements';

import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import IconY from 'react-native-vector-icons/MaterialCommunityIcons';
//svg
// import Flower from '../../Assets/images/flower.svg';

const Fullnews = () => {
    return (
        <Container>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground source={require('../../Assets/images/protest.jpg')}
                    style={{
                        width: '100%', height: 297,
                        flex: 1,

                    }}>

                    <AppBar.Back
                        // title='Money Transfer  to  Bank Account'
                        backgroundColor={'transparent'}
                        titlePosition='left'
                        titleStyle={{
                            fontFamily: FONTS.regular,
                            fontSize: 10,
                            textAlign: 'center'
                        }}

                        rightActions={[
                            {
                                icon: <Icon
                                    name='sharealt'
                                    type='AntDesign'
                                    size={17}

                                />,
                            },
                            {
                                icon: <Icon
                                    name='bookmark-check-outline'
                                    type='MaterialCommunityIcon'
                                    size={20}
                                    color={'#fff'}
                                    style={{
                                        marginLeft: 28,
                                        marginRight: 20
                                    }}
                                />
                            }

                        ]}
                        style={{
                            marginTop: RNStatusbar.currentHeight
                        }}
                        onLeftIconPress={() => NavigationService.back()}
                    />

                </ImageBackground>

                <StatusBar
                    backgroundColor={'#000'}
                    barStyle='light-content'
                    translucent={true}
                />

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    width: '94%',
                    alignSelf: 'center',
                }}>

                    <View style={{
                        height: 26, width: 26,
                        borderRadius: 5, backgroundColor: '#fff',
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        {/* <Flower style={{ marginLeft: 4 }} /> */}
                        <Image source={require('../../Assets/images/flower.png')}
                            style={{
                                marginLeft: 3,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <Text style={{
                        color: '#fff', fontSize: 12,
                        fontFamily: FONTS.bold,
                        marginLeft: 9,
                        flex: 1
                    }}>Fryday,{''} 17 June 2022</Text>

                    <Text style={{
                        color: '#fff', fontSize: 10,
                        fontFamily: FONTS.bold,
                        marginLeft: 9
                    }}>11:20 am</Text>

                </View>
                <Text style={{
                    color: '#fff', fontSize: 14, fontFamily: FONTS.bold,
                    lineHeight: 20,
                    maxWidth: '93%',
                    marginLeft: 15,
                    marginTop: 10
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor id at at curabitur. Elementum est eget eget arcu sed.
                </Text>

                <Text style={{
                    color: '#fff', fontSize: 11, fontFamily: FONTS.bold,
                    lineHeight: 20,
                    maxWidth: '93%',
                    marginLeft: 15,
                    marginTop: 10
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eros, amet vitae consectetur interdum metus tincidunt.
                    In suspendisse eu aliquet pellentesque consectetur quis diam quis.
                    Massa nam quam amet, dui non. Vitae proin ut vel auctor.
                    Urna vel sit tempus odio tristique eget elementum pellentesque.
                    Sit consectetur ultrices et, faucibus in vivamus.
                    Non vestibulum pellentesque in porttitor maecenas elit,
                    ac. Enim eget maecenas purus nunc lacus, sodales amet.
                    Volutpat facilisi viverra sem in. Volutpat congue pellentesque quam egestas.
                    At urna, cursus nec sem tincidunt vitae donec. Et massa maecenas placerat
                    scelerisque nunc, egestas pellentesque. Volutpat fermentum nisl massa ullamcorper
                    sit ac in interdum. Pulvinar et lorem quis cras porta ipsum. Mauris neque urna lorem pellentesque adipiscing netus. Adipiscing risus non habitant mauris tortor eu tortor. Pharetra at mattis orci montes, eu libero maecenas elementum. Lorem elit amet ut nunc massa purus nulla etiam sem. Urna,
                    aliquet varius nibh mauris. Enim lectus aenean feugiat pretium, fringilla nunc,
                </Text>

                <Text style={{
                    color: '#fff', fontSize: 11, fontFamily: FONTS.bold,
                    lineHeight: 20,
                    maxWidth: '93%',
                    marginLeft: 15,
                    marginTop: 20
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eros, amet vitae consectetur interdum metus tincidunt.
                    In suspendisse eu aliquet pellentesque consectetur quis diam quis.
                    Massa nam quam amet, dui non. Vitae proin ut vel auctor.
                    Urna vel sit tempus odio tristique eget elementum pellentesque.
                    Sit consectetur ultrices et, faucibus in vivamus.
                    Non vestibulum pellentesque in porttitor maecenas elit,
                    ac. Enim eget maecenas purus nunc lacus, sodales amet.

                    aliquet varius nibh mauris. Enim lectus aenean feugiat pretium, fringilla nunc,
                </Text>


            </ScrollView>
        </Container>
    )
}

export default Fullnews

const styles = StyleSheet.create({})