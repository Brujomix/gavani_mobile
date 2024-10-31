import { StyleSheet, View } from "react-native";
import { Avatar_User, Form_Login, Montserrat_Text, Pressable_Dinamic } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";

export function Login_Screen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.containerLoginScreen}>
        <Avatar_User/>
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
  containerLoginScreen:{
    width:"80%"
  },
  buttonCreateAccount: {
    alignSelf: "flex-end",
    marginTop:20
  },
  textRegistration: {
    color: paletOfColors.blue,
    fontSize: 16,
  },
});
