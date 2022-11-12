import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import StyleMovies from "./StyleMovies";
import Configs from "./utilities/Configs";
import Loader from "./utilities/Loader";
import axios from "axios";

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      detail:{}
    }
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("light-content");
      StatusBar.setBackgroundColor("#164466");
    });
  
    console.warn(this.props.route.params.id)
    this.fetchData();
  }
  async fetchData() {
    this.setState({ isLoading: true });
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.route.params.id}?api_key=0805eeb3f3702cece55342919414d551&language=en-US`);
    const {data: detail } = response;
    console.warn(detail)
    this.setState({
      detail,
      isLoading: false
    });
    // console.warn(this.state.detail)
   } catch (error) {
   
      console.error(error);
    }
  }
  render() {
    return ( 
    <View style={{ backgroundColor: Configs.Colors.Grey }}>
      <StatusBar backgroundColor={Configs.Colors.Cyan} barStyle="light-content" />
      {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
      <ScrollView style={StyleMovies.movieCard} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={StyleMovies.image}
            source={{
              uri:
                this.state.detail.poster_path != null
                  ? Configs.URL.IMAGE_URL + this.state.detail.poster_path
                  : Configs.URL.PLACEHOLDER_IMAGE
            }}
          />
          <Text style={{ fontSize: 16, margin: 5, fontWeight: "bold" }}>{this.state.detail.original_title}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.STATUS}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.detail.status}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.RATINGS}</Text>
          <Text style={{ flex: 0.5 }}>
            {this.state.detail.vote_average}
            /10
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.POPULARITY}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.detail.popularity}%</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.BUDGET}</Text>
          <Text style={{ flex: 0.5 }}>${this.state.detail.budget}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.REVENUE}</Text>
          <Text style={{ flex: 0.5 }}>${this.state.detail.revenue}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.RUNTIME}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.detail.runtime} min</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Configs.Strings.LANGUAGE}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.detail.original_language}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ flex: 0.2 }}>{Configs.Strings.OVERVIEW}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ flexWrap: "wrap", flex: 0.8 }}>{this.state.detail.overview}</Text>
        </View>
      </ScrollView>
    </View>
  
    );
  }
}

export default DetailsScreen;