import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.leftBlock}>
                <TouchableOpacity style={styles.square} />

                <Text numberOfLines={1} style={styles.itemText}> {props.text}</Text>
            </View>
            <TouchableOpacity style={styles.circle} />
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    leftBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        marginRight: 15,
    },
    itemText:{
        maxWidth:'80%',
        fontSize: 17,
        color: '#333',
        
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: '#55bcf6',
        borderWidth: 2,
    },

});