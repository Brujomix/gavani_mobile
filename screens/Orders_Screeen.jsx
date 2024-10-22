import { StyleSheet, View } from "react-native";
import { paletOfColors } from "../utils/colors";
import { Montserrat_Text } from "../components";

export function Orders_Screen({ route }) {

  return (
    <View style={styles.containerOrders}>
      <Montserrat_Text>Mis Ordenes</Montserrat_Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOrders: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: paletOfColors.black,
  },
});
