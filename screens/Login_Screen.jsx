import { Dimensions, StyleSheet, View } from "react-native";
import { Form_Login, Montserrat_Text, Pressable_Dinamic } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";
const {width, heigth} = Dimensions.get("screen")
export function Login_Screen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.continerLoginScreen}>
        <Form_Login />
        <Pressable_Dinamic
          style={styles.buttonCreateAccount}
          onPress={() => navigation.navigate("Registration")}
        >
          <Montserrat_Text style={styles.textRegistration}>
            Crear Cuenta
          </Montserrat_Text>
        </Pressable_Dinamic>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  continerLoginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  buttonCreateAccount: {
    alignSelf: "flex-end",
  },
  textRegistration: {
    color: paletOfColors.blue,
    fontSize: 16,
  },
});
