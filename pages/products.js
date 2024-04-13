import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import CarouselComponent from '../components/carrousel/carrousel';
import Header from '../components/header/header';
import { CarouselItems1 } from '../components/carrousel/contentCarrousel/contentCarousel';
import { CarouselItems2 } from '../components/carrousel/contentCarrousel/contentCarousel';
import { CarouselItems3 } from '../components/carrousel/contentCarrousel/contentCarousel';

const Products = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.containerProducts}>
                    <View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Canetas</Text>
                            <Image
                                style={styles.imageTitle}
                                source={require('../assets/flower.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems1} />
                    </View>
                    <View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Lápis</Text>
                            <Image
                                style={styles.imageTitle}
                                source={require('../assets/flower.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems2} />
                    </View>
                    <View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Diversos</Text>
                            <Image
                                style={styles.imageTitle}
                                source={require('../assets/flower.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems3} />
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
        borderColor: '#B0C4DE',
        paddingBottom: 10,
    },

    title:{
        fontSize: 16,
        color: '#4682B4',
        fontWeight: 'bold',
    },

    imageTitle: {
        width: 30,
        height: 30,
    }
});

export default Products;
