import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';
import Button from './Button';
export default class HeaderFooter extends Component{
    
 render(){
      return(
        <View style={this.styles.headerFooter}>
            <Text style={this.styles.text}>{this.props.message}</Text>
            <Button 
              onTouch={this.props.onTouch} 
              isFooter={this.props.isFooter} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKzUACd4FMbbYY4v2AiKzUx_89vurJ9YADiq0Cz85kHuuRWeQqw" 
              />
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



