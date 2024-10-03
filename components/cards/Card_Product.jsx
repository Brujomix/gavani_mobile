import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Buttons_Cart } from "../ui/Buttons_Cart";
import { Image_Dianamic } from "../ui/Image_Dianamic";
import { paletOfColors } from "../../utils/colors";

const { width } = Dimensions.get("screen");

export function Card_Product({ product }) {
  return (
    <View style={styles.containerProducts}>
      <View style={styles.containerChildren}>
        <Text style={styles.textPro_name}>{product.pro_name}</Text>
        <View style={styles.containerInfoWithImage}>
          <View style={styles.containerImage}>
            <Image_Dianamic
              uriURL={product.pro_url_image}
              altProp={`Imagen del Producto ${product.pro_name}`}
            />
          </View>
          <View style={styles.containerInfoProductText}>
            <Text style={styles.textPro_Desc}>{product.pro_desc}</Text>
            <Text
              style={styles.textPro_Precio}
            >{`$ ${product.pro_precio.toLocaleString("de-DE")}`}</Text>
          </View>
        </View>
        <View style={styles.containerButtonsCart}>
          <Buttons_Cart pro_iden={product.pro_iden} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerProducts: {
    width: width * 0.8,
    padding: 15,
    flexDirection: "column",
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: paletOfColors.white,
    borderRadius: 10,
    overflow: "hidden",
  },
  containerChildren: {},
  containerButtonsCart: {
    padding: 10,
  },
  containerInfoWithImage: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  containerInfoProductText: {
    gap: 10,
  },
  containerImage: {},
  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: paletOfColors.white,
    fontStyle: "italic",
    marginBottom: 5,
  },
  textPro_Desc: {
    fontSize: 18,
    alignSelf: "center",
    color: paletOfColors.white,
    fontStyle: "italic",
  },
  textPro_Precio: {
    fontSize: 25,
    alignSelf: "flex-end",
    color: paletOfColors.white,
  },
});
