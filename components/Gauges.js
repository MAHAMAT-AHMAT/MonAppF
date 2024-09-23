import React from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import styles from "./styles";

const Gauges = ({ userData }) => {
  if (!userData) {
    return <Text>Aucune donnée à afficher</Text>;
  }

  const temperature = parseFloat(userData.temperature) || 0;
  const current = parseFloat(userData.current) || 0;

  return (
    <View style={styles.container}>
      {/* Temperature Gauge */}
      <View style={styles.gaugeContainer}>
        <Text style={styles.gaugeLabel}>Température</Text>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={(temperature / 40) * 100}
          tintColor="#FF6347"
          backgroundColor="#3d5875"
          rotation={0}
          lineCap="round"
        >
          {() => <Text style={styles.gaugeValue}>{temperature} °C</Text>}
        </AnimatedCircularProgress>
      </View>

      {/* Current Gauge */}
      <View style={styles.gaugeContainer}>
        <Text style={styles.gaugeLabel}>Courant</Text>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={(current / 30) * 100}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          rotation={0}
          lineCap="round"
        >
          {() => <Text style={styles.gaugeValue}>{current} A</Text>}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default Gauges;
