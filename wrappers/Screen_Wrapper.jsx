import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { paletOfColors } from "../utils/colors";
import { useSelector } from "react-redux";

export function ScreenWrapper({ children }) {
  const { isOnLine } = useSelector((state) => state.Global);

  return (
    <View style={styles.containerPrincipal}>
      <LinearGradient
        colors={
          isOnLine
            ? [paletOfColors.green, paletOfColors.white]
            : [paletOfColors.red, paletOfColors.white]
        }
        style={StyleSheet.absoluteFillObject} // Hace que el gradiente cubra toda la pantalla
      />
      <View style={styles.containerChildren}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    padding: 10,
  },
  containerChildren: {
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
