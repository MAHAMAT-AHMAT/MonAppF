import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Ajustement du chemin
import styles from "./styles"; // Ajustement du chemin

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Home", {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        });
      })
      .catch((error) => {
        Alert.alert("Erreur de connexion", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topnav}>
        <Text style={styles.title}>GWENOD ENERGETIQUE S.A.R.L</Text>
      </View>
      <View style={styles.authenticationBar}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;
