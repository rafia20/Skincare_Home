import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../pic.avif")} 
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Rafia Sajid's Skin Care App</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC0CB", // Pink background color
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff", // Text color
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row", // Arrange buttons horizontally
  },
  buttonContainer: {
    backgroundColor: "#FF69B4", // Lighter pink button background color
    padding: 10,
    borderRadius: 5,
    margin: 5, // Add margin for spacing between buttons
  },
  buttonText: {
    color: "#fff", // Button text color
    fontSize: 18,
  },
});