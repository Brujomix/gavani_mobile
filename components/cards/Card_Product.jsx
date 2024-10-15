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
      <View style={styles.containerChildren}>
        <Montserrat_Text style={styles.textPro_name}>
          {product.pro_name}
        </Montserrat_Text>
        <View style={styles.containerInfoWithImage}>
          <View style={styles.containerImage}>
            <Image_Dianamic
              uriURL={product.pro_url_image}
              altProp={`Imagen del Producto ${product.pro_name}`}
            />
          </View>
          <View style={styles.containerInfoProductText}>
            <Montserrat_Text style={styles.textPro_Desc}>
              {product.pro_desc}
            </Montserrat_Text>
            <Montserrat_Text
              style={styles.textPro_Precio}
            >{`$ ${product.pro_precio.toLocaleString(
              "de-DE"
            )}`}</Montserrat_Text>
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
    borderColor: paletOfColors.black,
    borderRadius: 10,
    overflow: "hidden",
  },
  containerChildren: {
    
  },
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
    color: paletOfColors.black,
    marginBottom: 5,
  },
  textPro_Desc: {
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
