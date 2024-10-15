import { Image, View, StyleSheet } from "react-native";

import logoEmpresa from "../../assets/Gavani_Logo_Circulo.png";
import { paletOfColors } from "../../utils/colors";
import { Montserrat_Text } from "./Montserrat_Text";

export function Header_App() {
  return (
    <View style={styles.containerHeader}>
      <Image style={styles.logoEmpresa} source={logoEmpresa} />
      <View style={styles.containerInfoBusiness}>
        <Montserrat_Text style={styles.textInfoBusiness}>Dirección: Perdernera 2541</Montserrat_Text>
        <Montserrat_Text style={styles.textInfoBusiness}>Telefeno: 3464-253647</Montserrat_Text>
        <Montserrat_Text style={styles.textInfoBusiness}>Email: email@gavani.com</Montserrat_Text>
        <Montserrat_Text style={styles.textInfoBusiness}>Instagram: LinkINSTA</Montserrat_Text>
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
    fontSize: 19,
  },
});
