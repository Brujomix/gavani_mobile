import { StyleSheet, View } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { useDispatch } from "react-redux";
import { removeCartProduct } from "../../redux/slices/carritoSlice";
import { Icon_Dinamic } from "../ui/Icon_Dinamic";
import { paletOfColors } from "../../utils/colors";
import { ShadowBox_Wrapper } from "../../wrappers";

export function Card_Product_Cart({ product }) {
  const dispatch = useDispatch();

  return (
    <ShadowBox_Wrapper styleChildrensBoxShadow={styles.containerShadowBox}>
      <Montserrat_Text style={styles.textName}>
        {product.pro_name}
      </Montserrat_Text>
      <View style={styles.containerRowInfo}>
        <View style={styles.containerCantCart}>
          <Icon_Dinamic
            name={"close"}
            size={40}
            color={paletOfColors.white}
          />
          <Montserrat_Text style={styles.textCant}>
            {product.Cantidad}
          </Montserrat_Text>
        </View>
        <Montserrat_Text style={styles.textPrice}>
          $ {product.pro_precio}
        </Montserrat_Text>
        <Pressable_Dinamic
          onPress={() => dispatch(removeCartProduct(product.pro_iden))}
        >
          <Icon_Dinamic name={"delete"} size={30} color={paletOfColors.black} />
        </Pressable_Dinamic>
      </View>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  containerShadowBox: {},
  containerPrice: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerRowInfo:{width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",},

  containerCantCart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap:4
  },

  textName: {
    fontSize: 25,
    alignSelf: "center",
  },
  textCant: {
    fontSize: 40,
  },
  textPrice: {
    fontSize: 23,
  },
});
