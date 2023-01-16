import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet} from 'react-native';
import Screen from '../../components/Screen';
import { ArabicNumbers } from 'react-native-arabic-numbers';
import AppText from '../../components/AppText';
import Header32 from './Header32';
import { ScrollView } from 'react-native-gesture-handler';

function RequestDetails7({route}) {
     let enter_exit="";
     let with_return="";

     if(route.params.enter_exit==2){
      enter_exit="ورود"
     }else{
      enter_exit="خروج"
     }
     if(route.params.with_return==1){
      with_return="بله"
     }else{
      with_return="خیر"
     }
    

    return (
      <Screen>
        <Header32/> 
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
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{ArabicNumbers(route.params.time_request)}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>زمان درخواست:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer}>
           <View style={styles.subcontainer1}>
             <AppText style={styles.subtitle}>{route.params.requester_name}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>درخواست کننده:</AppText>
           </View>
        </View>
        <View style={styles.itemcontainer2}>
           <View style={styles.subcontainer3}>
             <AppText style={styles.subtitle}>{route.params.reason3}</AppText>
           </View>
           <View style={styles.subcontainer2}>
             <AppText style={styles.subtitle}>علت عدم تایید:</AppText>
           </View>
        </View>
       </ScrollView>
      </Screen>
    );
}
const styles = StyleSheet.create({
  itemcontainer:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#4F496C",
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
    backgroundColor:"#4F496C",
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    
  },
  itemcontainer2:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:"#4F496C",
    marginTop:1,
    borderRadius:5,
    marginRight:10,
    marginLeft:10,
    textAlign:"right",
    flex:1,
    height:70,
    
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
})
export default RequestDetails7;