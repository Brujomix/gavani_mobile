import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "./ui/Montserrat_Text";
import { paletOfColors } from "../utils/colors";

export function Business_OnLine({ isOnLine }) {
  return (
    <View style={styles.containerBussinesOnline}>
      <Montserrat_Text style={styles.styletext}>
        {isOnLine ? "Comercio OnLine" : "Comercio OffLine"}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBussinesOnline: {
    backgroundColor:paletOfColors.black,
    marginTop: 45,
    padding:8,
  },
  styletext: {
    color:paletOfColors.white,
    fontSize: 35,
    alignSelf: "center",
  },
});
