import { View, StyleSheet } from "react-native";
import { Pressable_Dinamic, Material_Icon } from "../components";
import { paletOfColors } from "../utils/colors";
import {
  addCartProduct,
  removeCartProduct,
} from "../redux/slices/carritoSlice";
import { useDispatch } from "react-redux";

export function Cart_Buttons({ product }) {
  
  const dispatch = useDispatch();

  return (
    <View style={styles.containerButtonsCart}>
      <Pressable_Dinamic onPress={() => dispatch(addCartProduct(product))}>
        <Material_Icon
          name={"add-shopping-cart"}
          size={30}
          color={paletOfColors.black}
        />
      </Pressable_Dinamic>
      <Pressable_Dinamic
        onPress={() => dispatch(removeCartProduct(product.pro_iden))}
      >
        <Material_Icon
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
    borderTopWidth: 2,
    padding: 5,
    borderColor: paletOfColors.black,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
