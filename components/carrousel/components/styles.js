import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    
    image: {
        width: '80%',
        height: 180,
        borderRadius: 8,
    },

    description: {
        marginTop: 8,
        fontSize: 16,
    },

    button: {
        marginTop: 16,
        backgroundColor: 'blue',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
