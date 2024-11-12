import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Card_Product, Montserrat_Text } from "../components";
import { ScreenWrapper } from "../wrappers";
import { useGetProductsByCategoryQuery } from "../services/app_Service";
import { paletOfColors } from "../utils/colors";
import { ActivityLoadingStyle } from "../utils/globalStyles";

export function Products_Filter_Screen({ route }) {
  
  const { cat_iden } = route.params;
  
  const {
    data: productFilteredByCategory,
    error,
    isLoading,
  } = useGetProductsByCategoryQuery(cat_iden);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator style={ActivityLoadingStyle} size={90} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <FlatList
          style={styles.flatListProductsFilter}
          data={productFilteredByCategory}
          keyExtractor={(item) => item.pro_iden}
          renderItem={({ item }) => <Card_Product product={item} />}
        contentContainerStyle={styles.containerChildrenFlat}
        />
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  flatListProductsFilter: { marginTop:20},
  containerChildrenFlat:{gap:15}
});
