import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';

export default class Row extends Component{
  constructor(props){
    super(props);
  }  
 render(){
      return(
        <View >
            <Text>
                <Text style={this.styles.row}>{this.props.label} : </Text>
                <Text style={this.styles.row}> {this.props.time}</Text>
            </Text>
        </View>
      );
  }

  styles = StyleSheet.create({
    row:{
        width:250,
        color:'#adffff',
        textTransform:'capitalize',
        fontSize:20,
    }
  });
  
}



