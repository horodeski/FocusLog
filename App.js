import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import CreateScreen from './screens/activity/CreateScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 /*  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
    'SpaceGrotesk-VariableFont_wght': require('./assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  } */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="CreateScreen" options={{ headerShown: false }}  component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}