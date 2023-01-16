import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator3({visible='false'}) {
    if(!visible) return null;
    return(<LottieView 
        autoPlay
        loop
        source={require('./assets/animations/51499-loading-check.json')}
      />);        

}

export default ActivityIndicator3;
