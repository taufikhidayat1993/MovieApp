import React, { Component } from "react";
import { Button,View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { renderIf } from "./utilities/CommonMethods";
import StyleMovies from "./StyleMovies";
import Configs from "./utilities/Configs";
import { createStackNavigator, createAppContainer } from 'react-navigation'
import axios from "axios";

export default class MoviesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    try {
      const responseMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=0805eeb3f3702cece55342919414d551&language=en-US&page=1");
      const { results: movies } = responseMovies.data;

      this.setState({
        movies
      });
      console.warn(this.state.movies)
    }catch (error) {
      console.error(error.response);
    }
  }
    render() {
      const { movies  } = this.state;
    return (
     
       <View style={{ flex: 1, alignItems: 'center', }}>
  
  {renderIf(
          movies.length,
          <ScrollView style={StyleMovies.movieList} showsVerticalScrollIndicator={false}>
            <View>
    {movies.map((obj, i) => {
      return (
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Detail", { id: obj.id })}
        key={i}
        style={{ marginBottom: 5 }}>
        <View style={{ flexDirection: "row", flex:1 }}>
        
          <Image
            style={StyleMovies.image}
            source={{
              uri:
                obj.poster_path != null
                  ? Configs.URL.IMAGE_URL + obj.poster_path
                  : Configs.URL.PLACEHOLDER_IMAGE
            }}
          />
         
          <View style={{ flexDirection: "column" }}>
            <Text numberOfLines={3} style={{ fontSize: 17 }}>
              {obj.original_title}
            </Text>
            <View style={StyleMovies.rowView}>
              <Text >Release Date</Text>
              <Text>:</Text>
              <Text>{obj.release_date}</Text>
            </View>
            <View style={StyleMovies.rowView}>
              <Text >Language</Text>
              <Text>:</Text>
              <Text>{obj.original_language}</Text>
            </View>
            <View style={StyleMovies.rowView}>
              <Text>Popularity</Text>
              <Text>:</Text>
              <Text>{obj.popularity} %</Text>
            </View>
          </View>
        </View>
        <View style={StyleMovies.lineView} />
      </TouchableOpacity>
    );
  }, this)}
</View>
</ScrollView>
      )
      }
      
    
    </View>)
  }
}