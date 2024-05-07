import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store';
import styles from './styles';

const Productscard = ({ id, description, imageSource, price }) => {
  const dispatch = useDispatch();

  const handleBuy = () => {
    const product = { id, description, imageSource, price };
    dispatch({ type: addToCart, payload: { product } });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>R$ {price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleBuy()}>
        <Image 
            style={{height:18, width:18}}
            source={require("../../../assets/add-to-cart.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Productscard;
