import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        marginVertical: 50
    }
});

const ListScreen = () => {
    const friends = [{ name: 'Smith' }, { name: 'Jenny' }, { name: 'Jessica' }, { name: 'John' }];

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item, index }) => (
                <Text style={styles.text}>
                    {index + 1} - {item.name}
                </Text>
            )}
        />
    );
};

export default ListScreen;
