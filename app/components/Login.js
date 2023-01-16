import React,{useState,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import Screen from './Screen';
import AppText from './AppText';
import { ScrollView } from 'react-native-gesture-handler';
import AppTextInput from './AppTextInput';
import UserApi from '../api/GetUser';
import Toast from 'react-native-simple-toast';

function Login({navigation}) {

  
  useEffect(()=>{
     loadUserInfo2();
     if(loginFailed=='true'){
      setPress(0);
      setLoginFailed('false');
      Toast.show('نام کاربری و یا کلمه عبور معتبر نمی باشد', Toast.SHORT);
     }
  });


  const [username,setUsername]=useState([]);
  const [password,setPassword]=useState([]);
  const [user,setUser]=useState([]);
  const [part,setPart]=useState([]);
  const [enterexit,setEnterexit]=useState('eq0');
  const [loginFailed,setLoginFailed]=useState('false');
  const [press,setPress]=useState(0);

    const loadUserInfo1=async()=>{
      const response= await UserApi.getUser(username,password);
      setUser(response.data);
      setPress(1);
      
    }

    const loadUserInfo2=()=>{
      console.log("hi");
       console.log(user.valid);
       console.log("hi");
       if(user.valid==1){
        for(var x=0;x<=user.group.length-1;x++){
          if(user.group[x]['id_gr']==273){
            setPart(user.part);
            setEnterexit('eq2');
            break;
          }
          if(user.group[x]['id_gr']==274){
            setEnterexit('eq3');
            break;
          }
          if(user.group[x]['id_gr']==275){
            setEnterexit('eq4');
            break;
          }
          setEnterexit('eq0');
          setLoginFailed('false');
        }
       
        navigation.navigate("mainPage",{eq:enterexit,part:part})
      } else {
        if(press==1){
          setLoginFailed('true');
        }
        
        
      }
     
    } 

  
    return (
      <Screen>
        
        <ImageBackground style={styles.container} source={require('../pic/power2.jpg')}>
        <ScrollView>
          <View style={{marginBottom:5,marginTop:"97%",width:'95%',alignSelf:'center',backgroundColor:'#080B30',height:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <AppText style={{color:'white',fontSize:16}}>اپلیکیشن نیروگاه سیکل ترکیبی کازرون</AppText>
          </View>  
          <View style={{width:'95%',alignSelf:'center',backgroundColor:'#1A2160',height:200,borderRadius:10,paddingTop:5}}>
            <View style={{width:'90%',alignSelf:'center',height:55}}>
              <AppTextInput  onChangeText={text => setUsername(text)} placeholder="نام کاربری" icon="account" size={22} color="#466D9E" textAlign='right'/>
            </View>
            <View style={{width:'90%',alignSelf:'center'}}>
              <AppTextInput  onChangeText={text => setPassword(text)} placeholder="کلمه عبور" icon="key" size={20} color="#466D9E" textAlign='right'/>
            </View>
            <TouchableOpacity style={styles.itemcontainer3} onPressIn={()=>loadUserInfo1()} >
              <AppText style={{color:'white',fontSize:14,alignSelf:'center'}}>ورود به سامانه</AppText>
            </TouchableOpacity> 
          </View>
          </ScrollView>
        </ImageBackground>
       
        
      </Screen>
    );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    opacity: 0.7,
   },
   itemcontainer3:{
    height:50,
    borderRadius:15,
    backgroundColor:"#803512",
    textAlign:"center",
    justifyContent:"center",
    marginLeft:100,
    marginRight:100,
    marginTop:0,    
  } 
})
export default Login;