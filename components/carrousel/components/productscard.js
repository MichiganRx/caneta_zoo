import React from 'react';
import { Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';

const Productscard = ({ description, imageSource, onPress }) => {
    return (
        <View onPress={onPress} style={styles.container}>
            <Image
                style={styles.image}
                source={imageSource}
            />
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Productscard;
