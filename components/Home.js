import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { auth, database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
import Table from "./Table";
import Gauges from "./Gauges";
import Charts from "./Charts";
import Cartes from "./Cartes";
import Checkbox from "expo-checkbox";
import styles from "./styles";

const Home = ({ route, navigation }) => {
  const { uid, email } = route.params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [showGauges, setShowGauges] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const userRef = ref(database, `UsersData/${uid}/readings`);

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Fetched data:", data);
      setUserData(data);
      setLoading(false);
    });
  }, [uid]);

  const handleToggleTable = () => {
    setShowTable((prevShowTable) => !prevShowTable);
  };

  const handleDeleteData = () => {
    setUserData(null);
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("Auth");
    });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.topnav}>
        <Text style={styles.title}>GWENOD ENERGETIQUE S.A.R.L</Text>
        <Text style={styles.subtitle}>Utilisateur connecté: {email}</Text>
        <Text
          onPress={handleSignOut}
          style={{ color: "blue", textDecorationLine: "underline" }}
        >
          Déconnexion
        </Text>
      </View>
      <View style={styles.filterBar}>
        <View style={styles.checkboxContainer}>
          <Checkbox value={showCards} onValueChange={setShowCards} />
          <Text style={styles.checkboxLabel}>Carte</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox value={showGauges} onValueChange={setShowGauges} />
          <Text style={styles.checkboxLabel}>Jauges</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox value={showCharts} onValueChange={setShowCharts} />
          <Text style={styles.checkboxLabel}>Graphiques</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonVoir}>
          <Text style={styles.buttonText} onPress={handleToggleTable}>
            {showTable ? "Masquer les données" : "Voir toutes les données"}
          </Text>
        </View>
        <View style={styles.buttonSupprimer}>
          <Text style={styles.buttonText} onPress={handleDeleteData}>
            Supprimer les données
          </Text>
        </View>
      </View>
      {showCards && <Cartes />}
      {showGauges && <Gauges userData={userData} />}
      {showCharts && <Charts userData={userData} />}
      {showTable && <Table userData={userData} />}
    </ScrollView>
  );
};

export default Home;
