import { Dimensions, StyleSheet, View } from "react-native";
import { Form_Login, Montserrat_Text, Pressable_Dinamic } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";

const { width } = Dimensions.get("screen");

export function Login_Screen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.containerLoginScreen}>
        <Form_Login navigation={navigation} />
        <View style={styles.containerCreateAccountButton}>
          <Montserrat_Text style={styles.textAnswer}>
            No Tienes Cuenta ?
          </Montserrat_Text>
          <Pressable_Dinamic
            style={styles.pressableCreateAccount}
            onPress={() => navigation.navigate("Registration")}
          >
            <Montserrat_Text style={styles.textRegistration}>
              Crear Cuenta
            </Montserrat_Text>
          </Pressable_Dinamic>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerLoginScreen: {
    width: width * 0.8,
    gap: 20,
    marginTop: 20,
  },
  containerCreateAccountButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pressableCreateAccount: {
    width: width * 0.3,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },
  textRegistration: {
    color: paletOfColors.blue,
    fontSize: 18,
    alignSelf: "center",
  },
  textAnswer: {
    fontStyle: "italic",
    fontSize: 16,
  },
});
