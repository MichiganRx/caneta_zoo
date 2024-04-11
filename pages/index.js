import React, { useState } from 'react';
import { View, Text} from 'react-native';
import styles from '../style/styles';
import { Carrousel } from '../components/carrousel/carrousel';

function Index({ navigation }) {
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const [selectedValue, setSelectedValue] = useState('Enfermagem');

    const handleFeedbackSelection = (feedbackType) => {
        navigation.navigate('feedback', { feedbackType, currentDate: currentDate, title: `Avaliação da palestra: ${selectedValue}` });
    };

    return (
        <View style={styles.container}>
            
        </View>
    );
}

export default Index;
