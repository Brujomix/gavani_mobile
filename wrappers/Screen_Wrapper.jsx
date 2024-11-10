import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { paletOfColors } from "../utils/colors";

export function ScreenWrapper({ children, style }) {
  return (
    <View style={[styles.containerPrincipal, style]}>
      <LinearGradient
        colors={[paletOfColors.lightGray, paletOfColors.white]}
        style={StyleSheet.absoluteFillObject} 
        // Hace que el gradiente cubra toda la pantalla
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
