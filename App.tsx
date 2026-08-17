import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen}  options={{ title: 'Create Account' }}
/>
        <Stack.Screen name="Login" component={LoginScreen}           options={{ title: 'Login' }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
