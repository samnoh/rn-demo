import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxStyle: {
        borderWidth: 1,
        height: 50,
        width: 50,
        borderColor: 'red'
    },
    otherBoxStyle: {
        borderWidth: 1,
        height: 50,
        width: 50,
        borderColor: 'red',
        alignSelf: 'flex-end'
    }
});

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.boxStyle} />
            <View style={styles.otherBoxStyle} />
            <View style={styles.boxStyle} />
        </View>
    );
};

export default BoxScreen;
