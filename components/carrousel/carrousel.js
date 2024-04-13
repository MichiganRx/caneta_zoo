import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Productscard from './components/productscard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.4;
const STORAGE_KEY = '@cart';

const CarouselComponent = ({ data }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadCartFromStorage();
    }, []);

    const loadCartFromStorage = async () => {
        try {
            const cartData = await AsyncStorage.getItem(STORAGE_KEY);
            if (cartData !== null) {
                setCart(JSON.parse(cartData));
            }
        } catch (error) {
            console.error('Error loading cart from storage:', error);
        }
    };

    const saveCartToStorage = async (cartData) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cartData));
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    };

    const handleBuy = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        saveCartToStorage(updatedCart);
    };

    const renderCarouselItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <Productscard
                description={item.description}
                imageSource={item.imageSource}
                price={item.price}
                onBuy={() => handleBuy(item)}
            />
        </View>
    );

    return (
        <View style={styles.carouselContainer}>
            <Carousel
                data={data}
                renderItem={renderCarouselItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                loop={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        overflow: 'hidden',
    },
});

export default CarouselComponent;
