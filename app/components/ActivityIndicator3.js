import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator3({visible='false'}) {
    if(!visible) return null;
    // source={require('./assets/animations/51499-loading-check.json')}
    // source={require('./assets/animations/50415-carrier-animation.json')}
    // source={require('./assets/animations/45037-loading-blue-generic.json')}
    // source={require('./assets/animations/33299-green-loading.json')}
    return(<LottieView 
        autoPlay
        loop
        source={require('./assets/animations/51499-loading-check.json')}
      />);
        

}

export default ActivityIndicator3;