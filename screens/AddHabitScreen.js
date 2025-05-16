import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddHabitScreen({ navigation }) {
  const [habit, setHabit] = useState('');

  const saveHabit = async () => {
    const stored = await AsyncStorage.getItem('@habits');
    const habits = stored ? JSON.parse(stored) : [];
    habits.push({ name: habit, done: false });
    await AsyncStorage.setItem('@habits', JSON.stringify(habits));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite um hábito"
        value={habit}
        onChangeText={setHabit}
        style={styles.input}
      />
      <Button title="Salvar" onPress={saveHabit} disabled={!habit.trim()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
});