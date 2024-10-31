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
    width:"100%",
  },
  label: {
    fontSize: 22,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: paletOfColors.darkGray,
    padding: 5,
    fontSize: 22,
    color:paletOfColors.black
    
  },
  error: {
    fontSize: 16,
    color: paletOfColors.red,
  },
});
