import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../common/Button";

export default function Header() {
  const navigation = useNavigation();
	const today = new Date();

	const formattedDate = today.toLocaleDateString("pt-BR", {
		weekday: "long",
		day: "numeric",
		month: "long"
	});

	const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

	return (
		<View style={{ marginTop: 100, marginBottom: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
			<View>
				<Text style={{ fontFamily: "BebasNeue-Regular", color: "#edf0ce", fontSize: 50 }}>OVERVIEW</Text>
				<Text style={{ color: "#edf0ce" }}>{capitalizedDate}</Text>
			</View>
      <Button title="+" onPress={() => navigation.navigate("CreateScreen")} />
		</View>
	);
}
