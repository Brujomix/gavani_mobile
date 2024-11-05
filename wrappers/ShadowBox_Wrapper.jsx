import { Dimensions, StyleSheet, View } from "react-native";
import { paletOfColors } from "../utils/colors";
const { width } = Dimensions.get("screen");
export function ShadowBox_Wrapper({ children, styleChildrensBoxShadow }) {
  return (
    <View style={styles.containerShadowBox}>
      <View style={styleChildrensBoxShadow}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerShadowBox: {
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: paletOfColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
});
