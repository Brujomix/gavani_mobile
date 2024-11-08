import { StyleSheet, View } from "react-native";
import { paletOfColors } from "../utils/colors";

export function ShadowBox_Wrapper({ children, style }) {
  return (
    <View style={[styles.containerShadowBox, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerShadowBox: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: paletOfColors.white,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
});
