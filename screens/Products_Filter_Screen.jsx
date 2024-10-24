import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Card_Product, Montserrat_Text } from "../components";
import { ScreenWrapper } from "../wrappers";
import { useGetProductsByCategoryQuery } from "../services/app_Service";
import { paletOfColors } from "../utils/colors";

export function Products_Filter_Screen({route}) {

  const {cat_iden} = route.params
  
  const {
    data: productFilteredByCategory,
    error,
    isLoading,
  } = useGetProductsByCategoryQuery(cat_iden);

  return (
    <ScreenWrapper>
      {/* Loading FlatList Products Filter */}
      {isLoading ? (
        <ActivityIndicator size={"large"} color={paletOfColors.darkGray} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <FlatList
          data={productFilteredByCategory}
          keyExtractor={(item) => item.pro_iden}
          renderItem={({ item }) => <Card_Product product={item} />}
          contentContainerStyle={styles.containerChildren}
        />
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  containerChildren: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
