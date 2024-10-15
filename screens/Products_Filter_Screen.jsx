import { FlatList, StyleSheet } from "react-native";
import { Card_Product } from "../components";
import { paletOfColors } from "../utils/colors";

export function Products_Filter_Screen({ route }) {
  
 console.log(route.params);
 
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
    backgroundColor: paletOfColors.white
  },
});