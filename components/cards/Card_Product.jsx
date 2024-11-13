import { View, StyleSheet, Dimensions } from "react-native";
import {
  Cart_Buttons,
  Image_Dianamic,
  Montserrat_Text,
} from "../../components";
import { paletOfColors } from "../../utils/colors";
import { ShadowBox_Wrapper } from "../../wrappers";

const { width } = Dimensions.get("screen");

export function Card_Product({ product }) {
  return (
    <View style={styles.containerChildrenCartProduct}>
      <Image_Dianamic
        styleImage={styles.containerImage}
        uriURL={product.pro_url_image}
        altProp={`Imagen del Producto ${product.pro_name}`}
      />

      <ShadowBox_Wrapper style={styles.containershadowBox}>
        <Montserrat_Text style={styles.textPro_name}>
          {product.pro_name}
        </Montserrat_Text>
        <View style={styles.containerPrice}>
          <Montserrat_Text style={styles.textPro_Precio}>
            {`$ ${product.pro_precio.toLocaleString("de-DE")}`}
          </Montserrat_Text>
          <Montserrat_Text style={styles.textPro_Precio}>
            Precio
          </Montserrat_Text>
        </View>
        <Cart_Buttons style={styles.containerCartButtons} product={product} />
        <Montserrat_Text style={styles.textPro_Desc}>
          {product.pro_desc}
        </Montserrat_Text>
      </ShadowBox_Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  containerChildrenCartProduct: {
    width: width * 0.98,
  },

  containershadowBox: {
    width: width * 0.75,
    padding: 8,
    alignSelf: "flex-end",
  },

  containerImage: {
    position: "absolute",
    zIndex: 100,
    left: 0,
    top: 0,
    width: 160,
    height: 160,
  },

  containerCartButtons: {
    width: width * 0.5,
    marginRight: 10,
    alignSelf: "flex-end",
  },

  containerPrice: {
    alignSelf: "flex-end",
    marginRight: 10,
    flexDirection: "row-reverse",
    gap: 10,
  },

  textPro_name: {
    width: width * .5,
    fontSize: 28,
    alignSelf: "flex-end",
    fontStyle: "italic",
    marginRight: 10,
    color: paletOfColors.black,
    marginBottom: 5,
  },

  textPro_Desc: {
    alignSelf: "flex-end",
    marginRight: 10,
    textAlign: "center",
    fontSize: 16,
    color: paletOfColors.black,
  },

  textPro_Precio: {
    fontSize: 22,
    color: paletOfColors.black,
  },
});
