import  React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text ,StyleSheet} from 'react-native';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

function ButtonWithTitle({text,text_color,top_color,bottom_color,img,onPress1,onPress2,onPress3,onPress4,onPress5}) {
    console.log(onPress1);
    console.log(onPress2);
    console.log(onPress3);
    var onPress="";
    if(onPress1!=undefined){
        onPress=onPress1;
    }
    if(onPress2!=undefined){
        onPress=onPress2;
    }
    if(onPress3!=undefined){
        onPress=onPress3;
    }
    if(onPress4!=undefined){
        onPress=onPress4;
    }
    if(onPress5!=undefined){
        onPress=onPress5;
    }
    const [loaded] = useFonts({
        Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
     });
    return (
              <TouchableOpacity style={[styles.container2,{backgroundColor:top_color}]} onPress={onPress}>
                    <Image style={styles.image} source={img}/>
                    <View style={[styles.container3,{backgroundColor:bottom_color}]}>
                        <Text style={[styles.text1,{color:text_color}]} >{text}</Text>
                    </View>
              </TouchableOpacity>

           );
}
const styles = StyleSheet.create({
    container1:{
        backgroundColor:'green',
        flex:1,
        alignItems:'center',
    },
    container2:{
        width:"33%",
        height:120,
        borderRadius:10,
        overflow:'hidden',
        marginLeft:5,
        borderColor:"black",
        borderWidth:1
    },
    container3:{
        backgroundColor:"blue",
        width:"100%",
        height:46,
        position:'absolute',
        bottom:0,
    },
    image:{
        width:"57%",
        height:60,
        alignSelf:'center',
        marginTop:10,
    },
    text1:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:13,
        marginTop:3,
        fontFamily:'Montserrat',
    }
})
export default ButtonWithTitle;