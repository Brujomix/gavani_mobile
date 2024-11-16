import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Montserrat_Text } from "./Montserrat_Text";
import { paletOfColors } from "../../utils/colors";
import { Icon_Dinamic } from "./Icon_Dinamic";

export function Input_Text({ label, onChange, error = "", isSecure = false, iconName }) {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Montserrat_Text style={styles.label}>{label}</Montserrat_Text>
      <View style={styles.containerInputIcon}>
        <Icon_Dinamic name={iconName} size={20} />
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />
      </View>
      {error ? (
        <Montserrat_Text style={styles.error}>{error}</Montserrat_Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  containerInputIcon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    gap: 20,
  },
  label: {
    fontSize: 22,
  },
  input: {
    width:"80%",
    borderBottomWidth: 2,
    borderBottomColor: paletOfColors.black,
    padding: 5,
    fontSize: 22,
    color: paletOfColors.black,
  },
  error: {
    fontSize: 16,
    color: paletOfColors.red,
  },
});
