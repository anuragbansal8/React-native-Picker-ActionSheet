import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Example from './src/example'

class App extends Component {

  render() {
    return (

      <View style={styles.mainStyle}>
         <Text style={styles.textStyle}>Hey Wizards! </Text>
         <Example />
      </View>

    )
  }

}


const styles = {
  mainStyle : {
    flex:1, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  textStyle: {
    fontSize: 18,
    marginBottom: 5
  }
}

export default App;