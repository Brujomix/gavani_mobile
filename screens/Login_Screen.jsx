import { StyleSheet, View } from "react-native";
import {
  Avatar_User,
  Form_Login,
  Modal_Dinamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { changeLogged, setUser } from "../redux/slices/usersSlice";

export function Login_Screen({ navigation }) {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.User);

  return (
    <ScreenWrapper>
      <View style={styles.containerLoginScreen}>
        <Avatar_User />
        <Form_Login navigation={navigation} />
        <View style={styles.containerButtons}>
          <Pressable_Dinamic
            onPress={() => navigation.navigate("Registration")}
          >
            <Montserrat_Text style={styles.textRegistration}>
              Crear Cuenta
            </Montserrat_Text>
          </Pressable_Dinamic>
          {isLogged ? (
            <Modal_Dinamic textButton={"Cerrar Session"}>
              <View style={styles.containerBodyModalLogOut}>
                <Montserrat_Text style={styles.textBodyModalLogOut}>
                  Deseas Cerrar Session ?
                </Montserrat_Text>
                <Pressable_Dinamic
                  style={styles.confirmPressable}
                  onPress={() => {
                    dispatch(changeLogged(false));
                    dispatch(setUser(null));
                    navigation.navigate("HomePage");
                  }}
                >
                  <Montserrat_Text style={styles.textConfirButtonLogOut}>
                    Cerrar
                  </Montserrat_Text>
                </Pressable_Dinamic>
              </View>
            </Modal_Dinamic>
          ) : null}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerLoginScreen: {
    width: "80%",
  },
  containerButtons:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  textRegistration: {
    color: paletOfColors.blue,
    fontSize: 16,
  },
  textLogOut: {
    color: paletOfColors.red,
    fontSize: 16,
  },
  containerButtonsModal: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerBodyModalLogOut: {
    gap: 40,
  },
  textBodyModalLogOut: {
    alignSelf: "center",
    fontSize: 28,
  },

  textConfirButtonLogOut: {
    alignSelf: "center",
    fontSize: 18,
  },
});
