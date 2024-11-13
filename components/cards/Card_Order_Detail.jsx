import { StyleSheet, Dimensions } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { ShadowBox_Wrapper } from "../../wrappers";

const { width } = Dimensions.get("screen");

export function Card_Order_Detail({ order }) {
  console.info("Order desde Card Order", order);

  return (
    <ShadowBox_Wrapper style={styles.containerOrderDetailProduct}>
      <Montserrat_Text style={styles.textCant}>
        x {order.Cantidad}
      </Montserrat_Text>
      <Montserrat_Text style={styles.textName}>
        {order.pro_name}
      </Montserrat_Text>
      <Montserrat_Text style={styles.textPrice}>
        $ {order.pro_precio.toLocaleString("de")}
      </Montserrat_Text>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  containerOrderDetailProduct: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    padding: 8,
  },
  textCant: { fontSize: 18, fontStyle: "italic" },
  textName: { fontSize: 18, fontStyle: "italic", width: 120 },
  textPrice: { fontSize: 18, fontStyle: "italic" },
});
