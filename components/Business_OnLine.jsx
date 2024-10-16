import { StyleSheet } from "react-native";
import { Montserrat_Text } from "./ui/Montserrat_Text";

export function Business_OnLine({ onLine }) {
  
  return (
    <Montserrat_Text style={styles.styletext}>
      {onLine ? "Comercio OnLine" : "Comercio OffLine"}
    </Montserrat_Text>
  );
}

const styles = StyleSheet.create({
  styletext: {
    fontSize: 35,
    fontStyle: "normal",
    alignSelf: "center",
  },
});
