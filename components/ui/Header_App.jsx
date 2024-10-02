import { Image, View, StyleSheet } from "react-native";

import logoEmpresa from "../../assets/Gavani_Logo_Circulo.png";

export function Header_App() {
  return (
    <View style={styles.containerHeader}>
      <Image style={styles.logoEmpresa} source={logoEmpresa} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    backgroundColor:"#F009",
    justifyContent: "center",
    alignItems: "center",
    padding:15,
  },
  logoEmpresa: {
    objectFit: "contain",
    width: 150,
    height:150,
  },
  textHeader: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "semibold",
    textDecorationLine: "underline",
    color: "#FFF",
  },
});
