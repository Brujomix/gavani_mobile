import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Montserrat_Text } from "./Montserrat_Text";
import { paletOfColors } from "../../utils/colors";

export function Input_Text({ label, onChange, error = "", isSecure = false }) {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Montserrat_Text style={styles.label}>{label}</Montserrat_Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? (
        <Montserrat_Text style={styles.error}>{error}</Montserrat_Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    fontSize: 22,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: paletOfColors.black,
    padding: 2,
    fontSize: 22,
    backgroundColor:paletOfColors.black
  },
  error: {
    fontSize: 16,
    color: paletOfColors.red,
  },
});
