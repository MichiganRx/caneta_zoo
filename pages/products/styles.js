import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    scrollViewContent: {
        flexGrow: 1,
    },

    containerProducts: {
        flexGrow: 1,
        gap: 30,
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
