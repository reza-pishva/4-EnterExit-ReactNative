import React from 'react';
import { View } from 'react-native';
import { Text ,Platform,StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

function AppText({children,style}) {
    const [loaded] = useFonts({
        Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
     });
   
     if (!loaded) {
       return null;
     }
    return (

         <Text style={[styles.text,style]}>{children}</Text>

      
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS == "android" ? "Montserrat" : "Avenir",
    }
})
export default AppText;