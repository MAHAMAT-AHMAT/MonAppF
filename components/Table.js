import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

const Table = ({ userData }) => {
  console.log("User data in Table component:", userData);

  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>Tableau des lectures</Text>
      <ScrollView horizontal>
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Timestamp</Text>
            <Text style={styles.tableHeaderText}>Temp (ºC)</Text>
            <Text style={styles.tableHeaderText}>Humidity</Text>
            <Text style={styles.tableHeaderText}>Pressure</Text>
          </View>
          {userData &&
            Object.keys(userData).map((key) => (
              <View key={key} style={styles.tableRow}>
                <Text style={styles.tableCell}>{userData[key].timestamp}</Text>
                <Text style={styles.tableCell}>
                  {userData[key].temperature}
                </Text>
                <Text style={styles.tableCell}>{userData[key].humidity}</Text>
                <Text style={styles.tableCell}>{userData[key].pressure}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;
