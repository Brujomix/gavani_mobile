import { StyleSheet, Text } from "react-native";
import { paletOfColors } from "../../utils/colors";

export function Title_Dinamic({ text }) {
  return <Text style={styles.titleDinamic}>{text}</Text>;
}

const styles = StyleSheet.create({
  titleDinamic: {
    fontSize: 30,
    color: paletOfColors.white,
    alignSelf:"center",
    fontFamily:"Montserrat",
    fontWeight:"200"
  },
});
