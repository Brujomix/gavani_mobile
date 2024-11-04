import { Pressable, StyleSheet } from "react-native";
import { paletOfColors } from "../../utils/colors";

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
    padding: 8,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: paletOfColors.darkGray,
    borderRadius: 10,
    backgroundColor: paletOfColors.whiteTransparent,
  },
});
