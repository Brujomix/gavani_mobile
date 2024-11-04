import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { useRegisterMutation } from "../../services/auth_Service";
import { paletOfColors } from "../../utils/colors";

export function Form_Register({ navigation }) {
  const [triggerRegistration, result] = useRegisterMutation();

  const handlePressConfirmar = () => {
    const { email, password } = datosUser;

    triggerRegistration({ email, password });
  };
  const [errors, setErrors] = useState({
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
    errorRegister: "",
  });

  const [datosUser, setDatosUser] = useState({
    email: "",
    password: ""
    
  });

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
    switch (result.status) {
      case "fulfilled":
         navigation.navigate("HomePage")
        break;
      case "rejected":
        setErrors((pv) => ({ ...pv, errorRegister: "Revisa Tus Credenciales" }));
        break;
      default:
        setErrors((pv) => ({ ...pv, errorRegister: "" }));
        break;
    }
  }, [result]);

  return (
    <View style={styles.containerLogin}>
      <Input_Text
        label={"Email"}
        onChange={(text) => checkEmail(text)}
        error={errors.errorEmail}
      />
      <Input_Text
        label={"Password"}
        onChange={(text) => checkPassword(text)}
        error={errors.errorPassword}
      />
      <Input_Text
        label={"Confirmar Password"}
        onChange={(text) => checkPasswords(text)}
        error={errors.errorConfirmPassword}
      />
      <Pressable_Dinamic
        style={styles.pressableLogin}
        onPress={() => handlePressConfirmar()}
      >
        <Montserrat_Text style={styles.textPressableLogin}>
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
  pressableLogin: {
    width: "100%",
    marginTop: 20,
  },
  textPressableLogin: {
    fontSize: 16,
    alignSelf: "center",
  },
  errorRegister: {
    fontSize: 16,
    color: paletOfColors.red,
    alignSelf: "center",
  },
});
