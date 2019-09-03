import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>Image {title}</Text>
        </View>
    );
};

export default ImageDetail;
