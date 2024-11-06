import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { useLoginMutation } from "../../services/auth_Service";
import { paletOfColors } from "../../utils/colors";
import { useDispatch } from "react-redux";
import { changeLogged, setUser } from "../../redux/slices/usersSlice";

const {width} = Dimensions.get("screen")

export function Form_Login({navigation}) {
const dispatch = useDispatch()
  const [triggerLogin, result] = useLoginMutation();

  const handlePressIniciar = () => {
    const { email, password } = datosUser;
    triggerLogin({ email, password });
  };

  const [errors, setErrors] = useState({
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
    errorRegister: "",
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
        dispatch(changeLogged(true))
        dispatch(setUser({email: result.data.email, idToken: result.data.idToken}))
        navigation.navigate("HomePage")
        break;
      case "rejected":
        setErrors((pv) => ({
          ...pv,
          errorRegister: "Revisa Tus Credenciales",
        }));
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
        onChange={(text) => {
          checkEmail(text);
        }}
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
        onPress={handlePressIniciar}
      >
        <Montserrat_Text style={styles.textPressableLogin}>
          Iniciar
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
    width: width * .8,
    marginTop: 20,
    borderWidth:1,
    borderColor:paletOfColors.black,
    padding:2,
    backgroundColor:paletOfColors.lightGray
  },
  textPressableLogin: {
    fontSize: 18,
    alignSelf: "center",
  },
  errorRegister: {
    fontSize: 16,
    color: paletOfColors.red,
    alignSelf: "center",
  },
});
