import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

const TextScreen = () => {
    const [value, setValue] = useState('');

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="newPassword"
                autoCompleteType="password"
                value={value}
                onChangeText={newValue => setValue(newValue)}
            />
            {value.length < 4 && <Text>Password must be longer than 5 characters</Text>}
        </View>
    );
};

export default TextScreen;
