import React from "react";
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
import { AntDesign } from "@expo/vector-icons";

export function Profile_Screen({ navigation }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.User);

  const handleAddProfileImage = () => {
    console.warn("Click");
  };

  return (
    <ScreenWrapper>
      <View style={styles.containerProfileScreen}>
        <Avatar_User />
        <Pressable_Dinamic
          onPress={handleAddProfileImage}
          style={styles.buttonCamera}
        >
          <AntDesign name="camerao" size={38} />
        </Pressable_Dinamic>
        <Montserrat_Text style={styles.textUserEmail}>
          {userInfo ? userInfo.email : "Email User"}
        </Montserrat_Text>
      </View>
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
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerProfileScreen: {
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
    alignSelf: "center",
    fontSize: 18,
  },
  textUserEmail: {
    alignSelf: "center",
    fontSize: 18,
  },
  textLogOut: {
    color: paletOfColors.red,
    fontSize: 16,
  },
  buttonCamera: {
    position: "absolute",
    right: 75,
    top: 100,
    backgroundColor: paletOfColors.lightGray,
  },
});
