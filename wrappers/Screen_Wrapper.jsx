import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { paletOfColors } from "../utils/colors";

export function ScreenWrapper({ children }) {
  const onLine = true
  return (
    <View style={styles.containerPrincipal}>
      <LinearGradient
        colors={
          onLine
            ? [paletOfColors.green, paletOfColors.white]
            : [paletOfColors.red, paletOfColors.white]
        }
        style={StyleSheet.absoluteFillObject} // Hace que el gradiente cubra toda la pantalla
      />

        {children}
 
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal:{
    flex:1,
    padding:10
  },
});

