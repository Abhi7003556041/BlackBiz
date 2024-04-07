//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppTextInput, Container, useTheme } from 'react-native-basic-elements';
import AppTopTab from '../../Component/Elements/AppTopTab';
import BackHeader from '../../Component/Header/BackHeader';
import { FONTS } from '../../Constants/Fonts';
import NavigationService from '../../Services/NavigationService';
import SwitchSelector from "react-native-switch-selector";
import Podcast from './Podcast';
import Author from './Author';



// create a component
const SearchPodcastInList = () => {
    const colors = useTheme()
    const [showhide, setShowHide] = useState<number>(1);
    return (
        <Container>
            {/* <View
                style={{
                    height: 80,
                }}
            > */}
            <BackHeader />
            {/* </View> */}

            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 10
                    }}
                >

                    <AppTextInput
                        leftIcon={{
                            name: 'search',
                            type: 'EvilIcon',

                        }}
                        placeholder='Podcast'
                        mainContainerStyle={{
                            marginTop: 10,


                        }}
                        inputContainerStyle={{
                            borderColor: colors.primaryFontColor,
                        }}
                        inputStyle={{
                            fontFamily: FONTS.medium,
                            fontSize: 12
                        }}
                    // onSubmitEditing={() => NavigationService.navigate('SearchPodcastInList')}
                    />

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
                                { label: "Podcast", value: 1, },
                                { label: "Author", value: 2, },
                            ]}

                        />
                    </View>


                    <View>
                        {showhide == 1 ?
                            (
                                <View>
                                    <Podcast />
                                </View>

                            ) :
                            (
                                <View>
                                    <Author />
                                </View>
                            )
                        }

                    </View>

                </View>


            </ScrollView>
        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default SearchPodcastInList;
