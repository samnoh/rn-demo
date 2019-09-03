import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const ColorCounter = ({ color }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}></Button>
            <Button title={`Decrease ${color}`}></Button>
        </View>
    );
};

export default ColorCounter;
