import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, Image, ToastAndroid  } from 'react-native';


export default class LocationsHome extends React.Component {

  render(){
    const {navigation} = this.props;
    const name = navigation.getParam('name', 'Default Value');
    const address = navigation.getParam('address', 'Default Value');
    const phone_number = navigation.getParam('phone_number', 'Default Value');
    const picture = navigation.getParam('picture', 'Default Value');
    const website = navigation.getParam('website', 'Default Value');
    const description = navigation.getParam('description', 'Default Value');

    return(
      <View style={styles.container}>
        <View>
          <Image style={styles.imageView} source = {{uri: `data:image/png;base64, ${picture}`}} />
        </View>
          <Text style={styles.title}>{name}</Text>
          <Text>Address: {address}</Text>
          <Text>Tel: {phone_number}</Text>
          <Text>Dienstleistungen: {description}</Text>
          <Text>Weitere Informationen auf {website}</Text>
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
   imageView: {
    width: 300,
    height: 200 ,
    borderRadius : 400/2,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },

});

