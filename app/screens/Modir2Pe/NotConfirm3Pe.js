import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Alert,Text} from 'react-native';
import Screen from '../../components/Screen';
import { ArabicNumbers } from 'react-native-arabic-numbers';
import AppText from '../../components/AppText';
import Header25 from './Header25';
import { ScrollView } from 'react-native-gesture-handler';
import AppTextInput from '../../components/AppTextInput';
import { useFonts } from 'expo-font';
import Toast from 'react-native-simple-toast';



function NotConfirm3Pe({route}) {
  var day=0;
  var month=0;
  var year=0;
  var date1=route.params.date_shamsi;
  year=date1.substr(0,4);
  month=date1.substr(4,2);
  day=date1.substr(6,2);
  var date_sh=year+'/'+month+'/'+day;
  const [reason,setReasons]=useState([]);
  const createTwoButtonAlert = () =>
  Alert.alert(
    "",
    "از عدم تایید این درخواست اطمینان دارید؟",
    [
      {
        text: "خیر",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "بله",onPress: () => { handleconfirm(); } }
    ],
    { cancelable: false }
  );
 const handleconfirm = () => {
   const url='http://rezapishva.ir/mob_notconfirm_req1_pe/'+route.params.id_ef+'/'+reason;
  fetch(url,{
    method:'get',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    }
    }).then(function(response){
      response.json().then(function(resp){
        Toast.show('این درخواست مورد تایید شما قرار نگرفت.', Toast.LONG);
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
        <Header25/> 
        <ScrollView>
        <View style={styles.itemcontainer1}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.id_ef)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>شماره درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.title)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>علت درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.company)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>از شرکت(مکان):</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(date_sh)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>تاریخ درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
             <AppTextInput onChangeText={text => setReasons(text)} placeholder="علت عدم تایید" icon="account-cancel" size={20} color="red" textAlign='right'/>
        </View>
        <TouchableOpacity onPress={createTwoButtonAlert} style={styles.itemcontainer3}>
          <View style={{alignItems:'center',marginTop:-5}}>
            <Text style={{color:'white'}}>ثبت اطلاعات</Text>
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
    backgroundColor:"#404F4A",
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
    backgroundColor:"#404F4A",
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
    backgroundColor:"#404F4A",
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
    backgroundColor:"#803512",
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
  text:{
    color:"white",
    alignItems:'center',
    justifyContent:'center',
  }
})
export default NotConfirm3Pe;