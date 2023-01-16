import React from 'react';
import {View,StyleSheet} from 'react-native';

function ItemSeperator() {
    return (
       <View style={styles.itemseperator}/>
    );
}
const styles = StyleSheet.create({
    itemseperator:{
        width:'100%',
        height:1,
        backgroundColor:'black'
      }
})
export default ItemSeperator;