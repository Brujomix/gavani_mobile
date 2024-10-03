import { Pressable, StyleSheet, Text, View } from "react-native";
import { paletOfColors } from "../../utils/colors";

export function Buttons_Cart({ pro_iden }) {
  return (
    <View style={styles.containerButtonsCart}>
      <Pressable
        style={styles.buttonCart}
        onPress={() => console.log(`Adding to Cart Product: ${pro_iden}`)}
      >
        <Text style={styles.textButtonCart}>Add To Cart</Text>
      </Pressable>
      <Pressable
        style={styles.buttonCart}
        onPress={() => console.log(`Removing from Cart Product: ${pro_iden}`)}
      >
        <Text style={styles.textButtonCart}>Remove To Cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonsCart: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonCart: {
    backgroundColor: paletOfColors.white,
    padding: 8,
    borderRadius: 10,
  },
  textButtonCart: {
    fontSize: 18,
    fontWeight: "bold",
    color: paletOfColors.black,
  },
});
