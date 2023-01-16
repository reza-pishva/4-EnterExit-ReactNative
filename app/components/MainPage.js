import  React,{useState,useEffect} from 'react';
import { ImageBackground,TouchableOpacity,Text,View,StyleSheet,Image,Alert} from 'react-native';
import Header1 from './Header1';
import Screen from './Screen';
import ActivityIndicator from './ActivityIndicator';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';



function MainPage({navigation,route}) {
  const [enterexit,setEnterexit]=useState('eq0');
  const [part,setPart]=useState();
  const [loading,setLoading]=useState(true);

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
  });

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      setEnterexit(route.params.eq);
      setPart(route.params.part);
    },1500);
    
  },[]);
  const loadUserInfo2=()=>{
    if(route.params.eq=='eq2'){
      navigation.navigate("eqKartabl02",{eq:enterexit,part1:route.params.part})
    }
    if(route.params.eq=='eq3'){
      navigation.navigate("eqKartabl03",{eq:enterexit})
    }
    if(route.params.eq=='eq4'){
      navigation.navigate("eqKartabl04",{eq:enterexit})
    }
  }
  const loadUserInfo3=()=>{
    if(route.params.eq=='eq2'){
      navigation.navigate("peKartabl02",{eq:enterexit,part1:route.params.part})
    }
    if(route.params.eq=='eq3'){
      navigation.navigate("peKartabl05",{eq:enterexit})
    }
    if(route.params.eq=='eq4'){
      navigation.navigate("peKartabl04",{eq:enterexit})
    }
  }
 
    return (
      <Screen>
        {
          loading ? <ActivityIndicator/> :
        <ScrollView style={{paddingBottom:20}}>
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
         <Text style={styles.row5}>آمار نیروگاهی</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={styles.image} source={require('../pic/daftar.png')}/>
         <Text style={styles.row5}>دفتر گزارش</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>loadUserInfo3()}>
         <Image style={styles.image} source={require('../pic/insert-card-2271221-1895892.png')}/>
         <Text style={styles.row5}>ورود و خروج افراد</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.row2}>
         <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
         <Image style={styles.image} source={require('../pic/5105.png')}/>
         <Text style={styles.row5}>شیمی</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
         <Image style={styles.image} source={require('../pic/download.png')}/>
         <Text style={styles.row5}>ایمنی</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>loadUserInfo2()}>
         <Image style={styles.image} source={require('../pic/transfer.png')}/>
         <Text style={styles.row5}>ورود و خروج کالا</Text>
         </TouchableOpacity>
         </View>
         <View style={styles.row2}>
         <TouchableOpacity>
         <Image style={styles.image} source={require('../pic/131891-200.png')}/>
         <Text style={styles.row5}>فیش حقوقی</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate("galleryMain")}>
         <Image style={styles.image} source={require('../pic/gallery.png')}/>
         <Text style={styles.row5}>گالری تصاویر</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={styles.image} source={require('../pic/letter.png')}/>
         <Text style={styles.row5}>اتوماسیون اداری</Text>
         </TouchableOpacity>
         </View>
         <Header1/>
        </ImageBackground>
        </ScrollView>  

       }
        
        
      </Screen>
         
          
          

       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#19B7A9',
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
        marginTop:15,
       
        
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
    fontFamily:'Montserrat'
},
row5:{
  fontSize:10,
  color:'#D6DDDF',
  fontFamily:'Montserrat'
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