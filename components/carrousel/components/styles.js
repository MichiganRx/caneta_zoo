import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00BFFF',
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
    },

    button: {
        backgroundColor: '#3CB371',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
