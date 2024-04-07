//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Icon, Text, useTheme } from 'react-native-basic-elements';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { FONTS } from '../../Constants/Fonts';

// create a component
const AnalysisBlog = (props: { item: any }) => {
    const colors = useTheme()
    return (
        <Container>
            <View
                style={{
                    marginTop: 10,
                }}
            >
                <View
                    style={styles.main}
                >
                    <View
                        style={{
                            width: '20%'
                        }}
                    >
                        <Image
                            source={props.item?.image}
                            resizeMode='contain'
                            style={{
                                height: 56,
                                width: 56,
                                borderRadius: 26
                            }}
                        />
                    </View>

                    <View
                        style={styles.title}
                    >
                        <Text.Heading
                            title={props.item?.title}
                            style={{
                                fontFamily: FONTS.semibold,
                                fontSize: 14,
                            }}
                        />

                        <View
                            style={styles.userDetails}
                        >
                            <Text
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                    color: colors.primaryThemeColor
                                }}
                            >{props.item?.name}</Text>

                            <Icon
                                name='user'
                                type='FontAwesome'
                                style={{
                                    marginLeft: 10
                                }}
                                size={15}
                            />
                            <View
                                style={{
                                    flex: 1
                                }}
                            />

                            <Text.SubHeading
                                title='15hr ago'
                                style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: 12,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    title: {
        marginLeft: 5,
        width: '80%'
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // width: '90%'
    },
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    }
});

//make this component available to the app
export default AnalysisBlog;
