import { Dimensions, StyleSheet, View } from "react-native";
import { Form_Register } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";

const { width } = Dimensions.get("screen");

export function Registration_Screen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.containerLoginScreen}>
        <Form_Register navigation={navigation} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerLoginScreen: {
    width: width * 0.8,
    marginTop: 20,
  },
  buttonCreateAccount: {
    alignSelf: "flex-end",
    marginTop: 20,
  },
  textRegistration: {
    color: paletOfColors.blue,
    fontSize: 16,
  },
});
