import React, { Component } from 'react';
import {  View, TextInput,Text, StyleSheet, } from 'react-native';

export default class InputRow extends Component{
  constructor(props){
    super(props);
  }  
 render(){
      return(
        <View > 
            <Text style={this.styles.row}>{this.props.label} : </Text>
            <Text>Hello</Text>
            <TextInput  
              id='sss'
              style={this.styles.input} 
              placeholder={`Minutes ${(this.props.label == 'Mincha') ? 'before' : 'after'} plag.`} 
              keyboardType="numeric"
              onSubmitEditing={(event) => {this.props.onSubmitEditing(event,this.props.label)}}
            />
        </View>
      );
  }

  styles = StyleSheet.create({
    row:{
        width:250,
        color:'#adffff',
        textTransform:'capitalize',
        fontSize:20,
       
    },
    input:{
      backgroundColor:'#fff',
      padding:10
    }
  });
  
}



