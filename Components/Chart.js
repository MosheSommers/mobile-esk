import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import Times from './../Utilities/Times';
import Row from './Row';

export default class Chart extends Component{
    constructor(props){
        super(props);
        
        this.getTimes();
    }  
      
 render(){
        const rows = [];
            for (const key in this.state) {
                if (this.state.hasOwnProperty(key)) {
                    if (this.state.key !== null) {
                        rows.push( <Row key={key} label={key} time={this.state[key]}/>);
                    }
                }
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


    setTimes(data, thisChart) {
        const myTimes = new Times();
        const sunrise = new Date(Date.parse(data.results.sunrise)).toLocaleTimeString();
        const sunset = new Date(Date.parse(data.results.sunset)).toLocaleTimeString();
        const candlelighting = myTimes.getCandleLighting(Date.parse(data.results.sunset));
        const { plag, latestCandle, mincha } = myTimes.getPlag(Date.parse(data.results.sunrise), Date.parse(data.results.sunset));
        thisChart.setState({
            Candlelighting: candlelighting,
            Plag:plag,
            LatestCandle: latestCandle,
            Mincha:mincha
        });
    } 

    getTimes(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(new Times().getSunriseSunset.bind(this));
        } else {
        console.log("Geolocation is not supported by this browser.");
        }
    }
    
}



