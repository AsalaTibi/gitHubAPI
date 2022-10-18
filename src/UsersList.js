import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
export default class UsersList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('https://api.github.com/users?since=0')
      .catch(error => console.error())
      .then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
  }
}
