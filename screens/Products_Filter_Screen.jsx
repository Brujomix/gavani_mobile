import { FlatList, StyleSheet } from "react-native";
import { Card_Product } from "../components";
import { paletOfColors } from "../utils/colors";
import { useEffect, useState } from "react";

import { products } from "../dataTest.json";

export function Products_Filter_Screen({ route }) {
  
  const {cat_iden} = route.params;
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    const productsFilter = products.filter((e) => e.pro_cat_iden === cat_iden);
    setProductsFilter(productsFilter);
  }, [cat_iden]);

  return (
    <FlatList
      data={productsFilter}
      keyExtractor={(item) => item.pro_iden}
      renderItem={({ item }) => <Card_Product product={item} />}
      contentContainerStyle={styles.containerChildren}
    />
  );
}

const styles = StyleSheet.create({
  containerChildren: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: paletOfColors.white,
  },
});
