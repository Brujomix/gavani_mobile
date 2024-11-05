import { StyleSheet, View } from "react-native";
import { Form_Login, Montserrat_Text, Pressable_Dinamic } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";

export function Login_Screen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.containerLoginScreen}>
        <Form_Login navigation={navigation} />
        <View style={styles.containerCreateAccountButton}>
          <Montserrat_Text style={styles.textQuestion}>
            No Tienes Cuenta ?
          </Montserrat_Text>
          <Pressable_Dinamic
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
    width: "80%",
    gap: 20,
  },
  containerCreateAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textRegistration: {
    color: paletOfColors.blue,
    fontSize: 16,
  },
  textQuestion: {
    fontStyle: "italic",
    fontSize: 16,
  },
});
