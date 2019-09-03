import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const styles = StyleSheet.create({});

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
};

export default ImageScreen;
