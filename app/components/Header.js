
import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Header({
    height,
    text,
    textSize,
    textColor,
    iconLeftName,
    iconLeftColor,
    iconLeftSize,
    onPressIconLeft,
    iconRightName,
    iconRightColor,
    iconRightSize,
    onPressIconRight}) {

    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={onPressIconLeft}>
          <MaterialCommunityIcons name={iconLeftName} size={iconLeftSize} color={iconLeftColor} />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity onPress={onPressIconRight}>
          <MaterialCommunityIcons name={iconRightName} size={iconRightSize} color={iconRightColor} />
        </TouchableOpacity>
        
      </View>
    );
}
const styles = StyleSheet.create({
    container2:{
       height:height,
       width:"100%",
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       backgroundColor:"#807E87",
       position:'absolute',
       top:0,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around'
    },
    text:{
       color:textColor,
       fontSize:textSize,
       color:textColor
    }

})
export default Header;