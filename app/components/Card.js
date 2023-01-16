import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View ,StyleSheet} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title,subtitle,image}) {
    return (
           
            <View style={styles.cardcontainer}>
                <Image style={styles.image} source={image}/>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
 
    );

}
const styles = StyleSheet.create({
    cardcontainer:{
        width:"100%",
        borderRadius:10,
        backgroundColor:colors.gray1,
        height:290,
        overflow:'hidden',
        marginTop:10,
       
    },
    image:{
        alignSelf:'stretch',
        width:'100%',
        height:200,
    },
    title:{
        marginTop:10,
        marginRight:20,
        textAlign:'right',
        color:'white',
    },
    subtitle:{
        marginTop:10,
        marginRight:20,
        textAlign:'right',
        color:'yellow',
    }
})
export default Card;