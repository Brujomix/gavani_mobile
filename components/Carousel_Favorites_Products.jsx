import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card_Product } from "../components";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("screen");

export function Carousel_Favorites_Products() {
  
  const {favoritesProducts} = useSelector(state=>state.Global)
  
  return (
      <Carousel
        loop
        width={width }
        height={260}
        autoPlay={true}
        data={favoritesProducts}
        scrollAnimationDuration={10000}
        renderItem={({ item }) => <Card_Product product={item} />}
      />   
  );
}
