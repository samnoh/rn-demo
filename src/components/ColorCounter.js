import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={onIncrease}></Button>
            <Button title={`Decrease ${color}`} onPress={onDecrease}></Button>
        </View>
    );
};

export default ColorCounter;
