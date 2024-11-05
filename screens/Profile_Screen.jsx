import React, { useId } from "react";
import { ScreenWrapper } from "../wrappers";
import { View, StyleSheet } from "react-native";
import {
  Avatar_User,
  Modal_Dinamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { changeLogged, setUser } from "../redux/slices/usersSlice";
import { paletOfColors } from "../utils/colors";

export function Profile_Screen({ navigation }) {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.User);
   
  return (
    <ScreenWrapper>
      <View style={styles.containerProfileScreen}>
        <Montserrat_Text style={styles.textWelcome}>
          Hola !
        </Montserrat_Text>
        <Montserrat_Text style={styles.textUserEmail}>
          {userInfo.email}
        </Montserrat_Text>

        <Avatar_User imageProfile={""}/>

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
                Cerrar Session
              </Montserrat_Text>
            </Pressable_Dinamic>
          </View>
        </Modal_Dinamic>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerProfileScreen: {
    gap: 35,
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

  textConfirButtonLogOut: {
    color: paletOfColors.red,
    alignSelf: "center",
    fontSize: 22,
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
