import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#B0C4DE',
        gap: 10,
    },
    
    image: {
        width: '80%',
        height: 120,
        borderRadius: 8,
    },

    description: {
        color: '#4682B4',
        fontSize: 14,
        fontWeight: 'bold',
    },

    price: {
        color: '#432659',
        fontSize: 12,
    },

    button: {
        width: '60%',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderColor: '#cbbce6',
        backgroundColor: '#d8cdec',
        borderWidth: 2, 
        alignItems: 'center'
    },
});
