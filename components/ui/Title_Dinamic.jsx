import { StyleSheet, Text } from "react-native";

export function Title_Dinamic({ text }) {
  return <Text style={styles.titleDinamic}>{text}</Text>;
}

const styles = StyleSheet.create({
  titleDinamic: {
    fontSize: 27,
    fontStyle: "italic",
    color: "#FFF",
    letterSpacing: 2,
  },
});
