import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        paddingTop: 20,
    },

    containerOptions: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    containerText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%'
    },

    options: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '23%',
        height: 100,
        borderRadius: 15,
        borderWidth: 1,
    },

    icons: {
        width: 40,
        height: 40,
    },

    buttonData: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: "40%",
        display: 'flex',
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
    },

    containerFeedback: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },

    optionsFeedback: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '30%',
        height: 150,
        borderRadius: 15,
        borderWidth: 1,
    },

    input :{
        width: '90%',
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        height: '50%'
    },
    
    iconsFeedback: {
        width: 60,
        height: 60,
    },

    containerApreciation: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 60,
    },

    appreciationText: {
        color: 'white',
        fontSize: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 10,
        borderRadius: 10,
    }
});
