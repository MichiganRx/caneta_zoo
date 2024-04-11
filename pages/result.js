import React from 'react';
import { View, Text, Image, Alert, TouchableHighlight } from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';

function Result({ route }) {
  const { title, feedbackType, currentDate, feedbackText } = route.params;
  const navigation = useNavigation(); // Obtendo o objeto de navegação

  const handlePress = () => {
    Alert.alert(
      'Obrigado!',
      'Enviado com sucesso!',
      [
        { text: 'Nova Avaliação', onPress: () => navigation.navigate("TelaInicial") },
      ]
    );
  };

  const getImageSource = (type) => {
    switch (type) {
      case 'Satisfeito':
        return require("../assets/feliz.png");
      case 'Neutro':
        return require("../assets/sorriso.png");
      case 'Insatisfeito':
        return require("../assets/choro.png");
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text>{title}</Text>
      </View>
      <View style={styles.containerText}>
        <Text>Data selecionada: {currentDate}</Text>
      </View>
      <View style={styles.containerFeedback}>
        <View style={styles.optionsFeedback}>
            <Image
                style={styles.iconsFeedback}
                source={getImageSource(feedbackType)}
            />
            <Text>{feedbackType}</Text>
        </View>
        <View style={styles.input}>
            <Text>Feedback: {feedbackText}</Text>
        </View>
        <TouchableHighlight
            style={styles.buttonData}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Result;
