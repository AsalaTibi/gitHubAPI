import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {Component} from 'react';
import type {Node} from 'react';
import UsersList from './src/UsersList';
import UserCard from './src/UserCard';
import UserDetails from './src/UserDetails';
import {View, Text, Button,FlatList, TouchableOpacity} from 'react-native';

const Stack  = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="Users List"> 
          <Stack.Screen name="Users List" component={UsersList} /> 
          <Stack.Screen name="Details" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
