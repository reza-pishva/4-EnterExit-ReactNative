import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text ,StyleSheet} from 'react-native';
import { Image } from 'react-native';
import Header2 from './Header2';
import Footer2 from './Footer2';
import { Button, View } from 'react-native';
import { createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import Screen from './Screen';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


 
function HomeScreen({ navigation }) {
    const [loaded] = useFonts({
        Montserrat: require('./assets/fonts/Vazir-Regular.ttf'),
     });
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button
    //     onPress={() => navigation.navigate('powerplant')}
    //     title="Go to notifications"
    //   />
    // </View>
    <Screen>
    <ImageBackground style={styles.container1} source={require('../pic/25.jpg')}>
       <View style={styles.container2}>
           <View style={styles.container3}>
              <TouchableOpacity style={styles.container4} onPress={()=>navigation.openDrawer()}>
                 <Image style={styles.image} source={require('../pic/1.png')}/>
                 <Text style={{color:"white"}}>درخواست کننده</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container4}>
                 <Image style={styles.image} source={require('../pic/2.png')}/>
                 <Text style={{color:"white"}}>مدیر مستقیم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container4}>
                 <Image style={styles.image} source={require('../pic/3.png')}/>
                 <Text style={{color:"white"}}>مسسئول ایمنی</Text>
              </TouchableOpacity>
           </View>
           <View style={styles.container5}>
              <TouchableOpacity style={styles.container6}>
                 <Image style={styles.image2} source={require('../pic/4.png')}/>
                 <Text style={{color:"white"}}>مسئول حراست</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container6}>
                 <Image style={styles.image2} source={require('../pic/6.png')}/>
                 <Text style={{color:"white"}}>مدیر نیروگاه</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.container6}>
                 <Image style={styles.image} source={require('../pic/7.png')}/>
                 <Text style={{marginTop:12,color:'white'}}>حراست نیروگاه</Text>
              </TouchableOpacity>
           </View>
       </View>
       <Header2/>
       <Footer2/>
    </ImageBackground>

  </Screen>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const CustomDrawer = ({navigation}) => {

    return (
      <ImageBackground style={styles.drawer} source={require('../pic/bg24.jpg')} >

        <TouchableOpacity style={styles.container7}>
            <View style={styles.Button}>
              <Text style={styles.text}>درخواست جدید</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container7}>
            <View style={styles.Button}>
              <Text style={styles.text}>منتظر تایید</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container7}>
            <View style={styles.Button}>
              <Text style={styles.text}>تایید نشده</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container7}>
            <View style={styles.Button}>
              <Text style={styles.text}>منتظر ورود یا خروج</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container7}>
            <View style={styles.Button}>
              <Text style={styles.text}>گزارش گیری</Text>
            </View>
        </TouchableOpacity>
  
      </ImageBackground>
    );
  };

const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({

    container7:{
      marginBottom:5
    },
    Button:{
        backgroundColor:'#6D1E32',
        width:250,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white' ,
        fontFamily:'Montserrat'
    },
    drawer:{
        alignItems:'center',
        paddingTop:100,
        flex:1,
    },
    container1:{
        flex:1,
        alignItems:'center',
        paddingTop:80,        
    },
    container2:{
        width:"90%",
        height:"50%",
        // backgroundColor:"",
        borderRadius:20,
        paddingBottom:40,
        paddingTop:5,
        marginTop:55,
    },
    container3:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    container4:{
        flex:1,
        height:"120%",
        alignItems:'center',
        
    },
    container5:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:0,
    },
    container6:{
        flex:1,
        height:"120%",
        alignItems:'center',
        
    },
    image:{
        width:"65%",
        height:"50%",
        marginTop:10,
    },
    image2:{
        width:"75%",
        height:"55%",
        marginTop:10,
    }
})
export default function Test() {
  return (
      <Drawer.Navigator drawerType='slide' initialRouteName="Home" drawerPosition='right' drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}