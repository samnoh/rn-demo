import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const styles = StyleSheet.create({});

const SquareScreen = () => {
    const [color, setColor] = useState('');

    return (
        <View>
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green" />
        </View>
    );
};

export default SquareScreen;
