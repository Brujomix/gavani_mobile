import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { paletOfColors } from "../../utils/colors";

export function Pressable_Dinamic({ children, disabled, onPress, ...style }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{ ...styles.childrenPresableDinamic, ...style }}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  childrenPresableDinamic: {
    padding: 5,
    borderWidth: 2,
    borderColor: paletOfColors.darkGray,
    borderRadius: 10,
  },
});
