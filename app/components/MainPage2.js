import React from 'react';
import { ImageBackground,TouchableOpacity,Text,View,StyleSheet,Image,Alert} from 'react-native';
import Header1 from './Header1';
import Screen from './Screen';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons'



function MainPage({navigation}) {
    return (
      <Screen>
         <ImageBackground style={styles.container} source={require('../pic/bg23.jpg')}>
         <View style={styles.row1}>
           <Image style={styles.image1} source={require('../pic/kz.png')}/>
         </View>
<View style={styles.row3}>
    <Text style={styles.row4}>نرم افزارهای مورد استفاده در نیروگاه</Text>
</View>
<View style={styles.row2}>
  <TouchableOpacity>
     <Image style={styles.image} source={require('../pic/18-512.png')}/>
  </TouchableOpacity>
  <TouchableOpacity>
    <Image style={styles.image} source={require('../pic/daftar.png')}/>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate("enterexitpe")}>
    <Image style={styles.image} source={require('../pic/insert-card-2271221-1895892.png')}/>
  </TouchableOpacity>
</View>
<View style={styles.row2}>
  <TouchableOpacity>
     <Image style={styles.image} source={require('../pic/5105.png')}/>
  </TouchableOpacity>
  <TouchableOpacity>
    <Image style={styles.image} source={require('../pic/download.png')}/>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate("enterexiteq")}>
  <MaterialCommunityIcons name="car-pickup" size={60} color="black" />
  </TouchableOpacity>
</View>
<View style={styles.row2}>
  <TouchableOpacity>
     <Image style={styles.image} source={require('../pic/131891-200.png')}/>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate("galleryMain")}>
    <Image style={styles.image} source={require('../pic/gallery.png')}/>
  </TouchableOpacity>
  <TouchableOpacity>
    <Image style={styles.image} source={require('../pic/letter.png')}/>
  </TouchableOpacity>
</View>
<Header1/>

         </ImageBackground>
      </Screen>
         
          
          

       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#19B7A9',
    },
    row1:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:90,
        marginBottom:30,
    },
    row2:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15
        
    },
    row3:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-around',
      fontSize:30,
      color:'white',
      marginBottom:20
  },
  row4:{
    fontSize:15,
    color:'white',
},
    image:{
        width:60,
        height:60,

    },
    image1:{
        width:'90%',
        height:200,
        borderRadius:40,
    },
})
export default MainPage;