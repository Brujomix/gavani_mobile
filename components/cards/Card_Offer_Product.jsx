import { View, StyleSheet, Dimensions } from "react-native";
import { Cart_Buttons, Image_Dianamic, Montserrat_Text } from "..";
import { paletOfColors } from "../../utils/colors";

const { width, height } = Dimensions.get("screen");

export function Card_Offer_Product({ product }) {
  return (
    <View style={styles.containerProductDetail}>
      <Image_Dianamic
        styleImage={styles.containerImage}
        uriURL={product.pro_url_image}
        altProp={`Imagen del Producto ${product.pro_name}`}
      />

      <View style={styles.containerPrice}>
        <Montserrat_Text style={styles.textPro_Precio}>Precio</Montserrat_Text>
        <Montserrat_Text style={styles.textPro_Precio}>
          {`$ ${product.pro_precio.toLocaleString("de-DE")}`}
        </Montserrat_Text>
      </View>
      <Montserrat_Text style={styles.textPro_Desc}>
        {product.pro_desc}
      </Montserrat_Text>
      <Cart_Buttons
        styleContianerButtonsCart={styles.containerButtonsCart}
        product={product}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerProductDetail: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    width: width,
    height: height * 0.2,
  },
  containerPrice: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical:35
  },
  containerButtonsCart: { width: width },

  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: paletOfColors.black,
    marginBottom: 5,
  },
  textPro_Desc: {
    marginVertical: 18,
    textAlign: "justify",
    fontSize: 23,
    color: paletOfColors.black,
  },
  textPro_Precio: {
    fontSize: 25,
    color: paletOfColors.black,
  },
});
