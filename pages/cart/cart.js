import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
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
    const [quantities, setQuantities] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems, quantities]);

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item, index) => {
            const price = parseFloat(item.price.replace(',', '.'));
            const quantity = quantities[index] || 1; // Default quantity is 1
            total += price * quantity;
        });
        setTotalPrice(total.toFixed(2));
    };

    const handleDelete = (index) => {
        Alert.alert(
            'Confirmar Exclusão',
            'Tem certeza que deseja excluir este produto do carrinho?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
                    onPress: () => {
                        const newQuantities = { ...quantities };
                        delete newQuantities[index]; // Remove quantity of deleted item
                        setQuantities(newQuantities);
                        dispatch(removeFromCartAction(index));
                    },
                    style: 'destructive',
                },
            ]
        );
    };

    const handleQuantityChange = (index, quantity) => {
        const newQuantities = { ...quantities, [index]: quantity };
        setQuantities(newQuantities);
    };

    const handlePurchase = () => {
        if (cartItems.length === 0) {
            Alert.alert('Carrinho Vazio', 'Seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
        } else {
            navigation.navigate('Purchase', { totalPrice: totalPrice });
        }
    };

    const renderContent = () => {
        if (cartItems.length === 0) {
            return (
                <View style={styles.emptyCartContainer}>
                    <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
                </View>
            );
        } else {
            return (
                <FlatList
                    data={cartItems}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <View style={styles.description}>
                                <Image style={styles.image} source={item.imageSource} />
                                <Text style={styles.name}>{item.description}</Text>
                                <Text style={styles.price}>R$ {item.price}</Text>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity onPress={() => handleQuantityChange(index, (quantities[index] || 1) - 1)}>
                                        <Text style={styles.quantityButton}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.quantity}>{quantities[index] || 1}</Text>
                                    <TouchableOpacity onPress={() => handleQuantityChange(index, (quantities[index] || 1) + 1)}>
                                        <Text style={styles.quantityButton}>+</Text>
                                    </TouchableOpacity>
                                </View>
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
            );
        }
    };

    return (
        <View style={styles.container}>
            <Header/>
            {renderContent()}
            <TotalValue totalPrice={totalPrice} buttonText='Finalizar Compra' onPress={handlePurchase}/>
        </View>
    );
};

export default CartScreen;
