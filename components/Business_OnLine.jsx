import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "./ui/Montserrat_Text";
import { paletOfColors } from "../utils/colors";
import { useSelector } from "react-redux";

export function Business_OnLine() {
  const { isOnLine } = useSelector((state) => state.Global);
  return (
    <View style={styles.containerBussinesOnline}>
      <Montserrat_Text
        style={isOnLine ? styles.textOnLine : styles.textOffLine}
      >
        {isOnLine ? "En Linea" : "Cerrado"}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBussinesOnline: {
    backgroundColor: paletOfColors.black,
    marginTop: 45,
    padding: 8,
  },
  textOnLine: {
    color: paletOfColors.green,
    fontSize: 35,
    alignSelf: "center",
  },
  textOffLine: {
    color: paletOfColors.red,
    fontSize: 35,
    alignSelf: "center",
  },
});
