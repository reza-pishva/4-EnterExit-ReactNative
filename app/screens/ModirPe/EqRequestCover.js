import React from 'react';
import {StyleSheet,View,Text } from 'react-native';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';




function EqRequestCover({children,top_color,text_color,text,back_color}) {
  const navigation = useNavigation();

    function navigateToMainPage() {
        navigation.navigate("mainPage",{eq:"eq4"});
    }
  const [loaded] = useFonts({
    Montserrat: require('../../components/assets/fonts/Vazir-Regular.ttf'),
  });

    return (
        <View style={[styles.container1,{backgroundColor:back_color}]}>    
             
             <View style={[styles.container2,{backgroundColor:top_color}]}>
               <TouchableOpacity style={styles.arrow} onPress={()=>navigateToMainPage()}>
                 <MaterialCommunityIcons name="arrow-left-bold-circle" size={35} color="white" />
               </TouchableOpacity> 
               <View>
                 <Text style={[styles.text1,{color:text_color}]}>{text}</Text>
               </View>
               
             </View>
             <View>
               {children}
             </View>             
           </View>

    );
}
const styles = StyleSheet.create({
    container1:{
        flex:1,
        // paddingTop:Constants.statusBarHeight
    },
    container2:{
      flexDirection:'row',
      height:60,
      width:"100%",
      borderBottomRightRadius:25,
      borderBottomLeftRadius:25,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:50,
    },
    text1:{
      fontFamily:"Montserrat",
      fontSize:16
    },
    arrow:{
      position:'absolute',
      left:20,
    }
    
})
export default EqRequestCover;