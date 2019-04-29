import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createStackNavigator , createAppContainer} from 'react-navigation';

import LocationsHome from './screens/LocationsHome';
import LocationsDetail from './screens/LocationsDetail';

class App extends React.Component {

  render(){
    return(
      <ScreenNavigator />
    )
  }
}

const ScreenNavigator = createStackNavigator ({
  Home: {screen: LocationsHome},
  Detail: {screen: LocationsDetail},
});

export default createAppContainer(ScreenNavigator);