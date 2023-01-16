import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator2({visible='false'}) {
    if(!visible) return null;
    return(<LottieView 
        autoPlay
        loop
        source={require('./assets/animations/33299-green-loading.json')}
      />);       

}

export default ActivityIndicator2;
