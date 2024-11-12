import { View, StyleSheet } from "react-native";
import {
  Cart_Buttons,
  Image_Dianamic,
  Montserrat_Text,
} from "../../components";
import { paletOfColors } from "../../utils/colors";
import { ShadowBox_Wrapper } from "../../wrappers";

export function Card_Product({ product }) {
  return (
    <ShadowBox_Wrapper styleChildrensBoxShadow={styles.containershadowBox}>
      <Montserrat_Text style={styles.textPro_name}>
        {product.pro_name}
      </Montserrat_Text>
      <View style={styles.containerInfoImagen}>
        <Image_Dianamic
          styleImage={styles.containerImage}
          uriURL={product.pro_url_image}
          altProp={`Imagen del Producto ${product.pro_name}`}
        />
        <View>
          <View style={styles.containerPrice}>
            <Montserrat_Text style={styles.textPro_Precio}>
              {`$ ${product.pro_precio.toLocaleString("de-DE")}`}
            </Montserrat_Text>
            <Montserrat_Text style={styles.textPro_Precio}>
              Precio
            </Montserrat_Text>
          </View>
          <Cart_Buttons product={product} />
        </View>
      </View>
      <Montserrat_Text style={styles.textPro_Desc}>
        {product.pro_desc}
      </Montserrat_Text>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  containershadowBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    width: 150,
    height: 150,
  },
  containerInfoImagen: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerPrice: {
    flexDirection: "row-reverse",
    gap: 10,
  },
  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: paletOfColors.black,
    marginBottom: 5,
  },
  textPro_Desc: {
    textAlign: "justify",
    fontSize: 18,
    color: paletOfColors.black,
  },
  textPro_Precio: {
    fontSize: 25,
    color: paletOfColors.black,
  },
});
