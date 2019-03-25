import React, { Component } from 'react';
import { Alert, TouchableWithoutFeedback ,Image, View, Text, StyleSheet} from 'react-native';

export default class Button extends Component{
    
    render(){
      
            return (
                <React.Fragment>
                {   
                    this.props.isFooter ? 
                    <TouchableWithoutFeedback
                    onPress={this.props.onTouch}
                    >            
                         <Image
                            style={{width: 66, height: 58}}
                            source={{uri: this.props.src}}
                        /> 
                    </TouchableWithoutFeedback>      
                        : <React.Fragment />
                }
            </React.Fragment>           
            );
        
       
    }
}