//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar, Image, ImageBackground, Pressable } from 'react-native';
import { AppBar, Text, Card, Container, Icon, StatusBar, useTheme, AppTextInput, AppButton, RadioButton } from 'react-native-basic-elements';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';



const Wallet = () => {
    const colors = useTheme()
    const [selected, setSelected] = useState(false);
    const [sbiBank, setsbiBank] = useState(false);
    const [iciciBank, seticiciBank] = useState(false)
    
    return (
        <Container>
            <ImageBackground
                source={require('../../Assets/images/Background.png')}
            >
                <AppBar.Back
                    backgroundColor={'transparent'}
                    titlePosition='left'

                    style={{
                        marginTop: RNStatusbar.currentHeight,
                        alignItems: 'center'
                    }}

                    rightActions={[
                        {
                            icon: <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.medium,
                                    fontSize: 12
                                }}
                            >Help</Text>,
                            onPress: () => console.log("bal")
                        },
                        {
                            icon: <Text
                                style={{
                                    color: colors.primaryFontColor,
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    marginLeft: 20
                                }}
                            >Settings</Text>,

                            onPress: () => console.log("bal")
                        }
                    ]}
                    onLeftIconPress={() => NavigationService.back()}
                />
                <StatusBar
                    backgroundColor={'transparent'}
                    barStyle='light-content'
                    translucent={true}
                />

                <View
                    style={{
                        alignItems: 'center',
                        marginVertical: 25
                    }}
                >
                    <Image
                        source={require('../../Assets/images/Card.png')}
                        resizeMode='contain'
                        style={{
                            height: 165
                        }}
                    />

                </View>

            </ImageBackground>
            <ScrollView>
                <View>
                    <View
                        style={{
                            // alignItems: 'center',,
                            marginHorizontal: 30,
                            marginTop: 20
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 15,
                                color: colors.primaryFontColor
                            }}
                        >Add Money to <Text
                            style={{
                                color: '#FFC100'
                            }}
                        >Wallet</Text></Text>

                    </View>
                    <View
                        style={{
                            marginHorizontal: 30,
                            marginVertical: 20,

                        }}
                    >
                        <AppTextInput
                            placeholder='$500'
                            inputStyle={{
                                paddingHorizontal: 10,
                                fontFamily: FONTS.medium
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}
                    >
                        <AppButton
                            title='$100'
                            textStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 12,
                                paddingHorizontal: 10
                            }}
                            style={{
                                borderRadius: 30,
                                // width: 73,
                                height: 27,
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: colors.primaryFontColor,
                                marginHorizontal: 10
                            }}
                        />
                        <AppButton
                            title='$500'
                            textStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 12,
                                paddingHorizontal: 10,
                                color: colors.headerColor
                            }}
                            style={{
                                borderRadius: 30,
                                // width: 73,
                                height: 27,
                                backgroundColor: '#4CD964',
                                borderColor: colors.primaryFontColor,
                                marginHorizontal: 10
                            }}
                        />
                        <AppButton
                            title='$1000'
                            textStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 12,
                                paddingHorizontal: 10
                            }}
                            style={{
                                borderRadius: 30,
                                // width: 73,
                                height: 27,
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: colors.primaryFontColor,
                                marginHorizontal: 10
                            }}
                        />
                        <AppButton
                            title='$2000'
                            textStyle={{
                                fontFamily: FONTS.medium,
                                fontSize: 12,
                                paddingHorizontal: 10
                            }}
                            style={{
                                borderRadius: 30,
                                // width: 73,
                                height: 27,
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: colors.primaryFontColor,
                                marginHorizontal: 10
                            }}
                        />
                    </View>

                    <View
                    style={{
                        alignItems: 'center'
                    
                    }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 50,
                                marginTop: 20,
                                // justifyContent: 'space-evenly',
                                // backgroundColor: 'red'

                            }}
                        >
                            <RadioButton
                                selected={selected}
                                onChange={(val) => setSelected(val)}
                                size={25}
                                activeColor={colors.primaryFontColor}
                                // containerStyle={{
                                //     paddingHorizontal: 30
                                // }}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    alignItems: 'center',
                                    marginLeft: 20
                                }}
                            >

                                <Image
                                    source={require('../../Assets/images/icici.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: 35,
                                        width: 28
                                    }}
                                />


                                <View
                                    style={{
                                        marginLeft: 20,
                                        flex: 1
                                    }}
                                >
                                    <Text style={styles.title_text}>ICICI Bank</Text>
                                    <Text style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 10,
                                        color: colors.secondaryFontColor
                                    }}>xx23</Text>
                                </View>

                            </View>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal : 50,
                                marginTop: 20,
                                // justifyContent: 'center'
                            }}
                        >
                            <RadioButton
                                selected={sbiBank}
                                onChange={(val) => setsbiBank(val)}
                                size={25}
                                activeColor={colors.primaryFontColor}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    alignItems: 'center',
                                    marginLeft: 20
                                }}
                            >

                                <Image
                                    source={require('../../Assets/images/sbi.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: 35,
                                        width: 28
                                    }}
                                />


                                <View
                                    style={{
                                        marginLeft: 20,
                                        flex: 1
                                    }}
                                >
                                    <Text style={styles.title_text}>State Bank  of India</Text>
                                    <Text style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 10,
                                        color: colors.secondaryFontColor
                                    }}>xx23</Text>
                                </View>

                            </View>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 50,
                                marginTop: 20,
                                // justifyContent: 'center'
                            }}
                        >
                            <RadioButton
                                selected={iciciBank}
                                onChange={(val) => seticiciBank(val)}
                                size={25}
                                activeColor={colors.primaryFontColor}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    alignItems: 'center',
                                    marginLeft: 20
                                }}
                            >

                                <Image
                                    source={require('../../Assets/images/hdfc.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: 35,
                                        width: 28
                                    }}
                                />


                                <View
                                    style={{
                                        marginLeft: 20,
                                        flex: 1
                                    }}
                                >
                                    <Text style={styles.title_text}>HDFC Bank</Text>
                                    <Text style={{
                                        fontFamily: FONTS.medium,
                                        fontSize: 10,
                                        color: colors.secondaryFontColor
                                    }}>xx23</Text>
                                </View>

                            </View>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 15,
                            }}
                        >
                            <Icon
                                name='add-circle-outline'
                                type='Ionicon'
                                style={{
                                    marginRight: 15
                                }}
                            />

                            <Icon
                                name='bank-outline'
                                type='MaterialCommunityIcon'
                                style={{
                                    marginLeft: 10
                                }}
                            />

                            <Text
                                style={{
                                    marginLeft: 15,
                                    fontFamily: FONTS.medium,
                                    fontSize: 14,
                                    color: colors.primaryFontColor
                                }}
                            >Add Another Bank Account </Text>
                        </View>
                    </View>


                    <View
                        style={{
                            marginTop: 30,
                            marginBottom: 20
                        }}
                    >
                        <AppButton
                            title='Continue'
                            textStyle={{
                                fontFamily: FONTS.medium
                            }}
                            style={{
                                borderRadius: 30,
                                marginHorizontal: 50
                            }}
                        />
                    </View>
                </View>


            </ScrollView>

        </Container>
    );
};
const styles = StyleSheet.create({
    title_text: {
        fontFamily: FONTS.medium,
        fontSize: 14
    },
});

export default Wallet;
