import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text ,StyleSheet} from 'react-native';
import { Image } from 'react-native';
import Screen from './Screen';

function ReportPageForGuardBoss(props) {
    return (
        <Screen>
          <ImageBackground style={styles.container1} source={require('../pic/bg11.jpg')}>
             <View style={styles.container2}>
                    <View style={styles.header}><Text style={{color:"white"}}>گردش درخواست - مسئول حراست</Text></View>
                    <TouchableOpacity style={styles.container4}>
                       <Image style={styles.image} source={require('../pic/letter.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container4}>
                       <Image style={styles.image} source={require('../pic/notallowd02.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container4}>
                       <Image style={styles.image} source={require('../pic/notconfirmed01.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container4}>
                       <Image style={styles.image} source={require('../pic/report02.png')}/>
                    </TouchableOpacity>
             </View>
          </ImageBackground>
        </Screen>
     );
 }
 const styles = StyleSheet.create({
     container1:{
         flex:1,
         alignItems:'center',
         paddingTop:80, 
            
     },
     container2:{
         width:"60%",
         height:"80%",
         backgroundColor:"#F2F2D1",
         borderRadius:20,
         alignItems:'center',
         justifyContent:'center',
         overflow:'hidden',    
     },
     container4:{
         marginTop:20,
         height:"18%",
         width:"50%",
         alignItems:'center',
      
     },
     image:{
         width:"90%",
         height:"100%",
     },
     header:{
         alignItems:'center',
         justifyContent:'center',
         width:"100%",
         height:"10%",
         backgroundColor:"#938EA8",
         top:0,
     }
 })
export default ReportPageForGuardBoss;