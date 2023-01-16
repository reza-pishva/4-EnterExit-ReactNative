import React from 'react';
import { Image } from 'react-native';
import { ImageBackground ,StyleSheet,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function Welcomescreen(props) {
    return (
        <ImageBackground 
          style={styles.background} 
          source={require('../pic/p1.jpg')}>
              <View style={styles.logocontainer}>
                <Image style={styles.logo} source={require('../pic/logo2.png')}/>   
              </View>
              <View style={styles.loginbutton}>
                  <AppButton title="ورود" color="blue1"/>
                  <AppButton title="ثبت نام" color="red1"/>
              </View>
              {/* <View style={styles.registerbutton}></View> */}
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:1
    },
    loginbutton:{
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10,
        marginBottom:30,
        position:'absolute',
        bottom:10,
    },
    registerbutton:{
        width:'100%',
        height:50,
        backgroundColor:'red'

    },
    logo:{
        width:'100%',
        height:150,
    },
    logocontainer:{
       
       position:'absolute',
       top:50,
       width:'100%',
       height:100,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:10
    },
})
export default Welcomescreen;