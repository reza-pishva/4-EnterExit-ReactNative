
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MainPage from './MainPage';




function Footer2() {
  const navigation = useNavigation();

    function navigateToMainPage() {
        navigation.navigate("mainPage");
    }
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="login" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="account-plus" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="home" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container2:{
      
       height:"7%",
       width:"100%",
       backgroundColor:"#575551",
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',
       position:'absolute',
       bottom:0,


    }
    // #5F5C69",
})
export default Footer2;