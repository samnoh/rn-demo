import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const CounterSceen = () => {
    const [value, setValue] = useState(0);

    return (
        <View>
            <Button
                title="+"
                onPress={() => {
                    setValue(value + 1);
                }}
            />
            <Button
                title="-"
                onPress={() => {
                    setValue(value - 1);
                }}
            />
            <Text>Current Count: {value}</Text>
        </View>
    );
};

export default CounterSceen;
