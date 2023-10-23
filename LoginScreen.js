import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Animated } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const fadeAnim = new Animated.Value(0);

  const handleLogin = () => {
    if (username === "yourUsername" && password === "yourPassword") {
      navigation.navigate("Home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} style={styles.loginButton} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db", // Set your background color here
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff", // Text color
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff", // Input background color
  },
  loginButton: {
    backgroundColor: "#27ae60", // Button background color
    color: "#fff", // Button text color
  },
});
