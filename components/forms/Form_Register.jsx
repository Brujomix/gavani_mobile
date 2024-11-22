import { View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { useRegisterMutation } from "../../services/auth_Service";
import { paletOfColors } from "../../utils/colors";
import { Icon_Dinamic } from "../../components";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/usersSlice";
import { addUser, clearUser } from "../../db/crudUsers";

const { width } = Dimensions.get("screen");

export function Form_Register({ navigation }) {
  const dispatch = useDispatch();

  const [triggerRegistration, resultRegister] = useRegisterMutation();

  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
    errorRegister: "",
    imageProfile: "",
  });

  const [datosUser, setDatosUser] = useState({
    email: "",
    password: "",
    imageProfile: "",
  });

  const handlePressConfirmar = () => {
    const { email, password } = datosUser;

    triggerRegistration({ email, password });
  };

  const checkPasswords = (text) => {
    if (datosUser.password === text && text) {
      setErrors((pv) => ({ ...pv, errorConfirmPassword: "" }));
    } else {
      setErrors((pv) => ({
        ...pv,
        errorConfirmPassword: "Contraseñas no Coinciden - Campo Obligatorio",
      }));
    }
  };

  const checkPassword = (text) => {
    const passwordRegex = /^.{6,}$/;
    if (passwordRegex.test(text) && text) {
      setErrors((pv) => ({ ...pv, errorPassword: "" }));
      setDatosUser((pv) => ({ ...pv, password: text }));
    } else {
      setDatosUser((pv) => ({ ...pv, password: text }));
      setErrors((pv) => ({
        ...pv,
        errorPassword: "Minimo 6 Caracteres - Campo Obligatorio",
      }));
    }
  };

  const checkEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(text) && text) {
      setErrors((pv) => ({ ...pv, errorEmail: "" }));
      setDatosUser((pv) => ({ ...pv, email: text }));
    } else {
      setDatosUser((pv) => ({ ...pv, email: text }));
      setErrors((pv) => ({
        ...pv,
        errorEmail: "No es un email Válido - Campo Obligatorio",
      }));
    }
  };

  useEffect(() => {
    switch (resultRegister.status) {
      case "fulfilled":
        clearUser();

        const { localId, email, refreshToken } = resultRegister.data;

        dispatch(
          setUser({
            localId: localId,
            email: email,
            refreshToken: refreshToken,
          })
        );

        if (rememberMe) {
          addUser({
            localId: localId,
            email: email,
            refreshToken: refreshToken,
          });
        }
        navigation.navigate("Stack Users");
        break;
      case "rejected":
        setErrors((pv) => ({
          ...pv,
          errorRegister: "Error Al Registrar Usuario",
        }));
        break;

      default:
        setErrors((pv) => ({
          ...pv,
          errorRegister: "",
        }));
        break;
    }
  }, [resultRegister]);

  return (
    <View style={styles.containerLogin}>
      <Input_Text
        iconName={"email"}
        label={"Email"}
        onChange={(text) => checkEmail(text)}
        error={errors.errorEmail}
      />
      <Input_Text
        iconName={"password"}
        isSecure={true}
        label={"Password"}
        onChange={(text) => checkPassword(text)}
        error={errors.errorPassword}
      />
      <Input_Text
        iconName={"password"}
        isSecure={true}
        label={"Confirmar Password"}
        onChange={(text) => checkPasswords(text)}
        error={errors.errorConfirmPassword}
      />
      {rememberMe ? (
        <Pressable_Dinamic
          style={styles.containerRememberme}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <Montserrat_Text>Recordarme </Montserrat_Text>
          <Icon_Dinamic
            name={"check-box"}
            size={20}
            color={paletOfColors.black}
          />
        </Pressable_Dinamic>
      ) : (
        <Pressable_Dinamic
          style={styles.containerRememberme}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <Montserrat_Text>Recordarme </Montserrat_Text>
          <Icon_Dinamic
            name={"check-box-outline-blank"}
            size={20}
            color={paletOfColors.black}
          />
        </Pressable_Dinamic>
      )}

      <Pressable_Dinamic
        style={styles.pressableRegister}
        onPress={() => handlePressConfirmar()}
      >
        <Montserrat_Text style={styles.textPressableRegister}>
          Confimar
        </Montserrat_Text>
      </Pressable_Dinamic>

      <Montserrat_Text style={styles.errorRegister}>
        {errors.errorRegister ? errors.errorRegister : ""}
      </Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 18,
  },
  pressableRegister: {
    width: width * 0.8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: paletOfColors.black,
    padding: 2,
    backgroundColor: paletOfColors.lightGray,
  },
  containerRememberme: {
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: 5,
  },
  textPressableRegister: {
    fontSize: 18,
    alignSelf: "center",
  },
  errorRegister: {
    fontSize: 16,
    color: paletOfColors.red,
    alignSelf: "center",
  },
});
