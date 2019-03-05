import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';
export default class HeaderFooter extends Component{
    
 render(){
      return(
        <View style={this.styles.headerFooter}>
            <Text style={this.styles.text}>{this.props.message}</Text>
        </View>
      );
  }

  styles = StyleSheet.create({
    headerFooter:{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      
    },
    text:{
        fontSize:this.props.fontSize
    }
  });
  
}



