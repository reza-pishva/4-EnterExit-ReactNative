import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({
    name,
    size=50,
    backgroundColor="#000",
    iconColor="#fff"
}) 
{
    return (
       <View style={{
           width:size,
           height:size,
           borderRadius:size/2,
           backgroundColor,
           justifyContent:'center',
           alignItems:'center',
           marginTop:5,

       }}>
         <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}/>
       </View>
    );
}

export default Icon;