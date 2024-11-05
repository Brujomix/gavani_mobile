import { StyleSheet, View, Dimensions } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { useDispatch } from "react-redux";
import { removeCartProduct } from "../../redux/slices/carritoSlice";
import { Entypo_Icon, Material_Icon } from "../ui/Icon_Dinamic";
import { paletOfColors } from "../../utils/colors";
import { ShadowBox_Wrapper } from "../../wrappers";

const { width } = Dimensions.get("window");

export function Card_Product_Cart({ product }) {
  const dispatch = useDispatch();

  return (
    <ShadowBox_Wrapper styleChildrensBoxShadow={styles.containerShadowBox}>
      <Montserrat_Text style={styles.textName}>
        {product.pro_name}
      </Montserrat_Text>
      <View style={styles.containerCantCart}>
        <Entypo_Icon name={"cross"} size={40} color={paletOfColors.darkGray} />
        <Montserrat_Text style={styles.textCant}>
          {product.Cantidad}
        </Montserrat_Text>
      </View>
      <View style={styles.containerPrice}>
        <Material_Icon name={"attach-money"} size={30} />
        <Montserrat_Text style={styles.textPrice}>
          {product.pro_precio}
        </Montserrat_Text>
      </View>
      <Pressable_Dinamic
        onPress={() => dispatch(removeCartProduct(product.pro_iden))}
      >
        <Entypo_Icon name={"trash"} size={30} color={paletOfColors.black} />
      </Pressable_Dinamic>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  containerShadowBox: {
    
  },

  containerPrice: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerCantCart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
