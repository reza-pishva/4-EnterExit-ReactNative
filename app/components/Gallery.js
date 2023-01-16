import React from 'react';
import { Text } from 'react-native';
import { View,StyleSheet,Image} from 'react-native';
import { Screen } from 'react-native-screens';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


function Gallery({image,description}) {
    const [loaded] = useFonts({
        Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
     });
   
     if (!loaded) {
       return null;
     }
    return (
          <View style={styles.galleryview}>
             <Image style={styles.image} source={image}/>
             <Text style={styles.description}>{description}</Text>
          </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:280,
        height:200,
        borderRadius:20,
    },
    description:{
        fontFamily:"Montserrat",
        fontSize:15,
        color:'white',
        marginTop:10
    },
    galleryview:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    }

})

export default Gallery;