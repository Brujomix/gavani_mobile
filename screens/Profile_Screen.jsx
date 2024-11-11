import { ScreenWrapper } from "../wrappers";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Avatar_User,
  Modal_Dinamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/usersSlice";
import { paletOfColors } from "../utils/colors";
import { clearUser } from "../db/crudUsers";

const { width } = Dimensions.get("screen");

export function Profile_Screen({ navigation }) {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.User);

  return (
    <ScreenWrapper>
      <View style={styles.containerProfileScreen}>
        <Montserrat_Text style={styles.textWelcome}>Hola !</Montserrat_Text>
        <Montserrat_Text style={styles.textUserEmail}>
          {userInfo.email}
        </Montserrat_Text>

        <Avatar_User
          imageProfile={userInfo?.imageProfile ? userInfo?.imageProfile : null}
        />

        <Modal_Dinamic textButton={"Cerrar Session"}>
          <View style={styles.containerBodyModalLogOut}>
            <Montserrat_Text style={styles.textBodyModalLogOut}>
              Deseas Cerrar Session ?
            </Montserrat_Text>
            <Pressable_Dinamic
              style={styles.pressableConfirmLogOut}
              onPress={() => {
                dispatch(setUser(null));
                clearUser()
                  .then((_) =>
                    console.info("Borramos Tabla User Profile Screen")
                  )
                  .catch((err) =>
                    console.error(
                      `Error al Borrar tabla User Profile Screen`,
                      err
                    )
                  );
                navigation.navigate("Stack Users");
              }}
            >
              <Montserrat_Text style={styles.textConfirButtonLogOut}>
                Cerrar Session
              </Montserrat_Text>
            </Pressable_Dinamic>
          </View>
        </Modal_Dinamic>
        <Pressable_Dinamic
          style={styles.pressableSeeProducts}
          onPress={() => {
            navigation.navigate("Stack Home");
          }}
        >
          <Montserrat_Text style={styles.textPressableSeeProducts}>
            Ver Productos
          </Montserrat_Text>
        </Pressable_Dinamic>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerProfileScreen: {
    gap: 32,
    width: "80%",
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

  pressableSeeProducts: {
    width: width * 0.5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },

  textPressableSeeProducts: {
    alignSelf: "center",
    fontSize: 25,
  },

  pressableConfirmLogOut: {
    width: width * 0.5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },

  textConfirButtonLogOut: {
    color: paletOfColors.red,
    fontSize: 18,
    alignSelf: "center",
  },

  textUserEmail: {
    alignSelf: "center",
    fontSize: 25,
  },
  textWelcome: {
    fontSize: 35,
    alignSelf: "center",
  },
});
