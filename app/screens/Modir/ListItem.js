import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import AppText from '../../components/AppText';
import { ArabicNumbers } from 'react-native-arabic-numbers';




function ListItem({id_exit,title,subtitle,date1,img,ImageComponent,onPress}) {
    return (
         <View style={styles.itemcontainer}> 
           <AppText style={styles.title}>شماره درخواست:  {ArabicNumbers(id_exit)}</AppText>
           <AppText style={styles.title}>قطعه یا کالا:  {title}</AppText>
           <AppText style={styles.subtitle}>مبدا یا مقصد:   {subtitle}</AppText>
           <AppText style={styles.date1}>تاریخ درخواست:   {ArabicNumbers(date1)}</AppText>
         </View>
    );
}
const styles = StyleSheet.create({
    itemcontainer:{
      paddingHorizontal:10,
      backgroundColor:"#243F79",
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
export default ListItem;