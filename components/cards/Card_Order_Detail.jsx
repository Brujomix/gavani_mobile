import { StyleSheet, View, Dimensions } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { ShadowBox_Wrapper } from "../../wrappers";

const { width } = Dimensions.get("screen");

export function Card_Order_Detail({ order }) {

  return (
    <ShadowBox_Wrapper style={styles.shadowBox}>
      <View style={styles.containerInfoIden}>
        <View style={styles.containerInfoIden}>
          <Montserrat_Text style={styles.textInfo}>
            Fecha de Orden
          </Montserrat_Text>

          <Montserrat_Text>{order.order_date}</Montserrat_Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerPrice}>
          <Montserrat_Text style={styles.textPrice}>
            $ {order.order_total.toLocaleString("de-DE")}
          </Montserrat_Text>
        </View>
        
      </View>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    marginVertical: 10,
  },
  containerInfoIden: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerInfo: {
    padding: 8,
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  containerPrice: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textInfo: {
    fontSize: 20,
    alignSelf: "center",
  },

  textPrice: {
    fontSize: 23,
  },
});
