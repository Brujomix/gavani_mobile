import { StyleSheet, View, Text } from "react-native";

export function Registration_Screen() {
  return <View style={styles.containerRegistration}>
    <Text>Inicio de Session</Text>
    <Text>Page Login</Text>
  </View>;
}

const styles = StyleSheet.create({
  containerRegistration: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});