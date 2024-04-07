//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container, useTheme } from 'react-native-basic-elements';
import BusinessHaeder from '../../Component/Header/BusinessHeader';
import { FONTS } from '../../Constants/Fonts';
import SwitchSelector from "react-native-switch-selector";
import OverView from './Overview';
import Technical from './Technical';
import Analysis from './Analysis';
import HistoricalData from './HistoricalData';

// create a component
const StartTrading = () => {
    const colors = useTheme()
    const [showhide, setShowHide] = useState<number>(1);
    return (
        <Container>
            <BusinessHaeder title='Business' />
            <ScrollView>
                <View
                style={{
                    marginTop: 10,
                    marginHorizontal: 10
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
                                // width: 165,
                                paddingBottom: 8,
                                fontFamily: FONTS.medium,

                            }}
                            textContainerStyle={{
                                borderBottomWidth: 3,
                                // borderColor: '#35383F',
                                paddingBottom: 8,
                                marginHorizontal: 1,
                            }}
                            borderColor={'transparent'}

                            fontSize={12}
                            
                            height={45}
                            valuePadding={0}


                            options={[
                                { label: "Overview", value: 1, },
                                { label: "Technical", value: 2, },
                                { label: "Analysis", value: 3, },
                                { label: "Historical  data ", value: 4, },
                            ]}
                        />


                        <View>
                            {showhide == 1 ? 
                        <View>
                            <OverView />
                        </View>   
                        :  showhide == 2 ?
                        <View>
                            <Technical />
                        </View>
                        :  showhide == 3 ?
                        <View>
                            <Analysis />
                        </View>
                        :  
                        <View>
                            <HistoricalData />
                        </View>
                        }
                        </View>
                </View>
            </ScrollView>
        </Container>
    );
};



//make this component available to the app
export default StartTrading;
