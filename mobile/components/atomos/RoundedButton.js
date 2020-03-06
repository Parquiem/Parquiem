import React from 'react';
import {Text, Button} from 'react-native';

export default function RoundedButton(props) {
    return (
        <Button title={props.text} onPress={props.pressHandler} />
    )
}
