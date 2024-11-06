import { Pressable, StyleSheet, View } from "react-native";

export function Pressable_Dinamic({ children, disabled, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.childrenPresableDinamic,
        style,
        { opacity: pressed ? 0.8 : 1 },
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  childrenPresableDinamic: {
    alignSelf: "center",
    borderRadius: 10,
  },
});
