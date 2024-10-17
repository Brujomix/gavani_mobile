import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "../components";
import { paletOfColors } from "../utils/colors";

export function Registration_Screen() {
  return (
    <View style={styles.containerRegistration}>
      <Montserrat_Text>Registration Page</Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRegistration: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:paletOfColors.black
  },
});
