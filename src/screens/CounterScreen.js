import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import counterReducer from '../reducers/counterReducer';

const CounterSceen = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <View>
            <Button title="+" onPress={() => dispatch({ type: 'INCREMENT', payload: 1 })} />
            <Button title="-" onPress={() => dispatch({ type: 'DECREMENT', payload: 1 })} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

export default CounterSceen;
