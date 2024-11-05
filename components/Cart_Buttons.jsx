import { View, StyleSheet } from "react-native";
import { Pressable_Dinamic, Icon_Dinamic } from "../components";
import { paletOfColors } from "../utils/colors";
import {
  addCartProduct,
  removeCartProduct,
} from "../redux/slices/carritoSlice";
import { useDispatch } from "react-redux";

export function Cart_Buttons({ product, styleContianerButtonsCart }) {
  const dispatch = useDispatch();

  return (
    <View style={[styles.containerButtonsCart, styleContianerButtonsCart]}>
      <Pressable_Dinamic onPress={() => dispatch(addCartProduct(product))}>
        <Icon_Dinamic
          name={"add-shopping-cart"}
          size={30}
          color={paletOfColors.black}
        />
      </Pressable_Dinamic>
      <Pressable_Dinamic
        onPress={() => dispatch(removeCartProduct(product.pro_iden))}
      >
        <Icon_Dinamic
          name={"remove-shopping-cart"}
          size={30}
          color={paletOfColors.black}
        />
      </Pressable_Dinamic>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonsCart: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
