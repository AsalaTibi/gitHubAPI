import React,{Component} from "react";
import { Text, View } from "react-native";

export default class UserDetails extends Component  {

    render(){
        return(
          <View>
            <Text>Id: {this.props.route.params.user.id} </Text>
            <Text>Node Id: {this.props.route.params.user.node_id} </Text>
            <Text>Gravatar Id:{this.props.route.params.user.gravatar_id} </Text>
            <Text>Url: {this.props.route.params.user.url} </Text>
            <Text>Html Url: {this.props.route.params.user.html_url} </Text>
            <Text>Followers Url: {this.props.route.params.user.followers_url} </Text>
            <Text>Following Url: {this.props.route.params.user.following_url} </Text>
            <Text>Gists Url: {this.props.route.params.user.gists_url} </Text>
            <Text>Starred Url: {this.props.route.params.user.starred_url} </Text>
            <Text>Subscription Url: {this.props.route.params.user.subscriptions_url} </Text>
            <Text>Organization Url: {this.props.route.params.user.organizations_url} </Text>
            <Text>Repos Url: {this.props.route.params.user.repos_url} </Text>
            <Text>Events Url: {this.props.route.params.user.events_url} </Text>
            <Text>Received Events Url: {this.props.route.params.user.received_events_url} </Text>
            <Text>Type: {this.props.route.params.user.type} </Text>
            <Text>Site Admin: {this.props.route.params.user.site_admin} </Text>
          </View>
        )
    }
}