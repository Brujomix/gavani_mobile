import { View, StyleSheet, Dimensions } from "react-native";
import {
  Buttons_Cart,
  Image_Dianamic,
  Montserrat_Text,
} from "../../components";
import { paletOfColors } from "../../utils/colors";

const { width } = Dimensions.get("screen");

export function Card_Product({ product }) {
  return (
    <View style={styles.containerProducts}>
      <Montserrat_Text style={styles.textPro_name}>
        {product.pro_name}
      </Montserrat_Text>

      <View style={styles.containerInfoWithImage}>
        <Image_Dianamic
          uriURL={product.pro_url_image}
          altProp={`Imagen del Producto ${product.pro_name}`}
        />
        <Montserrat_Text style={styles.textPro_Desc}>
          {product.pro_desc}
        </Montserrat_Text>
      </View>

      <Montserrat_Text
        style={styles.textPro_Precio}
      >{`$ ${product.pro_precio.toLocaleString("de-DE")}`}
      </Montserrat_Text>

      <View style={styles.containerButtonsCart}>
        <Buttons_Cart pro_iden={product.pro_iden} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerProducts: {
    gap: 8,
    width: width * 0.7,
    borderWidth: 2,
    borderColor: paletOfColors.black,
    borderRadius: 10,
  },
  containerButtonsCart: {
    padding: 10,
  },
  containerInfoWithImage: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: paletOfColors.black,
    marginBottom: 5,
  },
  textPro_Desc: {
    width: "50%",
    fontSize: 18,
    alignSelf: "center",
    color: paletOfColors.black,
  },
  textPro_Precio: {
    fontSize: 25,
    alignSelf: "flex-end",
    color: paletOfColors.black,
  },
});
