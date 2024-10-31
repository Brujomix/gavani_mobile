import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";

export function Form_Login() {
  const handlePressIniciar = () => {
    console.log("onPree HERE");
  };
  const [errors, setErrors] = useState({
    errorEmail: "",
    errorConfirmPassword: "",
  });

  const [datosUser, setDatosUser] = useState({
    email: "",
    password: "",
  });

  const checkPasswords = (text) => {
    if (datosUser.password !== text) {
      setErrors((pv) => ({
        errorConfirmPassword: "Contraseñas no Coinciden",
        ...pv,
      }));
    } else {
      setErrors((pv) => ({ errorConfirmPassword: "", ...pv }));
    }
  };

  const checkEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
    if (emailRegex.test(text)) {
      setErrors((pv) => ({ errorEmail: "No es un email Válido", ...pv }));
      setDatosUser((pv) => ({ email: text, ...pv }));
    } else {
      setErrors((pv) => ({ errorEmail: "No es un email Válido", ...pv }));
    }
  };

  console.log(datosUser);
  console.log(errors);

  return (
    <View style={styles.containerLogin}>
      <Input_Text
        label={"Email"}
        onChange={(text) => {
          checkEmail(text);
        }}
        error={errors.errorEmail}
      />
      <Input_Text
        label={"Password"}
        onChange={(text) => setDatosUser((pv) => ({ password: text, ...pv }))}
      />
      <Input_Text
        label={"Confirmar Password"}
        onChange={(text) => checkPasswords(text)}
        error={errors.errorConfirmPassword}
      />
      <Pressable_Dinamic
        style={styles.pressableLogin}
        onPress={handlePressIniciar}
      >
        <Montserrat_Text style={styles.textPressableLogin}>
          Iniciar
        </Montserrat_Text>
      </Pressable_Dinamic>
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
});
