# React Native Demo

## `TIL`

### Basic Component

```jsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

const ExampleScreen = () => {
    return <Text style={styles.textStyle}>Hello World</Text>;
};

export default ExampleScreen;
```

### Button

```jsx
<Button title="Click Me" onPress={() => {}} />
```

### TextInput

```jsx
<TextInput
    autoCapitalize="none"
    autoCorrect={false}
    value={value}
    onChangeText={newValue => setValue(newValue)}
/>
```

### Image

```jsx
<Image source={require('example.png')} />
```

### FlatList

-   Turns an array into a list of elements

```jsx
<FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    keyExtractor={val => val.id}
    data={data}
    renderItem={({ item, index }) => <Text>{item.name}</Text>}
/>
```

### Styles

-   Fill Objects

```javascript
boxStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
    // Or just
    ...StyleSheet.absoluteFillObject
}
```
