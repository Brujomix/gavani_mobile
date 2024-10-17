import { Pressable, StyleSheet, View } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Material_Icon } from "./Icons";

export function Buttons_Cart({ pro_iden, disabled }) {
  return (
    <View style={styles.containerButtonsCart}>
      <Pressable
        disabled={disabled}
        style={styles.buttonCart}
        onPress={() => console.log(`Adding to Cart Product: ${pro_iden}`)}
      >
        <Material_Icon
          name={"add-shopping-cart"}
          size={40}
          color={paletOfColors.black}
        />
      </Pressable>
      <Pressable
        disabled={disabled}
        style={styles.buttonCart}
        onPress={() => console.log(`Removing from Cart Product: ${pro_iden}`)}
      >
        <Material_Icon
          name={"remove-shopping-cart"}
          size={40}
          color={paletOfColors.black}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonsCart: {
    borderTopWidth: 2,
    borderColor: paletOfColors.black,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonCart: {
    borderRadius: 10,
    marginVertical: 10,
  },
});
