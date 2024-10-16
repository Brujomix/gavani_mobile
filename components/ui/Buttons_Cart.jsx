import { Pressable, StyleSheet, View } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Montserrat_Text } from "./Montserrat_Text";
import { AddToCart, RemoveToCart } from "./Icons";

export function Buttons_Cart({ pro_iden }) {
  return (
    <View style={styles.containerButtonsCart}>
      <Pressable
        style={styles.buttonCart}
        onPress={() => console.log(`Adding to Cart Product: ${pro_iden}`)}
      >
        <AddToCart />
      </Pressable>
      <Pressable
        style={styles.buttonCart}
        onPress={() => console.log(`Removing from Cart Product: ${pro_iden}`)}
      >
        <RemoveToCart />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonsCart: {
    borderTopWidth:2,
    borderColor: paletOfColors.lightGray,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonCart: {
    backgroundColor: paletOfColors.white,
    padding: 8,
    borderRadius: 10,
  },
});
