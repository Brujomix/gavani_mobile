import { StyleSheet, Text } from "react-native";
import { paletOfColors } from "../../utils/colors";

export function Title_Dinamic({ text }) {
  return <Text style={styles.titleDinamic}>{text}</Text>;
}

const styles = StyleSheet.create({
  titleDinamic: {
    fontSize: 29,
    fontStyle: "italic",
    color: paletOfColors.white,
    letterSpacing: 2,
    alignSelf:"center"
  },
});
