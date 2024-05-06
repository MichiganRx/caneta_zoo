import { StyleSheet } from 'react-native';

export default StyleSheet.create({

   container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#B0C4DE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap:20
    },

    description: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 20,
    },

    image: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#B0C4DE',
        width: 30,
        height: 30,
    },

    name: {
        width: '60%',
        color: '#4682B4',
        fontSize: 14,
        fontWeight: 'bold',
    },

    price: {
        color: '#432659',
        fontSize: 14,
    },

    containerTotal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'rgba(230,230,250, 0.6)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: '#c09edb',
    },

    buttonTotal: {
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderColor: '#cbbce6',
        backgroundColor: '#d8cdec',
        borderWidth: 2, 
        alignItems: 'center'
    },

    buttonText: {
        color: '#432659',
        fontSize: 12,
        fontWeight: 'bold',
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#555555',
    },
    
    
});
