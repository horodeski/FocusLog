import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "./components/home/Card";
import Header from "./components/home/Header";

export default function HomeScreen({ navigation }) {
	const [habits, setHabits] = useState([]);

	useEffect(() => {
		const loadHabits = async () => {
			const data = await AsyncStorage.getItem("@habits");
			if (data) setHabits(JSON.parse(data));
		};
		const unsubscribe = navigation.addListener("focus", loadHabits);
		return unsubscribe;
	}, [navigation]);

	const toggleHabit = async (index) => {
		const updated = [...habits];
		updated[index].done = !updated[index].done;
		setHabits(updated);
		await AsyncStorage.setItem("@habits", JSON.stringify(updated));
	};

	return (
		<ImageBackground source={require("../assets/Home.png")} style={styles.background} resizeMode="cover">
			<View style={styles.container}>
				<Header />
				{/* 				<FlatList
					data={habits}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item, index }) => (
						<TouchableOpacity onPress={() => toggleHabit(index)}>
							<Text style={item.done ? styles.done : styles.habit}>{item.name}</Text>
						</TouchableOpacity>
					)}
				/> */}
				<View style={{ flexDirection: "column", backgroundColor: "#1E202190", padding: 20, borderRadius: 10 }}>
					<View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
						<Text style={{ color: "#edf0ce", fontWeight: 500 }}>Atividades Recentes</Text>
            <Text style={{ color: "#edf0ce", fontWeight: 500 }}>Ver todas ></Text>
					</View>
					<Card />
					<Card />
				</View>
				<Button title="Adicionar Hábito" onPress={() => navigation.navigate("Novo Hábito")} />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1 },
	container: { flex: 1, padding: 20 },
	habit: { fontSize: 18, padding: 10 },
	done: { fontSize: 18, padding: 10, textDecorationLine: "line-through", color: "gray" }
});
