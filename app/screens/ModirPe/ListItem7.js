import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import AppText from '../../components/AppText';
import { ArabicNumbers } from 'react-native-arabic-numbers';




function ListItem7({description}) {

    return (
         <View style={styles.itemcontainer}> 
           <AppText style={styles.title}>نام وسیله:  {ArabicNumbers(description)}</AppText>
         </View>
    );

}
const styles = StyleSheet.create({
    itemcontainer:{
      backgroundColor:"#3A75B0",
      borderRadius:10,
      marginLeft:2,
      height:90,
      marginTop:5,
      width:250,
      
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
      // width:150,
      marginRight:15,
    },
    subtitle:{
      fontSize:15,
      marginTop:15,
      color:"white",
      width:150,
    },

})
export default ListItem7;