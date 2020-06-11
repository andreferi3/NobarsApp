import React, { Component } from 'react'
import { Text, View, ActivityIndicator, AsyncStorage } from 'react-native'

export default class AuthLoading extends Component {
    async componentDidMount() {
        const token = await AsyncStorage.getItem('TOKEN').then((value) => {
            if(value) {
                return value;
            }
        })

        if(token) {
            this.props.navigation.navigate('User')
        } else {
            this.props.navigation.navigate('SignIn')
        }
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}