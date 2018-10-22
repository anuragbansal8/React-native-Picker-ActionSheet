import React, { Component } from 'react';
import { Text, View, Modal, Picker, TouchableOpacity } from 'react-native';

class ActionSheetPicker extends Component{

  pickerItem = () => {
          return this.props.item.map(item=> 
      <Picker.Item key = {item.key} label={item.label} value={item.value} />
      )
  }

  render() {
  

  return (

    <Modal
      visible={this.props.visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={styles.actionSheetStyle}>
      <View style={styles.containerStyle}>
      <View style={styles.headerStyle} >
      <TouchableOpacity onPress={this.props.onAccept}>
            <View>
            <Text style={styles.SelectButtonStyle}>Select</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onDecline}>
            <View>
            <Text style={styles.CancelButtonStyle}>Cancel</Text>
            </View>
          </TouchableOpacity>
          
          </View>
                    <Picker 
                        selectedValue= {this.props.item[1].value}
                        style={{ flex: 1 }}
                        onValueChange={(itemValue, itemIndex) => {console.log(itemValue + itemIndex)}}
                        >
                       
                        {this.pickerItem()}
                                    
                    </Picker>
    
      </View>
      </View>
    </Modal>

  );
  };
};

const styles = {

    actionSheetStyle: {
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    headerStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(92, 142, 254, 0.08)',
        height: 45
    },

    containerStyle : {
        height: 250,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,

     },

    SelectButtonStyle: {
        paddingTop: 11, 
        paddingLeft: 16, 
        fontSize: 14, 
        color: '#5C8EFE'
    },

    CancelButtonStyle: {
        paddingTop: 11, 
        paddingLeft: '69%', 
        fontSize: 14,  
        color: '#5C8EFE'
    }
};

export default ActionSheetPicker;
