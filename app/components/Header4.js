
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MainPage from './MainPage';




function Header4() {
  const navigation = useNavigation();

    function navigateToMainPage() {
        navigation.navigate("eqTransport3");
    }
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:15}}>مدیریت ورود و خروج افراد به نیروگاه</Text>
        {/* <MaterialCommunityIcons  name="drag" size={40} color="white" /> */}
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
export default Header4;