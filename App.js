import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My first app</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleContainer: {
    paddingBottom: 10,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
