import React from 'react';
import { Text, View, StyleSheet} from 'react-native';



export default class Locations extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>Startseite wird geladen</Text>
     </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 15
   },
});
