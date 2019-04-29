import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, Image, ToastAndroid  } from 'react-native';


export default class LocationsHome extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      loading: true,
      dataSource: []
    };
  }

  componentDidMount(){
    fetch("http://192.168.2.143:8000/locations/")
    //fetch("http://192.168.2.143:8000/locations/") LOKALE ADRESSE ÄNDERN 
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson,
      })

      
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }


  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .8,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
      }}/>
    );
    }

    renderItem=(data)=>

        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}
          id={data.id}
          onPress={()=>this.props.navigation.navigate('Detail', { detail: data.item})}> 

          <Image style={styles.imageView} source = {{uri: `data:image/png;base64, ${data.item.picture}`}} />
          <View style={{flex: 1, justifyContent: 'center' }}>
              <Text style={styles.header}>{data.item.name}</Text>
              <Text style={styles.subheader}>{data.item.address}</Text>
              <Text style={styles.phone_number}>{data.item.phone_number}</Text>
          </View>
        </TouchableOpacity>
        

  render(){
    if(this.state.loading){
      return(
        <View style={styles.loader}>
          <ActivityIndicator size="large" color ="#0c9" />
        </View>
      )
    }

    return(
      <View style={styles.container}>
          <FlatList
            data= {this.state.dataSource}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item.id.toString()}
          />
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
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
   imageView: {
    width: 100,
    height: 100 ,
    borderRadius : 400/2,
    margin: 5
  },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   },
  header:{
    fontSize: 24,
    color: 'green',
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10
  },
  subheader:{
    fontSize: 18,
    color: 'gray',
    margin: 3
  },
  phone_number:{
    fontSize: 16,
    color: 'gray',
    margin: 5,
    marginRight: 10
  }
});
