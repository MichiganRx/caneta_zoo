import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import CarouselComponent from '../../components/carrousel/carrousel';
import Header from '../../components/header/header';
import { CarouselItems1 } from '../../components/carrousel/contentCarrousel/contentCarousel';
import { CarouselItems2 } from '../../components/carrousel/contentCarrousel/contentCarousel';
import { CarouselItems3 } from '../../components/carrousel/contentCarrousel/contentCarousel';
import styles from './styles';

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
                                source={require('../../assets/flower.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems1} />
                    </View>
                    <View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Lápis</Text>
                            <Image
                                style={styles.imageTitle}
                                source={require('../../assets/flower.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems2} />
                    </View>
                    <View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>Diversos</Text>
                            <Image
                                style={styles.imageTitle}
                                source={require('../../assets/flower.png')}
                            />
                        </View>
                        <CarouselComponent data={CarouselItems3} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Products;
