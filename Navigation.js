import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import Products from './pages/products/products';
import CartScreen from './pages/cart/cart';
import Login from './pages/login/login';
import Purchase from './pages/purchase/purchase';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Purchase" component={Purchase} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;
