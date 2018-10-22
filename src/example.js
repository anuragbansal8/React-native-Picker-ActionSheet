import React , { Component } from 'react';
import { View } from 'react-native';
import ActionSheetPicker from './components/ActionSheetPicker';
import Button from './components/button'

class Example extends Component {
    state = { 
        
        displayModal: false,
        displayAlert: false,
       item: [
           {
               key: '1',
               label: 'Monday',
               value: 'Monday'
           },
           {
               key: '2',
               label: 'Tuesday',
               value: 'Tuesday'
           },
           {
               key: '3',
               label: 'Wednesday',
               value: 'Wednesday'
           },
           {
               key: '4',
               label: 'Thursday',
               value: 'Thursday'
           },
           {
               key: '5',
               label: 'Friday',
               value: 'Friday'
           },
           {
               key: '6',
               label: 'Saturday',
               value: 'Saturday'
           },
           {
               key: '7',
               label: 'Sunday',
               value: 'Sunday'
           },
       ]
    };
    
    onDeclineAlert() {
        this.setState({ displayAlert: false });
      }

      onAcceptAlert() {
        this.setState({ displayAlert: false });
      }
    render(){
        return (
            <View>
                <Button onPress={
                   ()=>{
                        this.setState({
                            displayAlert: true,
                            item: [
                                {
                                    key: '1',
                                    label: 'Monday',
                                    value: 'Monday'
                                },
                                {
                                    key: '2',
                                    label: 'Tuesday',
                                    value: 'Tuesday'
                                },
                                {
                                    key: '3',
                                    label: 'Wednesday',
                                    value: 'Wednesday'
                                },
                                {
                                    key: '4',
                                    label: 'Thursday',
                                    value: 'Thursday'
                                },
                                {
                                    key: '5',
                                    label: 'Friday',
                                    value: 'Friday'
                                },
                                {
                                    key: '6',
                                    label: 'Saturday',
                                    value: 'Saturday'
                                },
                                {
                                    key: '7',
                                    label: 'Sunday',
                                    value: 'Sunday'
                                },
                            ]
                        })
                  
                }}/>
                <ActionSheetPicker 
                    visible={this.state.displayAlert}
                    onDecline={this.onDeclineAlert.bind(this)}
                    onAccept={this.onAcceptAlert.bind(this)}
                    item={this.state.item}
                />
            </View>
        )
    }
}

export default Example