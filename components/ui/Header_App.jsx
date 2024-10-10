import { Image, View, StyleSheet } from "react-native";

import logoEmpresa from "../../assets/Gavani_Logo_Circulo.png";
import { paletOfColors } from "../../utils/colors";
import { Edu_Text } from "./Edu_Text";

export function Header_App() {
  return (
    <View style={styles.containerHeader}>
      <Image style={styles.logoEmpresa} source={logoEmpresa} />
      <View style={styles.containerInfoBusiness}>
        <Edu_Text style={styles.textInfoBusiness}>Dirección: Perdernera 2541</Edu_Text>
        <Edu_Text style={styles.textInfoBusiness}>Telefeno: 3464-253647</Edu_Text>
        <Edu_Text style={styles.textInfoBusiness}>Email: email@gavani.com</Edu_Text>
        <Edu_Text style={styles.textInfoBusiness}>Instagram: LinkINSTA</Edu_Text>
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
