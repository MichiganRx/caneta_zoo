import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import CarouselComponent from '../components/carrousel/carrousel';
import Header from '../components/header/header';

const CarouselItemsPencil = [
    { description: 'Pinguim', imageSource: require('../assets/img-1.jpg') },
    { description: 'Dinossauro', imageSource: require('../assets/img-2.jpg') },
    { description: 'Preguiça', imageSource: require('../assets/img-3.jpg') },
    { description: 'Peixe', imageSource: require('../assets/img-4.jpg') },
    { description: 'Foca', imageSource: require('../assets/img-5.jpg') },
];

const CarouselItems = [
    { description: 'Patinhas', imageSource: require('../assets/lapis-1.jpg') },
    { description: 'Porco', imageSource: require('../assets/lapis-2.jpg') },
    { description: 'Gato', imageSource: require('../assets/lapis-3.jpg') },
    { description: 'Pikachu', imageSource: require('../assets/lapis-4.jpg') },
];

const Products = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.containerProducts}>
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
                            <Text style={{...styles.title, color: '#008000'}}>Lápis de Bichinhos</Text>
                            <Image
                                style={styles.imageTitle}
                                source={require('../assets/tartaruga.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    scrollViewContent: {
        flexGrow: 1,
    },

    containerProducts: {
        flexGrow: 1,
        gap: 40,
        paddingVertical: 20,
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
