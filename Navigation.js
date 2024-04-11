import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './pages';
import FeedbackScreen from './pages/feedback';
import Result from './pages/result';
import Products from './pages/products';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products" screenOptions={{headerShown: false}}>
        <Stack.Screen name="TelaInicial" component={Index} />
        <Stack.Screen name="feedback" component={FeedbackScreen} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;