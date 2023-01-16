
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MainPage from './MainPage';




function Header9() {
  const navigation = useNavigation();
    function navigateToMainPage() {
        navigation.navigate("eqKartabl04");
    }
    function navigateToiInfo() {
      navigation.navigate("iInfo");
    }
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:15}}>جزئیات درخواست</Text>
        <TouchableOpacity onPress={navigateToiInfo} >
           <MaterialCommunityIcons name="questioncircle" size={40} color="white" />
        </TouchableOpacity>
        
      </View>
    );
}
const styles = StyleSheet.create({
    container2:{
       height:"10%",
       width:"100%",
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       backgroundColor:"#3E4971",
       marginBottom:15,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around'

    }
    // #5F5C69",
})
export default Header9;