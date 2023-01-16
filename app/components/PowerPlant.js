
import React,{useState} from 'react';
import { StyleSheet,View,Text,ImageBackground,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from './Screen';
import Header7 from './Header7';
// import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import  ActivityIndicator  from './ActivityIndicator';


const datas=[
  {id:1,image:require('../pic/kz.png')},
  {id:2,image:require('../pic/p6.jpg')},
  {id:3,image:require('../pic/p8.jpg')},
  {id:4,image:require('../pic/power3.jpg')}
]

function PowerPlant(pro) {
  
  const [loaded] = useFonts({
     Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Screen>
      <ImageBackground style={styles.container} source={require('../pic/bg19.jpg')}>
        <View style={styles.rowflat}>
          <FlatList
            horizontal
            data={datas}
            keyExtractor={data=>data.id.toString()}
            renderItem={
             ({item})=><View style={styles.row1}><Image style={styles.image1} source={item.image}/></View>}
          />
        </View>
       <ScrollView>
       <View style={styles.row2}>
         <Text style={{color:"white",fontSize:16,textAlign:'center',fontFamily:'Montserrat'}}>این نیروگاه در زمینی به مساحت 100 هکتار در کیلومتر 12 جاده فراشبند واقع در جنوب شرقی شهرستان کازرون بنا شده است . فاز اول نیروگاه متشکل از دو واحد گازی ساخت شرکت میتسوبیشی ژاپن مدل MW701D در تابستان 1373 مورد بهره برداری قرار گرفت.
فاز دوم در زمستان سا ل1379 با نصب چهار واحدگازی مدل V94.2 محصول شرکت ایران و ایتالیا آغاز و درسالهای 1381 و 1382 وارد مدار گردیدند. قدرت اسمی واحدهای میتسوبیشی درشرایط ISO  128.5  و واحدهای V94.2 ، 159 مگا وات است که در مجموع ظرفیت اسمی کل واحدهای نیروگاه به 893 مگا وات می رسد . شایان ذکر است اولین توربین گازی و اولین ژنراتور ساخت ایران در این نیروگاه نصب شده است . فاز سوم نیروگاه شامل سه واحد بخار هر کدام به ظرفیت 160 مگا وات محصول مشترک ایران و آلمان می باشد که اولین واحد آن اواخر سال 1385 و  دو واحد دیگر در سال 1386 به بهره برداری رسید.
پس از ورود واحدهای بخار به مدار قدرت اسمی این نیروگاه در حال حاضر به 1373 مگا وات رسیده است .</Text>
       </View>
       </ScrollView>
       
       <Header7/>
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
      marginTop:1,
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
export default PowerPlant;