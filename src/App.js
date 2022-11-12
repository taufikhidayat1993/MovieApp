import React from 'react';
import { StyleSheet, Text,Button, View, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { IndexReducer } from './redux/index'
import { createStore } from 'redux';
import store from "./store"
import MoviesScreen from './MoviesScreen'
import DetailsScreen from './DetailsScreen'
import ListMovieReduxScreen from './ListMovieRedux'


// Screen Detail


// Screen Profile
function HomeScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     

    <TouchableOpacity  onPress={() => navigation.navigate('Movie')} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>List Movie API</Text>
    </TouchableOpacity>
    
    <TouchableOpacity  onPress={() => navigation.navigate('ListMovieRedux')} style={styles.appButtonContainer}>
     <Text style={styles.appButtonText}>List Movie Redux</Text>
    </TouchableOpacity>
     
    </View>
  );
}

// Stack berguna untuk routing aplikasi
const Stack = createStackNavigator();

function App() {
 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movie" component={MoviesScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="ListMovieRedux" component={ListMovieReduxScreen} />
        {/* <Stack.Screen name="Profiles" component={ProfilesScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
export default App;
