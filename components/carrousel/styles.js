import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

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
    
    image: {
        height: 250,
        width: '100%',
        borderRadius: 8,
    }
});
