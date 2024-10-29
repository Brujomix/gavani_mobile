import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { paletOfColors } from "../../utils/colors";

export function Form_Login() {
  return (
    <View>
      <Text style={styles.textLogin}>Form_Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {},
  textLogin: {
    color: paletOfColors.black,
  },
});
