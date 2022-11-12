import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, Image,TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import axios from "axios";

const ListMovieRedux= ({ todos }) => {
    return(
      <View style={{ flex: 1 }}>
         <ScrollView  showsVerticalScrollIndicator={false}>
      <View>
       
        {todos.map(todo =>
           <TouchableOpacity
          
          
           style={[StyleMovies.movieList,{marginBottom: 5,padding:10} ]}>
           <View style={{  flex:1 }}>
           <View styl>
            <Text style={{ fontSize: 17 }}>{todo.title}</Text>
            </View>
            <View>
            <Text >{todo.description}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      </View>
      </ScrollView>
      </View>
    )
  }
const mapStateToProps = state => ({
    todos: state.todoReducer.todos
  })
  
  export default connect(mapStateToProps)(ListMovieRedux);