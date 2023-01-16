
import React,{useState} from 'react';
import {StyleSheet,View,Text,Modal} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PowerPlant from './PowerPlant';



function Header1(props) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  function navigateToPowerplant() {
      navigation.navigate("powerplant");
  }
    return (
      <>
      <View style={styles.container2}>
        <MaterialCommunityIcons name="bell-ring-outline" size={26} color="white" />
        <Text style={{color:"white",fontSize:20}}>نیروگاه سیکل ترکیبی کازرون</Text>
        <TouchableOpacity onPress={navigateToPowerplant}>
          <MaterialCommunityIcons name="drag" size={40} color="white" />
        </TouchableOpacity>        
      </View>
      {/* <Modal
       visible={isModalVisible}
       animationType='fade'
      //  transparent={true}
      >
        <View style={{width:"50%",height:"50%"}}>
           <Text style={{marginTop:200}}>uuuuu</Text>
        </View>
        
      </Modal> */}
      
      </>
    );
    
}
const styles = StyleSheet.create({
    container2:{
       height:"10%",
       width:"100%",
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       backgroundColor:"#4B5152",
       position:'absolute',
       top:0,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around'


    }
    // #5F5C69",
})
export default Header1;