import React, { useEffect } from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            checkStatus();
        }, 3000);

    }, []);

    const checkStatus = async () => {
        try {
            const start = await AsyncStorage.getItem('START_KEY');
            const status = JSON.parse(start);
            if (status) {
                navigation.navigate('TaskScreen');
            } else {
                navigation.navigate('GetStarted')
            }
        } catch (error) {

            console.error("Error checking login:", error);
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: '#fff'}}>
            <FastImage 
                source={require('../../assets/logo.gif')}
                style={{ height: 600, }}
            />

        </View>
    )
}
