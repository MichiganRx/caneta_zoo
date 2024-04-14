import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../store';
import styles from './styles'

import Header from '../../components/header/header';

const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.price.replace(',', '.'));
            total += price;
        });
        setTotalPrice(total.toFixed(2));
    };

    const handleDelete = (index) => {
        dispatch(removeFromCartAction(index));
    };

    return (
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={cartItems}
                renderItem={({ item, index }) => (
                    <View style={styles.item}>
                        <View style={styles.description}>
                            <Image style={styles.image} source={item.imageSource} />
                            <Text style={styles.name}>{item.description}</Text>
                            <Text style={styles.price}>R$ {item.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => handleDelete(index)}>
                            <Image 
                                style={{height:20, width:15}}
                                source={require("../../assets/lixeira.png")}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            <View style={styles.containerTotal}>
                <Text style={styles.name}>Total: R$ {totalPrice}</Text>
                <TouchableOpacity style={styles.buttonTotal}>
                    <Text style={styles.buttonText}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartScreen;
