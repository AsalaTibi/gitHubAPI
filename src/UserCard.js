import React,{Component} from "react";
import {View, Text, Button, FlatList,Image,StyleSheet} from 'react-native';

export default class UserCard extends Component{
  
  render(){
     return(
     <View> 
           <View>
              <Text> {this.props.user.login} </Text>
              <Image 
              style={styles.image}  
              source={{ uri:this.props.user.avatar_url}}
               />
          </View> 
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