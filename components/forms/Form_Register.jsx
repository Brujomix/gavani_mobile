import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";

export function Form_Register({ navigation }) {
  const handlePressConfirmar = () => {
    console.log("PreesME");
    console.log(datosUser);
  };
  const [errors, setErrors] = useState({
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  });

  const [datosUser, setDatosUser] = useState({
    email: "",
    password: "",
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
      setDatosUser((pv) => ({ ...pv, password: text }))
    }else{
      setDatosUser((pv) => ({ ...pv, password: text }))
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
      setErrors((pv) => ({ ...pv, errorEmail: "No es un email Válido - Campo Obligatorio" }));
    }
  };

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
        onChange={(text)=> checkPasswords(text)}
        error={errors.errorConfirmPassword}
      />
      <Pressable_Dinamic
        style={styles.pressableLogin}
        onPress={handlePressConfirmar}
      >
        <Montserrat_Text style={styles.textPressableLogin}>
          Confimar
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
