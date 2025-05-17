import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HistoryCard from "./components/home/HistoryCard";
import Header from "./components/home/Header";
import ActivityCard from "./components/home/ActivityCard";

const screenHeight = Dimensions.get("window").height;

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

	return (
		<ImageBackground source={require("../assets/Home.png")} style={styles.background} resizeMode="cover">
			<ScrollView
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
				style={{ marginBottom: 150 }} 
			>
				<Header />
				<View style={styles.activitiesContainer}>
					<View style={styles.activitiesHeader}>
						<Text style={styles.activitiesTitle}>Suas atividades</Text>
						<Text style={styles.activitiesTitle}>Ver todas</Text>
					</View>
					<View style={styles.activitiesCards}>
						<ActivityCard />
						<ActivityCard />
					</View>
				</View>
			</ScrollView>
			<View style={styles.historyContainer}>
				<View style={styles.historyHeader}>
					<Text style={styles.historyTitle}>Histórico</Text>
					<Text >Ver tudo</Text>
				</View>
				<HistoryCard />
				<HistoryCard />
				<HistoryCard />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1 },
	container: {
		padding: 20,
	},
	activitiesContainer: {
		backgroundColor: "#1E202190",
		padding: 20,
		marginBottom: 20,
		borderRadius: 20,
	},
	activitiesHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	activitiesTitle: {
		color: "#edf0ce",
		fontWeight: "500",
	},
	activitiesCards: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	historyContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#fff",
		padding: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		height: 320,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 5,
	},
	historyHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	historyTitle: {
		fontWeight: "500",
		fontSize: 20,
	},
});
