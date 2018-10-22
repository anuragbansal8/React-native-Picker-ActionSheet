import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress = {props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Press Me!</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 100,
        backgroundColor: 'green'
    },
    textStyle: {
        fontSize: 18,
        color: 'white'
    }
}

export default Button;