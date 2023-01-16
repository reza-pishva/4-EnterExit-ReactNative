import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({visible='false'}) {
    if(!visible) return null;
    // source={require('./assets/animations/51499-loading-check.json')}
    // source={require('./assets/animations/50415-carrier-animation.json')}
    // source={require('./assets/animations/45037-loading-blue-generic.json')}
    // source={require('./assets/animations/33299-green-loading.json')}
    // source={require('./assets/animations/271-loader.json')}
    // source={require('./assets/animations/297-loading-rainbow.json')}
    // source={require('./assets/animations/222-trail-loading.json')}
    // source={require('./assets/animations/5325-swoosh-done-animation.json')}
    // source={require('./assets/animations/lf30_editor_aqbpudru.json')}
    return(<LottieView 
        autoPlay
        loop
        source={require('./assets/animations/51499-loading-check.json')}
      />);
        

}

export default ActivityIndicator;