import React from 'react';
import { View,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HiddenActionManeger15({data2}) {
  
    
  const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("confirm5Pe",
        {id_ef:data2.item.id_ef.toString(),
            title:data2.item.title,  
            company:data2.item.company,
            date_shamsi:data2.item.date_shamsi,
            requester_name:data2.item.requester_name
        })}>        
        <Image style={styles.image1} source={require('../../pic/confirm1.jpg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("notconfirm5Pe",
        {id_ef:data2.item.id_ef.toString(),
            title:data2.item.title,  
            company:data2.item.company,
            date_shamsi:data2.item.date_shamsi,
            requester_name:data2.item.requester_name
        })}>      
        <Image style={{width:55,height:55,marginTop:43}} source={require('../../pic/notconfirm2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("requestdetails10Pe",
        {id_ef:data2.item.id_ef.toString(),
         title:data2.item.title,  
         company:data2.item.company,
         date_shamsi:data2.item.date_shamsi,
         requester_name:data2.item.requester_name
        })}>
        <Image style={{width:60,height:60,marginTop:40}} source={require('../../pic/details1.png')}/>
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
export default HiddenActionManeger15;