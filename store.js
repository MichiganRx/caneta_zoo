import { configureStore } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

export const addToCart = 'addToCart';
export const removeFromCart = 'removeFromCart';
export const clearCart = 'clearCart';

export const removeFromCartAction = (index) => ({
  type: 'removeFromCart',
  payload: { index }
});

export const clearCartAction = () => ({
  type: clearCart
});

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToCart:
      const newProduct = action.payload.product;
      const existingProduct = state.cart.find(item => item.id === newProduct.id);
      if (existingProduct) {
        Alert.alert('', 'Este produto já está no carrinho!');
        return state;
      } else {
        Alert.alert('', 'Produto adicionado ao carrinho!');
        return {
          ...state,
          cart: [...state.cart, newProduct]
        };
      }
    case clearCart:
      return {
        ...state,
        cart: []
      };
    case removeFromCart:
      const updatedCart = state.cart.filter((item, index) => index !== action.payload.index);
      return {
        ...state,
        cart: updatedCart
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
