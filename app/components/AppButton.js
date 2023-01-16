import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity ,StyleSheet} from 'react-native';
import colors from '../config/colors';
import { useFonts } from 'expo-font';

function AppButton({title,onPress,color}) {
    const [loaded] = useFonts({
        Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
     });
    
     if (!loaded) {
       return null;
     }
    return (
        <TouchableOpacity style={[styles.bottuncontainer,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    bottuncontainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:40,
        borderRadius:10,
        marginBottom:10
    },
    text:{
        color:'white',
        fontSize:14,
        fontFamily:"Montserrat",
    }
})
export default AppButton;