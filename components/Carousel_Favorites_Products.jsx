import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card_Product } from "../components";
import { useEffect, useState } from "react";
import { products } from "../dataTest.json";

const { width } = Dimensions.get("window");

export function Carousel_Favorites_Products({ pro_top }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const favoriteProducts = products.filter((e) => e.pro_top === pro_top);
    setFavoriteProducts(favoriteProducts);
  }, [pro_top]);

  return (
      <Carousel
        loop
        width={width}
        height={260}
        autoPlay={true}
        data={favoriteProducts}
        scrollAnimationDuration={8500}
        renderItem={({ item }) => <Card_Product product={item} />}
      />   
  );
}
