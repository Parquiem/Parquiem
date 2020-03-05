import React, { Component } from 'react'
import {Text} from 'react-native';
import RoundedButton from '../../components/atomos/RoundedButton';

class Initial extends Component {
    render() {
        return (
            <>
                <Text>Parquiem</Text>
                <RoundedButton text="Iniciar Sesión" />
                <RoundedButton text="Registrarse" />
                <Text>Parquiem v1.0</Text>
            </>
        )
    }
}

export default Initial;