import { Image, View, StyleSheet, Text } from "react-native";

import logoEmpresa from "../../assets/Gavani_Logo_Circulo.png";
import { paletOfColors } from "../../utils/colors";

export function Header_App() {
  return (
    <View style={styles.containerHeader}>
      <Image style={styles.logoEmpresa} source={logoEmpresa} />
      <View style={styles.containerInfoBusiness}>
        <Text style={styles.textInfoBusiness}>Dirección: Perdernera 2541</Text>
        <Text style={styles.textInfoBusiness}>Telefeno: 3464-253647</Text>
        <Text style={styles.textInfoBusiness}>Email: email@gavani.com</Text>
        <Text style={styles.textInfoBusiness}>Instagram: LinkINSTA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  containerInfoBusiness: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoEmpresa: {
    objectFit: "contain",
    width: 150,
    height: 150,
  },
  textInfoBusiness: {
    color: paletOfColors.lightGray,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "semibold",
  },
});
