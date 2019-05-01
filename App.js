import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createStackNavigator , createAppContainer} from 'react-navigation';

import LocationsHome from './screens/LocationsHome';
import LocationsDetail from './screens/LocationsDetail';
import AnimatedSplash from './screens/AnimatedSplash';



class App extends React.Component {
 
  render(){
    return(
      <ScreenNavigator />
    )
  }
}

const ScreenNavigator = createStackNavigator ({
  Splash: {screen: AnimatedSplash},
  Home: {screen: LocationsHome},
  Detail: {screen: LocationsDetail},
},
{
  initialRouteName: 'Splash',
}
);

export default createAppContainer(ScreenNavigator);