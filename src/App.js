import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from './MoviesScreen'
import DetailsScreen from './DetailsScreen'
function HomeScreen({ navigation }) {
  return (
    <MoviesScreen/>
  );
}

// Screen Detail
function Detail({ route, navigation }) {
  return (
    <DetailsScreen/>
  );
}

// Screen Profile
function ProfilesScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        color="green"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

// Stack berguna untuk routing aplikasi
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MoviesScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        {/* <Stack.Screen name="Profiles" component={ProfilesScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
