import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';
import colorReducer from '../reducers/colorReducer';

const styles = StyleSheet.create({});

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
    const [state, dispatch] = useReducer(colorReducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Green"
                onDecrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onIncrease={() =>
                    dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
                }
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

export default SquareScreen;
