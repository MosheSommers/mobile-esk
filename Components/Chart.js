import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import Row from './Row';
import InputRow from './InputRow';

export default class Chart extends Component{
   
      
 render(){
        const rows = [];
            if(!this.props.showSettings){
                for (const key in this.props.times) {
                    if (this.props.times.hasOwnProperty(key)) {
                        if (this.props.times.key !== null) {
                            rows.push( <Row key={key} label={key} time={this.props.times[key]}/>);
                        }
                    }
                }
            }else{
                rows.push(<InputRow 
                            key='{key}' 
                            label='Mincha' 
                            time='10'
                            onSubmitEditing={this.props.onSubmitEditing}
                        />);
                rows.push(<InputRow 
                            key='{key2}' 
                            label='Candle Lighting' 
                            time='30'
                            onSubmitEditing={this.props.onSubmitEditing}
                        />);
            }
           
      return(  
                    <View style={this.styles.chart}>
                        {rows}
                    </View>
      );
  }

  styles = StyleSheet.create({
    chart:{
        justifyContent: "center",
        alignItems: "center",
        flex:4,
        backgroundColor:'#333', 
        color: '#adffff'
    }
  });
    
}



