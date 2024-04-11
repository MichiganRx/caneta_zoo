import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Productscard from './components/productscard';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.5;

const CarouselComponent = ({ data }) => {
    const renderCarouselItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <Productscard
                description={item.description}
                imageSource={item.imageSource}
                onPress={() => console.log('Card pressionado')}
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
