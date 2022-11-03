import React,{Component} from "react";
import {View, Text, Button, FlatList,Image,StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default class UserCard extends Component{
  state = { showDefault: false };
  render(){
     return(  
      <View>
        <Text> {this.props.user.login} </Text>
        <Image 
            style={styles.image}  
              // source={ this.state.showDefault ?
              //  {uri: this.props.user.avatar_url} : require('../images/person.jpg')}
              //   style={{ resizeMode: 'contain' }} 
              //   onLoad={() => this.setState({showDefault: true})} 
            source={{uri:this.props.user.avatar_url}}
                 />
      </View>
    )
    }   
}
const styles =StyleSheet.create({
  image:{
    width:100,
    height:100,
  }
})