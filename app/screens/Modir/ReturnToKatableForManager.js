import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import Screen from '../../components/Screen';
import { ArabicNumbers } from 'react-native-arabic-numbers';
import AppText from '../../components/AppText';
import Header14 from './Header14';
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Toast from 'react-native-simple-toast';





function ReturnToKartableForManager({route}) {
  const createTwoButtonAlert = () =>
  Alert.alert(
    "",
    "از بازگشت این درخواست به کارتابل خوداطمینان دارید؟",
    [
      {
        text: "خیر",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "بله",onPress: () => { handleconfirm(); } }
      // { text: "بله",onPress: () => { console.log(route.params.id_exit); } }
    ],
    { cancelable: false }
  );
 const handleconfirm = () => {
   const url='http://rezapishva.ir/mob-kartabl3-eq/'+route.params.id_exit;
  fetch(url,{
    method:'get',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    }
    }).then(function(response){
      response.json().then(function(resp){
        Toast.show('این درخواست با موفقیت بازگشت داده شد.', Toast.LONG);
        // console.log(resp)
      })
    })
}; 

 const [loaded] = useFonts({
    Montserrat: require('../../components/assets/fonts/Vazir-Regular.ttf'),
 });

 if (!loaded) {
   return null;
 }



    return (
      <Screen>
        <Header14/> 
        <ScrollView>
        <View style={styles.itemcontainer1}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.id_exit)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>شماره درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.date_request_shamsi)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>تاریخ درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer2}>
           <View style={styles.subcontainer3}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.description)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>توضیحات:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer2}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.origin_destination)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>مبدا یا مقصد:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer2}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.goods_type)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>نوع قطعه یا کالا:</AppText>
           </View>
        </View>
        <TouchableOpacity onPress={createTwoButtonAlert} style={styles.itemcontainer3}>
          <View style={{alignItems:'center',marginTop:-5}}>
            <Text style={{color:'white'}}>درخواست بازگشت</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
        
      
      </Screen>
    );
}
const styles = StyleSheet.create({
  itemcontainer:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#173D1C",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    
  },
  itemcontainer1:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#173D1C",
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    marginTop:20,
    
  },
  itemcontainer2:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#173D1C",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    height:70,
    
  },
  itemcontainer3:{
    paddingTop:10,
    height:50,
    borderRadius:15,
    backgroundColor:"#52955B",
    textAlign:"center",
    justifyContent:"center",
    marginLeft:100,
    marginRight:100,
    marginTop:30,

    
  },
  subcontainer1:{
    flex:1,
    height:50,
  },
  subcontainer2:{
    flex:1,
    height:50,
  },
  subcontainer3:{
    flex:2,
    height:50,
  },
  image:{
      width:80,
      height:80,
      borderRadius:40,
  },
  textcontainer:{
    backgroundColor:"black",
    flex:1
  },
  title:{
    fontSize:15,
    marginTop:15,
    color:"white",
    width:300,
    marginRight:15,
  },
  subtitle:{
    fontSize:15,
    marginTop:15,
    color:"white",
    textAlign:'right',
  },
  date1:{
    fontSize:15,
    marginTop:15,
    color:"yellow",
    width:300,
    textAlign:"right"
  },
  buttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"black",
  }
})
export default ReturnToKartableForManager;