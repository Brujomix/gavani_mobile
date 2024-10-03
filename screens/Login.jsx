import { StyleSheet, View } from "react-native";

export function Login() {
  return <View style={styles.containerLogin}>
    <Text>Inicio de Session</Text>
    <Text>Page Login</Text>
  </View>;
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
