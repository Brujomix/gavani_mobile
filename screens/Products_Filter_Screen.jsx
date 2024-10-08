import { FlatList, StyleSheet } from "react-native";
import { Card_Product } from "../components";

export function Products_Filter_Screen({ productsFilter }) {

  return (
    <FlatList
      data={productsFilter}
      keyExtractor={(item) => item.pro_iden}
      renderItem={({ item }) => <Card_Product product={item}/>} 
      contentContainerStyle={styles.containerChildren}
    />
  );
}

const styles = StyleSheet.create({
  containerChildren: {
    felx: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});