import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import {View,StyleSheet,Image} from 'react-native';
import Header1 from './Header1';
import Screen from './Screen';
import { createStackNavigator } from '@react-navigation/stack';
import {ImageGallery} from '@nlabs/react-native-image-gallery';


function Gallery() {
    return (
        <ImageGallery
        Images={['https://freepngimg.com/thumb/the_legend_of_zelda/21552-3-zelda-link.png']}
      />
    );
}

export default Gallery;

// Example of Grid Image Gallery in React Native
// https://aboutreact.com/grid-image-gallery/

// import React in our code






