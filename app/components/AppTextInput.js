import React from 'react';
import { View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons}  from '@expo/vector-icons'
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';

function AppTextInput({icon,size,color,...otherProps}) {
    const [loaded] = useFonts({
        Montserrat: require('../components/assets/fonts/Vazir-Regular.ttf'),
        });
    return (
      <View style={styles.container}>
          <TextInput style={styles.textinput} {...otherProps} />
        {icon && <MaterialCommunityIcons name={icon} size={size} color={color}/>}
         
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:10,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
        height:50
    },
    textinput:{
        fontSize:15,
        width:"90%",
        marginRight:10,
        fontFamily:"Montserrat"
    }
})
export default AppTextInput;