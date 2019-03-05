import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';
import HeaderFooter from './Components/HeaderFooter';
import Chart from './Components/Chart';


export default class FlexedDimensionsBasics extends Component{
  

  render(){
      return(
        <View style={{flex:1}}>
          <HeaderFooter message='Early Shabbos Times' fontSize={22}/>
          <Chart />
          <HeaderFooter message='&copy;2019 by Msommers'/>
        </View>
      );
  }
  
}



