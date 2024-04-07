//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Container, Icon, useTheme } from 'react-native-basic-elements';
import BackHeader from '../../Component/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import SwitchSelector from "react-native-switch-selector";
import Queue from '../MyLibrary/Queue';
import Downloads from '../MyLibrary/Downloads';
import History from '../MyLibrary/History';


// create a component
const MyLibrary = () => {
    const colors = useTheme()
    const [showhide, setShowHide] = useState<number>(1);
    return (
        <Container>
            <BackHeader />
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Image
                            source={require('../../Assets/images/michrophone.png')}
                            resizeMode='contain'
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                color: colors.primaryFontColor,
                                marginLeft: 20
                            }}
                        >My Library</Text>

                        <View
                            style={{
                                flex: 1
                            }}
                        />

                        <Pressable
                        // onPress={() => NavigationService.navigate('Search')}
                        >
                            <Icon
                                name='history'
                                type='MaterialCommunityIcon'
                                style={{
                                    marginLeft: 20
                                }}
                                size={25}
                            />
                        </Pressable>

                    </View>

                    <View
                        style={{
                            marginTop: 10,
                        }}
                    >
                        <SwitchSelector
                            initial={0}
                            onPress={(value: React.SetStateAction<number | undefined>) => setShowHide(value)}
                            textColor={'#616161'}
                            //selectedColor={colors.primaryThemeColor}
                            buttonColor={'transparent'}
                            backgroundColor={'transparent'}
                            textStyle={{
                                fontFamily: FONTS.medium
                            }}
                            selectedTextStyle={{
                                borderBottomWidth: 3,
                                borderBottomColor: colors.primaryThemeColor,
                                color: colors.primaryThemeColor,
                                width: 165,
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


                            options={[
                                { label: "History", value: 1, },
                                { label: "Queue", value: 2, },
                                { label: "Downloads", value: 3, },
                            ]}

                        />
                    </View>

                    <View>
                        {showhide == 1 ?
                            (
                                <View>
                                   <History />
                                </View>

                            ) 
                            : showhide == 2 ?
                            (
                                <View>
                                  <Queue />
                                </View>
                            )
                            :
                            (
                                <View>
                                  <Downloads />
                                </View>
                            )

                            
                        }

                    </View>

                </View>

            </ScrollView>
        </Container>
    );
};



//make this component available to the app
export default MyLibrary;
