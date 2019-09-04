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

### Image

```jsx
<Image resizeMode="cover" source={require('example.png')} />
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

### TextInput

-   No default styling

```jsx
<TextInput
    autoCapitalize="none"
    autoCorrect={false}
    value={value}
    onChangeText={newValue => setValue(newValue)}
    // Or just
    onChangeText={setValue}
    onEndEditing={postDate}
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

### Navigation

```jsx
const exampleScreen = ({ navigation }) => {
    return (
        <Button title="Go Home" onPress={() => navigation.navigate('Home', { user: data.user })} />
    );
};
```
