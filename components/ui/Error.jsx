import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Montserrat_Text } from "./Montserrat_Text";
import { paletOfColors } from "../../utils/colors";

export function Error() {
  return (
    <View style={styles.containerError}>
      <Montserrat_Text>Encontramos un Problema !</Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textError: {
    color: paletOfColors.red,
    fontSize:18
  },
});
