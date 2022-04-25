import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-web';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchData : "",
      dataMovie: []
    };
  }

  ambilData = () => {
    fetch("http://www.omdbapi.com/?apikey=d66194a4&s="+this.state.searchData)
    .then((response) => response.json())
    .then((json) => this.setState({dataMovie:json.Search}, () => console.log(json)))
    .catch((err) => console.log(err))
  }

  render(){
    return (
      <View style={{flexDirection:"colum"}}>
        <View style={{  padding:"7%",
                        backgroundColor:"black",
                        justifyContent:"center",
                        alignItems:"center"}}>
          <Text style={{  color:"white",
                          fontSize:"120%",
                          fontWeight:"bold" }}>       MOVIE IMDB         </Text>

        </View>


        <View style={{}}>

        </View>


        <View style={{  flexDirection:"row",
                        flex:7,
                        backgroundColor:"white",
                        justifyContent:"center",
                        alignItems:"center",
                        marginTop:"5%"   }}>

          <View style={{flex:6, marginLeft:"7%"}}>
            
            <TextInput  style={{  width:"100%",
                                  height:"5%",
                                  padding:"3%",
                                  borderWidth:1,
                                  borderRadius:4, 
                                  fontSize:"90%"}}
                        placeholder="input search movie"
                        
                        onChangeText = {(value) => this.setState({searchData: value})}>
            </TextInput>

          </View>

          <View style={{flex:1, marginLeft:"3%", marginRight:"2%"}}>
            <TouchableOpacity onPress={() => this.ambilData}>
              <Image  source={require("./assets/search.png")}
                    style={{  height:17,
                              width:17}}>

            </Image>
            </TouchableOpacity>
            
            
                        
          
          </View>
          
          





        </View>

        <View style={{flex:1}}>
            <FlatList data={this.state.dataMovie}
                      keyExtractor={(item) => item.imdbID }
                      renderItem={({item, index}) => (
                        <View>
                          <Text style={{color:"black"}}>   {item.Title}   </Text>
                          <Text>   {item.Year}    </Text>
                        </View>


                      )}
                      >

            </FlatList>

        </View>




        <StatusBar style="auto" />
      </View>
    );   
  }


}

export default App;
