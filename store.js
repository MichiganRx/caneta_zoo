import { configureStore } from '@reduxjs/toolkit';

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
      return {
        ...state,
        cart: [...state.cart, action.payload.product]
      };
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
