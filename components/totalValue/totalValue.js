import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TotalValue = ({ totalPrice, onPress, buttonText }) => {
    return (
        <View style={styles.containerTotal}>
            <Text style={styles.name}>Total: R$ {totalPrice}</Text>
            <TouchableOpacity style={styles.buttonTotal} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TotalValue;
