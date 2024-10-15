import { StyleSheet, View } from "react-native";
import { Edu_Text } from "../components";
import { paletOfColors } from "../utils/colors";

export function Registration_Screen() {
  return (
    <View style={styles.containerRegistration}>
      <Edu_Text>Inicio de Session</Edu_Text>
      <Edu_Text>Page Login</Edu_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRegistration: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:paletOfColors.white
  },
});
