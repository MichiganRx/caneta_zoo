import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../store';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header/header';
import TotalValue from '../../components/totalValue/totalValue';

import styles from './styles';

const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation();

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

    const handlePurchase = () => {
        navigation.navigate('Purchase', { totalPrice: totalPrice });
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
            <TotalValue totalPrice={totalPrice} buttonText='Finalizar Compra' onPress={handlePurchase}/>
        </View>
    );
};

export default CartScreen;
