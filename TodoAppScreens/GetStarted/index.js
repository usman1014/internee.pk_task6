import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetStarted = ({ navigation }) => {
    
    const startHandle = async () => {

        await navigation.navigate('TaskScreen');
        await AsyncStorage.setItem('START_KEY', JSON.stringify(true));

    };


    return (
        <View style={{ paddingHorizontal: 20, flex: 1,backgroundColor: '#fff', }}>
                        <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />

            <Animatable.Image animation='bounceInUp'
             source={require('../../assets/logo.gif')}
             style={styles.logo} />

            <Text style={styles.title}>Welcome to Tasky!</Text>

            <Text style={[styles.subtitle]}>
                Forget the stress, no more mess! Tasky keeps you on track, puts your goals right on the map!</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => startHandle()}
            >
                <Text style={styles.btnText}>Get Started</Text>

            </TouchableOpacity>

        </View >
    )
}
