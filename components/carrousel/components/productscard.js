import React from 'react';
import { View, Text, TouchableOpacity, Image, onPress, Alert } from 'react-native';
import styles from './styles';

const Productscard = ({ description, imageSource, price, onBuy }) => {
    const handleBuy = () => {
        onBuy();
        Alert.alert('', 'Produto adicionado ao carrinho!');
    };
    return (
        <View onPress={onPress} style={styles.container}>
            <Image
                style={styles.image}
                source={imageSource}
            />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>R$ {price}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText} onPress={handleBuy}>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Productscard;
