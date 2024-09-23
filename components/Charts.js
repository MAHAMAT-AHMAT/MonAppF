import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { database } from "./firebaseConfig";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Charts = ({ userId }) => {
  const [temperatureData, setTemperatureData] = useState([0]);
  const [consumptionData, setConsumptionData] = useState([0]);
  const [currentData, setCurrentData] = useState([0]);
  const [labels, setLabels] = useState(["No Data"]);

  useEffect(() => {
    if (!userId) return;

    const readingsRef = database.ref(`UsersData/${userId}/readings`);

    readingsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log("Firebase Data:", data);

      if (data) {
        const tempArray = [];
        const consArray = [];
        const currArray = [];
        const labelsArray = [];

        for (const key in data) {
          const reading = data[key];
          console.log("Reading:", reading);

          // Validation des valeurs récupérées
          const tempValue = Number(reading.temperature);
          const consValue = Number(reading.consumption || 0);
          const currValue = Number(reading.pressure);
          const timestamp = reading.timestamp;

          if (
            !isNaN(tempValue) &&
            tempValue !== Infinity &&
            tempValue !== -Infinity &&
            !isNaN(consValue) &&
            consValue !== Infinity &&
            consValue !== -Infinity &&
            !isNaN(currValue) &&
            currValue !== Infinity &&
            currValue !== -Infinity &&
            timestamp
          ) {
            tempArray.push(tempValue);
            consArray.push(consValue);
            currArray.push(currValue);
            labelsArray.push(new Date(timestamp * 1000).toLocaleDateString());
          } else {
            console.error("Invalid Data:", {
              tempValue,
              consValue,
              currValue,
              timestamp,
            });
          }
        }

        setTemperatureData(tempArray.length > 0 ? tempArray : [0]);
        setConsumptionData(consArray.length > 0 ? consArray : [0]);
        setCurrentData(currArray.length > 0 ? currArray : [0]);
        setLabels(labelsArray.length > 0 ? labelsArray : ["No Data"]);
      } else {
        console.log("Aucune donnée disponible dans Firebase.");
      }
    });

    return () => readingsRef.off(); // Nettoyage de l'écouteur Firebase lors de la destruction du composant
  }, [userId]);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 1,
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
          Température
        </Text>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: temperatureData,
              },
            ],
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
      </View>

      <View>
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
          Consommation
        </Text>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: consumptionData,
              },
            ],
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
      </View>

      <View>
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
          Courant
        </Text>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: currentData,
              },
            ],
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
      </View>
    </ScrollView>
  );
};

export default Charts;
