import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card() {
	return (
		<View style={styles.card}>
			<View style={styles.icon} />
			<View style={styles.content}>
				<Text style={styles.title}>Estudar</Text>
				<Text style={styles.description}>Codar endpoints de rendimento</Text>
			</View>
			<View>
				<Text style={styles.duration}>20 min</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#282A2C",
		padding: 10,
		width: "100%",
		borderRadius: 8,
		marginVertical: 8,
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	icon: {
		backgroundColor: "#D9D9D9",
		width: 50,
		height: 50,
		borderRadius: 8
	},
	content: {
		flex: 1,
		flexShrink: 1,
	},
	title: {
		fontSize: 15,
		color: "#edf0ce",
		marginBottom: 5,
		fontWeight: "bold"
	},
	description: {
		fontSize: 13,
		color: "#edf0ce"
	},
	duration: {
		fontSize: 13,
		color: "#edf0ce"
	}
});
