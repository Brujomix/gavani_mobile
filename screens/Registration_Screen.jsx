import { Dimensions, StyleSheet, View } from "react-native";
import { Form_Register } from "../components";
import { ScreenWrapper } from "../wrappers";
const { width, heigth } = Dimensions.get("screen");
export function Registration_Screen() {
  return (
    <ScreenWrapper>
      <View style={styles.containerRegistrationScreen}>
        <Form_Register />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerRegistrationScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.8,
  },
});
