import { StyleSheet, View, Dimensions } from "react-native";
import { Montserrat_Text } from "../ui/Montserrat_Text";
import { Pressable_Dinamic } from "../ui/Pressable_Dinamic";
import { useDispatch } from "react-redux";
import { removeCartProduct } from "../../redux/slices/carritoSlice";
import { Entypo_Icon, Material_Icon } from "../ui/Icons";
import { paletOfColors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export function Card_Product_Cart({ product }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.containerPrincipal}>
      <Montserrat_Text style={styles.textName}>
        {product.pro_name}
      </Montserrat_Text>
      <View style={styles.containerInfo}>
        <View style={styles.containerCantCart}>
          <Entypo_Icon
            name={"cross"}
            size={40}
            color={paletOfColors.darkGray}
          />
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: paletOfColors.darkGray,
    marginVertical: 15,
  },

  containerInfo: {
    padding: 8,
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
