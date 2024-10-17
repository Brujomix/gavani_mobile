import { View, StyleSheet } from "react-native";
import {
  Buttons_Cart,
  Image_Dianamic,
  Montserrat_Text,
} from "../../components";
import { paletOfColors } from "../../utils/colors";

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

      <View style={styles.containerPrice}>
        <Montserrat_Text style={styles.textPrecio}>Precio</Montserrat_Text>
        <Montserrat_Text style={styles.textPro_Precio}>
          {`$ ${product.pro_precio.toLocaleString("de-DE")}`}
        </Montserrat_Text>
      </View>

      <Buttons_Cart pro_iden={product.pro_iden} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerProducts: {
    backgroundColor:paletOfColors.lightGray,
    alignSelf:"center",
    gap:5,
    borderWidth: 2,
    borderColor: paletOfColors.black,
    borderRadius: 10,
    padding:5,
  },

  containerInfoWithImage: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerPrice:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
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
    color: paletOfColors.black,
  },
  textPrecio: {
    fontSize: 18,
    color: paletOfColors.black,
  },
});
