import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import AppText from '../../components/AppText';
import { ArabicNumbers } from 'react-native-arabic-numbers';




function ListItem3({id_ef,title,company,date1}) {
   var day=0;
   var month=0;
   var year=0;
   year=date1.substr(0,4);
   month=date1.substr(4,2);
   day=date1.substr(6,2);
   var date_sh=year+'/'+month+'/'+day;

    return (
         <View style={styles.itemcontainer}> 
           <AppText style={styles.title}>شماره درخواست:  {ArabicNumbers(id_ef)}</AppText>
           <AppText style={styles.title}>دلیل حضور:  {title}</AppText>
           <AppText style={styles.subtitle}>از شرکت(مکان):   {company}</AppText>
           <AppText style={styles.date1}>تاریخ درخواست:   {ArabicNumbers(date_sh)}</AppText>
         </View>
    );
}
const styles = StyleSheet.create({
    itemcontainer:{
      paddingHorizontal:10,
      backgroundColor:"#586D99",
      marginTop:2,
      borderRadius:10,
      marginRight:10,
      marginLeft:10,
      height:180,
      textAlign:"right",
      flex:1,
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
      width:300,
    },
    date1:{
      fontSize:15,
      marginTop:15,
      color:"yellow",
      width:300,
      textAlign:"right"
    },
})
export default ListItem3;