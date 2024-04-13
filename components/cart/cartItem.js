// CartItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartItem = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text>{product.description}</Text>
            <Text>R$ {product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default CartItem;
