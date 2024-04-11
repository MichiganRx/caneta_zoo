import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from '../style/styles';

function Card ({ text, imageSource, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.options}>
          <Image
            style={styles.icons}
            source={imageSource}
          />
          <Text>{text}</Text>
        </TouchableOpacity>
    );
}

export default Card;
