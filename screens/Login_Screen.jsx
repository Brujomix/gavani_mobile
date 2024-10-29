import { StyleSheet, View } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Montserrat_Text } from "../components";
import { useSelector } from "react-redux";

export function Login_Screen() {
  
  return (
    <View style={styles.containerLogin}>
      <Montserrat_Text>Inicio de Session</Montserrat_Text>
      <Montserrat_Text>Page Login</Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: paletOfColors.black,
  },
});
