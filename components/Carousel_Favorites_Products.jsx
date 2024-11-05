import { Dimensions, ActivityIndicator } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card_Favorite_Product, Montserrat_Text } from "../components";
import { useGetFavoritesProductsQuery } from "../services/app_Service";
import { paletOfColors } from "../utils/colors";

const { width } = Dimensions.get("screen");

export function Carousel_Favorites_Products() {
  const {
    data: favoritesProducts,
    error,
    isLoading,
  } = useGetFavoritesProductsQuery();

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <Carousel
          loop
          width={width}
          height={260}
          autoPlay={true}
          data={favoritesProducts}
          scrollAnimationDuration={10000}
          renderItem={({ item }) => <Card_Favorite_Product favoriteProduct={item} />}
        />
      )}
    </>
  );
}
