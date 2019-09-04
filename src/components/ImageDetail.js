import React from 'react';
import { Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>Image {title}</Text>
        </View>
    );
};

export default ImageDetail;
