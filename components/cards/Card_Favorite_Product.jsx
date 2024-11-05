import { StyleSheet } from "react-native";
import { Image_Dianamic, Montserrat_Text } from "../../components";
import { paletOfColors } from "../../utils/colors";
import { ShadowBox_Wrapper } from "../../wrappers";

export function Card_Favorite_Product({ favoriteProduct }) {
  return (
    <ShadowBox_Wrapper styleChildrensBoxShadow={styles.containerBoxShadow}>
      <Image_Dianamic
        styleImage={styles.styleImage}
        uriURL={"/"}
        altProp={`Imagen Producto ${favoriteProduct.pro_name}`}
      />
      <Montserrat_Text style={styles.textPro_name}>
        {favoriteProduct.pro_name}
      </Montserrat_Text>
    </ShadowBox_Wrapper>
  );
}

const styles = StyleSheet.create({
  containerBoxShadow: {width:"100%"},
  styleImage: { width: 180, height: 180 },
  textPro_name: {
    fontSize: 25,
    alignSelf: "center",
    color: paletOfColors.black,
    marginBottom: 5,
  },
});
