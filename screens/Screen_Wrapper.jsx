import { StyleSheet, View } from "react-native";
import { paletOfColors } from "../utils/colors";
import { LinearGradient } from "expo-linear-gradient";

export function ScreenWrapper({ children, onLine }) {
  return (
    <LinearGradient
      colors={
        onLine
          ? [paletOfColors.green, paletOfColors.white]
          : [paletOfColors.red, paletOfColors.white]
      }
      style={styles.backgroundContainer}
    >
      <View>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});
