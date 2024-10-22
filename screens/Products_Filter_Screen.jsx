import { FlatList, StyleSheet } from "react-native";
import { Card_Product } from "../components";
import { ScreenWrapper } from "../wrappers";

export function Products_Filter_Screen({ route }) {
  
  const { cat_iden } = route.params;

  return (
    <ScreenWrapper>
      <FlatList
        data={productsFilterByCategory}
        keyExtractor={(item) => item.pro_iden}
        renderItem={({ item }) => <Card_Product product={item} />}
        contentContainerStyle={styles.containerChildren}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerChildren: {
    flex: 1,
    gap:10,
    justifyContent:"center",
    alignItems:"center"
  },
});
