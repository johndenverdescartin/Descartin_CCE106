import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function login() {
    setError("");

    if (email === "" || password === "") {
      setError("Please enter email and password.");
      return;
    }

    // Simple login for demonstration
    if (email === "student@gmail.com" && password === "123456") {
      setLoggedIn(true);
    } else {
      setError("Invalid email or password.");
    }
  }

  function logout() {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  }

  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Student Profile</Text>

        <Text style={styles.text}>Name: Juan Dela Cruz</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Role: Student</Text>

        <View style={styles.space} />

        <Button title="Logout" onPress={logout} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Portal</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error !== "" && (
        <Text style={styles.error}>{error}</Text>
      )}

      <Button title="Login" onPress={login} />

      <Text style={styles.demo}>
        Demo: student@gmail.com / 123456
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
  },

  error: {
    color: "red",
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },

  space: {
    height: 30,
  },

  demo: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});
