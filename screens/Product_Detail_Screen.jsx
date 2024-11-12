import {
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Card_Offer_Product, Montserrat_Text } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";
import { useGetProductByIdQuery } from "../services/app_Service";
import ofertasImage from "../assets/ofertas.png";
import { ActivityLoadingStyle } from "../utils/globalStyles";

const { width, height } = Dimensions.get("screen");

export function Product_Detail_Screen({ route }) {
  const { pro_iden } = route.params;

  const { data: products, error, isLoading } = useGetProductByIdQuery(pro_iden);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator style={ActivityLoadingStyle} size={90} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <>
          <View style={styles.containerImageBanner}>
            <Image
              style={styles.imageBanner}
              source={ofertasImage}
              alt={`Banner Odertas`}
              resizeMode="contain"
            />
          </View>
          <Card_Offer_Product product={products[0]} />
        </>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerImageBanner: {
    height: height * 0.14,
    width: width *.95,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageBanner: {
    width: "100%",
    height: "100%",
  },
});
