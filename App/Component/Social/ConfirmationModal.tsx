// //import liraries
// import React, { Component, useState } from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { COLORS } from '../../Constants/Colors';

// // create a component
// const ConfirmationModal = () => {
//     const [visibility,setVisibilty] = useState<boolean>(false)

//     return (
        
//              <View
//            style={{
//             flex:1
//            }}
//            >
//             <Pressable            
//             style={{
//                 flex:3.5
//             }}
//             onPress={()=> setVisibilty(false)}
//             >
//             </Pressable>
//             <View
//             style={{
//                 flex:1,
//                 backgroundColor:COLORS.dark11
//             }}
//             >
//                 <Pressable>

//                 </Pressable>
                
//                 </View>
//            </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default ConfirmationModal;

import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { SinglePostData } from '../../Models/SocialModel';
import Toast from 'react-native-simple-toast';
import { moderateScale } from '../../PixelRatio';
import NavigationService from '../../Services/NavigationService';
import SocialService from '../../Services/SocialSevices';
import { useAppDispatch } from '../../redux/store';
import { deletedComment, updateComment, updateLike,deletePostSingle } from '../../redux/reducer/Social';

type Props = {
    modalfunc:()=> void
    id: string
}
// create a component
const ConfirmationModal: React.FC<Props> = (props) => {
    const { height, width } = Dimensions.get('window');
    const dispatch = useAppDispatch()
    const deletePost = () =>{
        let data:SinglePostData = {
            _id:props.id
        }
        SocialService.deletePost(data)
            .then((res)=>{
                console.log('postdeletedata',res)
                dispatch(deletePostSingle({Id:props.id}))
        Toast.showWithGravity('Post Deleted Successfully!', Toast.SHORT, Toast.BOTTOM);
                props.modalfunc()
            })
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#000000ab',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={{ ...styles.newmorph, width: width - 40 }}>
                <Text style={styles.alert}>
                    Do you want to proceede?
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: moderateScale(15),
                    }}>
                    <Pressable style={styles.buttonStyle} 
                        onPress={() => {
                        deletePost()
                        // NavigationService.navigate('NewLogin')
                    }}>
                        <LinearGradient
                            colors={[COLORS.primaryThemeColor, COLORS.black]}
                            style={{ ...styles.linearGradient, width: '45%' }}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.Extrabold,
                                    textTransform: 'uppercase',
                                }}>
                                Yes
                            </Text>
                        </LinearGradient>
                    </Pressable>
                    <Pressable style={styles.buttonStyle}
                     onPress={() => props.modalfunc()}
                     >
                        <LinearGradient
                            colors={[COLORS.gray11, COLORS.black]}
                            style={{ ...styles.linearGradient, width: '45%' }}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.Extrabold,
                                    textTransform: 'uppercase',
                                }}>
                                No
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    newmorph: {
        shadowRadius: 9,
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: COLORS.gray11,
        width: '98%',
        height: 180,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignSelf: 'center',
        elevation: 5,
    },
    linearGradient: {
        // flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 40,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alert: {
        fontFamily: FONTS.Extrabold,
        color: '#000',
        fontSize: moderateScale(18)
    },
    buttonStyle: {
        // borderWidth: 1,
        // marginTop: moderateScale(21),
        width: '90%',
        height: moderateScale(45),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        marginBottom: 10,
        // marginVertical: 40,
    },
});

//make this component available to the app
export default ConfirmationModal;
