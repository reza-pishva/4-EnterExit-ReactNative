
import React from 'react';
import { StyleSheet,View,Text,ImageBackground,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from './Screen';
import Header4 from './Header4';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { FlatList, ScrollView } from 'react-native-gesture-handler';



function PInfo(props) {
  const [loaded] = useFonts({
     Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Screen>
      <ImageBackground style={styles.container} source={require('../pic/bg14.jpg')}>
       <View style={styles.row2}>
         <Text style={{color:"black",fontSize:16,textAlign:'center',fontFamily:'Montserrat'}}> این بخش مدیریت ورود و خروج افرادی که قرارداد کاری با شرکت مپنا ندارند را پوشش می دهد. این بخش دارای گردش کاری است که این امکان را می دهد تا درخواست حضور نفراتی که برای انجام کارهای مختلف وارد نیروگاه می شوند از طرف بخشهای مختلف صادر می شود و پس از تایید توسط مسئول آن بخش برای واحد ایمنی ارسال می شود و در آنجا الزامات ایمنی برای فرد یا افرادی که وارد نیروگاه می شوند مشخص می گرددو در ادامه درخواست برای سرپرست حراست نیروگاه ارسال می گردد و در این بخش هم الزامات حراستی مد نظر این بخش مشخص می گردد. مدیر نیروگاه در مرحله بعدی درخواست را بررسی و تایید کرده و برای حراست نیروگاه می فرستد.</Text>
       </View>
       <Header4/>
      </ImageBackground>
     
    </Screen>  
            
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#19B7A9',
  },
  rowflat:{
    marginTop:-30,
  },
  row1:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:120,
      marginRight:10,
      marginBottom:30,
  },
  row2:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:150,
      paddingRight:15,
      paddingLeft:15,
      
  },
  row3:{
     alignItems:'center',
     flexDirection:'row',
     justifyContent:'space-around',
     fontSize:30,
     color:'white',
     marginBottom:20
},
row4:{
  fontSize:15,
  color:'white',
},
  image:{
      width:50,
      height:50,

  },
  image1:{
      width:280,
      height:200,
      borderRadius:20,
  },
})
export default PInfo;