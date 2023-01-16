import React from 'react';
import { View,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


function ListAitemDeleteAction({data2}) {
  
    
  const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("confirm1",
        {id_exit:data2.item.id_exit.toString()
        ,description:data2.item.description
        ,date_request_shamsi:data2.item.date_request_shamsi
        ,id_form:data2.item.id_form
        ,goods_type:data2.item.goods_type
        ,jamdari_no:data2.item.jamdari_no
        ,id_request_part:data2.item.id_request_part
        ,origin_destination:data2.item.origin_destination
        ,time_request:data2.item.time_request
        ,exit_no:data2.item.exit_no
        ,enter_exit:data2.item.enter_exit
        ,requester_name:data2.item.requester_name
        ,with_return:data2.item.with_return        
        })}>
             <Image style={styles.image1} source={require('../pic/confirm1.jpg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("notconfirm1",
        {id_exit:data2.item.id_exit.toString()
        ,description:data2.item.description
        ,date_request_shamsi:data2.item.date_request_shamsi
        ,id_form:data2.item.id_form
        ,goods_type:data2.item.goods_type
        ,jamdari_no:data2.item.jamdari_no
        ,id_request_part:data2.item.id_request_part
        ,origin_destination:data2.item.origin_destination
        ,time_request:data2.item.time_request
        ,exit_no:data2.item.exit_no
        ,enter_exit:data2.item.enter_exit
        ,requester_name:data2.item.requester_name
        ,with_return:data2.item.with_return        
        })}>
             <Image style={{width:55,height:55,marginTop:43}} source={require('../pic/notconfirm2.png')}/>
            {/* <MaterialCommunityIcons name="block-helper" size={55} color="red"/> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.opa} onPress={()=>navigation.navigate("requestdetails",
        {id_exit:data2.item.id_exit.toString()
        ,description:data2.item.description
        ,date_request_shamsi:data2.item.date_request_shamsi
        ,id_form:data2.item.id_form
        ,goods_type:data2.item.goods_type
        ,jamdari_no:data2.item.jamdari_no
        ,id_request_part:data2.item.id_request_part
        ,origin_destination:data2.item.origin_destination
        ,time_request:data2.item.time_request
        ,exit_no:data2.item.exit_no
        ,enter_exit:data2.item.enter_exit
        ,requester_name:data2.item.requester_name
        ,with_return:data2.item.with_return        
        })}>
             <Image style={{width:60,height:60,marginTop:40}} source={require('../pic/details1.png')}/>
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
export default ListAitemDeleteAction;