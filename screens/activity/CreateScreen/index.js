import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, Button, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CreateScreen() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [duration, setDuration] = useState("");
	const [notes, setNotes] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const onChangeDate = (event, selectedDate) => {
		setShowDatePicker(Platform.OS === "ios");
		if (selectedDate) setStartDate(selectedDate);
	};

	return (
		<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
			<View>
				<Text style={styles.label}>Nome da Atividade</Text>
				<TextInput
					placeholder="Ex: Estudar React Native"
					placeholderTextColor="#aaa"
					style={styles.input}
					value={name}
					onChangeText={setName}
				/>
				<Text style={styles.label}>Categoria</Text>
				<View style={styles.pickerWrapper}>
					<Picker
						selectedValue={category}
						onValueChange={(itemValue) => setCategory(itemValue)}
						style={styles.picker}
						dropdownIconColor="#fff">
						<Picker.Item label="Selecione a categoria" value="" color="#888" />
						<Picker.Item label="Estudo" value="Estudo" color="#fff" />
						<Picker.Item label="Trabalho" value="Trabalho" color="#fff" />
						<Picker.Item label="Lazer" value="Lazer" color="#fff" />
						<Picker.Item label="Saúde" value="Saúde" color="#fff" />
					</Picker>
				</View>
				<Text style={styles.label}>Duração Estimada (minutos)</Text>
				<TextInput
					placeholder="Ex: 25"
					placeholderTextColor="#aaa"
					keyboardType="numeric"
					style={styles.input}
					value={duration}
					onChangeText={setDuration}
				/>
				<Text style={styles.label}>Data/Hora de Início</Text>
				<Text style={styles.label}>Notas</Text>
				<TextInput
					style={[styles.input, { height: 80 }]}
					multiline
					placeholder="Observações sobre a atividade"
					placeholderTextColor="#aaa"
					value={notes}
					onChangeText={setNotes}
				/>
				<Button title="Criar Atividade" onPress={() => console.log({ name, category, duration, startDate, notes })} color="#444" />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
		backgroundColor: "#151515"
	},
	label: {
		fontWeight: "bold",
		marginTop: 15,
		marginBottom: 5,
		color: "white",
		fontSize: 16
	},
	input: {
		borderWidth: 1,
		borderColor: "#444",
		borderRadius: 8,
		padding: 10,
		color: "white",
		backgroundColor: "#222"
	},
	pickerWrapper: {
		borderWidth: 1,
		borderColor: "#444",
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "#222"
	},
	picker: {
		color: "white",
		backgroundColor: "#222"
	}
});
