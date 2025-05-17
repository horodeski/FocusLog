import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ActivityCard() {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>Estudar</Text>
        <Text style={styles.description}>Codar endpoints de rendimento</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#77A350",
    width: "48%",
    borderRadius: 20,
    marginVertical: 8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  content: {
    flex: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 15,
    color: "white",
    marginBottom: 5,
    fontWeight: "bold"
  },
  description: {
    fontSize: 13,
    color: "white",
  },
  duration: {
    fontSize: 13,
    color: "white",
  }
});
