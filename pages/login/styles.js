import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },

    imageButton: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
