//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { Container, Icon, useTheme } from 'react-native-basic-elements';
import HistoricalDataCard from '../../Component/Business/HistoricalDataCard';

import { FONTS } from '../../Constants/Fonts';

const { height, width } = Dimensions.get('window')
// create a component
const HistoricalData = () => {
  const colors = useTheme()
  const timedata = [
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
    {
      time: '16/06',
      status: true,
      chg: '2.04%'
    },
    {
      time: '16/06',
      status: true,
      chg: '2.04%'
    },
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
    {
      time: '16/06',
      status: true,
      chg: '2.04%'
    },
    {
      time: '16/06',
      status: true,
      chg: '2.04%'
    },
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
    {
      time: '16/06',
      status: true,
      chg: '2.04%'
    },
    {
      time: '16/06',
      status: true,
      chg: '2.04%'
    },
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
    {
      time: '16/06',
      status: false,
      chg: '-0.65%'
    },
  ]
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View
        style={styles.main}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <View
            style={{
              backgroundColor: colors.primaryThemeColor,
              height: 49,
              width: 114,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 12,
                color: colors.pageBackgroundColor
              }}
            >Daily</Text>

          </View>

          <View
            style={{
              height: 49,
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              backgroundColor: '#241A0C',
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10
            }}
          >
            <Icon
              name='calendar'
              type='AntDesign'
            />
            <Text
              style={{
                fontFamily: FONTS.semibold,
                fontSize: 12,
                color: colors.primaryFontColor,
                marginLeft: 10
              }}
            >18/05/2020 - 17/6/2020</Text>


          </View>

        </View>

      </View>


      <View
        style={{
          marginTop: 15
        }}
      >
        <View
          style={{
            backgroundColor: '#231A0C',
            height: 70,
            marginTop: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center'

          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

            }}
          >
            <View
              style={{
                width: '25%',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor,
                  paddingVertical: 5

                }}
              >Open</Text>

              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor
                }}
              >26,289.98</Text>
            </View>

            <View
              style={{
                width: '25%',
                // alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor,
                  paddingVertical: 5
                }}
              >Highest</Text>

              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor
                }}
              >26,289.98</Text>
            </View>

            <View
              style={{
                width: '25%',
                // alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor,
                  paddingVertical: 5
                }}
              >Lowest</Text>

              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor
                }}
              >26,289.98</Text>
            </View>

            <View
              style={{
                width: '25%',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryFontColor,
                  paddingVertical: 5
                }}
              >Chg. %</Text>

              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 12,
                  color: colors.primaryThemeColor
                }}
              >16.9%</Text>
            </View>

          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              backgroundColor: '#130C07',
              width: 121,
              paddingHorizontal: 20
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: 12,
                color: colors.secondaryFontColor,
                paddingVertical: 10
              }}
            >Time</Text>

            <FlatList
              data={timedata}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      height: 50,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontSize: 12,
                        color: colors.primaryFontColor,
                        // paddingVertical: 10
                      }}
                    >16/06</Text>

                    <View
                      style={{
                        height: index == 0 ? 25 : 50,
                        width: 5,
                        backgroundColor: colors.pageBackgroundColor,
                        position: 'absolute',
                        bottom: 0,
                        right: 5

                      }}
                    />
                    <Icon
                      name='dot-fill'
                      type='Octicons'
                      color={item.status == false ? '#DE4C4C' : '#0AA793'}
                      size={25}
                    />


                  </View>
                )
              }}
            />

          </View>

          <ScrollView
            horizontal={true}
          >
            <View
              style={{
                paddingHorizontal: 20
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <View
                  style={styles.header_text}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 12,
                      color: colors.secondaryFontColor,
                      paddingVertical: 10
                    }}
                  >Price</Text>


                  <FlatList
                    data={timedata}
                    renderItem={({ item, index }) => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: 50,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: FONTS.medium,
                              fontSize: 12,
                              color: item.status == false ? '#DE4C4C' : '#0AA793'

                            }}
                          >26,289.98</Text>

                          <View
                            style={{
                              height: index == 0 ? 25 : 50,
                              width: 5,
                              backgroundColor: colors.pageBackgroundColor,
                              position: 'absolute',
                              bottom: 0,
                              right: 5

                            }}
                          />
                        </View>
                      )
                    }}
                  />

                </View>


                <View style={styles.header_text}>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 12,
                      color: colors.secondaryFontColor,
                      paddingVertical: 10
                    }}
                  >Open</Text>

                  <FlatList
                    data={timedata}
                    renderItem={({ item, index }) => {
                      return (
                        <HistoricalDataCard />
                      )
                    }}
                  />
                </View>

                <View style={styles.header_text}>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 12,
                      color: colors.secondaryFontColor,
                      paddingVertical: 10
                    }}
                  >High</Text>

                  <FlatList
                    data={timedata}
                    renderItem={({ item, index }) => {
                      return (
                        <HistoricalDataCard />
                      )
                    }}
                  />
                </View>

                <View style={styles.header_text}>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 12,
                      color: colors.secondaryFontColor,
                      paddingVertical: 10
                    }}
                  >Low</Text>

                  <FlatList
                    data={timedata}
                    renderItem={({ item, index }) => {
                      return (
                        <HistoricalDataCard />
                      )
                    }}
                  />
                </View>

                <View style={styles.header_text}>
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 12,
                      color: colors.secondaryFontColor,
                      paddingVertical: 10
                    }}
                  >Vol</Text>

                  <FlatList
                    data={timedata}
                    renderItem={({ item, index }) => {
                      return (
                        <HistoricalDataCard />
                      )
                    }}
                  />
                </View>
                <View
                  style={styles.header_text}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: 12,
                      color: colors.secondaryFontColor,
                      paddingVertical: 10
                    }}
                  >Chg %</Text>

                  <FlatList
                    data={timedata}
                    renderItem={({ item, index }) => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: 50,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: FONTS.medium,
                              fontSize: 12,
                              color: item.status == false ? '#DE4C4C' : '#0AA793'

                            }}
                          >{item.chg}</Text>

                          <View
                            style={{
                              height: index == 0 ? 25 : 50,
                              width: 5,
                              backgroundColor: colors.pageBackgroundColor,
                              position: 'absolute',
                              bottom: 0,
                              right: 5

                            }}
                          />
                        </View>
                      )
                    }}
                  />
                </View>
              </View>


            </View>
          </ScrollView>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  header_text: {
    width: 100,
  }
});



//make this component available to the app
export default HistoricalData;
