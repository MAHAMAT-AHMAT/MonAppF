import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Cartes = () => {
  const cards = [
    {
      title: "🌡 TEMPERATURE",
      value: "31 ℃",
    },
    {
      title: "💡 Consommation",
      value: "0.00 (KWH)",
    },
    {
      title: "⚡ Courant",
      value: "0.28 (A)",
    },
  ];

  return (
    <View style={styles.cardContainer}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardValue}>{card.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default Cartes;
