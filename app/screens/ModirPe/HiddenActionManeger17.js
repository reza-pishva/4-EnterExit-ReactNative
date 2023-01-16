import React from 'react';
import { View,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HiddenActionManeger17({data2}) {
  
    
  const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("returnToKatableForModirPe",
        {id_ef:data2.item.id_ef.toString(),
            title:data2.item.title,  
            company:data2.item.company,
            date_shamsi:data2.item.date_shamsi,
            requester_name:data2.item.requester_name   
        })}>
             <Image style={styles.image1} source={require('../../pic/return2.png')}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("requestdetails9Pe",
        {id_ef:data2.item.id_ef.toString(),
            title:data2.item.title,  
            company:data2.item.company,
            date_shamsi:data2.item.date_shamsi,
            requester_name:data2.item.requester_name,
            reason3:data2.item.reason3
        })}>
             <Image style={{width:60,height:60,marginTop:40}} source={require('../../pic/details1.png')}/>
            {/* <MaterialCommunityIcons name="send" size={50} color="green"/> */}
        </TouchableOpacity>
    </View>


    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'flex-end',
        paddingRight:15,
        height:120

    },
    opa:{
        alignSelf:'center',
        height:'100%',
        marginLeft:10,
        // borderLeftWidth:1,
        borderColor:'white',
        paddingTop:20,
        paddingLeft:-10,
        
    },
    image1:{
        width:50,
        height:50,
        marginTop:44
    }
})
export default HiddenActionManeger17;