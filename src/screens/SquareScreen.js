import React, { useReducer } from 'react';
import { View } from 'react-native';

import ColorCounter from '../components/ColorCounter';
import colorReducer from '../reducers/colorReducer';

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
    const [state, dispatch] = useReducer(colorReducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Green"
                onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_INCREMENT })}
                onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: -1 * COLOR_INCREMENT })}
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
