import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, Button,FlatList, TouchableOpacity} from 'react-native';
import UserCard from './UserCard';
export default class UsersList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users?since=0')
      .catch(error => console.error())
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      }
  goToDetails(item){
    this.props.navigation.navigate('Details',{user:item})
  }
  render() {
    let users = []
    users = this.state.users;
    return(
      <FlatList
      data={users}
      renderItem={({item})=>{
         return(
            <UserCard 
              user={item} handlePress={this.goToDetails.bind(this)}
             />
         )
      }}
      /> 
    )
  }
}
