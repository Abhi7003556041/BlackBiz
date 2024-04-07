import { View, StyleSheet, ScrollView, StatusBar as RNStatusbar } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Text, Container, StatusBar, useTheme, Icon, CheckBox, Card } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'
import { Switch } from 'react-native-paper';

const ManageNotification = () => {
    const colors = useTheme()
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [isSwitchOnforSms, setIsSwitchOnforSms] = React.useState(false);

    const onToggleSwitchforSms = () => setIsSwitchOnforSms(!isSwitchOnforSms);

    const [check, setCheck] = useState(false);
    const [checkPay, setCheckPay] = useState(false);


    const [isSwitchOnforWhatsapp, setIsSwitchOnforWhatsapp] = React.useState(false);

    const onToggleSwitchforWhatsapp = () => setIsSwitchOnforWhatsapp(!isSwitchOnforWhatsapp);
    
    return (
        <Container>
            <AppBar.Back
                backgroundColor={'transparent'}
                style={{
                    marginTop: RNStatusbar.currentHeight
                }}
                rightActions={[
                    {
                        icon: <Text style={{
                            fontFamily: FONTS.medium,
                            fontSize: 10,
                            color: colors.primaryFontColor,
                            marginLeft: 10
                        }}>Help</Text>
                    },

                ]}
                onLeftIconPress={() => NavigationService.back()}
            />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                translucent={true}
            />
            <ScrollView>
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    <Text.Heading
                        title='Manage  Notification'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 15
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: 20
                        }}
                    >
                        <Icon
                            name='exclamation-circle'
                            type='FontAwesome'
                            color={'#F44336'}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.regular,
                                fontSize: 10,
                                marginLeft: 15
                            }}
                        >Add  your email ID  for updates</Text>

                        <View
                            style={{
                                flex: 1,
                            }}
                        />

                        <Text
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 10,
                                color: colors.primaryThemeColor
                            }}
                        >Add</Text>

                    </View>

                    <Text.Heading
                        title='Wallet and  Bank SMS Subscription'
                        style={{
                            fontFamily: FONTS.semibold,
                            fontSize: 12,
                            paddingVertical: 10
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >

                        <View
                            style={{
                                width: '70%'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 8,
                                    //    textAlign: 'center' 
                                }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean amet etiam tellus lectus gravida. Mauris ipsum id morbi quisque. Arcu pretium arcu egestas est in ut a. Dignissim gravida in aliquet euismod ultricies elementum mi.
                                <Text
                                    style={{
                                        color: colors.primaryThemeColor
                                    }}
                                > Know More</Text></Text>

                        </View>

                        <View
                            style={{
                                width: '30%',
                            }}
                        >
                            <Switch

                                trackColor={{ false: "#767577", true: "#F44336" }}
                                thumbColor={isSwitchOn ? "#FFFFFF" : "#FFFFFF"}
                                onValueChange={onToggleSwitch}
                                value={isSwitchOn}

                            />
                        </View>
                    </View>

                    <Text
                        style={{
                            fontFamily: FONTS.medium,
                            paddingVertical: 10,
                            fontSize: 12
                        }}
                    >Other payment updats</Text>
                    <Text.SubHeading
                        title='Alerts on recharges, bill payments, shoppings and
                    other payments'
                        style={{
                            fontFamily: FONTS.medium,
                            fontSize: 10
                        }}
                    />

                    <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 10
                    }}
                    >
                        <CheckBox
                            checked={check}
                            onChange={(val) => setCheck(val)}
                            size={25}
                            containerStyle={{
                                borderRadius: 10
                            }}
                            activeColor={colors.primaryThemeColor}
                        />

                        <Text
                        style={{
                            fontFamily:  FONTS.medium,
                            fontSize: 12,
                            marginLeft: 15
                        }}
                        >Order Payment updates</Text>
                            
                    </View>

                    <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 10
                    }}
                    >
                        <CheckBox
                            checked={checkPay}
                            onChange={(val) => setCheckPay(val)}
                            size={25}
                            containerStyle={{
                                borderRadius: 10
                            }}
                            activeColor={colors.primaryThemeColor}
                        />

                        <Text
                        style={{
                            fontFamily:  FONTS.medium,
                            fontSize: 12,
                            marginLeft: 15
                        }}
                        >Stay updated on latest offers,deals & 
                        scratchcards</Text>
                            
                    </View>

                    <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 20,
                    }}
                    >
                        <View
                         style={{
                            width: '70%',
                        }}
                        >
                            <Text.Heading
                            title='Access to SMS'
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 13

                            }}
                            />
                            <Text.SubHeading 
                            title='Permission to read SMS to get Bill 
                            reminders and other offers'
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                paddingVertical: 10
                                
                            }}
                            />
                        </View>

                        <View
                            style={{
                                width: '30%',
                            }}
                        >
                            <Switch

                                trackColor={{ false: "#767577", true: colors.primaryThemeColor }}
                                thumbColor={isSwitchOnforSms ? "#FFFFFF" : "#FFFFFF"}
                                onValueChange={onToggleSwitchforSms}
                                value={isSwitchOnforSms}

                            />
                        </View>

                    </View>

                    <Card 
                    style={{
                        height: 91,
                        backgroundColor: colors.primaryFontColor,
                        flexDirection: 'row',
                        marginVertical: 20
                    }}

                    
                    >
                          <View
                         style={{
                            width: '70%',
                        }}
                        >
                            <Text.Heading
                            title='Access to SMS'
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 13,
                                color: colors.pageBackgroundColor

                            }}
                            />
                            <Text.SubHeading 
                            title='Permission to send important updates on whatsapp'
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 10,
                                paddingVertical: 10
                                
                            }}
                            />
                        </View>

                        <View
                            style={{
                                width: '30%',
                            }}
                        >
                            <Switch

                                trackColor={{ false: "#767577", true: colors.primaryThemeColor }}
                                thumbColor={isSwitchOnforWhatsapp ? "#FFFFFF" : "#FFFFFF"}
                                onValueChange={onToggleSwitchforWhatsapp}
                                value={isSwitchOnforWhatsapp}

                            />
                        </View>

                        </Card>

                </View>

            </ScrollView>

        </Container>
    )
}

const styles = StyleSheet.create({

})

export default ManageNotification