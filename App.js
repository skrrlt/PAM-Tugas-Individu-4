import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-web';


export default function App(){
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";
  const [state, setState] = useState({
    s: "Enter a movie ...",
    results: [],
    selected: {}
  });

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;

      setState(prevState => {
        return { ...prevState, results:results}
      })
    })
  }

    return (
      <View style={{flexDirection:"colum"}}>
        <View style={{  padding:"7%",
                        backgroundColor:"black",
                        justifyContent:"center",
                        alignItems:"center"}}>
          <Text style={{  color:"white",
                          fontSize:"120%",
                          fontWeight:"bold" }}>       MOVIE DB         </Text>

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
                        onChangeText = {text => setState( prevState => {
                          return { ...prevState, s: text}
                        })}
                        onSubmitEditing={search}
                        value={state.s}>
            </TextInput>

          </View>

          <View style={{flex:1, marginLeft:"3%", marginRight:"2%"}}>
            <TouchableOpacity >
              <Image  source={require("./assets/search.png")}
                    style={{  height:17,
                              width:17}}>

            </Image>
            </TouchableOpacity>
            
            
                        
          
          </View>
          
          





        </View>
          
        <ScrollView style={{flex:1}}>
            {state.results.map(result => (
              <View key={result.imdbID} style={{flex: 1, marginBottom:"3%"}}>
                <Image  source={{uri: result.Poster}}
                        style={{ width:"100%", height:"100%"}}> </Image>
                <Text style={{}}> {result.Title} </Text>

              </View>
            ))}

        </ScrollView>




        <StatusBar style="auto" />
      </View>
    );   

}


