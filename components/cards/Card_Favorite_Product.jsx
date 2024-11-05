import { Dimensions, StyleSheet } from "react-native";
import {
  Image_Dianamic,
  Montserrat_Text,
  Pressable_Dinamic,
} from "../../components";
import { paletOfColors } from "../../utils/colors";
import { ShadowBox_Wrapper } from "../../wrappers";
const { width } = Dimensions.get("screen");

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
      <ShadowBox_Wrapper>
        <Image_Dianamic
          styleImage={styles.styleImage}
          uriURL={"/"}
          altProp={`Imagen Producto ${favoriteProduct.pro_name}`}
        />
        <Montserrat_Text style={styles.textPro_name}>
          {favoriteProduct.pro_name}
        </Montserrat_Text>
      </ShadowBox_Wrapper>
    </Pressable_Dinamic>
  );
}

const styles = StyleSheet.create({
  styleImage: { width: 180, height: 180 },
  pressableProduct: { width: width * 0.95 },
  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: paletOfColors.black,
    marginBottom: 5,
  },
});
