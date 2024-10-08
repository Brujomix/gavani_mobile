import { Pressable, StyleSheet, View } from "react-native";
import { paletOfColors } from "../../utils/colors";
import { Edu_Text } from "./Edu_Text";

export function Buttons_Cart({ pro_iden }) {
  return (
    <View style={styles.containerButtonsCart}>
      <Pressable
        style={styles.buttonCart}
        onPress={() => console.log(`Adding to Cart Product: ${pro_iden}`)}
      >
        <Edu_Text style={styles.textButtonCart}>Add To Cart</Edu_Text>
      </Pressable>
      <Pressable
        style={styles.buttonCart}
        onPress={() => console.log(`Removing from Cart Product: ${pro_iden}`)}
      >
        <Edu_Text style={styles.textButtonCart}>Remove To Cart</Edu_Text>
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
