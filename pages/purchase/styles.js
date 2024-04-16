import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },

    containerContent: {
        borderWidth: 1,
        borderColor: '#B0C4DE',
        borderRadius: 8,
    },

    paymentMethodContainer: {
        width: '100%',
        flexDirection: 'row',
        gap: 20,
    },

    titleContainer: {
        fontSize: 14,
        borderBottomWidth: 1,
        padding: 10,
        borderColor: '#B0C4DE', 
        color: '#432659', 
        fontWeight: 'bold',
        backgroundColor: 'rgba(230,230,250, 0.6)',
    },

    paymentMethodOption: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    paymentDetailsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    input: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#B0C4DE', 
        borderRadius: 10,
    },

    containerInfo: {
        padding: 10,
        gap: 10,
    },
});
