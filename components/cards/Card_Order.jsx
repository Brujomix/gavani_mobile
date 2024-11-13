import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { Icon_Dinamic } from "../ui/Icon_Dinamic";
import { paletOfColors } from "../../utils/colors";
import {
  ShadowBox_Wrapper,
} from "../../wrappers";
import boleta from "../../assets/boletas.png";

const { width } = Dimensions.get("screen");

export function Card_Order({ order, navigation }) {
  console.info("Order_Iden Order_Screen", order.order_iden);

  return (
    <View style={styles.containerChildrenCardOrder}>
      <Image style={styles.imageStyle} source={boleta} alt="Boletas Imagen" />

      <View style={styles.containerInfoIden}>
        <Montserrat_Text style={styles.titleFecha}>
          Fecha de Orden
        </Montserrat_Text>
        <Montserrat_Text style={styles.infoFecha}>
          {order.order_date}
        </Montserrat_Text>
        <View style={styles.containerPrice}>
          <Montserrat_Text style={styles.textPrice}>Total</Montserrat_Text>
          <Montserrat_Text style={styles.textPrice}>
            $ {order.order_total.toLocaleString("de-DE")}
          </Montserrat_Text>
        </View>
        <Pressable_Dinamic
          onPress={() =>
            navigation.navigate("Detail Order", {
              order_iden: order.order_iden,
            })
          }
        >
          <ShadowBox_Wrapper style={styles.containerPressableView}>
            <Montserrat_Text style={styles.textView}>
              Ver Detalle
            </Montserrat_Text>
            <Icon_Dinamic
              name={"visibility"}
              size={30}
              color={paletOfColors.black}
            />
          </ShadowBox_Wrapper>
        </Pressable_Dinamic>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerChildrenCardOrder: {
    width: width * 0.98,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerPrice: {
    flexDirection: "row",
    gap: 10,
  },
  containerPressableView: {
    borderRadius: 10,
    borderWidth: 2,
    width: width * 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  imageStyle: {
    width: 80,
    height: 80,
  },

  containerInfoIden: {
    gap: 10,
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  titleFecha: {
    fontSize: 25,
    alignSelf: "center",
  },
  infoFecha: {
    fontSize: 22,
    alignSelf: "center",
  },
  textPrice: {
    fontSize: 20,
  },
  textView: {
    fontSize: 18,
    fontStyle: "italic",
  },
});
