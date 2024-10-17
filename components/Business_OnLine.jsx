import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "./ui/Montserrat_Text";

export function Business_OnLine({ onLine }) {
  return (
    <View style={styles.containerBussinesOnline}>
      <Montserrat_Text style={styles.styletext}>
        {onLine ? "Comercio OnLine" : "Comercio OffLine"}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBussinesOnline: {
    marginTop: 45,
    marginBottom: 10,
  },
  styletext: {
    fontSize: 35,
    fontStyle: "normal",
    alignSelf: "center",
  },
});
