import { Dimensions, Image, StyleSheet } from "react-native";
import {
  Image_Dianamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../../components";
import { paletOfColors } from "../../utils/colors";
const { width, height } = Dimensions.get("screen");
import arrow_Off from "../../assets/arrow_Off.png";

export function Card_Favorite_Product({ favoriteProduct, navigation }) {
  return (
    <Pressable_Dinamic
      onPress={() =>
        navigation.navigate("Products By Categories", {
          cat_iden: favoriteProduct.pro_cat_iden,
          cat_name: "Productos Selecionados",
        })
      }
      style={styles.pressableProduct}
    >
      <Image_Dianamic
        styleImage={styles.styleImage}
        uriURL={favoriteProduct.pro_url_image}
        altProp={`Imagen Producto ${favoriteProduct.pro_name}`}
      />
      <Image
        style={styles.arrow_Off}
        source={arrow_Off}
        alt="Click Here"
      />
      <Montserrat_Text style={styles.textPro_name}>
        {favoriteProduct.pro_name}
      </Montserrat_Text>
    </Pressable_Dinamic>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  arrow_Off:{
    width: 110,
    height: 110,
    position: "absolute",
    top: 8,
    left: 20,
  },

  pressableProduct: {
    width: width * 0.95,
    height: height * 0.22,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth:5,
    padding:5,
    borderBottomColor:paletOfColors.lightGray,
  },
  textPro_name: {
    fontSize: 30,
    backgroundColor:paletOfColors.whiteTransparent,
    padding:10,
    color: paletOfColors.black,
    marginBottom: 5,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius:15
  },
});
