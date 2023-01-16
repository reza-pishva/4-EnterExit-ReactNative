import React from 'react';
import { Image } from 'react-native';
import { View ,StyleSheet} from 'react-native';
import AppText from './AppText';
import ListItem from './ListItem';

function ListingDtetailsScreen({title,price}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../pic/p1.jpg')}/>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.price}>{price}</AppText>
            <ListItem
              title={title}
              subtitle={title}
            />
            <ListItem
              title={title}
              subtitle={title}
            />
            <ListItem
              title={title}
              subtitle={title}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:150,
    },
    price:{
        marginTop:10,
        marginLeft:10,
    },
    title:{
        marginTop:10,
        marginLeft:10,
    }
})
export default ListingDtetailsScreen;