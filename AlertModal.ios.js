import React, { Component } from 'react';
import { Text, View, Modal, Picker, TouchableOpacity } from 'react-native';

class AlertModal extends Component{

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
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <View style={styles.containerStyle}>
      <View style={{flexDirection: 'row', marginTop: 5, backgroundColor: 'rgba(92, 142, 254, 0.08)', height: 45}} >
      <TouchableOpacity onPress={this.props.onAccept}>
            <View>
            <Text style={{ paddingTop: 11, paddingLeft: 16, fontSize: 14, color: '#5C8EFE'}}>Select</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onDecline}>
            <View>
            <Text style={{ paddingTop: 11, paddingLeft: '69%', fontSize: 14,  color: '#5C8EFE'}}>Cancel</Text>
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
  textInputStyle: {
    height : 70,
    width: 216
  },

  textStyle: {
    fontSize: 18,
    paddingLeft: 24,
    paddingTop: 32
  },
  text1Style: {
    fontSize: 12,
    paddingLeft: 28,
    color: 'rgba(0, 0, 0, 0.3)'
  },
  pickerStyle: {
    height: 40,
    width: 280,
    flexDirection: 'row',
    borderRadius: 20,
    shadowRadius: 4,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    justifyContent: 'flex-end',
    marginTop: 15,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center'
},
};

export default AlertModal;
