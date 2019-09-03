import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    otherStyle: {
        fontSize: 20
    }
});

const ComponentsScreen = () => {
    const name = 'Sam';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.otherStyle}>My Name is {name}</Text>
        </View>
    );
};

export default ComponentsScreen;
