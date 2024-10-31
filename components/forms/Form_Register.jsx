import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";

export function Form_Register({ navigation }) {
  const handlePressConfirmar = () => {
    console.log("onPree HERE");
  };
 const [error, setError] = useState("")

  const [datosUser, setDatosUser] = useState({
    email: "",
    password: "",
  });

  const checkPasswords = (text) => {
    if (datosUser.password !== text) {
     setError("Contraseñas no Coinciden") 
    }else{
      setError("")
    }
  };

  return (
    <View style={styles.containerLogin}>
      <Input_Text
        label={"Email"}
        onChange={(text) => setDatosUser((pv) => ({ ...pv, email: text }))}
      />
      <Input_Text
        label={"Password"}
        onChange={(text) => setDatosUser((pv) => ({ ...pv, password: text }))}
      />
      <Input_Text
        label={"Confirmar Password"}
        onChange={(text)=> checkPasswords(text)}
        error={error}
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
