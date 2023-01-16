import  React,{useState,useEffect} from 'react';
import { ImageBackground,TouchableOpacity,Text,View,StyleSheet,Image,Alert} from 'react-native';
import Header1 from './Header1';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ActivityIndicator from './ActivityIndicator';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';



function PeTitle() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
  }); 
    return (
      <Screen>
           <ImageBackground style={styles.container} source={require('../pic/bg23.jpg')}>
              <Image style={{borderRadius:60}} source={require('../pic/people1.png')}/>
              <Text style={styles.text}>نرم افزار مدیریت ورود و خروج افراد خارج از نیروگاه</Text>
           </ImageBackground>
      </Screen>
     
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontFamily:'Montserrat',
        color:'white',
        fontSize:15,
        marginTop:20,
    }
    
})
export default PeTitle;