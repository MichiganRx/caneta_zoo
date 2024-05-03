import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    containerLogin: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#c09edb',
    },

    containerLogo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: '#c09edb',
    },

    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderColor: '#c09edb',
        fontSize: 12,
        marginBottom: 10,
    },

    title: {
        color: '#432659',
        fontSize: 16,
        fontWeight: '600',
    },

    button: {
        width: '60%',
        borderRadius: 8,
        paddingVertical: 4,
        borderColor: '#cbbce6',
        backgroundColor: '#d8cdec',
        borderWidth: 2, 
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#432659',
        fontSize: 12,
    },

    containerImage: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },

    imageButton: {
        width: '40%',
        borderRadius: 8,
        paddingVertical: 4,
        borderColor: '#cbbce6',
        borderWidth: 2, 
        alignItems: 'center',
    },
    
    imageButtonText: {
        color: '#432659',

        fontSize: 12,
    },
});
