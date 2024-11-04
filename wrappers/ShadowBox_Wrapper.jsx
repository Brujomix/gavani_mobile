import { StyleSheet, View } from "react-native";
import { paletOfColors } from "../utils/colors";

export function ShadowBox_Wrapper({ children, style }) {
  return <View style={[styles.containerShadowBox, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  containerShadowBox: {
    shadowColor: paletOfColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .2,
    shadowRadius: 4,
    elevation: 5,
  },
});
