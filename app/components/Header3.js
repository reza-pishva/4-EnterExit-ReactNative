
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MainPage from './MainPage';




function Header3() {
  const navigation = useNavigation();

    function navigateToMainPage() {
        navigation.navigate("mainPage");
    }
    function navigateToinfo() {
      navigation.navigate("pInfo");
    }
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:15}}>مدیریت ورود و خروج افراد به نیروگاه</Text>
        <TouchableOpacity  onPress={navigateToinfo}>
           <MaterialCommunityIcons name="questioncircle" size={40} color="white" /> 
        </TouchableOpacity>
        
      </View>
    );
}
const styles = StyleSheet.create({
    container2:{
       height:"15%",
       width:"100%",
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       backgroundColor:"#162A90",
       position:'absolute',
       top:0,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around'


    }
    // #5F5C69",
})
export default Header3;