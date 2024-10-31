import { View, StyleSheet } from "react-native";
import React from "react";
import { Input_Text } from "../ui/Input_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Montserrat_Text } from "../ui/Montserrat_Text";

export function Form_Login() {
  return (
    <View style={styles.containerLogin}>
      <Input_Text label={"Email"} onChange={() => {}} error={""} />
      <Input_Text label={"Password"} onChange={() => {}} error={""} />
      <Input_Text label={"Confirmar Password"} onChange={() => {}} error={""} />
      <Pressable_Dinamic style={styles.pressableLogin} onPress={() => {}}>
        <Montserrat_Text style={styles.textPressableLogin}>
          Login
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
    width: "100%",
  },
  pressableLogin: {
    width: "100%",
  },
  textPressableLogin: {
    fontSize: 16,
  },
});
