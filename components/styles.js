import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Conteneur principal
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },

  // Barre de navigation
  topnav: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#009387",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },

  // Barre d'authentification
  authenticationBar: {
    width: "100%",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#009387",
    padding: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  // Table styles
  tableContainer: {
    flex: 1,
    padding: 10,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f1f8ff",
    padding: 10,
  },
  tableHeaderText: {
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableCell: {
    padding: 5,
  },

  // Jauge (Gauge) styles
  gaugeContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  gaugeLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gaugeValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  // Filtre (Filter)
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  checkboxLabel: {
    marginLeft: 5,
  },

  // Graphique (Chart) styles
  chartContainer: {
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  chart: {
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },

  // Cartes (Cards) styles
  cardContainer: {
    width: "100%",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center", // Center the content
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center", // Center the text
  },
  cardContent: {
    fontSize: 16,
    textAlign: "center", // Center the text
  },

  // Boutons (Buttons)
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: "100%",
  },
  buttonVoir: {
    backgroundColor: "#009387",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonSupprimer: {
    backgroundColor: "#d9534f",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default styles;
