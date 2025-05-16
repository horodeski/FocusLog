import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddHabitScreen from './screens/AddHabitScreen';
import HomeScreen from './screens/HomeScreen';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'SpaceGrotesk-VariableFont_wght': require('./assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;  // loading enquanto carrega
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listagem de cronometros" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Novo cronometro" component={AddHabitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}