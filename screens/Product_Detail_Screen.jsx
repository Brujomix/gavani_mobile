import { StyleSheet, ActivityIndicator } from "react-native";
import { Montserrat_Text } from "../components";
import { ScreenWrapper } from "../wrappers";
import { paletOfColors } from "../utils/colors";
import { useGetProductByIdQuery } from "../services/app_Service";

export function Product_Detail_Screen({ route }) {
  
  const { pro_iden } = route.params; 
  
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductByIdQuery(pro_iden);

  return (
    <ScreenWrapper>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={paletOfColors.black} />
      ) : error ? (
        <Montserrat_Text>Error !</Montserrat_Text>
      ) : (
        <Montserrat_Text>{products[0].pro_name}</Montserrat_Text>
      )}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  flatListProductsFilter: { marginTop:20},
  containerChildrenFlat:{gap:15}
});