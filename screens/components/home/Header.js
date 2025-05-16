import React from "react";
import { Text, View } from "react-native";

export default function Header() {
	return (
		<View style={{ marginTop: 100, marginBottom: 50 }}>
			<Text style={{ fontFamily: "BebasNeue-Regular", color: "#edf0ce",fontSize: 50}}>OVERVIEW</Text>
			<Text style={{ color: "#edf0ce"}}>Wednesday, May 20</Text>
		</View>
	);
}
