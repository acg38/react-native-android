import React from 'react';
import { Text, View, StyleSheet, Image, Animated, Easing, Button } from 'react-native';


export default class AnimatedSplash extends React.Component {
    hello = () =>{
        alert("Merhaba Dünya");
    }

  render(){
    return(
        <View>
            <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/test.jpg")}/>
            <Text style={styles.titleSplash}>Entdecke {"\n"} die neue Art an {"\n"} Services</Text>
            <Button title='Get Started' source={styles.button} 
            onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 70,
   },
   image: {
       width: 200,
       height: 190,
       borderRadius : 400/2,
       marginLeft: 85,
       marginTop: 40,
   },
   titleSplash: {
       marginTop: 20,
       textAlign: 'center',
       fontSize: 32,
       lineHeight: 40,
       color: '#3E4993',
   },
   button: {

   }
});

