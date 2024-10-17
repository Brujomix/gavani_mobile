import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { paletOfColors } from "../utils/colors";

export function ScreenWrapper({ children }) {
  const onLine = true
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={
          onLine
            ? [paletOfColors.green, paletOfColors.white]
            : [paletOfColors.red, paletOfColors.white]
        }
        style={StyleSheet.absoluteFillObject} // Hace que el gradiente cubra toda la pantalla
      />
      <View style={styles.containerGradientWrapper}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGradientWrapper: {
    flex: 1,
  },
});

