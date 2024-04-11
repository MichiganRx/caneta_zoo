import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselComponent from '../components/carrousel/carrousel';

const CarouselItems = [
    { description: 'Produto 1', imageSource: require('../assets/img-1.jpg') },
    { description: 'Produto 1', imageSource: require('../assets/img-2.jpg') },
    { description: 'Produto 1', imageSource: require('../assets/img-3.jpg') },
    { description: 'Produto 1', imageSource: require('../assets/img-4.jpg') },
    { description: 'Produto 1', imageSource: require('../assets/img-5.jpg') },
];

const Products = () => {
    return (
        <View style={styles.container}>
            <Text>Seu App de Vendas</Text>
            <CarouselComponent data={CarouselItems} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default Products;
