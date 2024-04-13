import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CartItem from '../components/cart/cartItem';

const CartScreen = ({ route }) => {
    const { cartItems } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho</Text>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem product={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CartScreen;
