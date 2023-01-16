import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Alert,Text} from 'react-native';
import Screen from '../../components/Screen';
import { ArabicNumbers } from 'react-native-arabic-numbers';
import AppText from '../../components/AppText';
import Header10 from './Header10';
import { ScrollView } from 'react-native-gesture-handler';
import AppTextInput from '../../components/AppTextInput';
import { useFonts } from 'expo-font';
import Toast from 'react-native-simple-toast';



function RequestDetails({route}) {
  
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
   const url='http://rezapishva.ir/mob-notconfirm-req1-eq/'+route.params.id_exit+'/'+reason;
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
        <Header10/> 
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
        <View style={styles.itemcontainer}>
             <AppTextInput onChangeText={text => setReasons(text)} placeholder="علت عدم تایید" icon="account-cancel" size={20} color="red" textAlign='right'/>
        </View>
        <TouchableOpacity onPress={createTwoButtonAlert} style={styles.itemcontainer3}>
          <View style={{alignItems:'center',marginTop:-5}}>
            <Text style={{color:'white'}}>ثبت اطلاعات</Text>
          </View>
        </TouchableOpacity>
        
        </ScrollView>
        {/* <AppButton title="ثبت اطلاعات" color="#803512" onPress={createTwoButtonAlert}/> */}
      
      </Screen>
    );
}
const styles = StyleSheet.create({
  itemcontainer:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#434564",
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
    backgroundColor:"#434564",
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
    backgroundColor:"#434564",
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
  // date1:{
  //   fontSize:15,
  //   marginTop:15,
  //   color:"yellow",
  //   width:300,
  //   textAlign:"right"
  // },
  // buttoncontainer:{
  //   flexDirection:'row',
  //   alignItems:'center',
  //   justifyContent:'center',
  //   backgroundColor:"black",
  // },
  text:{
    color:"white",
    alignItems:'center',
    justifyContent:'center',
  }
})
export default RequestDetails;