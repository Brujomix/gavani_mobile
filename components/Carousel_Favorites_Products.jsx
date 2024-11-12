import { Dimensions, ActivityIndicator } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card_Carousel_Product, Montserrat_Text } from "../components";
import { useGetFavoritesProductsQuery } from "../services/app_Service";
import { paletOfColors } from "../utils/colors";
import { ActivityLoadingStyle } from "../utils/globalStyles";

const { width } = Dimensions.get("screen");

export function Carousel_Favorites_Products({ navigation }) {
  const {
    data: favoritesProducts,
    error,
    isLoading,
  } = useGetFavoritesProductsQuery();

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          style={ActivityLoadingStyle}
          size={90}
          color={paletOfColors.black}
        />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <Carousel
          width={width}
          height={260}
          autoPlay={true}
          data={favoritesProducts}
          scrollAnimationDuration={10000}
          renderItem={({ item }) => (
            <Card_Carousel_Product
              favoriteProduct={item}
              navigation={navigation}
            />
          )}
        />
      )}
    </>
  );
}
