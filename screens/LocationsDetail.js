import React from 'react';
import { Text, View, StyleSheet} from 'react-native';



export default class LocationsDetail extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>Detail</Text>
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
