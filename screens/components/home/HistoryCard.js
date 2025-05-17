import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RecentCard() {
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
		width: "100%",
		marginVertical: 8,
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	icon: {
		backgroundColor: "#D9D9D9",
		width: 60,
		height: 60,
		borderRadius: 4
	},
	content: {
		flex: 1,
		flexShrink: 1
	},
	title: {
		fontSize: 15,
		marginBottom: 2,
		fontWeight: "bold"
	},
	description: {
		fontSize: 13
	},
	duration: {
		fontSize: 13
	}
});
