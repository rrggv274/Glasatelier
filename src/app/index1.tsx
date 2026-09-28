import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.tezt}>
      <Text>Welkom Gebruiker.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tezt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
