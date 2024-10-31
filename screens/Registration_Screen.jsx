import { StyleSheet, View } from "react-native";
import { Avatar_User, Form_Register } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";

export function Registration_Screen() {
  return (
    <ScreenWrapper>
      <View style={styles.containerLoginScreen}>
        <View>
          <Avatar_User />
        </View>
        <Form_Register />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerLoginScreen: {
    width: "80%",
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
