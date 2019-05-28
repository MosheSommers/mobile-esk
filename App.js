import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Alert, AsyncStorage} from 'react-native';
import HeaderFooter from './Components/HeaderFooter';
import Chart from './Components/Chart';
import Times from './Utilities/Times';



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      showSettings:false,
      settingTimes:this.getSettingTimes()
    };
    this.getTimes();
  }

  render(){
      return(
        <View style={{flex:1}}>
          <HeaderFooter message='Early Shabbos Times' fontSize={22}/>
            <Chart 
              showSettings={this.state.showSettings} 
              times={this.state.times} 
              onSubmitEditing={this.submitSettings.bind(this)}
            />
            <HeaderFooter 
              onTouch = {this.toggleSettings.bind(this)}
              isFooter={true} 
              message='&copy;2019 by Msommers'
            />          
        </View>
      );
  }

getSettingTimes(){
  let minchaTime = 10;
  let clTime = 30;
  AsyncStorage.getItem('Mincha').then((value)=>{
    Alert.alert(value);
    if(value){
      minchaTime = value;
    }
  });
  
  AsyncStorage.getItem('Cnadle Lighting').then((value)=>{
    Alert.alert(value);
    if(value){
      clTime = value;
    }
  });
  return {
    minchaTime:minchaTime,
    candleLightingTime:clTime
  }
  // return {
  //   minchaTime:10,
  //   candleLightingTime:30
  // }
}
  toggleSettings(){
    this.setState({
      showSettings: !this.state.showSettings
    })
  }

  setTimes(data, thisApp) {
    const myTimes = new Times();
    const sunrise = Date.parse(data.results.sunrise);
    const sunset = Date.parse(data.results.sunset);
    const candlelighting = myTimes.getCandleLighting(sunset);
    const { plag, latestCandle, mincha, plagInMs } =
    myTimes.getPlag(sunrise, sunset, this.state.settingTimes.minchaTime, this.state.settingTimes.candleLightingTime);
    thisApp.setState({
        plagInMs,
        times:{
          Candlelighting: candlelighting,
          Plag:plag,
          LatestCandle: latestCandle,
          Mincha:mincha
        } 
    });
  } 

  getTimes(){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(new Times().getSunriseSunset.bind(this));
      } else {
      console.log("Geolocation is not supported by this device.");
      }
  }

  submitSettings(event, label){
    const isMincha = label == 'Mincha';
    const beforeAfter = isMincha ? 'before' : 'after';
    AsyncStorage.setItem(label,event.nativeEvent.text ).then(()=>{
      AsyncStorage.getItem(label).then((value)=>{
          Alert.alert(value);
        });   
    }

   );
    
    Alert.alert(
      `You're ${label} time is ${event.nativeEvent.text} minutes ${beforeAfter} Plag!`
    );
    const minchaTime = isMincha ? Number(event.nativeEvent.text) : this.state.settingTimes.minchaTime;
    const candleLightingTime = !isMincha ? Number(event.nativeEvent.text) : this.state.settingTimes.candleLightingTime;

    const { latestCandle, mincha} = 
      new Times().getActualTimes(this.state.plagInMs, minchaTime, candleLightingTime);
      this.setState({
        times:{
          Candlelighting:this.state.times.Candlelighting,
          Plag:this.state.times.Plag,
          LatestCandle: latestCandle,
          Mincha:mincha
        } 
    });
  }
  
}



