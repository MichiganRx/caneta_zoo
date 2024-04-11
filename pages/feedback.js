import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, Alert} from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';

function Feedback({ route }) {
  const navigation = useNavigation();

  const { feedbackType, currentDate, title } = route.params;
  const [feedbackText, setFeedbackText] = useState('');

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

  const handleFeedbackSelection = () => {
    navigation.navigate('Result', { 
      title: title,
      feedbackType: feedbackType,
      currentDate: currentDate,
      feedbackText: feedbackText
    });
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
        <TextInput
            style={styles.input}
            onChangeText={text => setFeedbackText(text)}
            value={feedbackText}
            placeholder="Digite seu feedback aqui..."
            multiline={true}
        />
        <TouchableHighlight
            style={styles.buttonData}
            onPress={handleFeedbackSelection}
          >
            <Text style={styles.buttonText}>Conferir Avaliação</Text>
          </TouchableHighlight>
        </View>
      </View>
  );
}

export default Feedback;
