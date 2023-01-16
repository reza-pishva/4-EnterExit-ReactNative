import  React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text ,StyleSheet} from 'react-native';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

function Eq3({text,text_color,top_color,bottom_color,img}) {
    const [loaded] = useFonts({
        Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
     });
    return (
            // <View style={styles.container1}>
                <View style={[styles.container2,{backgroundColor:top_color}]}>
                    <Image style={styles.image} source={img}/>
                    <View style={styles.container3}>
                        <Text style={[styles.text,{color:text_color}]} >{text}</Text>
                    </View>
                </View>
            // </View>
    );
}
const styles = StyleSheet.create({
    container1:{
        // flexDirection:'row',
        backgroundColor:'green',
        flex:1,
        alignItems:'center',

    },
    container2:{
        width:"30%",
        height:120,
        borderRadius:10,
        overflow:'hidden',
        marginLeft:5
    },
    container3:{
        backgroundColor:"blue",
        width:"100%",
        height:46,
        position:'absolute',
        bottom:0,
    },
    image:{
        width:"50%",
        height:50,
        alignSelf:'center',
        marginTop:10,
    },
    text:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:13,
        marginTop:3,
        fontFamily:'Montserrat',
    }
})
export default Eq3;