import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CarouselComponent from '../components/carrousel/carrousel';

const CarouselItemsPencil = [
    { description: 'Pinguim', imageSource: require('../assets/img-1.jpg') },
    { description: 'Dinossauro', imageSource: require('../assets/img-2.jpg') },
    { description: 'Preguiça', imageSource: require('../assets/img-3.jpg') },
    { description: 'Peixe', imageSource: require('../assets/img-4.jpg') },
    { description: 'Foca', imageSource: require('../assets/img-5.jpg') },
];

const CarouselItems = [
    { description: 'Pinguim', imageSource: require('../assets/lapis-1.jpg') },
    { description: 'Dinossauro', imageSource: require('../assets/lapis-2.jpg') },
    { description: 'Preguiça', imageSource: require('../assets/lapis-3.jpg') },
    { description: 'Peixe', imageSource: require('../assets/lapis-4.jpg') },
];

const Products = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Caneta de Bichinhos</Text>
                    <Image
                        style={styles.imageTitle}
                        source={require('../assets/abelha.png')}
                    />
                </View>
                <CarouselComponent data={CarouselItemsPencil} />
            </View>
            <View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Lápis de Bichinhos</Text>
                    <Image
                        style={styles.imageTitle}
                        source={require('../assets/tartaruga.png')}
                    />
                </View>
                <CarouselComponent data={CarouselItems} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,
        gap: 40,
    },

    containerTitle: {
        display: 'flex',
        paddingHorizontal: 20,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ffd6a5',
        paddingBottom: 10,
    },

    title:{
        fontSize: 16,
        color: '#D2691E',
        fontWeight: 'bold',
    },

    imageTitle: {
        width: 30,
        height: 30,
    }
});

export default Products;
