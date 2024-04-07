import { View, Pressable } from 'react-native'
import React from 'react'
import { AppTextInput, Icon, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/NavigationService'

const SearchHeader = () => {
  const colors = useTheme()
  return (
    <View
      style={{
        height: 70,
       
      }}
    >
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20
        }}
      >
      <Pressable
      onPress={() => NavigationService.back()}
      >
      <Icon
          name='arrowleft'
          type='AntDesign'
          color={colors.primaryFontColor}
          
        />
      </Pressable>
       

        <AppTextInput
          leftIcon={{
            name: 'search',
            type: 'EvilIcon',
            

          }}
          placeholder='Search'

          mainContainerStyle={{
            flex: 1,
            marginTop: 20,
            marginLeft: 10,

          }}
          inputContainerStyle={{
            borderColor: colors.primaryFontColor
            
          }}
          inputStyle={{
            fontFamily: FONTS.medium,
            fontSize: 12,
            // height: 
          }}
        />
      </View>



    </View>
  )
}

export default SearchHeader